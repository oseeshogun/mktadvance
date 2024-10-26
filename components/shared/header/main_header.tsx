import MainNavigationMenu from "@/app/(home)/components/main_navigation"
import { getServices } from "@/app/(home)/utils/service"
import { cn } from "@/lib/utils"

const MainHeader = async ({
  children,
  className,
}: {
  className?: string
  children: React.ReactNode | JSX.Element | JSX.Element[]
}) => {
  const services = await getServices()
  return (
    <div className={cn("min-h-[30dvh] w-full relative", className)}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-2] bg-[url('/assets/images/hero_carousels/limete-tower.webp')] bg-cover bg-center bg-fixed"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <MainNavigationMenu services={services} />
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainHeader
