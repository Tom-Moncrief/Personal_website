import { defineArrayMember, defineField, defineType } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "affiliation", title: "Affiliation", type: "string" }),
    defineField({
      name: "shortBio",
      title: "Short bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "longBio",
      title: "Long bio",
      type: "text",
      rows: 6,
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "url" }),
          ],
        }),
      ],
    }),
  ],
});
