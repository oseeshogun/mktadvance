'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormState, useFormStatus } from "react-dom"
import { sendContact } from "../actions/send_contact"

export type ContactUsFormInputs = {
  name: string
  email: string
  message: string
  subject?: string
}

const ContactUsForm = () => {
  const [state, formAction] = useFormState(sendContact, {
    success: false,
    message: undefined,
  })

  const { pending } = useFormStatus()

  return (
    <form action={formAction} className="php-email-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <Input
            type="text"
            name="name"
            className="form-control block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-red-500"
            id="name"
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="form-group mt-3 md:mt-0">
          <Input
            type="text"
            className="form-control block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-red-500"
            name="email"
            id="email"
            placeholder="Votre email ou numéro de téléphone"
            required
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <Input
          type="text"
          className="form-control block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-red-500"
          name="subject"
          id="subject"
          placeholder="Objet"
          required
        />
      </div>
      <div className="form-group mt-3">
        <Textarea
          className="form-control block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-red-500"
          name="message"
          rows={5}
          placeholder="Message"
          required
        ></Textarea>
      </div>
      <div className="text-center">
        <Button type="submit" className="bg-red-500 mt-4" disabled={pending}>
          {state?.message ?? "Envoyez le message"}
        </Button>
      </div>
    </form>
  )
}

export default ContactUsForm
