import Footer from "@/app/(home)/components/footer"
import MainNavigationMenu from "@/app/(home)/components/main_navigation"
import WhatsappBubble from "@/app/(home)/components/whatsapp_bubble"
import { getServiceBySlug, getServices } from "@/app/(home)/utils/service"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type CodeBlock = {
  value: {
    language: string
    code: string
  }
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const services = await getServices()
  const service = await getServiceBySlug(slug)

  console.log(service)

  const components = {
    types: {
      code: ({ value }: CodeBlock) => (
        <pre data-language={value.language}>
          <code>{value.code}</code>
        </pre>
      ),
    },
  }

  return (
    <main>
      <div className="min-h-[30dvh] w-full relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-2] bg-[url('/assets/images/hero_carousels/limete-tower.webp')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col">
          <MainNavigationMenu services={services} />
          <div className="flex-grow flex items-center justify-center">
            <h1 className="text-center text-white text-4xl font-bold">
              {service?.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="p-[5%]">
        <h2 className="text-3xl font-bold">{service?.title}</h2>
        <blockquote className="my-4 italic border-s-4 p-4 border-red-300 bg-gray-50 leading-relaxed">
          {service?.description}
        </blockquote>
        <div className="my-6 px-[5%] flex items-center justify-center">
          {Boolean(service?.image) && (
            <Image
              src={urlFor(service!.image!).url()}
              alt={service!.title}
              width={1240}
              height={900}
              className="w-[80dvw] max-h-[300px] object-contain"
            />
          )}
        </div>
        <div className="my-6 px-[5%] flex flex-col items-start justify-center">
          <PortableText value={service?.content} components={components} />
        </div>
      </div>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}

export default Page
