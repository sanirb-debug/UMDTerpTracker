/** @type {import('tailwindcss').Config} */

/**
 * Red and white.
 *
 * The accent is UMD's own #E21833 on white surfaces. That creates one problem
 * worth being deliberate about: red was previously how this app said "something
 * is wrong", and a brand colour cannot also be the only error signal — if the
 * primary button and the "your GPA does not reconcile" banner are the same red,
 * the banner stops registering as an alarm.
 *
 * So `critical` is a deeper, duller red than the brand red, and it never
 * carries the message on its own: every alert also has a heading, a border and
 * `role="alert"`. `caution` stays amber and `positive` stays green, because
 * "unofficial", "satisfied" and "broken" are three different things and a
 * single-hue palette cannot tell them apart.
 */
const palette = {
  // Primary actions, active tab, focus rings, the wordmark. UMD red.
  accent: {
    50: '#fef2f3',
    100: '#fde3e5',
    200: '#fbccd0',
    300: '#f7a4ab',
    400: '#f1707c',
    500: '#e63e51',
    600: '#e21833', // University of Maryland red
    700: '#bd1029',
    800: '#9d1126',
    900: '#851325',
    950: '#49040f',
  },
  // Something is actually broken. Deliberately darker and duller than the
  // brand red so an alert does not read as a call to action.
  critical: {
    50: '#fcf4f3',
    100: '#f9e7e4',
    200: '#f2d0cb',
    300: '#e5aca4',
    400: '#d47f74',
    500: '#bd5a4d',
    600: '#a3423a',
    700: '#87352f',
    800: '#70302c',
    900: '#5f2d2a',
    950: '#331413',
  },
  // Unofficial, check this before you rely on it, in progress.
  positive: {
    50: '#f2f9f4',
    100: '#e0f0e5',
    200: '#c2e1cd',
    300: '#94c9a8',
    400: '#61a97d',
    500: '#3f8b5d',
    600: '#2e6f49',
    700: '#26593c',
    800: '#214732',
    900: '#1c3b2b',
    950: '#0d2015',
  },
  caution: {
    50: '#fdf8ed',
    100: '#f9edd0',
    200: '#f2d99e',
    300: '#e8bf65',
    400: '#dea63c',
    500: '#c78a24',
    600: '#a76b1c',
    700: '#854f19',
    800: '#6e401b',
    900: '#5d361a',
    950: '#351b0b',
  },
  // Quiet notices — sample data, "we improved the parser". Kept low-chroma so
  // the red stays the only colour that draws the eye.
  info: {
    50: '#f5f7f9',
    100: '#e8edf2',
    200: '#d3dce5',
    300: '#b0c1d1',
    400: '#87a0b8',
    500: '#68829f',
    600: '#536a85',
    700: '#45566c',
    800: '#3c495b',
    900: '#353f4e',
    950: '#232833',
  },
};

/**
 * Telling one class apart from another on the weekly grid. These carry no
 * meaning beyond "different course", so they must not reuse the semantic
 * scales — a 9am lecture tinted `critical` reads as a problem.
 *
 * Kept far enough apart in hue to stay distinguishable, including for the
 * commonest colour-vision deficiencies: they alternate warm and cool rather
 * than running along a red-green axis.
 */
const course = {
  1: '#c2334a',
  2: '#3f6b96',
  3: '#4e8a63',
  4: '#c08a2e',
  5: '#7a5c99',
  6: '#3f8a86',
  7: '#a55b7c',
};

export default {
  content: ['./index.html', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...palette,
        course,
        terp: {
          red: '#e21833',
          gold: '#ffd200',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
};
