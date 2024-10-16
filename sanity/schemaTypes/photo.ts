import { defineField, defineType } from "sanity"

export default defineType({
  name: "photo",
  title: "Gallerie",
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
    defineField({
      name: "height",
      title: "Longueur de l'image",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "width",
      title: "Largeur de l'image",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
})
