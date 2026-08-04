// @vitest-environment happy-dom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { UploadPage } from './Upload.tsx';
import { SAMPLE_MAJORS, SAMPLE_YEARS, sampleFor } from '../data/samples.ts';

/**
 * The two things a phone changes about this page: the file picker has to be a
 * tap target rather than a drop zone, and thirteen majors cannot be a table.
 *
 * These assert the markup that makes those work, not the pixels — layout is
 * verified in a browser, but a <label> that has come unhooked from its input
 * is a silent failure that would only show up on a device.
 */

afterEach(cleanup);

const noop = () => {};

describe('choosing a file', () => {
  it('is a real label bound to a real file input', () => {
    render(<UploadPage onParsed={noop} onForget={noop} />);

    const label = screen.getByText('Choose file').closest('label');
    const input = document.getElementById('transcript-file') as HTMLInputElement;

    expect(label).toBeTruthy();
    expect(label!.getAttribute('for')).toBe('transcript-file');
    expect(input.type).toBe('file');
    // The label is what opens the picker on iOS. A button calling .click() on
    // a hidden input is the version that does not reliably work there.
    expect(label!.control).toBe(input);
  });

  it('accepts PDFs by both MIME type and extension', () => {
    render(<UploadPage onParsed={noop} onForget={noop} />);
    const input = document.getElementById('transcript-file') as HTMLInputElement;
    // iOS Files greys out anything the accept list does not cover, and a PDF
    // saved from Testudo can arrive with either identification.
    expect(input.getAttribute('accept')).toContain('application/pdf');
    expect(input.getAttribute('accept')).toContain('.pdf');
  });

  it('keeps the input reachable by keyboard rather than display:none', () => {
    render(<UploadPage onParsed={noop} onForget={noop} />);
    const input = document.getElementById('transcript-file') as HTMLInputElement;
    expect(input.className).toContain('sr-only');
    expect(input.disabled).toBe(false);
  });
});

describe('the narrow-screen sample chooser', () => {
  it('offers every major and every year as native selects', () => {
    render(<UploadPage onParsed={noop} onForget={noop} />);

    const major = screen.getByLabelText('Major') as HTMLSelectElement;
    const year = screen.getByLabelText('Class year') as HTMLSelectElement;

    expect(major.tagName).toBe('SELECT');
    expect(year.tagName).toBe('SELECT');
    expect(major.options).toHaveLength(SAMPLE_MAJORS.length);
    expect(year.options).toHaveLength(SAMPLE_YEARS.length);
  });

  it('says which majors have no audit, the way the grid does', () => {
    render(<UploadPage onParsed={noop} onForget={noop} />);
    const major = screen.getByLabelText('Major') as HTMLSelectElement;

    for (const option of [...major.options]) {
      const entry = SAMPLE_MAJORS.find((m) => m.slug === option.value)!;
      expect(option.textContent!.includes('(no audit)')).toBe(!entry.hasRequirements);
    }
  });

  it('loads the sample the two selects name, and only when asked', () => {
    const onParsed = vi.fn();
    render(<UploadPage onParsed={onParsed} onForget={noop} />);

    const major = SAMPLE_MAJORS.find((m) => m.slug !== SAMPLE_MAJORS[0]!.slug)!;
    const year = SAMPLE_YEARS[2]!;
    fireEvent.change(screen.getByLabelText('Major'), { target: { value: major.slug } });
    fireEvent.change(screen.getByLabelText('Class year'), { target: { value: year.slug } });

    // Changing a select must not load anything: an Android wheel fires change
    // on every value it passes through.
    expect(onParsed).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'Load this sample' }));
    expect(onParsed).toHaveBeenCalledTimes(1);
    expect(onParsed.mock.calls[0]![1]).toBe(sampleFor(major.slug, year.slug)!.id);
  });

  it('starts on the sample already loaded and does not offer to reload it', () => {
    const major = SAMPLE_MAJORS[1]!;
    const year = SAMPLE_YEARS[3]!;
    const sample = sampleFor(major.slug, year.slug)!;

    render(
      <UploadPage sampleId={sample.id} onParsed={noop} onForget={noop} />,
    );

    expect((screen.getByLabelText('Major') as HTMLSelectElement).value).toBe(major.slug);
    expect((screen.getByLabelText('Class year') as HTMLSelectElement).value).toBe(year.slug);
    const button = screen.getByRole('button', { name: 'Showing this sample' }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });
});
