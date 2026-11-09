import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MotoTrack",
      description:
        "Este proyecto nació de una necesidad propia. Como conductor de moto en mi trabajo alterno, me di cuenta de lo tedioso que era llevar las cuentas en libretas o Excel. Necesitaba algo rápido, que se pudiera usar con una sola mano, con botones grandes para registrar domicilios o carreras en menos de 3 toques, y que me dijera exactamente cuánto me gané libre de gastos al final del día.",
      image: "/logo_mototrack.png?height=400&width=600",
      technologies: ["Next.js", "TailwindCss", "TypeScript", "Supabase", "PostgreSql"],
      repoUrl: "https://github.com/jeangq24/MotoTrack",
      demoUrl: "https://moto-track-seven.vercel.app/",
    },
    {
      id: 2,
      title: "Loop Media",
      description:
        "Loop Media fue creado para escribir y leer sobre lo que sucede en todo el mundo, sin algoritmos que decidan qué contenido consumes o barreras del idioma. Queremos conectar a escritores y pensadores a nivel mundial, brindándoles acceso a tantos aspectos o “lados de la verdad.”",
      image: "/LoopMedia.png?height=400&width=600",
      technologies: ["Nextjs", "TailwindCss", "Firebase", "Flutter", "Google Cloud"],
      repoUrl: null,
      demoUrl: "https://loopmedia.app/",
    },
    {
      id: 3,
      title: "Bot Whatsapp | Gestion de Domicilios",
      description:
        "Para la gestion de un negocio local de domicilios se implemento un Bot de whatsapp como solucion a la carga operativa, automatizando procesos como la gestiona de servicios, clientes, coductores, quejas y reclamos.",
      image: "/WhatsappBots.png?height=400&width=600",
      technologies: ["Api Whatsapp", "BuilderBot", "Node", "Sequelize", "Google APIS", "Apps Script", "Google Sheet", "Api Discord"],
      repoUrl: null,
      demoUrl: "https://youtu.be/ruxLJMqAixk",
    },
    {
      id: 4,
      title: "BEST-P",
      description:
        "Landing page para BESTP, la página no solo proporciona una experiencia visual atractiva, sino que también integra funcionalidades avanzadas como el envío automático de correos electrónicos y la recepción de datos directamente en Google Sheets. Esta integración permite gestionar de manera eficiente y  optimizar las campañas publicitarias de manera fluida.",
      image: "/BestP.png?height=400&width=600",
      technologies: ["Next.js", "TailwindCss", "TypeScript", "Google API", "Nodemailer"],
      repoUrl: null,
      demoUrl: "https://bestpweb.vercel.app/",
    },
   
    {
      id: 5,
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
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className="portfolio-section inverse-section">
      <div className="portfolio-shell">
        <SectionHeading id="projects-title" number="02" eyebrow="Trabajo seleccionado" title="Proyectos destacados" />
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-x-14">
          {projects.map((project, index) => (
            <article key={project.id} className="group flex min-w-0 flex-col">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${project.title} (abre en otra pestaña)`} className="relative block aspect-[3/2] overflow-hidden rounded-sm bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.025] group-focus-within:scale-[1.025]"
                />
              </a>
              <div className="mb-4 mt-6 flex items-start gap-4">
                <span aria-hidden="true" className="pt-1 text-xs tabular-nums text-muted-foreground">0{index + 1}</span>
                <h3 className="text-xl font-medium leading-snug md:text-2xl">{project.title}</h3>
              </div>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">{project.description}</p>
              <ul aria-label={`Tecnologías de ${project.title}`} className="mb-7 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="skill-tag">{tech}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-link min-h-11" aria-label={`Repositorio de ${project.title}`}>
                    <Github aria-hidden="true" className="h-4 w-4" /> Repositorio
                  </a>
                )}
                <Button variant="ghost" size="sm" asChild className="ml-auto">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Demo de ${project.title}`}>
                    Demo <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

