"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const carousels: { url: string; alt: string; width: number; height: number }[] =
  [
    {
      url: "/assets/images/hero_carousels/goma.jpg",
      alt: "Goma Tshukutu",
      width: 640,
      height: 480,
    },
    {
      url: "/assets/images/hero_carousels/limete-tower.webp",
      alt: "Goma Tshukutu",
      width: 640,
      height: 480,
    },
  ]

const HeroSectionCarousel = () => {
  return (
    <div className="h-screen z-[-2]">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="overflow-hidden"
      >
        <CarouselContent>
          {carousels.map((carousel) => (
            <CarouselItem key={carousel.url}>
              <Image
                src={carousel.url}
                alt={carousel.alt}
                width={carousel.width}
                height={carousel.height}
                className="h-screen w-screen object-cover px-0 mx-0"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default HeroSectionCarousel
