import { useMemo } from 'react';
import { formatGpa, isSameProfessor } from '../../lib/professors.ts';
import { professors } from '../data/professors.ts';

interface Props {
  courseId: string;
  /** Who is teaching it this term, when that is known. Used only to badge the list. */
  teaching?: string[];
  /** Your own professor, so the list can mark the one you already have. */
  yours?: string[];
}

/**
 * The three best-reviewed professors for a course.
 *
 * Rating and grade average are shown side by side on purpose. They answer
 * different questions — whether students liked the course, and how they did in
 * it — and the two disagree often enough that showing only one would mislead.
 */
export function TopRated({ courseId, teaching = [], yours = [] }: Props) {
  const top = useMemo(() => professors.topRatedFor(courseId), [courseId]);

  if (top.length === 0) {
    return (
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        No PlanetTerp ratings on record for {courseId}.
      </p>
    );
  }

  return (
    <ol className="space-y-1.5">
      {top.map((record, index) => {
        const isTeaching = teaching.some((name) => isSameProfessor(name, record.name));
        const isYours = yours.some((name) => isSameProfessor(name, record.name));
        return (
          <li key={record.name} className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm">
            <span>
              <span className="text-neutral-400">{index + 1}.</span>{' '}
              <strong className="font-semibold">{record.name}</strong>
              <span className="ml-2 tabular-nums text-amber-600 dark:text-amber-400">
                {record.rating?.toFixed(2)}/5
              </span>
              <span className="ml-1 text-xs text-neutral-500">
                {record.reviews === undefined
                  ? '(reviews unknown)'
                  : `(${record.reviews} ${record.reviews === 1 ? 'review' : 'reviews'})`}
              </span>
              {isYours && (
                <span className="ml-2 rounded bg-neutral-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wide dark:bg-neutral-700">
                  yours
                </span>
              )}
              {!isYours && isTeaching && (
                <span className="ml-2 rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  teaching this term
                </span>
              )}
            </span>
            <span className="shrink-0 text-xs tabular-nums text-neutral-500">
              {formatGpa(record.avgGpa)} avg · {record.students} students
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/** One shared caveat, so both pages say the same thing about the same numbers. */
export function RatingCaveat() {
  return (
    <p className="text-xs text-neutral-500 dark:text-neutral-400">
      Ratings are PlanetTerp&apos;s student review scores out of 5; averages are the mean GPA
      students earned with that professor in that course. Ordering weights each rating by how many
      reviews back it, so a perfect score from two people does not outrank a 4.8 from fifty — which
      is why the list is not always in raw-rating order. Ratings and grades measure different
      things and often disagree, and a professor who taught the hardest sections will look worse
      than one who taught the easiest. Treat all of it as a reason to ask around, not a verdict.
    </p>
  );
}
