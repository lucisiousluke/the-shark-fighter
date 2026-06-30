import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectSection',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Single column', value: 'single'},
          {title: 'Fifty / fifty', value: 'fiftyFifty'},
          {title: 'One-third / two-thirds (text left)', value: 'oneThirdLeft'},
          {title: 'One-third / two-thirds (text right)', value: 'oneThirdRight'},
        ],
        layout: 'radio',
      },
      initialValue: 'single',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Light gray', value: 'slate-50'},
        ],
        layout: 'radio',
      },
      initialValue: 'white',
    }),
    defineField({
      name: 'centered',
      title: 'Vertically center columns',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [{type: 'sectionColumn'}],
      validation: (rule) => rule.min(1).max(2),
    }),
  ],
  preview: {
    select: {layout: 'layout', columns: 'columns'},
    prepare({layout, columns}) {
      const count = columns?.length || 0
      return {title: `${layout || 'single'} — ${count} column${count === 1 ? '' : 's'}`}
    },
  },
})
