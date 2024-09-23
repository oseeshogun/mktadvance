"use server"

import { client } from "@/sanity/lib/client"

export const saveEstimationForm = async (prev: any, formData: FormData) => {
  const data = {
    _type: "estimation",
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    description: formData.get("description"),
  }

  try {
    const response = await client.create(data)
    console.log(`Document created, ID: ${response._id}`)
    return { success: true, message: "Formulaire envoyé" }
  } catch (error) {
    console.error("Error creating document:", error)
    return { success: false, message: "Une erreur est survenue, veuillez reessayer" }
  }
}
