import Image from "next/image";
import { photos, site } from "./site";

const instagramUrl = site.instagram
  ? `https://www.instagram.com/${site.instagram}/`
  : null;

const jsonLd = {
  "@context": "https://schema.org",
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
  homeLocation: { "@type": "City", name: site.city },
};

function InstagramButton({ small }: { small?: boolean }) {
  if (!instagramUrl) return null;
  return (
    <a
      className={small ? "instagram small" : "instagram"}
      href={instagramUrl}
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" />
      </svg>
      Follow me on Instagram
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="hero">
        <div className="column">
          <h1>{site.keyword}</h1>
          <p className="lead">
            Hi, I&apos;m {site.name}. If you typed &quot;the funniest guy in
            Prague&quot; into Google and ended up here, the internet is working
            exactly as intended.
          </p>

          {instagramUrl && (
            <p className="hero-cta">
              <InstagramButton small />
            </p>
          )}

          {photos.length > 0 && (
            <div className="photos">
              {photos.map((photo, i) => (
                <div className="photo" key={photo.src}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    preload={i === 0}
                    loading="eager"
                    sizes="(max-width: 640px) 50vw, 170px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="column">
        <p className="bridge">You are probably asking yourself...</p>

        <h2>&quot;Is this true?&quot;</h2>
        <p>
          Nobody hands out an official title for the funniest guy in Prague.
          So I made a website and claimed it.
        </p>
        <p>
          I&apos;ll let you be the judge, but Google put me here and Google
          would never lie to you.
        </p>

        <h2>&quot;What makes someone the funniest guy in Prague?&quot;</h2>
        <p>
          Prague is full of funny people. Tour guides with too many jokes,
          bartenders with perfect timing, friends who ruin a serious moment at
          exactly the right second.
        </p>
        <p>
          Being funny isn&apos;t about telling the most jokes. It&apos;s about
          noticing the ridiculous thing everyone else walked past and saying it
          out loud.
        </p>
        <p>
          The funniest people laugh at themselves first. They don&apos;t need
          to put anyone down to get a laugh, and they make the whole room feel
          lighter, not just themselves.
        </p>
        <p>
          Typical symptoms: says the thing you were thinking, commits to a bit
          for way too long, and turns an awkward silence into the best part of
          the evening.
        </p>
        <p>
          And sometimes the funniest move is just building a website that
          says you&apos;re the funniest guy in Prague.
        </p>

        <h2>&quot;Who even is this guy??&quot;</h2>
        <p>
          {site.name}, based in {site.city}.
        </p>
        <p>
          I&apos;m the {site.role} of {site.company}, and I built this page
          on purpose.
        </p>

        <h2>On a serious note...</h2>
        <p>
          The funniest stories never start on the sofa. They start when
          someone does the uncomfortable thing instead of scrolling past it.
        </p>
        <p>
          That is what I&apos;m building with{" "}
          <a href={site.companyUrl}>{site.company}</a>: a social app where you
          take on real-world challenges outside your comfort zone, like
          talking to a stranger, film a short proof in the app and let your
          friends verify it.
        </p>

        {instagramUrl && (
          <p className="cta">
            <InstagramButton />
          </p>
        )}
      </main>

      <footer>
        <div className="column">
          © {new Date().getFullYear()} {site.name} · {site.city}
        </div>
      </footer>
    </>
  );
}
