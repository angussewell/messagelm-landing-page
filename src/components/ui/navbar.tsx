"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Link from "next/link"

interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

interface NavbarProps {
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
]

const MenuButton = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => (
  <button
    onClick={onClick}
    className="relative w-[20px] h-[20px] flex flex-col justify-center gap-[4px] transition-all duration-200"
    aria-label="Menu"
  >
    <div className={clsx(
      "w-full h-[1px] bg-current transition-all duration-200",
      isOpen && "rotate-45 translate-y-[2.5px]"
    )} />
    <div className={clsx(
      "w-full h-[1px] bg-current transition-all duration-200",
      isOpen && "-rotate-45 -translate-y-[2.5px]"
    )} />
  </button>
)

export function Navbar({ items = defaultItems }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 border-b border-border/40",
        "bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
        isScrolled && "animate-navbar-slide-down shadow-sm"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="relative h-12 w-[220px] hover:opacity-80 transition-opacity"
          >
            <img
              src="/logos/MessageLM Hero.png"
              alt="MessageLM"
              className="h-full w-full object-contain"
              loading="eager"
            />
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="https://app.messagelm.com/"
                className="text-sm font-medium tracking-tight hover:text-foreground/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </a>
              <a
                href="/get-started"
                className="text-sm font-medium tracking-tight bg-foreground text-background hover:bg-foreground/90 px-5 py-2 rounded-md transition-colors"
              >
                Get Started
              </a>
            </div>
            <div className="relative inline-block">
              <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
              {/* Dropdown Menu */}
              <div
                className={clsx(
                  "absolute right-0 mt-3 w-40 overflow-hidden",
                  "origin-top-right rounded-md",
                  "bg-background/95 backdrop-blur-xl shadow-lg ring-1 ring-black/5",
                  "transition-all duration-200 ease-out",
                  isMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 -translate-y-1 pointer-events-none"
                )}
              >
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "block px-5 py-3 text-sm font-medium tracking-tight",
                      "hover:bg-foreground/5 transition-colors",
                      pathname === item.href ? "text-foreground" : "text-foreground/80"
                    )}
                    {...(item.isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 