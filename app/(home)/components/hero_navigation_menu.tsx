import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu"
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Service } from "../utils/service"

const HeroNaviationMenu = ({
  isSticky,
  isMobile = false,
  services,
}: {
  isSticky: boolean
  isMobile?: boolean
  services: Service[]
}) => {
  return (
    <NavigationMenu
      className={cn(
        "flex items-center max-md:hidden",
        isMobile && "max-md:block flex-col",
      )}
      orientation="vertical"
    >
      <NavigationMenuList
        className={cn(
          "flex items-center gap-6",
          isMobile && "flex-col py-5 px-7 items-start",
        )}
      >
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col justify-center">
              Accueil
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#about_us" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              À propos
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <div className="relative cursor-pointer group">
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              <span className="flex items-center">
                Nos services{" "}
                <ChevronDown className="w-[14px] ml-1 group-hover:rotate-180 transition-transform duration-100" />
              </span>
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                )}
              ></span>
            </NavigationMenuLink>
            <div className="bg-white text-black rounded-lg absolute top-[120%] left-0 w-[320px] px-4 py-2 scale-0 hover:scale-100 group-hover:scale-100 delay-300 transition-transform duration-100 origin-top-left z-[8]">
              <ul>
                {services?.map((service) => (
                  <li
                    key={service.slug.current}
                    className="my-2 hover:text-red-500"
                  >
                    <Link
                      href={`/services/${service.slug.current}`}
                      className="flex items-center justify-between font-semibold text-sm"
                    >
                      {service.title} <ChevronRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#realisations" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              Réalisations
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#contact" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              Contact
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none text space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default HeroNaviationMenu
