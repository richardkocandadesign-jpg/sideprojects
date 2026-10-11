import Image from "next/image";
import { content } from "./content";
import { photos, site } from "./site";

const instagramUrl = site.instagram
  ? `https://www.instagram.com/${site.instagram}/`
  : null;

const exhibitLetter = (i: number) => String.fromCharCode(65 + i);
const exhibitId = (letter: string) => `exhibit-${letter.toLowerCase()}`;
const flagNumber = (i: number) => `#${String(i + 1).padStart(2, "0")}`;

const person = {
  "@type": "Person",
  name: site.name,
  alternateName: site.keyword,
  jobTitle: site.jobTitle,
  url: site.url,
  worksFor: {
    "@type": "Organization",
    name: site.company,
    url: site.companyUrl,
  },
  address: { "@type": "PostalAddress", addressLocality: site.city },
  ...(instagramUrl ? { sameAs: [instagramUrl] } : {}),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: site.url,
  name: `${site.keyword} | ${site.name}`,
  mainEntity: person,
};

function SectionLabel({ n, children }: { n: number; children: string }) {
  return (
    <p className="section-label">
      {String(n).padStart(2, "0")} — {children}
    </p>
  );
}

export default function Home() {
  const { inspection, exhibits, redFlags, sincere, verdict } = content;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="hero">
        <div className="wrap">
          <p className="case-label">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M3 1v14" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 2h10l-2.5 3.5L13 9H3z" fill="var(--flag)" />
            </svg>
            {content.caseLabel}
          </p>
          <h1>{site.keyword}</h1>
          <div className="lead">
            {content.lead.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="subject">
            <dl className="subject-card">
              {content.subject.map((row) => (
                <div className="subject-row" key={row.key}>
                  <dt>{row.key}</dt>
                  <span className="leader" aria-hidden="true" />
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <a className="stamp" href="#verdict">
              {content.stamp}
              <span aria-hidden="true">*</span>
            </a>
          </div>
          <p className="footnote">* {content.stampFootnote}</p>
        </div>
      </header>

      <main>
        <section>
          <div className="wrap">
            <SectionLabel n={1}>{content.definition.label}</SectionLabel>
            <h2>{content.definition.heading}</h2>
            {content.definition.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </section>

        <section>
          <div className="wrap">
            <SectionLabel n={2}>{inspection.label}</SectionLabel>
            <h2>{inspection.heading}</h2>
          </div>
          <ol className="wide flags">
            {inspection.flags.map((flag, i) => (
              <li className="flag-card" key={i}>
                <p className="flag-top">
                  <span>Flag {flagNumber(i)}</span>
                  <span className="pill">✓ {flag.status}</span>
                </p>
                <h3>{flag.title}</h3>
                <p>{flag.line}</p>
                <p className="evidence">
                  Evidence →{" "}
                  {flag.evidence ? (
                    <a href={`#${exhibitId(flag.evidence)}`}>
                      Exhibit {flag.evidence}
                    </a>
                  ) : (
                    "[TODO]"
                  )}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <div className="wrap">
            <SectionLabel n={3}>{exhibits.label}</SectionLabel>
            <h2>{exhibits.heading}</h2>
          </div>
          <div className="wide exhibits">
            {photos.map((photo, i) => (
              <figure id={exhibitId(exhibitLetter(i))} key={photo.src}>
                <div className="photo">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    preload={i === 0}
                    sizes="(max-width: 700px) 50vw, 228px"
                  />
                </div>
                <figcaption>
                  <strong>Exhibit {exhibitLetter(i)}</strong>
                  <em>{exhibits.notes[i]}</em>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section>
          <div className="wrap">
            <SectionLabel n={4}>{redFlags.label}</SectionLabel>
            <h2>{redFlags.heading}</h2>
            <div className="red-panel">
              <ul>
                {redFlags.items.map((item, i) => (
                  <li key={i}>
                    <span aria-hidden="true">🚩</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="inspectors-note">
                Inspector&apos;s note: {redFlags.inspectorsNote}
              </p>
            </div>
          </div>
        </section>

        <section className="sincere" id={exhibitId("E")}>
          <div className="wrap">
            <SectionLabel n={5}>{sincere.label}</SectionLabel>
            <h2>{sincere.heading}</h2>
            {sincere.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </section>

        <section className="verdict" id="verdict">
          <div className="wrap">
            <SectionLabel n={6}>{verdict.label}</SectionLabel>
            <h2>{verdict.heading}</h2>
            {verdict.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <p className="actions">
              <a className="button" href={verdict.buttonHref}>
                {verdict.button} <span aria-hidden="true">→</span>
              </a>
              {instagramUrl && (
                <a className="secondary" href={instagramUrl} rel="me">
                  {verdict.secondary} → @{site.instagram}
                </a>
              )}
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>{content.footer}</span>
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
        </div>
      </footer>
    </>
  );
}
