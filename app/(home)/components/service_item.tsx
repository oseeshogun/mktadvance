"use client"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import { Service } from "../utils/service"
import Particles from "@/components/ui/particles"

const ServiceItem = ({
  service,
  index,
}: {
  index: number
  service: Service
}) => {
  return (
    <Link href={`/services/${service.slug.current}`} key={index}>
      <Fade direction="up" triggerOnce>
        <div className="relative border-[1px] border-gray-300 aspect-square hover:translate-y-[-10px] hover:border-white transition-all duration-300 hover:shadow-[0_0_25px_0_rgba(0,0,0,0.1)] origin-bottom flex flex-col items-center justify-center">
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color="#ce1a18"
            refresh
          />
          <div
            className="text-white bg-red-500 aspect-square w-[60px] flex justify-center items-center rounded-sm"
            dangerouslySetInnerHTML={{ __html: service.icon }}
          ></div>
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
