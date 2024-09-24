import { defineField, defineType } from "sanity"

export default defineType({
  name: "estimation",
  title: "Demandes de devis",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom complet de la personne",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Nom complet de l'entreprise",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Adresse e-mail de l'entreprise",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Numéro de numéro de l'entreprise",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description du projet",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
})
