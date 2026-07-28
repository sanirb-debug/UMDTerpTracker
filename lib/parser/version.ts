/**
 * Version of the parsed-transcript shape.
 *
 * **Bump this whenever the parser starts extracting something new**, or changes
 * the shape of what it extracts.
 *
 * The app caches the parsed result rather than the PDF, so a parser that learns
 * to read Gen Ed codes does nothing for a transcript parsed before it could.
 * The stored object simply has no `genEd` anywhere, every Gen Ed requirement
 * finds nothing, and the audit reports categories unmet that the registrar
 * shows complete — with no error and no clue why. That is exactly the silent
 * wrongness the self-check exists to prevent, and it needs the same treatment:
 * anything stored under an older number is discarded rather than trusted.
 *
 * History:
 *   1 — original parse: terms, transfer credit, registered courses
 *   2 — Gen Ed codes, section numbers, term ids on registered courses
 */
export const PARSER_VERSION = 2;
