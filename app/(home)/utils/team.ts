import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

export type TeamMember = {
  _id: string
  name: string
  role: string
  avatar: string
}

export const getTeam = async (): Promise<TeamMember[]> => {
  const query = `*[_type == "team"] | order(publishedAt desc) {
        _id,
        name,
        role,
        avatar,
      }`

  const team = await client.fetch(query, undefined, {
    // next: { revalidate: 60 * 60 },
    cache: "no-cache",
  })

  return team.map((t: any) => ({ ...t, avatar: urlFor(t.avatar).url() }))
}
