import {defineField, defineType} from 'sanity'

export const petType = defineType({
  name: 'pets',
  title: 'Pets Names',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
