"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { TeamMember } from "../utils/team"
import { cn } from "@/lib/utils"

const MktTeam = ({ team }: { team: TeamMember[] }) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="my-12 w-full"
    >
      <CarouselContent className="w-full">
        {team.map((member, index) => (
          <CarouselItem
            key={index}
            className={cn("flex flex-col items-center justify-center md:basis-1/2", team.length >= 3 ? 'lg:basis-1/3' : 'lg:basis-1/2')}
          >
            <Image
              src={member.avatar}
              alt={member.name}
              width={239}
              height={239}
              className="rounded-full aspect-square h-[100px] w-[100px] max-sm:h-[50px] max-sm:w-[50px] border-8 border-[rgba(255,255,255,.15)] object-cover"
              unoptimized
            />
            <h4 className="font-bold text-xl mt-4 max-sm:px-4">
              {member.name}
            </h4>
            <p>{member.role}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default MktTeam
