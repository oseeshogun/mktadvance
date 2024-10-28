"use client"

import Image from "next/image"
import { Slide } from "react-awesome-reveal"

const WhoWeAre = () => {
  return (
    <div className="py-20 flex max-md:flex-col-reverse" id="about_us">
      <div className="w-[50%] max-md:w-full px-[5%]">
        <h2 className="text-4xl font-bold">Qui sommes-nous ?</h2>
        <div className="italic my-3 text-lg">
          Nous sommes un groupe de professionnels de la communication qui ont
          chacun acquis une expertise tout en travaillant pour certaines des
          plus grandes agences et clients en Afrique centrale et occidentale.
          Notre expérience depuis plus de 15 ans, nous permet d'apporter notre
          riche expertise et une meilleure gestion de la communication au
          bénéfice de nos clients.
        </div>
        <p className="mt-6 text-lg font-semibold">
          Nous croyons en la puissance de l&apos;innovation et de la simplicité.
          Chaque projet est une opportunité de transformer une idée en réalité,
          en repoussant les limites de ce qui est possible.
        </p>
      </div>
      <div className="w-[50%] max-md:w-full max-md:mb-4 px-[5%]">
        <Slide direction="right" triggerOnce>
          <Image
            src="/assets/images/madame_v3.jpg"
            alt="Madame Mireille Kaimby Tshiyoyo"
            height={239}
            width={239}
            className="w-full object-cover slide-reveal-right transition-all duration-300"
            quality={100}
            unoptimized
          />
        </Slide>
      </div>
    </div>
  )
}

export default WhoWeAre
