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

function hasRenderableContent(content: Partial<ResearcherProfileContent>) {
  return Boolean(
    content.profile?.name &&
      content.interests?.length &&
      content.achievements?.length &&
      content.publications?.length,
  );
}

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

    const content = {
      profile: profile ?? fallbackContent.profile,
      interests,
      achievements,
      publications,
      awards,
      talks,
      usingFallback: false,
    };

    if (!hasRenderableContent(content)) {
      return fallbackContent;
    }

    return content;
  } catch {
    return fallbackContent;
  }
}
