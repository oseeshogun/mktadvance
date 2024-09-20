"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Zoom } from "react-awesome-reveal"

const clients = [
  "cnss-removebg-preview.png",
  "Coca-Cola_logo.svg-removebg-preview.png",
  "FBNBank-Senegal-Logo-removebg-preview.png",
  "maggi-removebg-preview.png",
  "south-tourisme-removebg-preview.png",
  "uba_client.png",
]

const TheyTrustUs = () => {
  return (
    <div className="my-4 px-4">
      <h4 className="text-center text-3xl font-bold">
        Ils nous font confiance
      </h4>
      <div className="mt-6 flex justify-center">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}
          className="w-full overflow-hidden"
        >
          <CarouselContent className="items-center justify-start -ml-4">
            {clients.map((client) => (
              <CarouselItem className="basis-1/6 max-md:basis-1/3" key={client}>
                <Zoom>
                  <Image
                    src={`/assets/images/clients/${client}`}
                    alt={client}
                    width={200}
                    height={120}
                    className={cn(
                      "object-contain opacity-[0.3] filter grayscale hover:opacity-100 hover:filter-none cursor-pointer transition-all duration-300 w-[116px] h-auto align-middle"
                    )}
                  />
                </Zoom>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default TheyTrustUs
