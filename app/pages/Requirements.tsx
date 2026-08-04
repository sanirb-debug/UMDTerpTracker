import { useMemo } from 'react';
import type { Transcript } from '../../lib/types.ts';
import { evaluate, findRequirements } from '../../lib/audit/index.ts';
import type { RuleResult } from '../../lib/audit/index.ts';
import { catalog } from '../data/catalog.ts';
import { allRequirements } from '../data/requirements.ts';
import { RatingCaveat, TopRated } from '../components/TopRated.tsx';
import { CourseLink, CourseLinkList } from '../components/CourseLink.tsx';
import { SomethingWrong } from '../components/SomethingWrong.tsx';

interface Props {
  transcript: Transcript;
  sampleId?: string;
}

export function RequirementsPage({ transcript, sampleId }: Props) {
  const requirements = useMemo(
    () => findRequirements(transcript.major, allRequirements),
    [transcript.major],
  );
  const audit = useMemo(
    () => (requirements ? evaluate(transcript, requirements) : null),
    [transcript, requirements],
  );

  // No requirements file for this major. Everything else in the app still
  // works; only the audit is unavailable, and saying so beats rendering an
  // empty one that reads like a finished degree.
  if (!requirements || !audit) {
    return (
      <section className="card border-l-4 border-caution-500/60">
        <h2 className="font-semibold">Degree audit not yet available for this major</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          {transcript.major
            ? `Nobody has transcribed the ${transcript.major} requirements yet, so there is nothing to check your coursework against.`
            : 'Your transcript did not name a major, so there is nothing to check your coursework against.'}{' '}
          Your GPA, schedule and planner are unaffected and work normally — it is only this page
          that needs the requirements.
        </p>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          Requirements are transcribed by hand from the official catalog, one major at a time.
          Written up so far: {allRequirements.map((r) => r.major).join(', ')}.
        </p>
        <div className="mt-3">
          <SomethingWrong view="Requirements" transcript={transcript} sampleId={sampleId} />
        </div>
      </section>
    );
  }

  return (
    <div className="space-y-6">
      <section className="card">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-semibold">
            {requirements.major}{' '}
            <span className="text-sm font-normal text-neutral-500">
              {requirements.degree} · {requirements.catalogYear} catalog
            </span>
          </h2>
          <div className="text-right">
            <p className="text-sm tabular-nums text-neutral-500">
              {audit.results.filter((r) => r.satisfied).length} of {audit.results.length}{' '}
              requirements met
            </p>
            <SomethingWrong view="Requirements" transcript={transcript} sampleId={sampleId} />
          </div>
        </div>

        {audit.satisfied ? (
          <p className="mt-3 rounded-lg bg-positive-50 p-3 text-sm text-positive-900 dark:bg-positive-950/30 dark:text-positive-200">
            Everything here is satisfied.
          </p>
        ) : audit.satisfiedIfInProgressPass ? (
          <p className="mt-3 rounded-lg bg-positive-50 p-3 text-sm text-positive-900 dark:bg-positive-950/30 dark:text-positive-200">
            Everything outstanding is already on your schedule. Pass what you are taking and this
            is done.
          </p>
        ) : (
          <div className="mt-3 rounded-lg bg-neutral-100 p-3 text-sm dark:bg-neutral-900">
            <p className="font-semibold">Still to take</p>
            <ul className="mt-1 list-inside list-disc">
              {audit.remainingCourses.map((courseId) => (
                <li key={courseId}>
                  <CourseLink courseId={courseId} className="font-bold" />
                  {catalog.get(courseId)?.title && (
                    <span className="text-neutral-500"> — {catalog.get(courseId)!.title}</span>
                  )}
                </li>
              ))}
              {audit.remainingCredits.map((item) => (
                <li key={item.label}>
                  <strong>{item.credits} more credits</strong>
                  <span className="text-neutral-500"> — {stripPrefix(item.label)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {groupResults(audit.results).map((group) => (
        <section key={group.label} className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {group.label}
            <span className="ml-2 font-normal normal-case">
              {group.results.filter((r) => r.satisfied).length}/{group.results.length}
            </span>
          </h2>
          {group.results.map((result) => (
            <RequirementCard key={result.label} result={result} />
          ))}
        </section>
      ))}

      {audit.remainingCourses.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Who to take the rest with
          </h2>
          {audit.remainingCourses.map((courseId) => (
            <article key={courseId} className="card">
              <h3 className="mb-2 font-semibold">
                <CourseLink courseId={courseId} />
                {catalog.get(courseId)?.title && (
                  <span className="ml-2 text-sm font-normal text-neutral-500">
                    {catalog.get(courseId)!.title}
                  </span>
                )}
              </h3>
              <TopRated courseId={courseId} />
            </article>
          ))}
          <RatingCaveat />
        </section>
      )}

      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        Transcribed by hand from the{' '}
        <a className="underline" href={requirements.source} target="_blank" rel="noopener noreferrer">
          UMD catalog
        </a>
        {requirements.crossChecked && (
          <>
            {' '}
            and cross-checked against the{' '}
            <a
              className="underline"
              href={requirements.crossChecked}
              target="_blank"
              rel="noopener noreferrer"
            >
              iSchool curriculum page
            </a>
          </>
        )}
        , last verified {requirements.lastVerified}. Requirements change, exceptions get approved,
        and substitutions are a conversation with an advisor — this is a second opinion, not your
        official degree audit. Confirm before you register.
      </p>
    </div>
  );
}

/** `[UNIV] UMD Degree Requirements` reads better as `UMD degree requirements`. */
function stripPrefix(label: string): string {
  const bare = label.replace(/^\[[^\]]+\]\s*/, '');
  return bare.charAt(0) + bare.slice(1).toLowerCase();
}

/**
 * Group by the bracketed prefix the audit itself uses — `[UNIV]`, `[GenEd]` —
 * so the page reads the way the official one does. Anything unprefixed is
 * major work.
 */
function groupResults(results: RuleResult[]): Array<{ label: string; results: RuleResult[] }> {
  const groups = new Map<string, RuleResult[]>();
  for (const result of results) {
    const prefix = /^\[([^\]]+)\]/.exec(result.label)?.[1];
    const label = prefix === undefined ? 'Major' : prefix === 'UNIV' ? 'University' : 'General Education';
    const bucket = groups.get(label) ?? [];
    bucket.push(result);
    groups.set(label, bucket);
  }
  // Major first: it is the part that actually changes term to term.
  const order = ['Major', 'General Education', 'University'];
  return order
    .filter((label) => groups.has(label))
    .map((label) => ({ label, results: groups.get(label)! }));
}

function RequirementCard({ result }: { result: RuleResult }) {
  const covered = result.have + result.pending >= result.needed;
  const tone = result.satisfied
    ? 'border-positive-500/40'
    : covered
      ? 'border-info-500/40'
      : 'border-caution-500/50';

  return (
    <article className={`card border-l-4 ${tone}`}>
      <header className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">{result.label}</h3>
        <p className="text-sm tabular-nums text-neutral-500">
          {result.unit === 'gpa' ? (
            <>
              {result.have.toFixed(3)} · needs {result.needed.toFixed(1)}
            </>
          ) : (
            <>
              {result.have}
              {result.pending > 0 && ` (+${result.pending} in progress)`} of {result.needed}{' '}
              {result.unit}
            </>
          )}
        </p>
      </header>

      {result.completed.length > 0 && (
        <p className="text-sm">
          <span className="text-neutral-500">Done: </span>
          <CourseLinkList courses={result.completed} />
        </p>
      )}
      {result.inProgress.length > 0 && (
        <p className="mt-1 text-sm">
          <span className="text-neutral-500">Taking: </span>
          <CourseLinkList courses={result.inProgress} />
        </p>
      )}
      {!result.satisfied && result.rule.type === 'all_of' && result.missing.length > 0 && (
        <p className="mt-1 text-sm">
          <span className="text-neutral-500">Missing: </span>
          <strong>
            <CourseLinkList courses={result.missing.map((courseId) => ({ courseId }))} />
          </strong>
        </p>
      )}
      {!result.satisfied && result.rule.type !== 'all_of' && result.rule.type !== 'credits' && (
        <p className="mt-1 text-sm text-neutral-500">
          Any {result.needed - result.have} of: {result.missing.slice(0, 12).join(', ')}
          {result.missing.length > 12 && ` and ${result.missing.length - 12} more`}
        </p>
      )}
    </article>
  );
}
