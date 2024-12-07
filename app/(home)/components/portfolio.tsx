"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Image from "next/image"
import { MouseEventHandler, useMemo, useState } from "react"
import { Zoom } from "react-awesome-reveal"
import { CustomImage, PortfolioCategory } from "../utils/projects"

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

const Porfolio = ({ portfolios, categories }: { portfolios: CustomImage[], categories: PortfolioCategory[] }) => {
  const [currentCategory, setCurrentCategory] = useState<PortfolioCategory>(categories[0])

  console.log(portfolios)

  const projects = useMemo(
    () =>
      portfolios
        .filter(
          (p) =>
            p.category?.map((c) => c._ref).includes(currentCategory._id),
        )
        .map((t) => ({
          ...t,
          customOverlay: (
            <div className="custom-overlay__caption">
              <div>{t.caption}</div>
            </div>
          ),
        })),
    [currentCategory, portfolios],
  )

  const [item, setItem] = useState<CustomImage | null>(null)

  const handleClick = (index: number, item: CustomImage) => {
    setItem(item)
  }
  const handleClose: MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    event.stopPropagation()
    // @ts-expect-error: Should expect tagName
    if (event.target.tagName == "DIV") {
      setItem(null)
    }
  }

  return (
    <section className="mt-6">
      <div className="flex justify-center gap-6 max-md:px-[5%] flex-wrap">
        {categories.map((category) => (
          <Button
            key={category._id}
            className={cn(
              currentCategory === category && "bg-red-500 text-white",
              "transition-all ease-linear duration-100 uppercase",
            )}
            variant="outline"
            onClick={() => setCurrentCategory(category)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="my-5">
        {projects.length === 0 && (
          <div>
            <Image src="/assets/images/Empty street-bro.svg" alt="Vide" width={300} height={300} className="mx-auto" unoptimized />
            <p className="text-center text-lg mt-3">
              Désolé, aucune photo n&apos;a été trouvé pour la catégorie sélectionnée.
            </p>
          </div>
        )}
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {projects.map((project, index) => (
            <div
              key={index + currentCategory._id}
              className="w-full h-full relative cursor-pointer group"
            >
              <Zoom>
                <Image
                  src={project.image}
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
                  "absolute w-full hidden group-hover:block group-hover:scale-105 transition-all ease-linear duration-300",
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
                  src={item.image}
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
