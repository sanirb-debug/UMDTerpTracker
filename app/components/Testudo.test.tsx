// @vitest-environment happy-dom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Testudo } from './Testudo.tsx';
import type { Quote } from '../../lib/quotes.ts';

/**
 * An easter egg is still part of the page. These tests hold it to the two
 * things it could plausibly break: attribution, and getting in the way of
 * somebody using a keyboard or a screen reader.
 */

afterEach(cleanup);

const one: Quote = {
  text: 'placeholder used only to exercise rendering',
  speaker: 'Test Fixture',
  context: 'in a unit test',
  sourceUrl: 'https://example.com/one',
};
const two: Quote = { ...one, text: 'a second placeholder', sourceUrl: 'https://example.com/two' };

describe('Testudo', () => {
  it('shows nothing at all when no quote can be attributed', () => {
    const { container } = render(<Testudo quotes={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('is a button with a real name, not a decoration with a click handler', () => {
    render(<Testudo quotes={[one]} />);
    const button = screen.getByRole('button', {
      name: 'Testudo has something to say about Maryland',
    });
    expect(button.getAttribute('aria-expanded')).toBe('false');
    // The glyph itself is noise to a screen reader; the button says what it does.
    expect(button.querySelector('[aria-hidden="true"]')?.textContent).toBe('🐢');
  });

  it('renders the speaker and a link to the source with the quote', () => {
    render(<Testudo quotes={[one]} />);
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText(one.text)).toBeTruthy();
    expect(screen.getByText('Test Fixture')).toBeTruthy();
    const link = screen.getByRole('link', { name: 'source' }) as HTMLAnchorElement;
    expect(link.href).toBe('https://example.com/one');
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
  });

  it('points the button at the quote it opened', () => {
    render(<Testudo quotes={[one]} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(document.getElementById(button.getAttribute('aria-controls')!)).toBeTruthy();
  });

  it('closes on Escape and gives focus back to the button', () => {
    render(<Testudo quotes={[one]} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.queryByText(one.text)).toBeTruthy();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByText(one.text)).toBeNull();
    expect(document.activeElement).toBe(button);
  });

  it('closes again on a second click', () => {
    render(<Testudo quotes={[one]} />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText(one.text)).toBeNull();
  });

  it('does not repeat the quote it just showed', () => {
    render(<Testudo quotes={[one, two]} random={() => 0} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(screen.getByText(one.text)).toBeTruthy();
    fireEvent.click(button); // close
    fireEvent.click(button); // open again
    expect(screen.getByText(two.text)).toBeTruthy();
  });

  it('adds exactly one tab stop, and no focus trap', () => {
    render(<Testudo quotes={[one]} />);
    // Nothing is given a tabindex that would reorder the page around it.
    expect(document.querySelectorAll('[tabindex]')).toHaveLength(0);
    fireEvent.click(screen.getByRole('button'));
    // Open, the only extra stop is the source link — reachable by moving
    // forward, not by being trapped.
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });
});
