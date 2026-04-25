/**
 * Sanity client - safe to import even before Sanity is initialized.
 *
 * Once you've run `npx sanity init` and added these to .env.local:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
 *   NEXT_PUBLIC_SANITY_DATASET=production
 *
 * ...uncomment the live fetch in lib/projects.ts and the site reads from your CMS.
 */

import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-01-01";

export const sanityConfigured = Boolean(projectId);

export const sanity: SanityClient | null = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const builder = sanityConfigured && sanity ? imageUrlBuilder(sanity) : null;

export function urlFor(source: unknown) {
  if (!builder) return { url: () => "", width: () => builder, height: () => builder };
  return builder.image(source as never);
}

export const projectsQuery = `
  *[_type == "project"] | order(year desc, _createdAt desc) {
    _id,
    "slug": slug.current,
    title,
    client,
    year,
    category,
    "cover": { "url": cover.asset->url, "alt": cover.alt },
    videoUrl,
    description,
    tags,
    featured
  }
`;

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    client,
    year,
    category,
    "cover": { "url": cover.asset->url, "alt": cover.alt },
    videoUrl,
    description,
    body,
    tags,
    featured,
    "gallery": gallery[]{ "url": asset->url, alt }
  }
`;
