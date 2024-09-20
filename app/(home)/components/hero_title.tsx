"use client"

import { Fade } from "react-awesome-reveal"

const HeroTitle = () => {
  return (
    <div className="">
      <Fade direction="up" cascade triggerOnce delay={0}>
        <h1 className="text-[72px] font-bold leading-[64px] overflow-hidden">
          Une touche d'éclat à<br />
          vos marques<span className="text-red-500">.</span>
        </h1>
        <h2 className="mt-4 text-[24px]">
          Notre équipe incarne la passion, l'exigence et la rentabilité <br />
          pour une visibilité exceptionnels.
        </h2>
      </Fade>
    </div>
  )
}

export default HeroTitle
