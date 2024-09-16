import {defineField, defineType} from 'sanity'

export const BlogType = defineType({
  name: 'blogs',
  title: 'My Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: "description",
      type: "string"
    }),
    defineField({
      name: "image",
      type: "image"
    })
  ],
})
