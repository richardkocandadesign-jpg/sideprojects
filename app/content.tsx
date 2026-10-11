// All visible copy for the report, taken verbatim from
// walkinggreenflag-copy.md (v2). Do not rewrite it for polish.

import type { ReactNode } from "react";
import { site } from "./site";

type Flag = {
  title: string;
  status: string;
  // Missing while the copy for that flag is still marked to verify.
  line?: string;
  // Exhibit letter this flag links to, if any.
  exhibit?: string;
  evidence: string;
};

export const meta = {
  title: "Walking Green Flag | Richard Kocanda",
  description:
    "Walking green flag? Richard Kocanda from Prague, co-founder and CEO of GetDare, has been officially inspected. Read the report.",
  ogTitle: "Walking Green Flag — Inspection Report",
  ogDescription: "5 green flags. 3 red ones. All the evidence. You decide.",
};

export const content = {
  caseLabel: "Case file #001 · Prague · Status: under review",
  lead: [
    "You searched for a walking green flag.",
    "Google sent you to a guy from Prague.",
    "Coincidence? Let's check the evidence.",
  ],
  subject: [
    { key: "Subject", value: "Richard Kocanda" },
    { key: "Occupation", value: "Co-founder & CEO, GetDare" },
    { key: "Location", value: "Prague, CZ" },
    { key: "Inspected", value: "Oct 2026" },
  ],
  stamp: "Verified green flag",
  stampFootnote: "Pending your verification. See the bottom of the page.",

  definition: {
    label: "Definition",
    heading: "First, a definition",
    paragraphs: [
      <>
        A <strong>green flag</strong> is a sign that someone is good news.
      </>,
      <>
        Not loud. Not flashy. Just… reliable. They mean what they say. They
        show up. They&apos;re kind when nobody&apos;s watching.
      </>,
      <>
        A <strong>walking green flag</strong> is someone who carries so many
        of those signs, you notice them before they say a word.
      </>,
      <>That&apos;s the claim. Here&apos;s the inspection.</>,
    ] as ReactNode[],
  },

  inspection: {
    label: "The inspection",
    heading: "The inspection",
    flags: [
      {
        title: "Does the uncomfortable thing on purpose",
        status: "Confirmed",
        line: "Most people scroll past the scary stuff. He builds an entire company around it.",
        exhibit: "E",
        evidence: "(GetDare, see below)",
      },
      {
        title: "Commits fully",
        status: "Confirmed",
        line: "Holding a planche on a lakeside railing isn't something you half-do. Either you're in, or you're in the lake.",
        exhibit: "C",
        evidence: "",
      },
      {
        title: "Shows up, even when it's cold",
        status: "Confirmed",
        line: "Snow, wind, ski lift. Still smiling.",
        exhibit: "D",
        evidence: "",
      },
      {
        title: "Can hold a microphone without hiding behind it",
        status: "Confirmed",
        exhibit: "A",
        evidence: "",
      },
      {
        title: "Means it",
        status: "Confirmed",
        line: "He said he'd register walkinggreenflag.com. He registered walkinggreenflag.com. Follow-through: flawless.",
        evidence: "You're on it right now.",
      },
    ] as Flag[],
  },

  exhibits: {
    label: "Exhibits",
    heading: "Exhibits",
    // One note per photo in site.ts, in the same order (Exhibit A–D).
    notes: [
      "Subject with a CNN Prima News microphone. Composure: high.",
      "Subject under autumn leaves, mountains behind. Vibe: calm, grounded.",
      "Subject in a planche over a lake. Core strength: concerning (in a good way).",
      "Subject on a ski lift in the snow. Complaints filed about the cold: zero.",
    ],
  },

  redFlags: {
    label: "Full disclosure",
    heading: "Full disclosure: red flags",
    intro: "A real green flag doesn't hide the red ones. So here they are.",
    items: [
      "Bought a domain that compliments himself.",
      "Does planches on railings above water. Risk assessment: questionable.",
      "Will, at some point, dare you to talk to a stranger.",
    ],
    inspectorsNote: "all three are manageable.",
  },

  sincere: {
    label: "Why this matters",
    heading: "Why any of this matters",
    paragraphs: [
      <>Here&apos;s the honest part.</>,
      <>
        I don&apos;t think the greenest flag is about looks, or charm, or a
        good opening line.
      </>,
      <>
        It&apos;s about doing the thing you&apos;re scared of instead of
        scrolling past it.
      </>,
      <>Talking to the stranger. Sending the message. Saying it out loud.</>,
      <>
        Almost everyone knows what they should do. Almost nobody does it.
      </>,
      <>
        So I&apos;m building <strong>GetDare</strong>: a social app where you
        take on real-world challenges outside your comfort zone, film a short
        proof, and your friends verify it.
      </>,
      <>
        <strong>Exhibit E.</strong> No fake bravery. Proof, or it didn&apos;t
        happen.
      </>,
    ] as ReactNode[],
  },

  verdict: {
    label: "Final verdict",
    heading: "Final verdict: your turn",
    paragraphs: [
      "On GetDare, your friends verify your dares.",
      "Here, you're the inspector.",
      "Green flag or not? You decide.",
      "But before you close this tab, do one uncomfortable thing today. Small is fine. Real is the point.",
    ],
    button: "Take a dare",
    // Still to be confirmed by Richard: the exact GetDare URL.
    buttonHref: site.companyUrl,
    secondary: "Or keep inspecting on Instagram",
  },

  footer: "Case closed (for now).",
};
