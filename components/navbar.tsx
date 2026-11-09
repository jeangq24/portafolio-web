"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: "-15% 0px -65% 0px" })
    document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section))

    const desktop = window.matchMedia("(min-width: 768px)")
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      desktop.removeEventListener("change", closeOnDesktop)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus()
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [isMenuOpen])

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b bg-background/95 transition-[border-color,box-shadow] duration-300 ${isScrolled || isMenuOpen ? "border-border shadow-sm" : "border-transparent"}`}
    >
      <div className="portfolio-shell flex h-20 items-center justify-between gap-6">
        <Link href="#home" onClick={() => setIsMenuOpen(false)} aria-label="JeanDev, inicio" className="text-lg font-semibold">
          Jean<span className="font-normal text-muted-foreground">Dev</span><span aria-hidden="true">.</span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild>
            <a href="/JeanSebastianGarzonCV.pdf" download="JeanSebastianGarzonCV.pdf">
              <Download aria-hidden="true" />
              Descargar CV
            </a>
          </Button>
        </nav>

        <Button ref={toggleRef} variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" title={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav ref={mobileNavRef} id="mobile-navigation" aria-label="Navegación móvil" className="portfolio-shell intro-reveal flex flex-col gap-2 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                className="nav-link py-3"
                onClick={() => {
                  setIsMenuOpen(false)
                  document.getElementById(link.href.slice(1))?.focus({ preventScroll: true })
                }}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="outline" className="mt-3" asChild>
              <a href="/JeanSebastianGarzonCV.pdf" download="JeanSebastianGarzonCV.pdf">
                <Download aria-hidden="true" />
                Descargar CV
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

