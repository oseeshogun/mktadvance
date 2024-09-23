import MainHeader from "@/components/shared/header/main_header"
import Footer from "../(home)/components/footer"
import WhatsappBubble from "../(home)/components/whatsapp_bubble"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import EstimationForm from "./estimation_form"

const Page = () => {
  return (
    <main>
      <MainHeader>
        <h1 className="text-center text-white text-4xl font-bold">
          Devis et estimation d'un projet
        </h1>
      </MainHeader>
      <div className="min-h-screen p-[5%]">
        <h1 className="my-4 font-bold text-3xl">Estimation d'un projet</h1>
        <p>
          Besoin de nos services, envoyez-nous une description de votre projet.
        </p>
        <EstimationForm />
      </div>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}

export default Page
