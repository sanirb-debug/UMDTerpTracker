import informationScienceFreshman from '../../fixtures/sample-information-science-freshman/transcript.txt?raw';
import informationScienceSophomore from '../../fixtures/sample-information-science-sophomore/transcript.txt?raw';
import informationScienceJunior from '../../fixtures/sample-information-science-junior/transcript.txt?raw';
import informationScienceSenior from '../../fixtures/sample-information-science-senior/transcript.txt?raw';
import computerScienceFreshman from '../../fixtures/sample-computer-science-freshman/transcript.txt?raw';
import computerScienceSophomore from '../../fixtures/sample-computer-science-sophomore/transcript.txt?raw';
import computerScienceJunior from '../../fixtures/sample-computer-science-junior/transcript.txt?raw';
import computerScienceSenior from '../../fixtures/sample-computer-science-senior/transcript.txt?raw';
import managementFreshman from '../../fixtures/sample-management-freshman/transcript.txt?raw';
import managementSophomore from '../../fixtures/sample-management-sophomore/transcript.txt?raw';
import managementJunior from '../../fixtures/sample-management-junior/transcript.txt?raw';
import managementSenior from '../../fixtures/sample-management-senior/transcript.txt?raw';
import financeFreshman from '../../fixtures/sample-finance-freshman/transcript.txt?raw';
import financeSophomore from '../../fixtures/sample-finance-sophomore/transcript.txt?raw';
import financeJunior from '../../fixtures/sample-finance-junior/transcript.txt?raw';
import financeSenior from '../../fixtures/sample-finance-senior/transcript.txt?raw';
import informationSystemsFreshman from '../../fixtures/sample-information-systems-freshman/transcript.txt?raw';
import informationSystemsSophomore from '../../fixtures/sample-information-systems-sophomore/transcript.txt?raw';
import informationSystemsJunior from '../../fixtures/sample-information-systems-junior/transcript.txt?raw';
import informationSystemsSenior from '../../fixtures/sample-information-systems-senior/transcript.txt?raw';
import psychologyFreshman from '../../fixtures/sample-psychology-freshman/transcript.txt?raw';
import psychologySophomore from '../../fixtures/sample-psychology-sophomore/transcript.txt?raw';
import psychologyJunior from '../../fixtures/sample-psychology-junior/transcript.txt?raw';
import psychologySenior from '../../fixtures/sample-psychology-senior/transcript.txt?raw';
import criminologyFreshman from '../../fixtures/sample-criminology-freshman/transcript.txt?raw';
import criminologySophomore from '../../fixtures/sample-criminology-sophomore/transcript.txt?raw';
import criminologyJunior from '../../fixtures/sample-criminology-junior/transcript.txt?raw';
import criminologySenior from '../../fixtures/sample-criminology-senior/transcript.txt?raw';
import economicsFreshman from '../../fixtures/sample-economics-freshman/transcript.txt?raw';
import economicsSophomore from '../../fixtures/sample-economics-sophomore/transcript.txt?raw';
import economicsJunior from '../../fixtures/sample-economics-junior/transcript.txt?raw';
import economicsSenior from '../../fixtures/sample-economics-senior/transcript.txt?raw';
import biologyFreshman from '../../fixtures/sample-biology-freshman/transcript.txt?raw';
import biologySophomore from '../../fixtures/sample-biology-sophomore/transcript.txt?raw';
import biologyJunior from '../../fixtures/sample-biology-junior/transcript.txt?raw';
import biologySenior from '../../fixtures/sample-biology-senior/transcript.txt?raw';
import governmentFreshman from '../../fixtures/sample-government-freshman/transcript.txt?raw';
import governmentSophomore from '../../fixtures/sample-government-sophomore/transcript.txt?raw';
import governmentJunior from '../../fixtures/sample-government-junior/transcript.txt?raw';
import governmentSenior from '../../fixtures/sample-government-senior/transcript.txt?raw';
import mechanicalEngineeringFreshman from '../../fixtures/sample-mechanical-engineering-freshman/transcript.txt?raw';
import mechanicalEngineeringSophomore from '../../fixtures/sample-mechanical-engineering-sophomore/transcript.txt?raw';
import mechanicalEngineeringJunior from '../../fixtures/sample-mechanical-engineering-junior/transcript.txt?raw';
import mechanicalEngineeringSenior from '../../fixtures/sample-mechanical-engineering-senior/transcript.txt?raw';
import communicationFreshman from '../../fixtures/sample-communication-freshman/transcript.txt?raw';
import communicationSophomore from '../../fixtures/sample-communication-sophomore/transcript.txt?raw';
import communicationJunior from '../../fixtures/sample-communication-junior/transcript.txt?raw';
import communicationSenior from '../../fixtures/sample-communication-senior/transcript.txt?raw';
import kinesiologyFreshman from '../../fixtures/sample-kinesiology-freshman/transcript.txt?raw';
import kinesiologySophomore from '../../fixtures/sample-kinesiology-sophomore/transcript.txt?raw';
import kinesiologyJunior from '../../fixtures/sample-kinesiology-junior/transcript.txt?raw';
import kinesiologySenior from '../../fixtures/sample-kinesiology-senior/transcript.txt?raw';

export interface SampleMajor {
  slug: string;
  /** Matches `Transcript.major`, which is what selects the requirements file. */
  name: string;
  /** Column heading; full names do not fit thirteen columns. */
  short: string;
  /**
   * Whether a requirements file exists for this major, so the grid can say
   * before you click whether the audit will have anything to check against.
   *
   * Most of these are false, and that is the honest state: writing degree
   * requirements means transcribing a catalog page by hand, and a major nobody
   * has done that for gets no audit rather than a guessed one.
   */
  hasRequirements: boolean;
}

export interface SampleYear {
  slug: string;
  label: string;
}

export interface Sample {
  id: string;
  major: string;
  year: string;
  text: string;
}

/**
 * Demo transcripts: one invented student per major, each at four points in a
 * four-year degree. Within a major the four snapshots are the same person, so
 * later ones contain everything the earlier ones do.
 *
 * The coursework is plausible for the department and uses real UMD course
 * codes, but it is not a degree plan and does not claim to satisfy anything —
 * only `data/requirements/` says what a major requires, and only for the majors
 * somebody has transcribed.
 *
 * Generated by `tools/generate-samples.mjs` and checked by
 * `fixtures/samples.test.ts`. Loading one runs the real parser, so the demo
 * cannot drift from what an upload does.
 */
export const SAMPLE_MAJORS: SampleMajor[] = [
  { slug: 'information-science', name: 'Information Science', short: 'InfoSci', hasRequirements: true },
  { slug: 'computer-science', name: 'Computer Science', short: 'CS', hasRequirements: true },
  { slug: 'management', name: 'Management', short: 'Mgmt', hasRequirements: true },
  { slug: 'finance', name: 'Finance', short: 'Finance', hasRequirements: true },
  { slug: 'information-systems', name: 'Information Systems', short: 'Info Sys', hasRequirements: true },
  { slug: 'psychology', name: 'Psychology', short: 'Psych', hasRequirements: false },
  { slug: 'criminology', name: 'Criminology and Criminal Justice', short: 'CCJS', hasRequirements: false },
  { slug: 'economics', name: 'Economics', short: 'Econ', hasRequirements: false },
  { slug: 'biology', name: 'Biological Sciences', short: 'Biology', hasRequirements: false },
  { slug: 'government', name: 'Government and Politics', short: 'GVPT', hasRequirements: false },
  { slug: 'mechanical-engineering', name: 'Mechanical Engineering', short: 'Mech E', hasRequirements: false },
  { slug: 'communication', name: 'Communication', short: 'Comm', hasRequirements: false },
  { slug: 'kinesiology', name: 'Kinesiology', short: 'Kines', hasRequirements: false },
];

export const SAMPLE_YEARS: SampleYear[] = [
  { slug: 'freshman', label: 'Freshman' },
  { slug: 'sophomore', label: 'Sophomore' },
  { slug: 'junior', label: 'Junior' },
  { slug: 'senior', label: 'Senior' },
];

export const SAMPLES: Sample[] = [
  { id: 'sample-information-science-freshman', major: 'information-science', year: 'freshman', text: informationScienceFreshman },
  { id: 'sample-information-science-sophomore', major: 'information-science', year: 'sophomore', text: informationScienceSophomore },
  { id: 'sample-information-science-junior', major: 'information-science', year: 'junior', text: informationScienceJunior },
  { id: 'sample-information-science-senior', major: 'information-science', year: 'senior', text: informationScienceSenior },
  { id: 'sample-computer-science-freshman', major: 'computer-science', year: 'freshman', text: computerScienceFreshman },
  { id: 'sample-computer-science-sophomore', major: 'computer-science', year: 'sophomore', text: computerScienceSophomore },
  { id: 'sample-computer-science-junior', major: 'computer-science', year: 'junior', text: computerScienceJunior },
  { id: 'sample-computer-science-senior', major: 'computer-science', year: 'senior', text: computerScienceSenior },
  { id: 'sample-management-freshman', major: 'management', year: 'freshman', text: managementFreshman },
  { id: 'sample-management-sophomore', major: 'management', year: 'sophomore', text: managementSophomore },
  { id: 'sample-management-junior', major: 'management', year: 'junior', text: managementJunior },
  { id: 'sample-management-senior', major: 'management', year: 'senior', text: managementSenior },
  { id: 'sample-finance-freshman', major: 'finance', year: 'freshman', text: financeFreshman },
  { id: 'sample-finance-sophomore', major: 'finance', year: 'sophomore', text: financeSophomore },
  { id: 'sample-finance-junior', major: 'finance', year: 'junior', text: financeJunior },
  { id: 'sample-finance-senior', major: 'finance', year: 'senior', text: financeSenior },
  { id: 'sample-information-systems-freshman', major: 'information-systems', year: 'freshman', text: informationSystemsFreshman },
  { id: 'sample-information-systems-sophomore', major: 'information-systems', year: 'sophomore', text: informationSystemsSophomore },
  { id: 'sample-information-systems-junior', major: 'information-systems', year: 'junior', text: informationSystemsJunior },
  { id: 'sample-information-systems-senior', major: 'information-systems', year: 'senior', text: informationSystemsSenior },
  { id: 'sample-psychology-freshman', major: 'psychology', year: 'freshman', text: psychologyFreshman },
  { id: 'sample-psychology-sophomore', major: 'psychology', year: 'sophomore', text: psychologySophomore },
  { id: 'sample-psychology-junior', major: 'psychology', year: 'junior', text: psychologyJunior },
  { id: 'sample-psychology-senior', major: 'psychology', year: 'senior', text: psychologySenior },
  { id: 'sample-criminology-freshman', major: 'criminology', year: 'freshman', text: criminologyFreshman },
  { id: 'sample-criminology-sophomore', major: 'criminology', year: 'sophomore', text: criminologySophomore },
  { id: 'sample-criminology-junior', major: 'criminology', year: 'junior', text: criminologyJunior },
  { id: 'sample-criminology-senior', major: 'criminology', year: 'senior', text: criminologySenior },
  { id: 'sample-economics-freshman', major: 'economics', year: 'freshman', text: economicsFreshman },
  { id: 'sample-economics-sophomore', major: 'economics', year: 'sophomore', text: economicsSophomore },
  { id: 'sample-economics-junior', major: 'economics', year: 'junior', text: economicsJunior },
  { id: 'sample-economics-senior', major: 'economics', year: 'senior', text: economicsSenior },
  { id: 'sample-biology-freshman', major: 'biology', year: 'freshman', text: biologyFreshman },
  { id: 'sample-biology-sophomore', major: 'biology', year: 'sophomore', text: biologySophomore },
  { id: 'sample-biology-junior', major: 'biology', year: 'junior', text: biologyJunior },
  { id: 'sample-biology-senior', major: 'biology', year: 'senior', text: biologySenior },
  { id: 'sample-government-freshman', major: 'government', year: 'freshman', text: governmentFreshman },
  { id: 'sample-government-sophomore', major: 'government', year: 'sophomore', text: governmentSophomore },
  { id: 'sample-government-junior', major: 'government', year: 'junior', text: governmentJunior },
  { id: 'sample-government-senior', major: 'government', year: 'senior', text: governmentSenior },
  { id: 'sample-mechanical-engineering-freshman', major: 'mechanical-engineering', year: 'freshman', text: mechanicalEngineeringFreshman },
  { id: 'sample-mechanical-engineering-sophomore', major: 'mechanical-engineering', year: 'sophomore', text: mechanicalEngineeringSophomore },
  { id: 'sample-mechanical-engineering-junior', major: 'mechanical-engineering', year: 'junior', text: mechanicalEngineeringJunior },
  { id: 'sample-mechanical-engineering-senior', major: 'mechanical-engineering', year: 'senior', text: mechanicalEngineeringSenior },
  { id: 'sample-communication-freshman', major: 'communication', year: 'freshman', text: communicationFreshman },
  { id: 'sample-communication-sophomore', major: 'communication', year: 'sophomore', text: communicationSophomore },
  { id: 'sample-communication-junior', major: 'communication', year: 'junior', text: communicationJunior },
  { id: 'sample-communication-senior', major: 'communication', year: 'senior', text: communicationSenior },
  { id: 'sample-kinesiology-freshman', major: 'kinesiology', year: 'freshman', text: kinesiologyFreshman },
  { id: 'sample-kinesiology-sophomore', major: 'kinesiology', year: 'sophomore', text: kinesiologySophomore },
  { id: 'sample-kinesiology-junior', major: 'kinesiology', year: 'junior', text: kinesiologyJunior },
  { id: 'sample-kinesiology-senior', major: 'kinesiology', year: 'senior', text: kinesiologySenior },
];

export function findSample(id: string | undefined): Sample | undefined {
  return id ? SAMPLES.find((sample) => sample.id === id) : undefined;
}

export function sampleFor(major: string, year: string): Sample | undefined {
  return SAMPLES.find((sample) => sample.major === major && sample.year === year);
}

export function majorOf(id: string | undefined): SampleMajor | undefined {
  const sample = findSample(id);
  return sample ? SAMPLE_MAJORS.find((major) => major.slug === sample.major) : undefined;
}
