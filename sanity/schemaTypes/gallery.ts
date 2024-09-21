import { defineField, defineType } from "sanity"

export default defineType({
  name: "gallery",
  title: "Les réalisations",
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
      name: "category",
      title: "Catégories",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Lettrage", value: "lettrage" },
              { title: "Affiche", value: "affiche" },
              { title: "Évènement", value: "event" },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
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
