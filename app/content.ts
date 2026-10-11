// All visible copy for the report. Paste the text from
// walkinggreenflag-copy.md here verbatim; anything still marked [TODO]
// has not been supplied yet and must not be invented.

import { site } from "./site";

const TODO = "[TODO]";

export const content = {
  caseLabel: `Case file ${TODO}`,
  // Three short lines. The first one must contain the keyword.
  lead: [TODO, TODO, TODO],
  subject: [
    { key: "Subject", value: site.name },
    { key: "Location", value: site.city },
    { key: "Occupation", value: `${site.jobTitle}, ${site.company}` },
    { key: "Status", value: TODO },
  ],
  stamp: "Verified",
  stampFootnote: TODO,

  definition: {
    label: "Definition",
    heading: TODO,
    // One clear paragraph right under the H2, then optional extras.
    paragraphs: [TODO],
  },

  inspection: {
    label: "The inspection",
    heading: TODO,
    // evidence: exhibit letter ("A".."E") or null while unknown.
    flags: [
      { title: TODO, status: "Confirmed", line: TODO, evidence: null },
      { title: TODO, status: "Confirmed", line: TODO, evidence: null },
      { title: TODO, status: "Confirmed", line: TODO, evidence: null },
      { title: TODO, status: "Confirmed", line: TODO, evidence: null },
      { title: TODO, status: "Confirmed", line: TODO, evidence: null },
    ] as {
      title: string;
      status: string;
      line: string;
      evidence: string | null;
    }[],
  },

  exhibits: {
    label: "Exhibits",
    heading: TODO,
    // One note per photo in site.ts, in the same order (Exhibit A–D).
    notes: [TODO, TODO, TODO, TODO],
  },

  redFlags: {
    label: "Full disclosure",
    heading: TODO,
    items: [TODO, TODO, TODO],
    inspectorsNote: TODO,
  },

  sincere: {
    label: "Exhibit E",
    heading: TODO,
    paragraphs: [TODO],
  },

  verdict: {
    label: "Final verdict",
    heading: TODO,
    paragraphs: [TODO],
    button: "Take a dare",
    buttonHref: site.companyUrl,
    secondary: "Or keep inspecting on Instagram",
  },

  footer: "Case closed (for now).",
};
