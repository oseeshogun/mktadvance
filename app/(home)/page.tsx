import Image from "next/image"
import HeroSectionCarousel from "./components/hero_section_carousel"
import { Button } from "@/components/ui/button"
import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Dumbbell,
  HandCoins,
  Mail,
  MapPin,
  PartyPopper,
  Phone,
} from "lucide-react"
import React from "react"
import WhoWeAre from "./components/who_we_are"
import TheyTrustUs from "./components/they_trust_us"
import HeroTitle from "./components/hero_title"
import ValuesImage from "./components/values_image"
import Porfolio from "./components/portfolio"
import ServiceItem from "./components/service_item"
import MktTeam from "./components/team"
import Footer from "./components/footer"
import WhatsappBubble from "./components/whatsapp_bubble"
import MainNavigationMenu from "./components/main_navigation"
import { getServices } from "./utils/service"
import { getTeam } from "./utils/team"
import { getPartners } from "./utils/partners"
import { getInfo } from "./utils/info"
import { getCarousels, getProjects } from "./utils/projects"

export default async function Home() {
  const services = await getServices()
  const team = await getTeam()
  const partners = await getPartners()
  const info = await getInfo()
  const projects = await getProjects()
  const carouselImages = await getCarousels()

  return (
    <main>
      <div className="h-screen w-screen relative">
        <HeroSectionCarousel images={carouselImages} />
        <div className="bg-black/60 absolute top-0 left-0 h-screen w-screen"></div>
        <Image
          src="/assets/images/Animated-Flag-Congo.gif"
          alt="Animated Congo DRC Flag"
          height={300}
          width={300}
          className="absolute bottom-2 right-2 w-[50px] object-contain"
          unoptimized
        />
        <div className="absolute top-0 left-0 h-screen w-screen flex flex-col justify-between">
          <MainNavigationMenu services={services} />
          <div className="text-white text-center mt-8">
            <HeroTitle />
            <div className="mt-8 grid grid-cols-6 max-md:grid-cols-3 max-sm:hidden max-md:gap-2 place-items-center">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="h-full p-4 w-[180px] border-[1px] border-red-500/60 flex flex-col items-center justify-center"
                >
                  <span
                    className="text-red-500"
                    dangerouslySetInnerHTML={{ __html: service.icon }}
                  ></span>
                  <div className="mt-4 font-bold text-lg">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <WhoWeAre />
      <TheyTrustUs partners={partners} />
      <section>
        <div className="my-6 flex px-[5%] max-md:flex-col">
          <ValuesImage />
          <div className="w-[50%] px-[5%] max-md:w-full max-md:mt-6">
            <h1 className="text-2xl font-bold text-left mb-6">Nos valeurs</h1>
            <div className="[&>*]:mb-6 flex flex-col justify-center">
              <div className="flex">
                <Award className="text-green-500 w-[140px] mr-4" size={50} />
                <div>
                  <h3 className="text-xl text-green-500 font-bold">
                    La Passion
                  </h3>
                  <p>
                    Nous pensons qu'il est important d'être passionné par ce que
                    l'on fait afin de prendre du plaisir dans les projets que
                    nous menons et à le partager avec nos clients et
                    partenaires. A ce titre, la co-création est au coeur de nos
                    process.
                  </p>
                </div>
              </div>
              <div className="flex">
                <Dumbbell
                  className="text-black-500 w-[60px] h-[60px] mr-4"
                  size={50}
                />
                <div>
                  <h3 className="text-xl text-black-500 font-bold">
                    L'exigence
                  </h3>
                  <p>
                    Nous nous imposons ce que nous recommandons à nos clients et
                    ce que nous exigeons de nos prestataires.
                  </p>
                </div>
              </div>
              <div className="flex">
                <HandCoins className="text-red-500 w-[90px] mr-4" size={50} />
                <div>
                  <h3 className="text-xl text-red-500 font-bold">
                    La Rentabilité
                  </h3>
                  <p>
                    La rentabilité de nos actions est la garantie de la
                    satisfaction de nos clients. Notre propre rentabilité est la
                    garantie de notre indépendance et de notre développement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-6 px-[5%]">
        <div>
          <h5 className="flex items-center font-bold text-gray-400 opacity-60 after:ml-3 after:content-[''] after:w-[120px] after:h-[2px] after:bg-[#ffde9e]">
            NOS SERVICES
          </h5>
          <h1 className="mt-1 uppercase font-bold text-[32px]">
            Consultez nos services
          </h1>
        </div>
        <div className="mt-4 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-9">
          {services.map((service, index) => (
            <ServiceItem service={service} index={index} key={index} />
          ))}
        </div>
      </section>
      <section className="bg-scroll min-h-[300px] w-full flex flex-col justify-center items-center text-white relative px-[5%] text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-2] bg-[url('/assets/images/cta-bg.jpg')] bg-fixed"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>
        <h1 className="text-3xl font-bold">
          Transformez votre visibilité dès aujourd'hui !
        </h1>
        <p className="max-md:mt-5">
          Contactez-nous maintenant pour faire briller votre marque et captiver
          votre public.
        </p>
        <Button variant="outline" className="mt-6">
          Contactez-nous
        </Button>
      </section>
      <section className="my-6 px-[5%]" id="realisations">
        <div>
          <h5 className="flex items-center font-bold text-gray-400 opacity-60 after:ml-3 after:content-[''] after:w-[120px] after:h-[2px] after:bg-[#ffde9e] uppercase">
            Réalisations
          </h5>
          <h1 className="mt-1 uppercase font-bold text-[32px]">
            Consultez nos Réalisations
          </h1>
        </div>
        <Porfolio portfolios={projects}  />
      </section>
      <section className="mt-8 mb-4 p-[5%] flex justify-between max-md:flex-col">
        <div className="w-[40%] max-md:w-full max-md:mb-4">
          <Image
            src="/assets/images/image16.jpg"
            alt="Directeur MKT Advance"
            width={239}
            height={239}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[55%] max-md:w-full">
          <h1 className="text-3xl font-bold">Nos Performances Éclatantes</h1>
          <p>
            Découvrez l'impact de nos réalisations à travers des chiffres
            impressionnants qui témoignent de notre engagement envers
            l'excellence et la réussite. Explorez nos performances éclatantes
            pour voir comment nous transformons les défis en succès et les idées
            en résultats concrets.
          </p>
          <div className="grid grid-cols-2 mt-5 gap-4 max-sm:grid-cols-1">
            <p className="">
              <PartyPopper
                size={50}
                className="text-red-500 h-[50px] w-[50px] float-left mr-3"
              />
              <span className="text-4xl font-bold mr-1">+100</span>
              <span className="font-bold">clients heureux</span> et satisfaits
              de nos services, témoignant de notre engagement envers
              l'excellence et la satisfaction clientèle.
            </p>
            <p className="">
              <BriefcaseBusiness
                size={50}
                className="text-red-500 h-[50px] w-[50px] float-left mr-3"
              />
              <span className="text-4xl font-bold mr-1">+300</span>
              <span className="font-bold">projets réalisés</span> avec succès,
              démontrant notre expertise et notre capacité à concrétiser les
              visions de nos clients avec efficacité et professionnalisme.
            </p>
            <p className="">
              <BrainCircuit
                size={50}
                className="text-red-500 h-[50px] w-[50px] float-left mr-3"
              />
              <span className="text-4xl font-bold mr-1">+15</span>
              <span className="font-bold">ans d'expérience</span> à innover,
              créer et exceller dans l'industrie, façonnant notre expertise et
              notre engagement à vous offrir le meilleur.
            </p>
            <p className="">
              <Award
                size={50}
                className="text-red-500 h-[50px] w-[50px] float-left mr-3"
              />
              <span className="text-4xl font-bold mr-1">+20</span>
              <span className="font-bold">prix remportés,</span> une
              reconnaissance de notre dévouement à l'excellence et à
              l'innovation dans notre domaine.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-[380px] w-full relative">
        <div className="bg-[url('/assets/images/testimonials-bg.jpg')] bg-cover bg-fixed bg-center z-[-2] w-full h-full absolute top-0 left-0"></div>
        <div className="z-[-1] bg-black/70 w-full h-full absolute top-0 left-0"></div>
        <div className="w-full h-full absolute top-0 left-0 py-[2%] text-white flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">Notre équipe</h2>
          <MktTeam team={team} />
        </div>
      </section>
      <section className="my-12 px-[5%]" id="contact">
        <div>
          <h5 className="flex items-center font-bold text-gray-400 opacity-60 after:ml-3 after:content-[''] after:w-[120px] after:h-[2px] after:bg-[#ffde9e] uppercase">
            Contact
          </h5>
          <h1 className="mt-1 uppercase font-bold text-[32px]">
            Contactez-nous
          </h1>
        </div>
        {info.coor.lat && info.coor.long && (
          <div className="mt-12">
            <iframe
              className="border-none w-full h-[400px]"
              title={`Mkt Advance - ${info.address}`}
              src={`https://www.google.com/maps?q=${info.coor.lat},${info.coor.long}&output=embed&hl=fr`}
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div className="mt-8 flex items-center justify-center max-md:flex-col">
          <div className="w-[40%] flex flex-col [&>*]:mb-8 max-md:w-full">
            <a
              href="https://www.google.com/maps/search/?api=1&query=-4.313828829294465,15.30045616439124"
              className="flex"
            >
              <div className="w-[50px] h-[50px] bg-red-500 flex items-center justify-center">
                <MapPin className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Adresse</h4>
                <p>
                  {info.address}, {info.city}
                </p>
              </div>
            </a>
            <a href={`mailto:${info.email}`} className="flex">
              <div className="w-[50px] h-[50px] bg-red-500 flex items-center justify-center">
                <Mail className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Adresse e-mail</h4>
                <p>{info.email}</p>
              </div>
            </a>
            <a href={`tel:${info.phone}`} className="flex">
              <div className="w-[50px] h-[50px] bg-red-500 flex items-center justify-center">
                <Phone className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Téléphone</h4>
                <p>{info.phone}</p>
              </div>
            </a>
          </div>
          <div className="lg:w-8/12 mt-5 mt-lg-0 w-full">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-red-500"
                    id="name"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="form-group mt-3 md:mt-0">
                  <input
                    type="email"
                    className="form-control block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-red-500"
                    name="email"
                    id="email"
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-red-500"
                  name="subject"
                  id="subject"
                  placeholder="Objet"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-red-500"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <Button type="submit" className="bg-red-500 mt-4">
                  Envoyez le message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}
