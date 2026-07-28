import { useMemo } from 'react';
import type { Transcript } from '../../lib/types.ts';
import { evaluate, findRequirements } from '../../lib/audit/index.ts';
import type { RuleResult } from '../../lib/audit/index.ts';
import { catalog } from '../data/catalog.ts';
import { allRequirements } from '../data/requirements.ts';
import { RatingCaveat, TopRated } from '../components/TopRated.tsx';

interface Props {
  transcript: Transcript;
}

export function RequirementsPage({ transcript }: Props) {
  const requirements = useMemo(
    () => findRequirements(transcript.major, allRequirements),
    [transcript.major],
  );
  const audit = useMemo(
    () => (requirements ? evaluate(transcript, requirements) : null),
    [transcript, requirements],
  );

  if (!requirements || !audit) {
    return (
      <div className="space-y-3">
        <p className="text-sm">
          {transcript.major
            ? `No requirements have been written up for ${transcript.major} yet.`
            : 'Your transcript did not name a major, so there is nothing to check against.'}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Requirements are transcribed by hand from the official catalog, one major at a time. So
          far that is{' '}
          {allRequirements.map((r) => r.major).join(', ')} only.
        </p>
      </div>
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
          <p className="text-sm tabular-nums text-neutral-500">
            {audit.results.filter((r) => r.satisfied).length} of {audit.results.length} requirements
            met
          </p>
        </div>

        {audit.satisfied ? (
          <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
            Everything here is satisfied.
          </p>
        ) : audit.satisfiedIfInProgressPass ? (
          <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
            Everything outstanding is already on your schedule. Pass what you are taking and this
            is done.
          </p>
        ) : (
          <div className="mt-3 rounded-lg bg-neutral-100 p-3 text-sm dark:bg-neutral-900">
            <p className="font-semibold">Still to take</p>
            <ul className="mt-1 list-inside list-disc">
              {audit.remainingCourses.map((courseId) => (
                <li key={courseId}>
                  <strong>{courseId}</strong>
                  {catalog.get(courseId)?.title && (
                    <span className="text-neutral-500"> — {catalog.get(courseId)!.title}</span>
                  )}
                </li>
              ))}
              {audit.remainingCredits.map((item) => (
                <li key={item.label}>
                  <strong>{item.credits} more credits</strong>
                  <span className="text-neutral-500"> — {item.label.toLowerCase()}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="space-y-3">
        {audit.results.map((result) => (
          <RequirementCard key={result.label} result={result} />
        ))}
      </section>

      {audit.remainingCourses.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Who to take the rest with
          </h2>
          {audit.remainingCourses.map((courseId) => (
            <article key={courseId} className="card">
              <h3 className="mb-2 font-semibold">
                {courseId}
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
        <a className="underline" href={requirements.source} target="_blank" rel="noreferrer">
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
              rel="noreferrer"
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

function RequirementCard({ result }: { result: RuleResult }) {
  const covered = result.have + result.pending >= result.needed;
  const tone = result.satisfied
    ? 'border-emerald-500/40'
    : covered
      ? 'border-sky-500/40'
      : 'border-amber-500/50';

  return (
    <article className={`card border-l-4 ${tone}`}>
      <header className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">{result.label}</h3>
        <p className="text-sm tabular-nums text-neutral-500">
          {result.have}
          {result.pending > 0 && ` (+${result.pending} in progress)`} of {result.needed}{' '}
          {result.unit}
        </p>
      </header>

      {result.completed.length > 0 && (
        <p className="text-sm">
          <span className="text-neutral-500">Done: </span>
          {result.completed.map((course) => course.courseId || course.title).join(', ')}
        </p>
      )}
      {result.inProgress.length > 0 && (
        <p className="mt-1 text-sm">
          <span className="text-neutral-500">Taking: </span>
          {result.inProgress.map((course) => course.courseId).join(', ')}
        </p>
      )}
      {!result.satisfied && result.rule.type === 'all_of' && result.missing.length > 0 && (
        <p className="mt-1 text-sm">
          <span className="text-neutral-500">Missing: </span>
          <strong>{result.missing.join(', ')}</strong>
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
