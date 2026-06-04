import { defineField, defineType } from "sanity";

export const talk = defineType({
  name: "talk",
  title: "Talk",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "venue", title: "Venue", type: "string" }),
    defineField({ name: "date", title: "Date or year", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "link", title: "Link", type: "url" }),
  ],
});
