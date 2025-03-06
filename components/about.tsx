"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const skills = [
    "JavaScript",
    "Next.js",
    "TailwindCss",
    "Node.js",
    "Sql",
    "Sequelize",
    "PostgreSQL",
    "Git",
    "Firebase",
    "Google Cloud",
    "API Integration",
    "Scrum",
    "Clean Code",
    "Technical support"
  ]

  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="relative inline-block">
            Sobre mí
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
          </span>
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >

          <div>
            <h3 className="text-2xl font-bold mb-4">Desarrollador de software</h3>
            <p className="text-muted-foreground mb-6">
              Soy un desarrollador apasionado por construir soluciones digitales eficientes y escalables. Con 3 años de experiencia en desarrollo web, me especializo en crear aplicaciones robustas utilizando tecnologías modernas.
            </p>
            <p className="text-muted-foreground mb-8">
              Mi enfoque está en la optimización del rendimiento, buenas prácticas de desarrollo y resolución de problemas complejos. Disfruto diseñando sistemas eficientes y transformando desafíos técnicos en soluciones innovadoras.
            </p>

            <div>
              <h4 className="text-lg font-semibold mb-3">Habilidades técnicas</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-background">
                <Image
                  src="/JeanDev.png?height=400&width=400"
                  alt="Jean Sebastian Garzón - Desarrollador de software"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

