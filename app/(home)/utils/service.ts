import { client } from "@/sanity/lib/client"

export type Service = {
  _id: string
  title: string
  slug: { current: string }
  icon: string
  description: string
}

export const getServices = async (): Promise<Service[]> => {
  const query = `*[_type == "service"] | order(title asc) {
      _id,
      title,
      slug,
      icon,
      description
    }`

  const services = await client.fetch(query, undefined, {
    next: { revalidate: 60 * 60 },
  })

  return services
}
