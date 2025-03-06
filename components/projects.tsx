"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("projects")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "Loop Media",
      description:
        "Loop Media fue creado para escribir y leer sobre lo que sucede en todo el mundo, sin algoritmos que decidan qué contenido consumes o barreras del idioma. Queremos conectar a escritores y pensadores a nivel mundial, brindándoles acceso a tantos aspectos o “lados de la verdad.”",
      image: "/LoopMedia.png?height=400&width=600",
      technologies: ["Nextjs", "TailwindCss", "Firebase", "Flutter", "Google Cloud"],
      repoUrl: null,
      demoUrl: "https://loopmedia.app/",
    },
    {
      id: 2,
      title: "Bot Whatsapp | Gestion de Domicilios",
      description:
        "Para la gestion de un negocio local de domicilios se implemento un Bot de whatsapp como solucion a la carga operativa, automatizando procesos como la gestiona de servicios, clientes, coductores, quejas y reclamos.",
      image: "/WhatsappBots.png?height=400&width=600",
      technologies: ["Api Whatsapp", "BuilderBot", "Node", "Sequelize", "Google APIS", "Apps Script", "Google Sheet", "Api Discord"],
      repoUrl: null,
      demoUrl: "https://youtu.be/ruxLJMqAixk",
    },
    {
      id: 3,
      title: "BEST-P",
      description:
        "Landing page para BESTP, la página no solo proporciona una experiencia visual atractiva, sino que también integra funcionalidades avanzadas como el envío automático de correos electrónicos y la recepción de datos directamente en Google Sheets. Esta integración permite gestionar de manera eficiente y  optimizar las campañas publicitarias de manera fluida.",
      image: "/BestP.png?height=400&width=600",
      technologies: ["Next.js", "TailwindCss", "TypeScript", "Google API", "Nodemailer"],
      repoUrl: null,
      demoUrl: "https://bestpweb.vercel.app/",
    },
   
    {
      id: 4,
      title: "GesSalud",
      description:
        "GesSalud es un sistema administrativo que permite la gestion de personal, pacientes, especialistas, citas, pagos e historial medico. Este sistema es pensado para el desarrollo de centros de salud pequeños y medianos. (Experiencia academica)",
      image: "/GesSalud.png?height=400&width=600",
      technologies: ["React", "Redux", "SCSS", "Express", "Sequelize", "PostgreSql", "Payment mecado pago"],
      repoUrl: "https://github.com/guillevidal/GesSalud",
      demoUrl: "https://www.youtube.com/watch?v=ATaIq3GLFM4",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="relative inline-block">
            Proyectos destacados
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
          </span>
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProject === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className={`flex justify-between  pt-0`}>
                <Button variant="outline" size="sm" className="gap-2 text-primary" asChild>
                  {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Repositorio
                  </a>}
                </Button>
                <Button size="sm" className="gap-2" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full px-8 border-primary text-primary hover:bg-primary/10 hover:text-primary group"
          >
            Ver todos los proyectos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}

