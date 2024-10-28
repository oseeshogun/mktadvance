import { defineField, defineType } from "sanity"

export default defineType({
  name: "category",
  title: "Catégories",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Ordre",
      type: "number",
      validation: (Rule) => Rule.required(),
    })
  ],
})
