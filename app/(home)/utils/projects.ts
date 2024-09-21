import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

export enum PortfolioCategory {
  all = "Tous",
  lettrage = "lettrage",
  affiche = "affiche",
  event = "event",
}

export type CustomImage = {
  image: string
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
    cache: 'no-cache'
  })

  console.log(galleries.map((t: any) => t.category));

  return galleries.map((t: any) => ({ ...t, image: urlFor(t.image).url() }))
}
