import { defineField, defineType } from "sanity";

export const publication = defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "authors", title: "Authors", type: "text", rows: 2 }),
    defineField({ name: "venue", title: "Venue", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "link", title: "DOI or URL", type: "url" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 4 }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
