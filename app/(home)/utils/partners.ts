import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export type Partner = {
  _id: string
  name: string
  role: string
  avatar: string
}

export const getPartners = async (): Promise<Partner[]> => {
  const query = `*[_type == "partners"] | order(publishedAt desc) {
        _id,
        name,
        avatar,
      }`

  const team = await client.fetch(query, undefined, {
    next: { revalidate: 60 * 60 },
  })

  return team.map((t: { [key: string]: unknown }) => ({
    ...t,
    avatar: urlFor(t.avatar as SanityImageSource).url(),
  }))
}
