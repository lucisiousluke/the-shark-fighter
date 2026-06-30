import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery image',
  type: 'object',
  fields: [
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'alt', type: 'string'}),
  ],
  preview: {select: {media: 'image', title: 'alt'}},
})
