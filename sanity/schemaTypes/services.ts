import { defineField, defineType } from "sanity"

export default defineType({
  name: "service",
  title: "Les services",
  description: "Vous pouvez trouver des icons ici - https://lucide.dev/icons puis copier le svg",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icone SVG",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image illustration (optionnel)",
      type: "image",
    }),
    defineField({
      name: "content",
      title: "Contenu détaillé du service",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "number",
      validation: (Rule) => Rule.required(),
    })
  ],
})
