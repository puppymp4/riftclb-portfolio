import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    {name: 'core', title: 'Core', default: true},
    {name: 'media', title: 'Media'},
    {name: 'meta', title: 'Meta'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'core',
      validation: (r) => r.required().min(2).max(80),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      group: 'core',
      description: 'Auto-generates from title. Click "Generate" if it doesn\'t.',
      options: {source: 'title', maxLength: 80},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'core',
      options: {
        list: [
          {title: 'Films', value: 'Films'},
          {title: 'Stills', value: 'Stills'},
          {title: 'Commercial', value: 'Commercial'},
          {title: 'Personal', value: 'Personal'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'Films',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      group: 'core',
      initialValue: new Date().getFullYear(),
      validation: (r) => r.required().min(2000).max(2100),
    }),
    defineField({
      name: 'client',
      title: 'Client (optional)',
      type: 'string',
      group: 'core',
      description: 'Leave blank for personal work.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      group: 'core',
      description: 'Short summary shown on the homepage tile and project page.',
      validation: (r) => r.required().min(20).max(500),
    }),
    defineField({
      name: 'cover',
      title: 'Cover image',
      type: 'image',
      group: 'media',
      options: {hotspot: true},
      description: 'The main thumbnail. Shows on the homepage grid + at the top of the project page.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe what\'s in the photo (for accessibility + SEO).',
          validation: (r) => r.required(),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video embed URL (optional)',
      type: 'url',
      group: 'media',
      description: 'Vimeo or YouTube embed URL. Example: https://player.vimeo.com/video/123456 or https://www.youtube.com/embed/abc123. Plays at the top of the project page if set.',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery (optional)',
      type: 'array',
      group: 'media',
      description: 'Extra photos shown on the project detail page.',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', title: 'Alt text', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'meta',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      description: 'Short labels: GT-R, Roller, Night, Track, etc.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured?',
      type: 'boolean',
      group: 'meta',
      initialValue: false,
      description: 'Adds a "Featured" stamp on the homepage tile.',
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'yearDesc',
      by: [
        {field: 'year', direction: 'desc'},
        {field: '_createdAt', direction: 'desc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      year: 'year',
      media: 'cover',
    },
    prepare({title, subtitle, year, media}) {
      return {
        title: title || 'Untitled',
        subtitle: [subtitle, year].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
