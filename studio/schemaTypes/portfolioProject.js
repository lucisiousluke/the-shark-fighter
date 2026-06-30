import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageHeading',
      title: 'Page heading',
      type: 'string',
      description:
        'Full headline shown at the top of the project page. Falls back to Title if left empty.',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      description: 'Higher numbers appear first on the portfolio index page',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the portfolio index card',
    }),
    defineField({
      name: 'heroImage',
      title: 'Listing thumbnail image',
      type: 'image',
      options: {hotspot: true},
      description: 'Thumbnail image shown on the portfolio index card',
    }),
    defineField({
      name: 'heroImageThumbnail',
      title: 'Hero banner image',
      type: 'image',
      options: {hotspot: true},
      description: 'Large banner image shown at the top of the project page',
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Hero image alt text',
      type: 'string',
    }),
    defineField({
      name: 'heroImageCreditText',
      title: 'Hero image credit text',
      type: 'string',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery images',
      type: 'array',
      of: [{type: 'galleryImage'}],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'projectSection'}],
    }),
  ],
  preview: {
    select: {title: 'title', media: 'heroImage'},
  },
})
