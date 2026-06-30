import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contentImage',
  title: 'Image',
  type: 'image',
  options: {hotspot: true},
  fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
})
