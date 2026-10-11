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
  ...(instagramUrl ? { sameAs: [instagramUrl] } : {}),
};

function InstagramButton({ small }: { small?: boolean }) {
  if (!instagramUrl) return null;
  return (
    <a
      className={small ? "instagram small" : "instagram"}
      href={instagramUrl}
      rel="me"
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
      Follow @{site.instagram}
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
            Hi, I&apos;m {site.name}. If you typed &quot;walking green
            flag&quot; into Google and ended up here, the internet is working
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
          I own walkinggreenflag.com. That is either the greenest flag
          you&apos;ll see today or a small red one.
        </p>
        <p>
          I&apos;ll let you be the judge, but Google put me here and Google
          would never lie to you.
        </p>

        <h2>&quot;What even is a walking green flag?&quot;</h2>
        <p>
          A green flag is a sign that someone is good news: they do what they
          said they would, they listen, and they are kind when nobody is
          keeping score.
        </p>
        <p>
          A walking green flag is a person who is mostly made of those signs.
        </p>
        <p>You don&apos;t have to look for them. They just walk in.</p>

        <h2>&quot;Who even is this guy??&quot;</h2>
        <p>
          {site.name}, based in {site.city}.
        </p>
        <p>
          I&apos;m the {site.role} of {site.company}, and I registered this
          domain on purpose.
        </p>

        <h2>On a serious note...</h2>
        <p>
          I think the greenest flag there is has nothing to do with looks or
          lines.
        </p>
        <p>
          It&apos;s someone who does the uncomfortable thing instead of
          scrolling past it.
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
