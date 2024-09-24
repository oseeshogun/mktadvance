import Link from "next/link"
import Footer from "../(home)/components/footer"
import WhatsappBubble from "../(home)/components/whatsapp_bubble"
import { getAllArticles } from "./[slug]/actions/get_article"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import MainHeader from "@/components/shared/header/main_header"

const Page = async () => {
  const articles = await getAllArticles()

  return (
    <main>
      <MainHeader>
        <h1 className="text-center text-white text-4xl font-bold">Blog</h1>
      </MainHeader>
      <div className="min-h-screen p-[5%]">
        <h1 className="my-4 font-bold text-3xl">Articles</h1>
        <div className="grid grid-cols-4">
          {articles.map((article) => (
            <Link href={`/blog/${article.slug.current}`} key={article._id}>
              <div className="shadow-lg flex flex-col rounded-md transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={
                      Boolean(article.image)
                        ? urlFor(article.image).url()
                        : "/assets/images/cta-bg.jpg"
                    }
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full object-cover rounded-t-md group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-t-md flex flex-col justify-end">
                    <h1 className="font-semibold text-white p-3">
                      {article.title}
                    </h1>
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-black/70 my-4">{article.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}

export default Page
