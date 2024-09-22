import { defineField, defineType } from "sanity";

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "Name",
      type: "string",
    }),
    defineField({
      name: "CNIC",
      type: "string",
    }),
    defineField({
      name: "age",
      type: "number",
    }),
    defineField({
      name: "profile_image",
      type: "image",
    }),
  ],
});
