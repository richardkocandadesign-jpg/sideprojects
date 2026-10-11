// Everything that changes per person lives here. The page hides the
// Instagram link and the photo row until these are filled in.

export const site = {
  url: "https://walkinggreenflag.com",
  keyword: "Walking Green Flag",
  name: "Richard Kocanda",
  city: "Prague",
  jobTitle: "Co-founder & CEO",
  role: "co-founder and CEO",
  company: "GetDare",
  companyUrl: "https://www.getdare.app",
  // Handle without the @, e.g. "richardkocanda". Empty = link hidden.
  instagram: "richard_kocanda",
};

// Put the files in public/images/ and list them here. Keep the keyword
// in each alt text, and describe what is actually in the photo.
export const photos: { src: string; alt: string }[] = [
  {
    src: "/images/walking-green-flag-richard-kocanda-ski-lift.jpg",
    alt: "Walking green flag Richard Kocanda on a ski lift in snowy mountains",
  },
  {
    src: "/images/walking-green-flag-richard-kocanda-lake.jpg",
    alt: "Walking green flag Richard Kocanda holding a planche on a lakeside railing with mountains behind him",
  },
  {
    src: "/images/walking-green-flag-richard-kocanda-mountains.jpg",
    alt: "Walking green flag Richard Kocanda in a black T-shirt under autumn leaves in front of a snowy mountain",
  },
  {
    src: "/images/walking-green-flag-richard-kocanda-microphone.jpg",
    alt: "Richard Kocanda, a walking green flag, in a black suit holding a CNN Prima News microphone",
  },
];
