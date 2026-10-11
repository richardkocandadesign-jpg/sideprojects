import Image from "next/image";
import { photos, site } from "./site";

const instagramUrl = site.instagram
  ? `https://www.instagram.com/${site.instagram}/`
  : null;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: site.url,
  name: `${site.keyword} | ${site.name}`,
  mainEntity: {
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
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1>{site.keyword}</h1>
      <p className="lead">
        Hi, I&apos;m {site.name}. If you typed &quot;walking green flag&quot;
        into Google and ended up here, the internet is working exactly as
        intended.
      </p>

      {photos.length > 0 && (
        <div className="photos">
          {photos.map((photo) => (
            <div className="photo" key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="eager"
                sizes="(max-width: 640px) 50vw, 170px"
              />
            </div>
          ))}
        </div>
      )}

      <h2>You are probably asking yourself...</h2>

      <h3>Is this true?</h3>
      <p>
        I own walkinggreenflag.com. That is either the greenest flag
        you&apos;ll see today or a small red one. I&apos;ll let you be the
        judge, but Google put me here and Google would never lie to you.
      </p>

      <h3>What even is a walking green flag?</h3>
      <p>
        A green flag is a sign that someone is good news: they do what they
        said they would, they listen, and they are kind when nobody is
        keeping score. A walking green flag is a person who is mostly made of
        those signs. You don&apos;t have to look for them. They just walk in.
      </p>

      <h3>Who even is this guy?</h3>
      <p>
        {site.name}, based in {site.city}. I&apos;m the{" "}
        {site.role} of {site.company}, and I registered
        this domain on purpose.
      </p>

      <h2>On a serious note...</h2>
      <p>
        I think the greenest flag there is has nothing to do with looks or
        lines. It&apos;s someone who does the uncomfortable thing instead of
        scrolling past it.
      </p>
      <p>
        That is what I&apos;m building with {site.company}: a social app
        where you take on real-world challenges outside your comfort zone,
        like talking to a stranger, film a short proof in the app and let
        your friends verify it.
      </p>
      {instagramUrl && (
        <p>
          Want to see whether the flag holds up?{" "}
          <a href={instagramUrl} rel="me">
            Follow me on Instagram
          </a>
          .
        </p>
      )}

      <footer>
        © {new Date().getFullYear()} {site.name}, {site.city}
      </footer>
    </main>
  );
}
