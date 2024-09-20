import { defineField, defineType } from "sanity"

export default defineType({
  name: "partners",
  title: "Les partenaires",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom du partenaire",
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
