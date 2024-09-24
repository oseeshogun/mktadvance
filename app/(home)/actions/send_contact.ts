"use server"

import { client } from "@/sanity/lib/client";

export const sendContact = async (
  prev: unknown,
  formData: FormData,
): Promise<{ success: boolean; message?: string }> => {
  const data = {
    _type: "message",
    name: formData.get("name"),
    contact: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  try {
    const response = await client.create(data)
    console.log(`Document created, ID: ${response._id}`)
    return { success: true, message: "Formulaire envoyé" }
  } catch (error) {
    console.error("Error creating document:", error)
    return {
      success: false,
      message: "Une erreur est survenue, veuillez reessayer",
    }
  }
}
