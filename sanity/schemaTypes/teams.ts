import { defineField, defineType } from "sanity"

export default defineType({
  name: "team",
  title: "L'equipe",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom complet",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Poste",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Photo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
})
