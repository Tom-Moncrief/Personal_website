# Researcher Profile Website

A CMS-backed researcher profile built with Next.js App Router, Tailwind CSS, and Sanity. The public homepage is designed for a clean academic profile: research interests, selected achievements, publications, awards, talks, contact links, and a portrait slot.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the profile and `http://localhost:3000/studio` for Sanity Studio.

## Sanity Setup

Create a new Sanity project, then add these variables locally and in Vercel:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=optional_token_for_preview_or_write_features
```

The site intentionally falls back to placeholder content when Sanity is not configured or not populated yet. Replace the placeholder profile, research interests, achievements, publications, awards, and talks in Sanity Studio before treating the site as factual.

## Deployment

1. Push this repository to GitHub.
2. Import the GitHub repository into Vercel.
3. Add the Sanity environment variables in Vercel project settings.
4. Deploy and verify the production homepage and `/studio` route.

## Checks

```bash
npm run lint
npm run build
```
