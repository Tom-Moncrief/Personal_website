import { defineField, defineType } from "sanity";

export const award = defineType({
  name: "award",
  title: "Award",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "issuer", title: "Issuer", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
  ],
});
