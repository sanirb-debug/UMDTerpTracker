import { describe, expect, it } from 'vitest';
import { readHistoricCourse, readRegisteredCourse, readTransferCourse } from './rows.ts';

describe('readHistoricCourse', () => {
  it('reads course, title, grade, attempted, earned and quality points', () => {
    expect(readHistoricCourse('CMSC216 INTRO COMPUTER SYSTEMS A- 4.00 4.00 14.80')).toMatchObject({
      courseId: 'CMSC216',
      title: 'INTRO COMPUTER SYSTEMS',
      credits: 4,
      creditsEarned: 4,
      grade: 'A-',
      gradePoints: 3.7,
      countsTowardGpa: true,
      source: 'institution',
    });
  });

  it('keeps trailing Gen Ed tags out of the title and records them', () => {
    const entry = readHistoricCourse('AMST203 POP CULTURE IN AMER A+ 3.00 3.00 12.00 DSHU, DVUP');
    expect(entry).toMatchObject({ courseId: 'AMST203', title: 'POP CULTURE IN AMER', grade: 'A+' });
    expect(entry?.genEd).toEqual(['DSHU', 'DVUP']);
  });

  it('reads both codes when a course can count for either', () => {
    // The transcript writes this as prose, not a list.
    const entry = readHistoricCourse('PSYC100 INTRO PSYCHOLOGY A 3.00 3.00 12.00 DSHS or DSNS');
    expect(entry?.genEd).toEqual(['DSHS', 'DSNS']);
  });

  it('leaves genEd unset when the row carries no codes', () => {
    expect(readHistoricCourse('INST126 INTRO TO PROGAM A 3.00 3.00 12.00')?.genEd).toBeUndefined();
  });

  it('does not read a title ending in a roman numeral as the grade', () => {
    // The `I` in the title is the trap: it is also an Incomplete.
    const entry = readHistoricCourse('CMSC131 OBJECT-ORIENT PROGRAM I A 4.00 4.00 16.00');
    expect(entry?.title).toBe('OBJECT-ORIENT PROGRAM I');
    expect(entry?.grade).toBe('A');
  });

  it('keeps a W in attempted credits but earns nothing for it', () => {
    expect(readHistoricCourse('STAT400 APPLIED PROBABILITY I W 3.00 0.00 0.00')).toMatchObject({
      credits: 3,
      creditsEarned: 0,
      grade: 'W',
      countsTowardGpa: false,
    });
  });

  it('keeps a P out of the GPA while still awarding the credit', () => {
    expect(readHistoricCourse('UNIV100 STUDENT IN UNIVERSITY P 1.00 1.00 0.00')).toMatchObject({
      credits: 1,
      creditsEarned: 1,
      grade: 'P',
      gradePoints: null,
      countsTowardGpa: false,
    });
  });

  it('reads XF as its own grade rather than an F', () => {
    expect(readHistoricCourse('CMSC330 PROGRAMMING LANGUAGES XF 3.00 0.00 0.00')).toMatchObject({
      grade: 'XF',
      gradePoints: 0,
      countsTowardGpa: true,
    });
  });

  it('rejects rows that are not courses', () => {
    expect(readHistoricCourse('Semester: Attempted 12.00; Earned 12.00; QPoints 47.10; GPA 3.925')).toBeNull();
    expect(readHistoricCourse('MAJOR: COMPUTER SCIENCE COLLEGE: COMPUTER MATH & NATURAL SCIENCES')).toBeNull();
    expect(readHistoricCourse('** Semester Academic Honors **')).toBeNull();
  });
});

describe('readTransferCourse', () => {
  it('uses the UMD equivalent as the course id', () => {
    expect(readTransferCourse('2308 INTRO TO BUSINESS B 3.00 BMGT110', 'transfer')).toMatchObject({
      courseId: 'BMGT110',
      title: 'INTRO TO BUSINESS',
      credits: 3,
      creditsEarned: 3,
      grade: 'B',
      countsTowardGpa: false,
      source: 'transfer',
    });
  });

  it('never counts transfer credit toward the GPA, whatever grade it carries', () => {
    const entry = readTransferCourse('ELEMENTS STATISTICS C 3.00 STAT100 FSAR, FSMA', 'transfer');
    expect(entry).toMatchObject({ grade: 'C', gradePoints: null, countsTowardGpa: false });
  });

  it('records Gen Ed credit granted for transfer work', () => {
    // The catalog knows nothing about a course taken elsewhere; the transcript
    // is the only record of what UMD credited it as.
    const entry = readTransferCourse('ELEMENTS STATISTICS C 3.00 STAT100 FSAR, FSMA', 'transfer');
    expect(entry?.genEd).toEqual(['FSAR', 'FSMA']);
  });

  it('handles credit with no UMD equivalent', () => {
    const entry = readTransferCourse('INTRO COMPUTER APPL B 3.00 L1', 'transfer');
    expect(entry).toMatchObject({ courseId: '', credits: 3 });
  });

  it('reads refused credit as zero rather than dropping the row', () => {
    expect(readTransferCourse('2101 U.S. HISTORY/SCR 1 NC 0.00 No Credit', 'exam')).toMatchObject({
      courseId: '',
      grade: 'NC',
      credits: 0,
      source: 'exam',
    });
  });

  it('reads an exam row whose title ends in a score digit', () => {
    expect(readTransferCourse('2001 U.S. GVPT/SCR 5 P 3.00 GVPT170 DSHS', 'exam')).toMatchObject({
      courseId: 'GVPT170',
      title: 'U.S. GVPT/SCR 5',
      credits: 3,
    });
  });

  it('rejects the transfer totals lines', () => {
    expect(readTransferCourse('Acceptable UG Inst. Credits: 58.00', 'transfer')).toBeNull();
    expect(readTransferCourse('Total UG Credits Applicable: 61.00', 'transfer')).toBeNull();
  });
});

describe('readRegisteredCourse', () => {
  it('reads a course you are registered for', () => {
    expect(readRegisteredCourse('INST466 0101 3.00 REG A 05/28/26 05/28/26 DVCC')).toMatchObject({
      dropped: false,
      entry: { courseId: 'INST466', credits: 3, grade: 'NG', countsTowardGpa: false },
    });
  });

  it('flags a dropped course', () => {
    // The letter after the grading method is add/drop status, not a grade.
    expect(readRegisteredCourse('INST352 0202 3.00 REG D 05/20/26 05/26/26 05/26/26')?.dropped).toBe(
      true,
    );
  });

  it('handles a lettered section code', () => {
    expect(readRegisteredCourse('INST335 WB21 3.00 REG A 04/06/26 04/06/26')?.entry.courseId).toBe(
      'INST335',
    );
  });

  it('rejects the column rule', () => {
    expect(readRegisteredCourse('======== ==== ======= ==== ==== ========')).toBeNull();
  });
});
