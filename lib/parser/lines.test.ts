import { describe, expect, it } from 'vitest';
import { groupIntoLines } from './lines.ts';
import { pageFromText } from './fixedWidth.ts';

describe('groupIntoLines', () => {
  it('keeps words in a title together but splits at column gaps', () => {
    const page = pageFromText(1, 'CMSC131    Object-Oriented Programming I    4.000     A');
    const [line] = groupIntoLines(page);

    expect(line?.cells.map((cell) => cell.text)).toEqual([
      'CMSC131',
      'Object-Oriented Programming I',
      '4.000',
      'A',
    ]);
  });

  it('orders rows top to bottom even though PDF y grows upward', () => {
    const page = pageFromText(1, ['first row', 'second row', 'third row'].join('\n'));
    expect(groupIntoLines(page).map((line) => line.text)).toEqual([
      'first row',
      'second row',
      'third row',
    ]);
  });

  it('reassembles a row whose cells arrive out of order', () => {
    // pdf.js emits items in drawing order, which is not always left to right.
    const page = {
      pageNumber: 1,
      items: [
        { text: 'A', x: 450, y: 700, width: 6, height: 10 },
        { text: 'CMSC351', x: 0, y: 700, width: 42, height: 10 },
        { text: '3.000', x: 330, y: 700, width: 30, height: 10 },
      ],
    };
    expect(groupIntoLines(page)[0]?.cells.map((cell) => cell.text)).toEqual([
      'CMSC351',
      '3.000',
      'A',
    ]);
  });
});
