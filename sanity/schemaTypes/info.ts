import { defineField, defineType } from "sanity"

export default defineType({
  name: "info",
  title: "Information",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Numéro de téléphone",
      type: "string",
      validation: (Rule) => Rule.required().regex(/^\+?[1-9]\d{1,14}$/),
    }),
    defineField({
      name: "email",
      title: "Adresse e-mail",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "address",
      title: "Adresse physique",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "Ville",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coor",
      title: "Coordonnées géographiques",
      type: "array",
      of: [{ type: "number" }],
    }),
    defineField({
      name: "fb",
      title: "Facebook",
      type: "string",
      validation: (Rule) => Rule.regex(/(https?:\/\/[^\s]+)/g),
    }),
    defineField({
      name: "insta",
      title: "Instagram",
      type: "string",
      validation: (Rule) => Rule.regex(/(https?:\/\/[^\s]+)/g),
    }),
    defineField({
      name: "linkedin",
      title: "Linkedin",
      type: "string",
      validation: (Rule) => Rule.regex(/(https?:\/\/[^\s]+)/g),
    }),
  ],
})
