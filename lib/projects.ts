import {client as sanityClient} from '@/sanity/lib/client'
import {urlFor} from '@/sanity/lib/image'

export type ProjectCategory = 'Films' | 'Stills' | 'Commercial' | 'Personal'

export type Project = {
  _id: string
  slug: string
  title: string
  client?: string
  year: number
  category: ProjectCategory
  cover: {url: string; alt: string}
  videoUrl?: string
  description: string
  tags: string[]
  featured?: boolean
  gallery?: {url: string; alt?: string}[]
}

const PROJECTS_QUERY = `
  *[_type == "project"] | order(year desc, _createdAt desc) {
    _id,
    "slug": slug.current,
    title,
    client,
    year,
    category,
    cover,
    videoUrl,
    description,
    tags,
    featured
  }
`

const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    client,
    year,
    category,
    cover,
    videoUrl,
    description,
    tags,
    featured,
    gallery
  }
`

type SanityImageRef = {
  asset?: {_ref?: string}
  alt?: string
}

type RawProject = Omit<Project, 'cover' | 'gallery'> & {
  cover?: SanityImageRef
  gallery?: SanityImageRef[]
}

function shapeProject(p: RawProject): Project {
  const coverUrl = p.cover?.asset?._ref ? urlFor(p.cover).width(1600).quality(82).url() : ''
  const gallery = p.gallery?.map((g) => ({
    url: g?.asset?._ref ? urlFor(g).width(2000).quality(82).url() : '',
    alt: g.alt,
  }))
  return {
    ...p,
    cover: {url: coverUrl, alt: p.cover?.alt ?? p.title},
    gallery,
  } as Project
}

// Mock data shown ONLY when no real projects exist in Sanity yet.
// Once Rift uploads his first real project, mocks disappear automatically.
const MOCK_PROJECTS: Project[] = [
  {
    _id: 'mock-1',
    slug: 'midnight-rollers',
    title: 'Midnight Rollers',
    client: 'Personal',
    year: 2026,
    category: 'Films',
    cover: {
      url: 'https://images.unsplash.com/photo-1618093583046-04ce5db35f4c?auto=format&fit=crop&w=1600&q=80',
      alt: 'Black GT-R under tunnel lights at night',
    },
    videoUrl: 'https://player.vimeo.com/video/76979871',
    description:
      'A two-night roller shoot through an industrial corridor. R35, M3 Comp, twin Praga widebodies. One light. One operator. One take.',
    tags: ['Roller', 'Night', 'GT-R', 'M3'],
    featured: true,
  },
  {
    _id: 'mock-2',
    slug: 'garage-light',
    title: 'Garage Light',
    client: 'Apex Detailing',
    year: 2026,
    category: 'Commercial',
    cover: {
      url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      alt: 'Porsche 911 in low garage lighting',
    },
    description:
      '60-second brand film for a high-end detail studio. Shot entirely in their garage between jobs. Ceramic beading in slow-mo, paint correction, hand-pulled wax.',
    tags: ['Brand Film', 'Detailer', '911'],
    featured: true,
  },
  {
    _id: 'mock-3',
    slug: 'amg-amber',
    title: 'AMG Amber',
    year: 2026,
    category: 'Stills',
    cover: {
      url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80',
      alt: 'Mercedes AMG GT in golden hour',
    },
    description:
      'Single-evening still shoot. Golden hour edge light, half a tank of fuel, no plan. Came home with twenty frames. Kept five.',
    tags: ['Stills', 'Golden Hour', 'AMG'],
  },
  {
    _id: 'mock-4',
    slug: 'track-day-cuts',
    title: 'Track Day Cuts',
    client: 'VTL Sundays',
    year: 2025,
    category: 'Films',
    cover: {
      url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
      alt: 'Track car going through a corner',
    },
    description:
      'Recap reel from a private track day. Mixed gimbal + chase car + helmet GoPro. Cut to engine notes only. No music license needed when the V8 sings.',
    tags: ['Track', 'Recap', 'V8'],
    featured: true,
  },
  {
    _id: 'mock-5',
    slug: 'wrap-reveal-coronas',
    title: 'Wrap Reveal · Coronas Customz',
    client: 'Coronas Customz',
    year: 2026,
    category: 'Commercial',
    cover: {
      url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      alt: 'Wrapped GT3 reveal in a paint booth',
    },
    description:
      'Reveal film for a satin metallic GT3 wrap. Booth lighting, slow drift around the car, peel-shot intercut. Ran on the shop\'s IG and pulled three follow-up wrap bookings in a week.',
    tags: ['Wrap', 'Reveal', 'Reel'],
  },
  {
    _id: 'mock-6',
    slug: 'exotic-meet',
    title: 'After-Hours Meet',
    year: 2025,
    category: 'Personal',
    cover: {
      url: 'https://images.unsplash.com/photo-1614162883451-867fa28d18c1?auto=format&fit=crop&w=1600&q=80',
      alt: 'Lamborghini at a parking lot meet',
    },
    description:
      'A shop-lot meet that turned into a documentary cut. Huracán, F8, Urus, McLaren 720, RS6. Mostly handheld, mostly available light, all 35mm.',
    tags: ['Meet', 'Doc', 'Exotic'],
  },
]

export async function getProjects(): Promise<Project[]> {
  try {
    const raw = await sanityClient.fetch<RawProject[]>(PROJECTS_QUERY, {}, {next: {revalidate: 30}})
    if (raw && raw.length > 0) return raw.map(shapeProject)
  } catch {
    // Sanity not configured or unreachable - fall through to mocks
  }
  return MOCK_PROJECTS
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const raw = await sanityClient.fetch<RawProject | null>(
      PROJECT_BY_SLUG_QUERY,
      {slug},
      {next: {revalidate: 30}},
    )
    if (raw) return shapeProject(raw)
  } catch {
    // fall through
  }
  return MOCK_PROJECTS.find((p) => p.slug === slug) ?? null
}
