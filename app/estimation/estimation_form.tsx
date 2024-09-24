"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { saveEstimationForm } from "./action"
import { useFormStatus, useFormState } from "react-dom"
import { useEffect } from "react"
import React from "react"

type EstimationFormInputs = {
  name: string
  company: string
  email: string
  phone: string
  description: string
}

const EstimationForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<EstimationFormInputs>()

  const formRef = React.createRef<HTMLFormElement>()

  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(saveEstimationForm, {
    success: false,
    message: undefined,
  })

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success, formRef])

  return (
    <form
      ref={formRef}
      action={formAction}
      className="my-8 grid grid-cols-2 max-md:grid-cols-1 gap-5"
    >
      <div>
        <Label htmlFor="name">Votre nom complet</Label>
        <Input
          placeholder="Junior Matondo"
          id="name"
          {...register("name")}
          required
        />
        {Boolean(errors.name?.message) && (
          <p className="text-red-600">{errors.name?.message ?? ""}</p>
        )}
      </div>
      <div>
        <Label htmlFor="company">Nom de l&apos;entreprise</Label>
        <Input
          placeholder="Nom entreprise"
          id="company"
          {...register("company")}
          required
        />
        {Boolean(errors.company?.message) && (
          <p className="text-red-600">{errors.company?.message ?? ""}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email de l&apos;entreprise</Label>
        <Input
          placeholder="contact@nom_entreprise.com"
          id="email"
          type="email"
          {...register("email")}
          required
        />
        {Boolean(errors.email?.message) && (
          <p className="text-red-600">{errors.email?.message ?? ""}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone">Numéro de téléphone de l&apos;entreprise</Label>
        <Input
          placeholder="+24382000000"
          id="phone"
          type="tel"
          {...register("phone")}
          required
        />
        {Boolean(errors.phone?.message) && (
          <p className="text-red-600">{errors.phone?.message ?? ""}</p>
        )}
      </div>
      <div className="col-span-2">
        <Label htmlFor="description">Description de votre projet</Label>
        <Textarea
          placeholder="Description du projet"
          id="description"
          className="min-h-[20vh]"
          {...register("description")}
          required
        />
        {Boolean(errors.description?.message) && (
          <p className="text-red-600">{errors.description?.message ?? ""}</p>
        )}
      </div>
      <div className="col-span-2 flex items-center justify-center">
        {pending ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <Button type="submit" className="min-w-[40vw]" disabled={pending}>
            {Boolean(state?.message) ? (
              <p className="my-2" aria-live="polite">
                {state?.message}
              </p>
            ) : (
              <>Soumettre</>
            )}
          </Button>
        )}
      </div>
    </form>
  )
}

export default EstimationForm
