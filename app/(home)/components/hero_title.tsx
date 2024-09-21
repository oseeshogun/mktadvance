"use client"

import { Fade } from "react-awesome-reveal"

const HeroTitle = () => {
  return (
    <div className="flex flex-col justify-center">
      <Fade direction="up" cascade triggerOnce delay={0} className="flex flex-col justify-center">
        <h1 className="text-[72px] font-semibold leading-[64px] overflow-hidden lg:max-w-[90%] lg:self-center">
          <span className="text-red-500 font-bold">MKT Advance</span>, Une touche d&apos;éclat à<br />
          vos marques<span className="text-red-500">.</span>
        </h1>
        <h2 className="mt-4 text-[24px]">
          Notre équipe incarne la passion, l&apos;exigence et la rentabilité <br />
          pour une visibilité exceptionnels.
        </h2>
      </Fade>
    </div>
  )
}

export default HeroTitle
