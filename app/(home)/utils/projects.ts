import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export enum PortfolioCategory {
  all = "Tous",
  lettrage = "lettrage",
  affiche = "affiche",
  event = "event",
}

export type CustomImage = {
  image: string
  thumbnail: string
  caption: string
  category: PortfolioCategory[]
  width: number
  height: number
  customOverlay: React.ReactNode
}

export const getProjects = async (): Promise<CustomImage[]> => {
  const query = `*[_type == "gallery"] | order(publishedAt desc) {
        _id,
        caption,
        image,
        category,
        width,
        height,
      }`

  const galleries = await client.fetch(query, undefined, {
    // next: { revalidate: 60 * 60 },
    cache: "no-cache",
  })

  return galleries.map((t: { [key: string]: unknown }) => ({
    ...t,
    image: urlFor(t.image as SanityImageSource).url(),
    thumbnail: urlFor(t.image as SanityImageSource).maxHeight(400).maxWidth(300).url(),
  }))
}

export const getPhotos = async (): Promise<CustomImage[]> => {
  const query = `*[_type == "photo"] | order(publishedAt desc) {
        _id,
        caption,
        image,
        width,
        height,
      }`

  const galleries = await client.fetch(query, undefined, {
    // next: { revalidate: 60 * 60 },
    cache: "no-cache",
  })

  return galleries.map((t: { [key: string]: unknown }) => ({
    ...t,
    image: urlFor(t.image as SanityImageSource).url(),
    thumbnail: urlFor(t.image as SanityImageSource).maxHeight(400).maxWidth(300).url(),
  }))
}

export const getCarousels = async (): Promise<
  { image: string; caption: string }[]
> => {
  const query = `*[_type == "carousel"] | order(publishedAt desc) {
        _id,
        caption,
        image,
      }`

  const galleries = await client.fetch(query, undefined, {
    next: { revalidate: 60 * 60 },
  })

  return galleries.map((t: { [key: string]: unknown }) => ({
    ...t,
    image: urlFor(t.image as SanityImageSource).url(),
  }))
}
