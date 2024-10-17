"use client"

import { Fade } from "react-awesome-reveal"
import FlipText from "@/components/ui/flip-text"
import WordPullUp from "@/components/ui/word-pull-up"

const HeroTitle = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-[72px] font-semibold leading-[64px] overflow-hidden lg:max-w-[90%] lg:self-center transition-all duration-300">
        <span className="text-red-500 font-bold flex justify-center">
          <FlipText
            className="text-[72px] font-bold tracking-[-0.02em] inline w-fit"
            word="MKT Advance"
          />
          <span className="text-white">
            <FlipText className="inline w-fit" word="," />
          </span>
          <br />
        </span>
        <span className="flex">
          <WordPullUp className="text-[72px] font-semibold leading-[64px] " words="Une touche d'éclat à vos marques" />
          <span className="text-red-500">.</span>
        </span>
      </div>
      <Fade
        direction="up"
        cascade
        triggerOnce
        delay={0}
        className="flex flex-col justify-center"
      >
        <h2 className="mt-4 text-[24px] transition-all duration-300">
          Notre équipe incarne la passion, l&apos;exigence et la rentabilité{" "}
          <br />
          pour une visibilité exceptionnels.
        </h2>
      </Fade>
    </div>
  )
}

export default HeroTitle
