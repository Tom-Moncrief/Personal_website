export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  title: string;
  affiliation: string;
  shortBio: string;
  longBio: string;
  email?: string;
  portraitUrl?: string;
  links: LinkItem[];
};

export type ResearchInterest = {
  title: string;
  description: string;
  keywords: string[];
};

export type Achievement = {
  title: string;
  summary: string;
  year: string;
  category: string;
  link?: string;
  featured: boolean;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  summary: string;
  featured: boolean;
};

export type Award = {
  title: string;
  issuer: string;
  year: string;
  summary: string;
};

export type Talk = {
  title: string;
  venue: string;
  date: string;
  location: string;
  link?: string;
};

export type ResearcherProfileContent = {
  profile: Profile;
  interests: ResearchInterest[];
  achievements: Achievement[];
  publications: Publication[];
  awards: Award[];
  talks: Talk[];
  usingFallback: boolean;
};
