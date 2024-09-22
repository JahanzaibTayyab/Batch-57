import { defineField, defineType } from "sanity";

export const user = defineType({
  name: "user",
  title: "User Type",
  type: "document",
  fields: [
    defineField({
      name: "Title",
      type: "string",
    }),
  ],
});
