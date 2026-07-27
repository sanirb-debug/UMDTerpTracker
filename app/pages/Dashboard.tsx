import { useMemo } from 'react';
import type { CourseEntry, Transcript } from '../../lib/types.ts';
import { cumulativeTotals, gpaByTerm } from '../../lib/planner/index.ts';
import { selfCheck } from '../../lib/parser/selfCheck.ts';
import { creditProgress, formatTermId, inProgressByTerm } from '../../lib/degree.ts';
import { catalog } from '../data/catalog.ts';

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
          className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm dark:border-amber-800 dark:bg-amber-950/30"
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
        <Stat label="Cumulative GPA" value={totals.gpa?.toFixed(3) ?? '—'} />
        <Stat
          label="Transcript says"
          value={check.statedGpa?.toFixed(3) ?? '—'}
          tone={check.ok ? 'ok' : 'warn'}
        />
        <Stat label="Credits earned" value={String(totals.earnedCredits)} />
        <Stat label="GPA credits" value={String(totals.gpaCredits)} />
      </section>

      <section className="card">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-semibold">Credits toward a degree</h2>
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
            className="bg-terp-red"
            style={{ width: `${(credits.earned / credits.required) * 100}%` }}
          />
          <div
            className="bg-terp-red/40"
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
          <CourseTable courses={transcript.nonGpaCredits} showGrade={false} />
        </section>
      )}
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: 'ok' | 'warn' }) {
  return (
    <div className="card">
      <div className="label">{label}</div>
      <div
        className={`mt-1 text-2xl font-bold tabular-nums ${
          tone === 'warn' ? 'text-amber-600 dark:text-amber-400' : ''
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function CourseTable({ courses, showGrade }: { courses: CourseEntry[]; showGrade: boolean }) {
  return (
    <table className="w-full text-sm">
      <tbody>
        {courses.map((course, index) => (
          <tr
            key={`${course.courseId}-${index}`}
            className="border-t border-neutral-100 first:border-0 dark:border-neutral-800"
          >
            <td className="py-1.5 pr-3 font-medium">{course.courseId}</td>
            <td className="py-1.5 pr-3 text-neutral-600 dark:text-neutral-300">
              {/* Testudo omits the title for courses you are only registered for. */}
              {course.title || catalog.get(course.courseId)?.title || ''}
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
  );
}
