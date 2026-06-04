import { fallbackContent } from "./fallback-content";
import type {
  Achievement,
  Award,
  Profile,
  Publication,
  ResearchInterest,
  ResearcherProfileContent,
  Talk,
} from "./content-types";
import { getSanityClient } from "@/sanity/lib/client";
import {
  achievementsQuery,
  awardsQuery,
  interestsQuery,
  profileQuery,
  publicationsQuery,
  talksQuery,
} from "@/sanity/lib/queries";

export async function getProfileContent(): Promise<ResearcherProfileContent> {
  const client = getSanityClient();

  if (!client) {
    return fallbackContent;
  }

  try {
    const [profile, interests, achievements, publications, awards, talks] =
      await Promise.all([
        client.fetch<Profile | null>(profileQuery),
        client.fetch<ResearchInterest[]>(interestsQuery),
        client.fetch<Achievement[]>(achievementsQuery),
        client.fetch<Publication[]>(publicationsQuery),
        client.fetch<Award[]>(awardsQuery),
        client.fetch<Talk[]>(talksQuery),
      ]);

    return {
      profile: profile ?? fallbackContent.profile,
      interests: interests.length ? interests : fallbackContent.interests,
      achievements: achievements.length
        ? achievements
        : fallbackContent.achievements,
      publications: publications.length
        ? publications
        : fallbackContent.publications,
      awards: awards.length ? awards : fallbackContent.awards,
      talks: talks.length ? talks : fallbackContent.talks,
      usingFallback: !profile,
    };
  } catch {
    return fallbackContent;
  }
}
