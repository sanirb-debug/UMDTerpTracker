import { useMemo, useState } from 'react';
import type { Transcript } from '../../lib/types.ts';
import { formatTermId, inProgressByTerm } from '../../lib/degree.ts';
import {
  WEEKDAYS,
  WEEKDAY_LABELS,
  buildSchedule,
  findConflicts,
  formatTime,
  scheduleBounds,
  weeklyGrid,
} from '../../lib/schedule.ts';
import type { ScheduleEntry, Weekday } from '../../lib/schedule.ts';
import type { Recommendation } from '../../lib/professors.ts';
import { formatGpa } from '../../lib/professors.ts';
import { catalog } from '../data/catalog.ts';
import { professors } from '../data/professors.ts';
import { sectionData } from '../data/sections.ts';
import { RatingCaveat, TopRated } from '../components/TopRated.tsx';
import { CourseLink } from '../components/CourseLink.tsx';

interface Props {
  transcript: Transcript;
}

/** Enough hues to tell a normal course load apart at a glance. */
const COLORS = [
  'bg-course-1/20 border-course-1/60',
  'bg-course-2/20 border-course-2/60',
  'bg-course-3/20 border-course-3/60',
  'bg-course-4/20 border-course-4/60',
  'bg-course-5/20 border-course-5/60',
  'bg-course-6/20 border-course-6/60',
  'bg-course-7/20 border-course-7/60',
];

const PIXELS_PER_MINUTE = 0.85;

export function SchedulePage({ transcript }: Props) {
  const groups = useMemo(() => inProgressByTerm(transcript), [transcript]);
  const [selected, setSelected] = useState<string>(() => groups[0]?.termId ?? '');

  const group = groups.find((g) => (g.termId ?? '') === selected) ?? groups[0];

  const entries = useMemo(
    () =>
      buildSchedule(group?.courses ?? [], sectionData, group?.termId ?? '', {
        titleFor: (courseId) => catalog.get(courseId)?.title,
      }),
    [group],
  );

  const grid = useMemo(() => weeklyGrid(entries), [entries]);
  const bounds = useMemo(() => scheduleBounds(entries), [entries]);
  const conflicts = useMemo(() => findConflicts(entries), [entries]);
  const colorFor = useMemo(() => {
    const map = new Map<string, string>();
    entries.forEach((entry, index) => map.set(entry.courseId, COLORS[index % COLORS.length]!));
    return (courseId: string) => map.get(courseId) ?? COLORS[0]!;
  }, [entries]);

  if (groups.length === 0) {
    return (
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Your transcript does not list any courses you are registered for, so there is no schedule
        to show yet.
      </p>
    );
  }

  const scheduled = entries.filter((entry) => entry.status === 'scheduled');
  const unscheduled = entries.filter((entry) => entry.status !== 'scheduled');
  const hours: number[] = [];
  for (let minute = bounds.start; minute <= bounds.end; minute += 60) hours.push(minute);

  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-end justify-between gap-4">
        <label className="w-full sm:w-auto">
          <span className="label">Term</span>
          <select
            className="select mt-1 sm:w-auto"
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
          >
            {groups.map((option) => (
              <option key={option.termId ?? 'upcoming'} value={option.termId ?? ''}>
                {formatTermId(option.termId)}
              </option>
            ))}
          </select>
        </label>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {entries.length} {entries.length === 1 ? 'class' : 'classes'} ·{' '}
          {entries.reduce((sum, entry) => sum + entry.credits, 0)} credits
        </p>
      </section>

      {conflicts.length > 0 && (
        <p role="alert" className="rounded-lg bg-caution-50 p-4 text-sm dark:bg-caution-950/30">
          {conflicts.map((conflict) => (
            <span key={`${conflict.day}-${conflict.a.courseId}-${conflict.b.courseId}`}>
              {conflict.a.courseId} and {conflict.b.courseId} overlap on{' '}
              {WEEKDAY_LABELS[conflict.day]}.{' '}
            </span>
          ))}
        </p>
      )}

      {scheduled.length > 0 && (
        <section className="card overflow-x-auto">
          <p className="mb-2 text-xs text-neutral-500 sm:hidden dark:text-neutral-400">
            Swipe the grid sideways to see the whole week.
          </p>
          <div className="min-w-[34rem]">
            <div className="grid grid-cols-[3rem_repeat(5,1fr)] gap-1">
              <div />
              {WEEKDAYS.map((day) => (
                <div key={day} className="pb-2 text-center text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[3rem_repeat(5,1fr)] gap-1">
              <div className="relative" style={{ height: (bounds.end - bounds.start) * PIXELS_PER_MINUTE }}>
                {hours.map((minute) => (
                  <div
                    key={minute}
                    className="absolute -translate-y-1/2 text-[10px] tabular-nums text-neutral-400"
                    style={{ top: (minute - bounds.start) * PIXELS_PER_MINUTE }}
                  >
                    {formatTime(minute)}
                  </div>
                ))}
              </div>

              {WEEKDAYS.map((day) => (
                <DayColumn
                  key={day}
                  day={day}
                  blocks={grid[day]}
                  bounds={bounds}
                  colorFor={colorFor}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {unscheduled.length > 0 && (
        <section className="card">
          <h2 className="mb-1 font-semibold">No fixed meeting time</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {unscheduled.map((entry) => (
              <li
                key={entry.courseId}
                className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-3"
              >
                <span className="min-w-0">
                  <CourseLink courseId={entry.courseId} className="font-bold" />
                  {entry.section && <span className="ml-2 text-neutral-500">{entry.section}</span>}
                  {entry.title && <span className="ml-2 text-neutral-500">{entry.title}</span>}
                </span>
                <span className="text-xs text-neutral-500 sm:shrink-0">
                  {entry.status === 'async'
                    ? 'online, no set time'
                    : 'section not in the cached schedule'}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Who is teaching, and who you would rather have
        </h2>
        {entries.map((entry) => (
          <CourseCard key={entry.courseId} entry={entry} />
        ))}
        <RatingCaveat />
      </section>
    </div>
  );
}

function DayColumn({
  day,
  blocks,
  bounds,
  colorFor,
}: {
  day: Weekday;
  blocks: ReturnType<typeof weeklyGrid>[Weekday];
  bounds: { start: number; end: number };
  colorFor: (courseId: string) => string;
}) {
  return (
    <div
      className="relative rounded border border-neutral-200/60 dark:border-neutral-800"
      style={{ height: (bounds.end - bounds.start) * PIXELS_PER_MINUTE }}
      aria-label={WEEKDAY_LABELS[day]}
    >
      {blocks.map(({ entry, meeting }) => (
        <div
          key={`${entry.courseId}-${meeting.start}`}
          className={`absolute inset-x-0.5 overflow-hidden rounded border px-1 py-0.5 text-[10px] leading-tight ${colorFor(entry.courseId)}`}
          style={{
            top: (meeting.start - bounds.start) * PIXELS_PER_MINUTE,
            height: Math.max(18, (meeting.end - meeting.start) * PIXELS_PER_MINUTE - 2),
          }}
          title={`${entry.courseId} ${meeting.startLabel}–${meeting.endLabel} ${meeting.location}`}
        >
          <div className="font-semibold">{entry.courseId}</div>
          <div className="text-neutral-600 dark:text-neutral-300">{meeting.startLabel}</div>
          <div className="truncate text-neutral-500">{meeting.location}</div>
        </div>
      ))}
    </div>
  );
}

function CourseCard({ entry }: { entry: ScheduleEntry }) {
  const recommendation = useMemo(
    // Compare against everyone teaching it this term, not just your own section.
    () => professors.recommend(entry.courseId, entry.offeredBy, entry.instructors),
    [entry],
  );

  return (
    <article className="card">
      <header className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">
          <CourseLink courseId={entry.courseId} />
          {entry.section && (
            <span className="ml-2 text-xs font-normal text-neutral-500">{entry.section}</span>
          )}
          {entry.title && (
            <span className="ml-2 text-sm font-normal text-neutral-500">{entry.title}</span>
          )}
        </h3>
        {entry.meetings.length > 0 && (
          <p className="text-xs tabular-nums text-neutral-500">
            {entry.meetings
              .map((m) => `${m.days.join('')} ${m.startLabel}–${m.endLabel} · ${m.location}`)
              .join(' / ')}
          </p>
        )}
      </header>

      <ProfessorVerdict recommendation={recommendation} instructors={entry.instructors} />

      <div className="mt-3 border-t border-neutral-100 pt-3 dark:border-neutral-800">
        <h4 className="label mb-2">Top rated on PlanetTerp</h4>
        <TopRated courseId={entry.courseId} teaching={entry.offeredBy} yours={entry.instructors} />
      </div>
    </article>
  );
}

function ProfessorVerdict({
  recommendation,
  instructors,
}: {
  recommendation: Recommendation;
  instructors: string[];
}) {
  const { yours, best, history, unknown, betterAvailable } = recommendation;

  if (history.length === 0) {
    return (
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {instructors.length > 0
          ? `${instructors.join(', ')} — no grade history on record for this course.`
          : 'No instructor listed and no grade history for this course.'}
      </p>
    );
  }

  return (
    <div className="space-y-2 text-sm">
      {yours && (
        <p>
          You have <strong>{yours.name}</strong> — students average{' '}
          <strong className="tabular-nums">{formatGpa(yours.avgGpa)}</strong> with them here,{' '}
          {Math.round(yours.aOrBetter * 100)}% getting an A-minus or better ({yours.students}{' '}
          students).
          {betterAvailable && best && (
            <>
              {' '}
              <span className="text-caution-600 dark:text-caution-400">
                {best.name} averages {formatGpa(best.avgGpa)} and is also teaching it.
              </span>
            </>
          )}
        </p>
      )}
      {!yours && unknown.length > 0 && (
        <p className="text-neutral-500 dark:text-neutral-400">
          {unknown.join(', ')} — no grade history for this course yet.
        </p>
      )}

      <details>
        <summary className="flex min-h-11 cursor-pointer items-center text-xs uppercase tracking-wide text-neutral-500 sm:min-h-0">
          Everyone on record ({history.length})
        </summary>
        <ul className="mt-2 space-y-1">
          {history.map((record) => (
            <li
              key={record.name}
              className="flex flex-col text-xs sm:flex-row sm:items-baseline sm:justify-between sm:gap-3"
            >
              <span className={record.name === yours?.name ? 'font-semibold' : ''}>
                {record.name}
              </span>
              <span className="tabular-nums text-neutral-500 sm:shrink-0">
                {formatGpa(record.avgGpa)} · {Math.round(record.aOrBetter * 100)}% A- or better ·{' '}
                {record.students} students
              </span>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
