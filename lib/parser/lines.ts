import type { PositionedText, TextPage } from './textItems.ts';

/**
 * A run of text that sits in one column of one row. pdf.js splits a table cell
 * into several items whenever the font or kerning changes, so neighbouring runs
 * get glued back together here.
 */
export interface Cell {
  text: string;
  x: number;
  endX: number;
}

export interface Line {
  page: number;
  y: number;
  cells: Cell[];
  /** All cells joined with single spaces. Handy for label regexes. */
  text: string;
}

export interface LineOptions {
  /**
   * Two items belong to the same row when their baselines are within this
   * fraction of the taller item's height. Transcript rows are single-spaced,
   * so this has to stay well under 1.
   */
  rowTolerance: number;
  /**
   * Two items belong to the same cell when the horizontal gap between them is
   * under this fraction of the item height. A real column break on a transcript
   * is several ems wide; an inter-word space is under one.
   */
  cellGap: number;
}

export const DEFAULT_LINE_OPTIONS: LineOptions = {
  rowTolerance: 0.5,
  cellGap: 1.4,
};

/**
 * Rebuild table rows from positioned text.
 *
 * This is the part that has to be positional rather than regex-driven: the flat
 * text stream interleaves columns unpredictably, but the x/y coordinates say
 * exactly which runs share a baseline and which sit in separate columns.
 */
export function groupIntoLines(page: TextPage, options: LineOptions = DEFAULT_LINE_OPTIONS): Line[] {
  if (page.items.length === 0) return [];

  // Descending y: PDF space puts the top of the page at the highest y.
  const sorted = [...page.items].sort((a, b) => b.y - a.y || a.x - b.x);

  const rows: PositionedText[][] = [];
  let current: PositionedText[] = [];
  let currentY = sorted[0]!.y;

  for (const item of sorted) {
    const tolerance = Math.max(item.height, 1) * options.rowTolerance;
    if (current.length > 0 && Math.abs(item.y - currentY) > tolerance) {
      rows.push(current);
      current = [];
    }
    if (current.length === 0) currentY = item.y;
    current.push(item);
  }
  if (current.length > 0) rows.push(current);

  return rows.map((row) => toLine(page.pageNumber, row, options));
}

function toLine(pageNumber: number, row: PositionedText[], options: LineOptions): Line {
  const items = [...row].sort((a, b) => a.x - b.x);
  const cells: Cell[] = [];

  for (const item of items) {
    const previous = cells[cells.length - 1];
    const gapLimit = Math.max(item.height, 1) * options.cellGap;
    if (previous && item.x - previous.endX <= gapLimit) {
      // Same cell. pdf.js sometimes emits the space and sometimes does not.
      const separator = previous.text.endsWith(' ') || item.text.startsWith(' ') ? '' : ' ';
      const merged = item.x - previous.endX < 0.2 ? '' : separator;
      previous.text = `${previous.text}${merged}${item.text}`;
      previous.endX = Math.max(previous.endX, item.x + item.width);
    } else {
      cells.push({ text: item.text, x: item.x, endX: item.x + item.width });
    }
  }

  const trimmed = cells
    .map((cell) => ({ ...cell, text: cell.text.replace(/\s+/g, ' ').trim() }))
    .filter((cell) => cell.text.length > 0);

  return {
    page: pageNumber,
    y: items[0]?.y ?? 0,
    cells: trimmed,
    text: trimmed.map((cell) => cell.text).join(' '),
  };
}

/** Flatten every page into one ordered list of lines. */
export function allLines(pages: TextPage[], options: LineOptions = DEFAULT_LINE_OPTIONS): Line[] {
  return pages.flatMap((page) => groupIntoLines(page, options));
}
