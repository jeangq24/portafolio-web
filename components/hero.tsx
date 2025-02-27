"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsVisible(true)

    // Configuración de la animación de la cuadrícula
    if (gridRef.current) {
      const gridItems = Array.from(gridRef.current.children) as HTMLElement[]

      // Función para animar un cuadrado aleatorio
      const animateRandomCell = () => {
        // Seleccionar un cuadrado aleatorio
        const randomIndex = Math.floor(Math.random() * gridItems.length)
        const cell = gridItems[randomIndex]

        // Aplicar una clase para la animación
        cell.classList.add("animate-cell")

        // Eliminar la clase después de la animación
        setTimeout(() => {
          cell.classList.remove("animate-cell")
        }, 2000)
      }

      // Iniciar la animación con intervalos aleatorios
      const startAnimation = () => {
        // Animar algunos cuadrados inicialmente
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            animateRandomCell()
          }, i * 200)
        }

        // Configurar el intervalo para animaciones continuas
        intervalRef.current = setInterval(() => {
          animateRandomCell()

          // Ocasionalmente animar varios a la vez
          if (Math.random() > 0.7) {
            setTimeout(() => animateRandomCell(), 100)
            setTimeout(() => animateRandomCell(), 300)
          }
        }, 800)
      }

      startAnimation()
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/95 pt-16 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div ref={gridRef} className="grid-background w-full h-full">
          {/* Generar 20x12 celdas para la cuadrícula */}
          {Array.from({ length: 240 }).map((_, index) => (
            <div key={index} className="grid-cell transition-colors duration-1000" />
          ))}
        </div>
      </div>

      <div
        className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } relative z-10`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-foreground">Jean Sebastian Garzón</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-primary">Desarrollador de software</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
          Creando experiencias digitales elegantes y funcionales. Especializado en Next.js y Node.js con un enfoque en arquitecturas cloud modernas para construir soluciones escalables y eficientes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full px-8 transition-all duration-300 hover:bg-primary/90"
          >
            <span className="relative z-10">Conoce mi trabajo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-primary text-primary hover:bg-primary/10 hover:text-primary"
          >
            Contáctame
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown className="h-8 w-8 text-primary" />
        </a>
      </div>
    </section>
  )
}

