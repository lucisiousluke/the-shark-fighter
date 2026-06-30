import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sectionColumn',
  title: 'Column',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading (H2)', value: 'h2'},
            {title: 'Heading (H3)', value: 'h3'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
          },
        },
        {type: 'contentImage'},
      ],
    }),
  ],
  preview: {
    select: {content: 'content'},
    prepare({content}) {
      const firstBlock = (content || []).find((block) => block._type === 'block')
      const text = firstBlock?.children?.map((child) => child.text).join('') || 'Image only'
      return {title: text.slice(0, 60) || 'Empty column'}
    },
  },
})
