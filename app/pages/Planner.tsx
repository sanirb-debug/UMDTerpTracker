import { useEffect, useMemo, useState } from 'react';
import type { LetterGrade, PlannedCourse, Transcript } from '../../lib/types.ts';
import {
  cumulativeTotals,
  projectGpa,
  requiredAverage,
  solvePlans,
  standingFromTotals,
} from '../../lib/planner/index.ts';
import type { Plan, PlannedGrade } from '../../lib/planner/index.ts';
import { PLANNABLE_GRADES } from '../../lib/grades.ts';
import { catalog } from '../data/catalog.ts';
import { distributions, gradeData } from '../data/grades.ts';
import { RatingCaveat, TopRated } from '../components/TopRated.tsx';
import { CourseLink } from '../components/CourseLink.tsx';
import { loadPlan, savePlan } from '../storage.ts';

interface Props {
  transcript: Transcript;
}

const DEFAULT_TARGET = 3.5;

export function PlannerPage({ transcript }: Props) {
  const standing = useMemo(() => standingFromTotals(cumulativeTotals(transcript)), [transcript]);
  const currentGpa = standing.gpaCredits > 0 ? standing.qualityPoints / standing.gpaCredits : null;

  const [courses, setCourses] = useState<PlannedCourse[]>(() => seedCourses(transcript));
  const [target, setTarget] = useState<number>(() => loadPlan()?.targetGpa ?? DEFAULT_TARGET);

  useEffect(() => {
    savePlan({ courses, targetGpa: target });
  }, [courses, target]);

  const valid = useMemo(
    () => courses.filter((course) => course.credits > 0 && course.courseId.trim().length > 0),
    [courses],
  );
  const needed = useMemo(
    () => requiredAverage(standing, valid, target),
    [standing, valid, target],
  );
  const plans = useMemo(
    () => solvePlans(standing, valid, target, { distributions, maxPlans: 6 }),
    [standing, valid, target],
  );

  // Courses with a grade tried on. `projectGpa` has always been able to do
  // this; until now nothing in the UI could hand it a grade.
  const chosen = useMemo(
    () => valid.filter((course): course is PlannedGrade => course.grade !== undefined),
    [valid],
  );
  const projected = useMemo(
    () => (chosen.length > 0 ? projectGpa(standing, chosen) : null),
    [standing, chosen],
  );

  return (
    <div className="clear-pinned-summary space-y-6 sm:pb-0">
      <section className="card">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="label">Where you stand</div>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              {currentGpa != null
                ? `${currentGpa.toFixed(3)} across ${standing.gpaCredits} graded credits.`
                : 'No graded credits yet.'}
            </p>
          </div>
          <label className="w-40">
            <span className="label">Target GPA</span>
            <input
              type="number"
              className="input mt-1 tabular-nums"
              min={0}
              max={4}
              step={0.01}
              value={target}
              onChange={(event) => setTarget(clamp(Number(event.target.value)))}
            />
          </label>
        </div>

        <CourseEditor courses={courses} onChange={setCourses} />
      </section>

      <Verdict
        needed={needed}
        target={target}
        plannedCount={valid.length}
        projected={projected}
        chosenCount={chosen.length}
      />

      {plans.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Ways to get there, most achievable first
          </h2>
          {plans.map((plan, index) => (
            <PlanCard key={plan.grades.map((g) => g.grade).join('-')} plan={plan} rank={index} />
          ))}
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Percentages are the share of past students who earned that grade or better, from
            PlanetTerp&apos;s grade data (cached {gradeData.fetchedAt}). Withdrawals are left
            out. Combined odds assume your courses go independently, which is optimistic — treat
            them as a ranking, not a forecast.
          </p>
        </section>
      )}

      {valid.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Who to take these with
          </h2>
          {valid.map((course) => (
            <article key={course.courseId} className="card">
              <h3 className="mb-2 font-semibold">
                <CourseLink courseId={course.courseId} />
                {catalog.get(course.courseId)?.title && (
                  <span className="ml-2 text-sm font-normal text-neutral-500">
                    {catalog.get(course.courseId)?.title}
                  </span>
                )}
              </h3>
              <TopRated courseId={course.courseId} />
            </article>
          ))}
          <RatingCaveat />
        </section>
      )}

      <PinnedSummary
        currentGpa={currentGpa}
        projected={projected}
        chosenCount={chosen.length}
        plannedCount={valid.length}
        target={target}
        needed={needed}
      />
    </div>
  );
}

/**
 * The number, kept on screen.
 *
 * On a phone the course editor is at the top of the page and its consequence
 * is a scroll away, so setting a grade updates a figure you cannot see. Every
 * adjustment then costs a scroll down to read the result and a scroll back up
 * to change it — on the one screen where watching the number move is the whole
 * point of opening the app.
 *
 * So below `sm` a compact version is pinned to the bottom: the projected GPA
 * if grades have been tried on, otherwise the average those courses need to
 * hit. Desktop does not get it — there the editor and the verdict are both
 * visible at once, which is what this is imitating.
 *
 * `role="status"` rather than `aria-live="assertive"`: a screen reader should
 * mention the new figure when it settles, not interrupt typing to announce
 * every keystroke's worth of it.
 */
function PinnedSummary({
  currentGpa,
  projected,
  chosenCount,
  plannedCount,
  target,
  needed,
}: {
  currentGpa: number | null;
  projected: number | null;
  chosenCount: number;
  plannedCount: number;
  target: number;
  needed: ReturnType<typeof requiredAverage>;
}) {
  if (plannedCount === 0) return null;

  const headline = projected ?? currentGpa;
  const reachesTarget = projected != null && projected >= target - 1e-9;

  return (
    <div
      role="status"
      className="pad-safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-neutral-200 bg-white/95 px-4 pt-3 backdrop-blur sm:hidden dark:border-neutral-800 dark:bg-neutral-950/95"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-wide text-neutral-500">
            {projected != null ? 'Projected GPA' : 'Cumulative GPA'}
          </div>
          <div
            className={`text-2xl font-bold tabular-nums ${
              projected == null
                ? ''
                : reachesTarget
                  ? 'text-positive-600 dark:text-positive-400'
                  : 'text-caution-600 dark:text-caution-400'
            }`}
          >
            {headline?.toFixed(3) ?? '—'}
          </div>
        </div>
        <p className="text-right text-xs text-neutral-500 dark:text-neutral-400">
          {projected != null ? (
            <>
              {chosenCount} of {plannedCount} graded ·{' '}
              <span className="tabular-nums">target {target.toFixed(2)}</span>
            </>
          ) : needed.alreadyThere ? (
            <>Already above {target.toFixed(2)}. Set grades to see where you land.</>
          ) : !needed.feasible ? (
            <>
              {target.toFixed(2)} is out of reach — straight A&apos;s reaches{' '}
              <span className="tabular-nums">{needed.bestCase.toFixed(3)}</span>
            </>
          ) : (
            <>
              Needs a <span className="tabular-nums">{needed.average.toFixed(2)}</span> average for{' '}
              {target.toFixed(2)}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function Verdict({
  needed,
  target,
  plannedCount,
  projected,
  chosenCount,
}: {
  needed: ReturnType<typeof requiredAverage>;
  target: number;
  plannedCount: number;
  projected: number | null;
  chosenCount: number;
}) {
  if (plannedCount === 0) {
    return (
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Add the courses you are planning to take and this will fill in.
      </p>
    );
  }
  // Only appears once a grade has been tried on, so the page reads exactly as
  // it did for anybody who does not use the picker.
  if (projected != null) {
    const reaches = projected >= target - 1e-9;
    return (
      <p
        className={`rounded-lg p-4 text-sm ${
          reaches
            ? 'bg-positive-50 text-positive-900 dark:bg-positive-950/30 dark:text-positive-200'
            : 'bg-caution-50 text-caution-900 dark:bg-caution-950/30 dark:text-caution-100'
        }`}
      >
        Those grades land you at <strong className="tabular-nums">{projected.toFixed(3)}</strong>
        {chosenCount < plannedCount &&
          ` (counting the ${chosenCount} of ${plannedCount} you have set)`}
        . {reaches ? `That clears ${target.toFixed(2)}.` : `Short of ${target.toFixed(2)}.`}
      </p>
    );
  }
  if (needed.alreadyThere) {
    return (
      <p className="rounded-lg bg-positive-50 p-4 text-sm text-positive-900 dark:bg-positive-950/30 dark:text-positive-200">
        You are already above {target.toFixed(2)}. Even the worst case here leaves you at{' '}
        <strong className="tabular-nums">{needed.worstCase.toFixed(3)}</strong>.
      </p>
    );
  }
  if (!needed.feasible) {
    return (
      <p className="rounded-lg bg-critical-50 p-4 text-sm text-critical-900 dark:bg-critical-950/30 dark:text-critical-200">
        {target.toFixed(2)} is out of reach this semester. Straight A&apos;s in everything below
        gets you to <strong className="tabular-nums">{needed.bestCase.toFixed(3)}</strong>.
      </p>
    );
  }
  return (
    <p className="rounded-lg bg-neutral-100 p-4 text-sm dark:bg-neutral-900">
      You need a <strong className="tabular-nums">{needed.average.toFixed(2)}</strong> average
      across these courses to reach {target.toFixed(2)}.
    </p>
  );
}

function PlanCard({ plan, rank }: { plan: Plan; rank: number }) {
  return (
    <article className="card">
      <header className="mb-3 flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold">
          {rank === 0 ? 'Most likely route' : `Option ${rank + 1}`}
        </h3>
        <p className="text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
          lands at {plan.resultingGpa.toFixed(3)}
          {plan.probability != null && ` · ${formatPercent(plan.probability)} combined`}
        </p>
      </header>
      <ul className="space-y-1.5">
        {plan.grades.map((course) => (
          <li key={course.courseId} className="flex items-baseline justify-between gap-3 text-sm">
            <span>
              <strong className="font-semibold">{course.grade}</strong> in{' '}
              <CourseLink courseId={course.courseId} />
              <span className="ml-2 text-xs text-neutral-500">{course.credits} cr</span>
            </span>
            <span className="text-right text-xs text-neutral-500 dark:text-neutral-400">
              {course.probability == null
                ? 'no grade data'
                : `${formatPercent(course.probability)} get that or better${
                    course.estimated ? ' (all-course average)' : ''
                  }`}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function CourseEditor({
  courses,
  onChange,
}: {
  courses: PlannedCourse[];
  onChange: (courses: PlannedCourse[]) => void;
}) {
  const update = (index: number, patch: Partial<PlannedCourse>) => {
    onChange(courses.map((course, i) => (i === index ? { ...course, ...patch } : course)));
  };

  return (
    <div className="space-y-2">
      <div className="label">Courses you plan to take</div>
      {courses.map((course, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            className="input font-medium uppercase"
            placeholder="CMSC351"
            value={course.courseId}
            onChange={(event) => {
              const courseId = event.target.value.toUpperCase();
              // Credits come from the cached catalog, never from a guess.
              const credits = catalog.creditsFor(courseId);
              update(index, credits ? { courseId, credits } : { courseId });
            }}
          />
          <input
            type="number"
            inputMode="numeric"
            className="input w-16 tabular-nums sm:w-24"
            min={0}
            max={12}
            step={1}
            value={course.credits}
            onChange={(event) => update(index, { credits: Number(event.target.value) })}
            aria-label={`credits for ${course.courseId || 'course'}`}
          />
          {/*
            A plain native select. On iOS this is the system wheel, which is a
            better control than anything that could be built here: full-height
            hit targets, VoiceOver support, and no dropdown code to get wrong.
          */}
          <select
            className="select w-20 shrink-0 px-2 sm:w-24 sm:px-3"
            value={course.grade ?? ''}
            onChange={(event) =>
              update(index, {
                grade: event.target.value === '' ? undefined : (event.target.value as LetterGrade),
              })
            }
            aria-label={`grade to try for ${course.courseId || 'course'}`}
          >
            <option value="">Grade</option>
            {PLANNABLE_GRADES.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="button-quiet min-w-11 shrink-0 px-3"
            onClick={() => onChange(courses.filter((_, i) => i !== index))}
            aria-label={`remove ${course.courseId || 'course'}`}
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        className="button-quiet"
        onClick={() => onChange([...courses, { courseId: '', credits: 3 }])}
      >
        Add a course
      </button>
    </div>
  );
}

function seedCourses(transcript: Transcript): PlannedCourse[] {
  const stored = loadPlan();
  if (stored && stored.courses.length > 0) return stored.courses;
  if (transcript.inProgress.length > 0) {
    return transcript.inProgress.map((course) => ({
      courseId: course.courseId,
      credits: catalog.creditsFor(course.courseId) ?? course.credits,
    }));
  }
  return [{ courseId: '', credits: 3 }];
}

function clamp(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(4, Math.max(0, value));
}

function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}
