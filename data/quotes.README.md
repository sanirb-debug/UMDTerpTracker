# data/quotes.json

Real quotes about Maryland, shown by the turtle in the bottom corner.

Every quote here is transcribed by hand from a source you can go and read.
Nothing in this file is generated, paraphrased, reconstructed from memory, or
"filled in" — a quote nobody can check is not a quote, it is an attribution
somebody has to live with.

`quotes.json` ships with one placeholder entry whose fields are empty. It is
not a template to imitate loosely; it is a slot to replace.

## Fields

| Field       | Required | What it is                                                    |
| ----------- | -------- | ------------------------------------------------------------- |
| `text`      | yes      | The words, verbatim. No trimming for punchiness.               |
| `speaker`   | yes      | Who said them, as they should be credited.                     |
| `context`   | no       | Where and when, if it helps — "at the 2002 title game".        |
| `sourceUrl` | yes      | A link to where the words can be read or heard.                |

## Why `sourceUrl` is required

Putting words in a real person's mouth in public is the failure mode that
matters here, and the only defence that survives contact with a reader is a
link they can follow. So a quote without a `sourceUrl` does not render — see
`lib/quotes.ts`. In development it also prints a loud console error naming the
entry, so a half-filled quote is caught while you are editing the file rather
than after it is deployed.

If every entry is incomplete, the turtle does not appear at all. That is the
intended state of the file as committed: the easter egg turns itself on when
there is a real, sourced quote to show.
