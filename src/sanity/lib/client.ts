import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, hasSanityConfig, projectId } from "../env";

let client: SanityClient | null = null;

export function getSanityClient() {
  if (!hasSanityConfig) {
    return null;
  }

  if (!client) {
    client = createClient({
      apiVersion,
      dataset,
      projectId,
      useCdn: true,
    });
  }

  return client;
}
