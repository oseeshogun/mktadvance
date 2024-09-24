import { defineField, defineType } from "sanity"

export default defineType({
  name: "message",
  title: "Messages",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom complet",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Contact",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subject",
      title: "Sujet",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
})
