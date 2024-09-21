import { defineField, defineType } from "sanity"

export default defineType({
  name: "carousel",
  title: "Les images d'accueil",
  type: "document",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
})
