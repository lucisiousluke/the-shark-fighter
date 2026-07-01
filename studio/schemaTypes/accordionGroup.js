import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'accordionGroup',
  title: 'Accordion Group',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional heading displayed above the accordion items',
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
      name: 'items',
      title: 'Accordion items',
      type: 'array',
      of: [{type: 'accordion'}],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      const count = items?.length || 0
      return {title: `Accordion Group (${count} item${count === 1 ? '' : 's'})`}
    },
  },
})
