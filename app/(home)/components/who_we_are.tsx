"use client"

import { CheckCheck } from "lucide-react"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"
import TheyTrustUs from "./they_trust_us"

const WhoWeAre = () => {
  return (
    <div className="py-20 flex max-md:flex-col-reverse" id="about_us">
      <div className="w-[50%] max-md:w-full px-[5%]">
        <h2 className="text-3xl font-bold">Qui sommes-nous ?</h2>
        <div className="italic my-3">
          Nous sommes une entreprise congolaise spécialisée dans la conception,
          production et affichage de vos supports de visibilité. La stratégie,
          le planning et l'achat des espaces médias en RDC et au Congo
          Brazzaville, le marketing expérientiel et l'évènementiel, tels sont
          les domaines d'expertises que nous mettons à votre disposition.
        </div>
        <p className="flex items-center mt-3">
          <CheckCheck className="text-green-500" />
          <span className="ml-2">
            Concevoir, produire et afficher des supports de visibilité
            impactants.
          </span>
        </p>
        <p className="flex items-center mt-3">
          <CheckCheck className="text-green-500" />
          <span className="ml-2">
            Collaborer étroitement avec nos clients pour créer des projets sur
            mesure.
          </span>
        </p>
        <p className="flex items-center mt-3">
          <CheckCheck className="text-green-500" />
          <span className="ml-2">
            Intégrer la co-création au cœur de nos processus pour dépasser les
            attentes.
          </span>
        </p>
        <p className="mt-6">
          Nous croyons en la puissance de l'innovation et de la simplicité.
          Chaque projet est une opportunité de transformer une idée en réalité,
          en repoussant les limites de ce qui est possible.
        </p>
      </div>
      <div className="w-[50%] max-md:w-full max-md:mb-4 px-[5%]">
        <Slide direction="right" triggerOnce>
          <Image
            src="/assets/images/madame.jpg"
            alt="Madame Mireille Kaimby Tshiyoyo"
            height={239}
            width={239}
            className="w-full object-cover slide-reveal-right transition-all duration-300"
          />
        </Slide>
      </div>
    </div>
  )
}

export default WhoWeAre
