"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Image from "next/image"
import { MouseEventHandler, useMemo, useState } from "react"
import { Zoom } from "react-awesome-reveal"

enum PortfolioCategory {
  all = "Tous",
  lettrage = "Lettrage",
  affiche = "Affiche",
  event = "Évènement",
}

type CustomImage = {
  src: string
  caption: string
  categories: PortfolioCategory[]
  width: number
  height: number
  customOverlay: React.ReactNode
}

const portfolios: CustomImage[] = [
  {
    src: "/assets/images/portfolio/ede.jpg",
    caption: "Lettrage lumineux en 3D de la CNSS",
    categories: [PortfolioCategory.lettrage],
    width: 4032,
    height: 3024,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Lettrage lumineux en 3D de la CNSS</div>
      </div>
    ),
  },
  {
    src: "/assets/images/portfolio/ac.jpg",
    caption: "Événement CokeFest-Cola",
    categories: [PortfolioCategory.event],
    width: 485,
    height: 484,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Événement CokeFest-Cola</div>
      </div>
    ),
  },
  {
    caption: "Lettrage signalitique en 3D de l'entreprise MKTAdvance",
    src: "/assets/images/portfolio/al.jpg",
    categories: [PortfolioCategory.lettrage],
    width: 5472,
    height: 3648,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Lettrage signalitique en 3D de l'entreprise MKTAdvance</div>
      </div>
    ),
  },
  {
    caption: "",
    src: "/assets/images/portfolio/am.jpg",
    categories: [PortfolioCategory.affiche],
    width: 833,
    height: 973,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Grand Affiche de Coca-Cola</div>
      </div>
    ),
  },
  {
    src: "/assets/images/portfolio/i10.jpg",
    caption: "Lettrage Banque UBA",
    categories: [PortfolioCategory.lettrage],
    width: 810,
    height: 1080,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Lettrage Banque UBA</div>
      </div>
    ),
  },
  {
    caption: "Grand Affiche Visit South Africa",
    src: "/assets/images/portfolio/south.jpg",
    categories: [PortfolioCategory.affiche],
    width: 946,
    height: 575,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Grand Affiche Visit South Africa</div>
      </div>
    ),
  },
]

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

// Updated function to support RGBA
const rgbaDataURL = (r: number, g: number, b: number, a: number) => {
  const alpha = Math.round(a * 255) // Convert alpha to a value between 0-255
  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, alpha, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
}

const Porfolio = () => {
  const [currentCategory, setCurrentCategory] = useState(PortfolioCategory.all)
  const projects = useMemo(
    () =>
      portfolios.filter(
        (p) =>
          p.categories.includes(currentCategory) ||
          currentCategory === PortfolioCategory.all
      ),
    [currentCategory]
  )

  const [item, setItem] = useState<CustomImage | null>(null)

  const handleClick = (index: number, item: CustomImage) => {
    setItem(item)
  }
  const handleClose: MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    event.stopPropagation()
    /* @ts-ignore */
    if (event.target.tagName == "DIV") {
      setItem(null)
    }
  }

  return (
    <section className="mt-6">
      <div className="flex justify-center gap-6 max-md:px-[5%] flex-wrap">
        {Object.values(PortfolioCategory).map((category) => (
          <Button
            key={category}
            className={cn(
              currentCategory === category && "bg-red-500 text-white",
              "transition-all ease-linear duration-100 uppercase"
            )}
            variant="outline"
            onClick={() => setCurrentCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="my-5">
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {projects.map((project, index) => (
            <div
              key={index + currentCategory}
              className="w-full h-full relative cursor-pointer group"
            >
              <Zoom>
                <Image
                  src={project.src}
                  alt={project.caption}
                  height={project.height}
                  width={project.width}
                  placeholder="blur"
                  quality={80}
                  blurDataURL={rgbaDataURL(237, 80, 6, 0.2)}
                  onClick={() => handleClick(index, project)}
                  className="group-hover:scale-105 group-hover:shadow-lg transition-all ease-linear duration-300"
                />
              </Zoom>
              <div
                className={cn(
                  "absolute w-full hidden group-hover:block group-hover:scale-105 transition-all ease-linear duration-300"
                )}
              >
                {project.customOverlay}
              </div>
            </div>
          ))}
        </div>
        {!!item && (
          <div className="fixed w-full h-full bg-black/60 top-0 left-0 z-[12]">
            <div className="flex justify-between items-center py-4 px-12 bg-black text-white">
              <h1>{item.caption}</h1>
              <X className="cursor-pointer" onClick={() => setItem(null)} />
            </div>
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={handleClose}
            >
              <Zoom triggerOnce>
                <Image
                  src={item.src}
                  alt={item.caption}
                  height={item.height}
                  width={item.width}
                  placeholder="blur"
                  quality={80}
                  blurDataURL={rgbaDataURL(10, 10, 6, 0.2)}
                  className="h-[70dvh] object-contain"
                  onClick={() => {}}
                />
              </Zoom>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Porfolio
