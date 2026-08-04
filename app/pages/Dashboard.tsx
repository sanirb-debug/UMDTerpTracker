import { useMemo } from 'react';
import type { CourseEntry, Transcript } from '../../lib/types.ts';
import type { GlossaryKey } from '../data/glossary.ts';
import { cumulativeTotals, gpaByTerm } from '../../lib/planner/index.ts';
import { selfCheck } from '../../lib/parser/selfCheck.ts';
import { creditProgress, formatTermId, inProgressByTerm } from '../../lib/degree.ts';
import { catalog } from '../data/catalog.ts';
import { CourseLink } from '../components/CourseLink.tsx';
import { Explain } from '../components/Explain.tsx';

interface Props {
  transcript: Transcript;
}

export function DashboardPage({ transcript }: Props) {
  const totals = useMemo(() => cumulativeTotals(transcript), [transcript]);
  const check = useMemo(() => selfCheck(transcript), [transcript]);
  const trend = useMemo(() => gpaByTerm(transcript), [transcript]);
  const credits = useMemo(() => creditProgress(transcript), [transcript]);
  const upcoming = useMemo(() => inProgressByTerm(transcript), [transcript]);

  return (
    <div className="space-y-6">
      {transcript.warnings.length > 0 && (
        <section
          role="alert"
          className="rounded-lg border border-caution-300 bg-caution-50 p-4 text-sm dark:border-caution-800 dark:bg-caution-950/30"
        >
          <h2 className="mb-1 font-semibold">Check these before you trust the numbers</h2>
          <ul className="list-inside list-disc space-y-1">
            {transcript.warnings.map((warning, index) => (
              <li key={`${warning.code}-${index}`}>{warning.message}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Cumulative GPA" value={totals.gpa?.toFixed(3) ?? '—'} explain="cumulativeGpa" />
        <Stat
          label="Transcript says"
          value={check.statedGpa?.toFixed(3) ?? '—'}
          tone={check.ok ? 'ok' : 'warn'}
          explain="transcriptSays"
        />
        <Stat
          label="Credits earned"
          value={String(totals.earnedCredits)}
          explain="creditsEarned"
        />
        <Stat label="GPA credits" value={String(totals.gpaCredits)} explain="gpaCredits" />
      </section>

      <section className="card">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-semibold">
            Credits toward a degree <Explain term="creditsTowardDegree" className="ml-1" />
          </h2>
          <p className="text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
            {credits.earned + credits.inProgress} of {credits.required}
          </p>
        </div>

        <div
          className="flex h-3 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"
          role="img"
          aria-label={`${credits.earned} credits earned, ${credits.inProgress} in progress, ${credits.remaining} still to take out of ${credits.required}`}
        >
          <div
            className="bg-accent-600"
            style={{ width: `${(credits.earned / credits.required) * 100}%` }}
          />
          <div
            className="bg-accent-600/40"
            style={{ width: `${(credits.inProgress / credits.required) * 100}%` }}
          />
        </div>

        <p className="mt-3 text-sm">
          <strong className="tabular-nums">{credits.earned}</strong> earned
          {credits.inProgress > 0 && (
            <>
              {' · '}
              <strong className="tabular-nums">{credits.inProgress}</strong> in progress
            </>
          )}
          {' · '}
          <strong className="tabular-nums">{credits.remaining}</strong> still to take
        </p>
        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
          Against the {credits.required}-credit university minimum for a bachelor&apos;s degree;
          your major may require more. This counts credits, not requirements — it does not yet
          know whether they are the <em>right</em> credits for your major.
        </p>
      </section>

      {upcoming.length > 0 && (
        <section className="space-y-4">
          {upcoming.map((group) => (
            <article key={group.termId ?? 'upcoming'} className="card">
              <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-semibold">{formatTermId(group.termId)}</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  registered · {group.courses.reduce((sum, c) => sum + c.credits, 0)} credits
                </p>
              </header>
              <CourseTable courses={group.courses} showGrade={false} />
            </article>
          ))}
        </section>
      )}

      <section className="space-y-4">
        {[...trend].reverse().map(({ term, termGpa, cumulativeGpa }) => (
          <article key={term.id} className="card">
            <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-semibold">
                {term.season}
                {term.session ? ` ${term.session}` : ''} {term.year}
                {term.academicLevel && (
                  <span className="ml-2 text-xs font-normal uppercase tracking-wide text-neutral-500">
                    {term.academicLevel}
                  </span>
                )}
              </h2>
              <p className="text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
                term {termGpa?.toFixed(3) ?? '—'} · cumulative {cumulativeGpa?.toFixed(3) ?? '—'}
              </p>
            </header>
            <CourseTable courses={term.courses} showGrade />
          </article>
        ))}
      </section>

      {transcript.nonGpaCredits.length > 0 && (
        <section className="card">
          <h2 className="mb-1 font-semibold">Transfer and exam credit</h2>
          <p className="mb-3 text-xs text-neutral-500 dark:text-neutral-400">
            Counts toward credits earned, never toward your UMD GPA.
          </p>
          <CourseTable courses={transcript.nonGpaCredits} showGrade={false} showTerm />
        </section>
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
  explain,
}: {
  label: string;
  value: string;
  tone?: 'ok' | 'warn';
  explain?: GlossaryKey;
}) {
  return (
    <div className="card">
      <div className="label">
        {label}
        {explain && <Explain term={explain} className="ml-1" />}
      </div>
      <div
        className={`mt-1 text-2xl font-bold tabular-nums ${
          tone === 'warn' ? 'text-caution-600 dark:text-caution-400' : ''
        }`}
      >
        {value}
      </div>
    </div>
  );
}

/**
 * Four columns on a desktop, one card per course on a phone.
 *
 * A four-column table in 343px gives the title about 150px, so
 * "Introduction to Computer Systems" wraps to three lines and the grade — the
 * thing anybody scanning a transcript is actually looking for — ends up
 * squeezed against the right edge next to a credit count it can be confused
 * with. Horizontal scroll would not fix that; it would hide the grade off
 * screen instead, and a column you have to swipe to reach may as well not be
 * there.
 *
 * So below `sm` each row becomes a card: course and grade on the first line at
 * full size, title and credits underneath in secondary type. The table markup
 * is untouched and simply takes over from `sm` up, which is why desktop looks
 * exactly as it did.
 */
function CourseTable({
  courses,
  showGrade,
  showTerm = false,
}: {
  courses: CourseEntry[];
  showGrade: boolean;
  /** For lists that mix terms, like transfer credit. Elsewhere the card header already says it. */
  showTerm?: boolean;
}) {
  // Testudo omits the title for courses you are only registered for.
  const titleOf = (course: CourseEntry) =>
    course.title || catalog.get(course.courseId)?.title || '';

  return (
    <>
      <ul className="divide-y divide-neutral-100 text-sm sm:hidden dark:divide-neutral-800">
        {courses.map((course, index) => (
          <li key={`${course.courseId}-${index}`} className="flex items-start gap-3 py-2.5">
            <div className="min-w-0 flex-1">
              <div className="font-medium">
                <CourseLink courseId={course.courseId} source={course.source} />
              </div>
              {titleOf(course) && (
                <div className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-300">
                  {titleOf(course)}
                </div>
              )}
              <div className="mt-0.5 text-xs tabular-nums text-neutral-500">
                {course.credits} {course.credits === 1 ? 'credit' : 'credits'}
                {showTerm && course.termId && ` · ${formatTermId(course.termId)}`}
              </div>
            </div>
            {showGrade && (
              <div
                className={`shrink-0 text-lg font-semibold tabular-nums ${
                  course.countsTowardGpa ? '' : 'text-neutral-400'
                }`}
              >
                {course.grade}
              </div>
            )}
          </li>
        ))}
      </ul>

      <table className="hidden w-full text-sm sm:table">
        <tbody>
          {courses.map((course, index) => (
            <tr
              key={`${course.courseId}-${index}`}
              className="border-t border-neutral-100 first:border-0 dark:border-neutral-800"
            >
              <td className="py-1.5 pr-3 font-medium">
                <CourseLink courseId={course.courseId} source={course.source} />
              </td>
              <td className="py-1.5 pr-3 text-neutral-600 dark:text-neutral-300">
                {titleOf(course)}
              </td>
              <td className="py-1.5 pr-3 text-right tabular-nums text-neutral-500">
                {course.credits}
              </td>
              {showGrade && (
                <td
                  className={`w-12 py-1.5 text-right font-semibold tabular-nums ${
                    course.countsTowardGpa ? '' : 'text-neutral-400'
                  }`}
                >
                  {course.grade}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
