import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import { ArrowUp } from "lucide-react"

export default function Home() {
  return (
    <>
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <footer className="border-t border-border">
      <div className="portfolio-shell flex flex-wrap items-center justify-between gap-6 py-8 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Jean Sebastian Garzón</p>
        <a href="#home" className="group inline-flex min-h-11 items-center gap-3 text-foreground">
          Volver al inicio <ArrowUp aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
    </>
  )
}

