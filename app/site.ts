// Everything that changes per person lives here. The page hides the
// Instagram link and the photo row until these are filled in.

export const site = {
  url: "https://walkinggreenflag.com",
  keyword: "The Funniest Guy in Prague",
  // First name only, on purpose: the page should not rank for the full name.
  name: "Richard",
  city: "Prague",
  jobTitle: "Co-founder & CEO",
  role: "co-founder and CEO",
  company: "GetDare",
  companyUrl: "https://www.getdare.app",
  // Handle without the @, e.g. "yourhandle". Empty = link hidden.
  instagram: "richard_kocanda",
};

// Put the files in public/images/ and list them here. Keep the keyword
// in each alt text, and describe what is actually in the photo.
export const photos: { src: string; alt: string }[] = [
  {
    src: "/images/funniest-guy-in-prague-ski-lift.jpg",
    alt: "The funniest guy in Prague on a ski lift in snowy mountains",
  },
  {
    src: "/images/funniest-guy-in-prague-lake.jpg",
    alt: "The funniest guy in Prague holding a planche on a lakeside railing with mountains behind him",
  },
  {
    src: "/images/funniest-guy-in-prague-mountains.jpg",
    alt: "The funniest guy in Prague in a black T-shirt under autumn leaves in front of a snowy mountain",
  },
  {
    src: "/images/funniest-guy-in-prague-microphone.jpg",
    alt: "The funniest guy in Prague in a black suit holding a CNN Prima News microphone",
  },
];
