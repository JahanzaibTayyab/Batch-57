import { defineField, defineType } from "sanity";

export const movies = defineType({
  name: "movies",
  title: "Movies Type",
  type: "document",
  fields: [
    defineField({
      name: "Title",
      type: "string",
    }),
    defineField({
      name: "Year",
      type: "number",
    }),
  ],
});
