import Image from "next/image"
import SectionHeading from "@/components/section-heading"

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "TailwindCss",
    "Node.js",
    "NestJS",
    "Sql",
    "Sequelize",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
    "Firebase",
    "Supabase",
    "Google Cloud",
    "API Integration",
    "IA Integraciones",
    "Orientacion a producto"
  ]

  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className="portfolio-section">
      <div className="portfolio-shell">
        <SectionHeading id="about-title" number="01" eyebrow="Perfil" title="Sobre mí" />
        <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <h3 className="mb-6 text-xl font-medium md:text-2xl">Desarrollador de software</h3>
            <p className="mb-5 text-muted-foreground">
              Desarrollador de software Full Stack con más de 4 años de experiencia en construcción de aplicaciones web y
              productos digitales. Experiencia en desarrollo frontend y backend, integración de APIs, gestión de datos y
              participación en arquitecturas basadas en servicios.

            </p>
            <p className="mb-10 text-muted-foreground">
              Trabajo principalmente con TypeScript, React, Next.js, NestJS y SQL. He participado en equipos de desarrollo
              colaborativos, trabajando en funcionalidades de producto, mantenimiento y evolución de aplicaciones.
              Me interesa comprender los sistemas de forma integral, analizar problemas y construir soluciones mantenibles que
              respondan a necesidades reales de negocio.
            </p>

            <div className="border-t border-border pt-7">
              <h4 className="mb-4 text-sm font-semibold">Habilidades técnicas</h4>
              <ul aria-label="Habilidades técnicas" className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="skill-tag">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
              <Image
                src="/JeanDev.png"
                alt="Jean Sebastian Garzón - Desarrollador de software"
                fill
                sizes="(max-width: 767px) 90vw, 40vw"
                className="object-cover object-top grayscale"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
              <span>Jean Sebastian Garzón</span>
              <span>Desarrollador de software</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

