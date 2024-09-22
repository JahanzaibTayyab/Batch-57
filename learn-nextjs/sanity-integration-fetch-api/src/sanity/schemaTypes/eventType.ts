import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "eventType",
  title: "Event Type",
  type: "document",
  fields: [
    defineField({
      name: "Title",
      type: "string",
    }),
  ],
});
