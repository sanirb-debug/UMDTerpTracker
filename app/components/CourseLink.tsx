import type { ReactNode } from 'react';
import type { CreditSource } from '../../lib/types.ts';
import { canLinkCourse, planetTerpCourseUrl } from '../../lib/planetterp.ts';
import { catalog } from '../data/catalog.ts';

interface Props {
  courseId: string;
  /** Where the credit came from. Transfer and exam work never links. */
  source?: CreditSource;
  className?: string;
  /** Defaults to the course id itself. */
  children?: ReactNode;
}

/**
 * A course id, linked to its PlanetTerp page when there is a page to link to.
 *
 * Falls back to plain text rather than rendering a link that 404s: the catalog
 * is the check, so a course UMD has renumbered or discontinued stays readable
 * without pretending to be clickable.
 */
export function CourseLink({ courseId, source, className, children }: Props) {
  const label = children ?? courseId;
  const linkable = canLinkCourse({
    courseId,
    source,
    inCatalog: catalog.get(courseId) !== undefined,
  });

  if (!linkable) return <span className={className}>{label}</span>;

  return (
    <a
      className={`underline decoration-dotted underline-offset-2 hover:decoration-solid ${className ?? ''}`}
      href={planetTerpCourseUrl(courseId)}
      target="_blank"
      rel="noopener noreferrer"
      title={`${courseId} on PlanetTerp`}
    >
      {label}
    </a>
  );
}

/**
 * A comma-separated run of course ids, each linked where possible.
 *
 * Transfer rows sometimes carry no course id at all, so they fall back to the
 * course title — which is the only thing identifying them.
 */
export function CourseLinkList({
  courses,
}: {
  courses: ReadonlyArray<{ courseId: string; title?: string; source?: CreditSource }>;
}) {
  return (
    <>
      {courses.map((course, index) => (
        <span key={`${course.courseId || course.title}-${index}`}>
          {index > 0 && ', '}
          <CourseLink courseId={course.courseId} source={course.source}>
            {course.courseId || course.title}
          </CourseLink>
        </span>
      ))}
    </>
  );
}
