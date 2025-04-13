'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { useActiveSection } from "@/hooks/useActiveSection"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import * as React from "react"
import ThemeSwitch from "@/components/common/ThemeSwitch";

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    const sectionIds = ["Home", "about", "Projects", "Skills", "Experience", "Contact"]
    const activeSection = useActiveSection(sectionIds)

    return (
      <header className="w-full z-50 fixed top-0 left-0 right-0 m-auto">
        <div className="container mx-auto flex items-center justify-center px-4 py-4">
          {/* Hamburger Icon (Mobile Only) */}
          <button
            className="md:hidden block"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Nav Menu (Both Desktop + Mobile via CSS) */}
          <nav
            className={cn(
              "absolute top-full left-0 w-full border-t md:border-0 md:static md:w-auto md:flex md:items-center transition-all duration-300",
              isOpen ? "block" : "hidden md:block"
            )}
          >
            <NavigationMenu className="bg-background/10 py-1 px-2 rounded-full">
              <NavigationMenuList className="flex flex-col md:flex-row w-full md:items-center md:gap-4 px-4 py-4 md:p-0">
                {[
                  "Home",
                  "About",
                  "Projects",
                  "Skills",
                  "Experience",
                  "Contact",
                ].map((section) => (
                  <NavigationMenuItem key={section}>
                    <Link
                      href={`/#${section.toLowerCase()}`}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          activeSection === section
                            ? "text-primary font-semibold dark:text-white"
                            : "dark:text-white"
                        )}
                      >
                        {section}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <ThemeSwitch />
            </NavigationMenu>
          </nav>
        </div>
      </header>
    );
}


