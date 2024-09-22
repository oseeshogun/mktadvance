import { client } from "@/sanity/lib/client"

export type ArticleDetail = {
  _id: string
  title: string
  slug: string
  description: string
  content: unknown
  image: string
  author: {
    name: string
    role: string
    avatar: unknown
  }
}

export type Article = {
  _id: string
  title: string
  slug: { current: string }
  description: string
  image: string
}

export const getAllArticles = async (): Promise<Article[]> => {
  const query = `*[_type == "article"] {
    _id,
    title,
    slug,
    description,
    content,
    image,
  }`

  const articles = await client.fetch(query, undefined, {
    next: { revalidate: 60 * 60 },
  })

  return articles || null
}

export const getArticleBySlug = async (
  slug: string,
): Promise<ArticleDetail | null> => {
  const query = `*[_type == "article" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        author->,
        description,
        content,
        image,
      }`

  const article = await client.fetch(
    query,
    { slug },
    {
      next: { revalidate: 60 * 60 },
    },
  )

  return article || null
}
