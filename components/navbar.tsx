"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold text-primary">
          <span className="text-foreground">Jean</span>
          <span className="text-primary">Dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" className="gap-2 border-primary/20 text-primary hover:bg-primary/10" asChild>
            <a href="/JeanSebastianGarzonCv.pdf" download="JeanSebastianGarzonCV.pdf" aria-label="Download CV">
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="outline" className="gap-2 border-primary/20 text-primary hover:bg-primary/10" asChild>
              <a href="/JeanCv.pdf" download="JeanSebastianGarzonCV.pdf" aria-label="Download CV">
                <Download className="h-4 w-4" />
                Descargar CV
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

