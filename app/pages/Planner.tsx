import { useEffect, useMemo, useState } from 'react';
import type { PlannedCourse, Transcript } from '../../lib/types.ts';
import { cumulativeTotals, requiredAverage, solvePlans, standingFromTotals } from '../../lib/planner/index.ts';
import type { Plan } from '../../lib/planner/index.ts';
import { catalog } from '../data/catalog.ts';
import { distributions, gradeData } from '../data/grades.ts';
import { RatingCaveat, TopRated } from '../components/TopRated.tsx';
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

  return (
    <div className="space-y-6">
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

      <Verdict needed={needed} target={target} plannedCount={valid.length} />

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
                {course.courseId}
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
    </div>
  );
}

function Verdict({
  needed,
  target,
  plannedCount,
}: {
  needed: ReturnType<typeof requiredAverage>;
  target: number;
  plannedCount: number;
}) {
  if (plannedCount === 0) {
    return (
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Add the courses you are planning to take and this will fill in.
      </p>
    );
  }
  if (needed.alreadyThere) {
    return (
      <p className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
        You are already above {target.toFixed(2)}. Even the worst case here leaves you at{' '}
        <strong className="tabular-nums">{needed.worstCase.toFixed(3)}</strong>.
      </p>
    );
  }
  if (!needed.feasible) {
    return (
      <p className="rounded-lg bg-red-50 p-4 text-sm text-red-900 dark:bg-red-950/30 dark:text-red-200">
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
              <strong className="font-semibold">{course.grade}</strong> in {course.courseId}
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
            className="input w-24 tabular-nums"
            min={0}
            max={12}
            step={1}
            value={course.credits}
            onChange={(event) => update(index, { credits: Number(event.target.value) })}
            aria-label={`credits for ${course.courseId || 'course'}`}
          />
          <button
            type="button"
            className="button-quiet"
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
