import { groq } from "next-sanity";

export const profileQuery = groq`*[_type == "profile"][0]{
  name,
  title,
  affiliation,
  shortBio,
  longBio,
  email,
  "portraitUrl": portrait.asset->url,
  links[]{label, href}
}`;

export const interestsQuery = groq`*[_type == "researchInterest"] | order(title asc){
  title,
  description,
  keywords
}`;

export const achievementsQuery = groq`*[_type == "achievement"] | order(featured desc, year desc){
  title,
  summary,
  year,
  category,
  link,
  featured
}`;

export const publicationsQuery = groq`*[_type == "publication"] | order(featured desc, year desc){
  title,
  authors,
  venue,
  year,
  link,
  summary,
  featured
}`;

export const awardsQuery = groq`*[_type == "award"] | order(year desc){
  title,
  issuer,
  year,
  summary
}`;

export const talksQuery = groq`*[_type == "talk"] | order(date desc){
  title,
  venue,
  date,
  location,
  link
}`;
