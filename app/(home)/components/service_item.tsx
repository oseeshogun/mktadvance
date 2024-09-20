"use client"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

const ServiceItem = ({
  service,
  index,
}: {
  index: number
  service: {
    href: string
    icon: React.ReactNode
    title: string
    description: string
  }
}) => {
  return (
    <Link href={service.href} key={index}>
      <Fade direction='up' triggerOnce>
        <div className="border-[1px] border-gray-300 aspect-square hover:translate-y-[-10px] hover:border-white transition-all duration-300 hover:shadow-[0_0_25px_0_rgba(0,0,0,0.1)] origin-bottom flex flex-col items-center justify-center">
          <div className="text-white bg-red-500 aspect-square w-[60px] flex justify-center items-center rounded-sm">
            {service.icon}
          </div>
          <h1 className="my-3 font-bold px-[15%] text-center text-xl">
            {service.title}
          </h1>
          <p className="px-[5%] text-center">{service.description}</p>
        </div>
      </Fade>
    </Link>
  )
}

export default ServiceItem
