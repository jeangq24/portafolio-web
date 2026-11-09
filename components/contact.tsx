"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Mail, Download, Send, Loader2, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SectionHeading from "@/components/section-heading"
import { useSendEmail } from '@/hooks/useSendEmail';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { sendEmail, loading, error, success } = useSendEmail();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await sendEmail(formData);

    if (result) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="portfolio-section">
      <div className="portfolio-shell">
        <SectionHeading id="contact-title" number="03" eyebrow="Conectemos" title="Contacto" />
        <div className="grid gap-14 md:grid-cols-2 lg:gap-24">
          <div>
            <h3 className="display-type mb-6 text-5xl italic">¡Hablemos!</h3>
            <p className="mb-9 max-w-md text-muted-foreground">
              Estoy interesado en oportunidades freelance y proyectos desafiantes. Si tienes alguna pregunta o
              propuesta, no dudes en contactarme.
            </p>

            <div className="space-y-8">
              <div className="border-y border-border py-6">
                <p className="mb-3 text-xs text-muted-foreground">Email</p>
                <a href="mailto:jeangarzon24@gmail.com" className="group flex items-center gap-3 text-sm sm:text-base">
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                  <span className="break-all">jeangarzon24@gmail.com</span>
                  <ArrowUpRight aria-hidden="true" className="ml-auto h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-medium">Redes sociales</h4>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href="https://github.com/jeangq24" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                      <Github aria-hidden="true" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/jeangarzon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                      <Linkedin aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>

              <Button variant="outline" asChild>
                <a href="/JeanSebastianGarzonCV.pdf" download="JeanSebastianGarzonCV.pdf">
                  <Download aria-hidden="true" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} aria-label="Formulario de contacto" aria-busy={loading}>
              <fieldset disabled={loading} className="min-w-0 space-y-6">
                <legend className="sr-only">Enviar un mensaje</legend>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={120}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    maxLength={5000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tu mensaje..."
                    rows={5}
                    required
                  />
                </div>
              </fieldset>
              <div role="status" aria-live="polite" aria-atomic="true" className="min-h-12 py-3 text-sm">
                {loading ? <p className="text-muted-foreground">Enviando mensaje...</p> : error ? <p className="text-destructive">{error}</p> : success ? <p>¡Mensaje enviado con éxito!</p> : null}
              </div>
              <Button
                type="submit"
                className="group w-full justify-between"
                disabled={loading}
              >
                {loading ? "Enviando mensaje..." : "Enviar mensaje"}
                {loading ? <Loader2 aria-hidden="true" className="animate-spin" /> : <Send aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

