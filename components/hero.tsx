import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" tabIndex={-1} aria-labelledby="hero-title" className="border-b border-border">
      <div className="portfolio-shell flex min-h-[85svh] flex-col justify-center pb-8 pt-36 md:pt-40">
        <div className="intro-reveal mx-auto w-full max-w-4xl text-center">
          <p className="mb-7 text-xs font-medium uppercase text-muted-foreground">Desarrollador de software</p>
          <h1 id="hero-title" className="display-type text-6xl leading-none sm:text-7xl md:text-8xl lg:text-9xl">
            Jean Sebastian<br />
            <span className="italic">Garzón</span><span className="text-muted-foreground">.</span>
          </h1>
          <p className="mx-auto mb-8 mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Creando experiencias digitales elegantes y funcionales. Especializado en Next.js y Node.js con un enfoque en arquitecturas cloud modernas para construir soluciones escalables y eficientes.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <a href="#projects" className="group">Conoce mi trabajo <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contáctame</a>
            </Button>
          </div>
        </div>
        <div className="intro-reveal-delayed mt-14 flex items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:mt-16">
          <span>Next.js / Node.js / Cloud</span>
          <a href="#about" className="group inline-flex min-h-11 items-center gap-3 text-foreground">
            Sobre mí <ArrowDown aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

