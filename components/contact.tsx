"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Download, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useSendEmail } from '@/hooks/useSendEmail';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { sendEmail, loading, error, success } = useSendEmail();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("contact")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

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
    <section id="contact" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="relative inline-block">
            Contacto
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
          </span>
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">¡Hablemos!</h3>
            <p className="text-muted-foreground mb-8">
              Estoy interesado en oportunidades freelance y proyectos desafiantes. Si tienes alguna pregunta o
              propuesta, no dudes en contactarme.
            </p>

            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border border-primary/10">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:jeangarzon24@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      jeangarzon24@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold">Redes sociales</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a href="https://github.com/jeangq24" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/jeangarzon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="gap-2 border-primary/20 text-primary hover:bg-primary/10" asChild>
                <a href="/JeanCv.pdf" download="JeanSebastianGarzonCV.pdf" aria-label="Download CV">
                  <Download className="h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="bg-card/50 backdrop-blur-sm border border-primary/10 focus-visible:ring-primary"
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="bg-card/50 backdrop-blur-sm border border-primary/10 focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tu mensaje..."
                    rows={5}
                    required
                    className="bg-card/50 backdrop-blur-sm border border-primary/10 focus-visible:ring-primary"
                  />
                </div>
              </div>
              {error && (
                <p className="text-sm text-destructive text-center animate-pulse">
                  {error}
                </p>
              )}

              {success && (
                <p className="text-sm text-primary text-center animate-pulse">
                  ¡Mensaje enviado con éxito!
                </p>
              )}
              <Button
                type="submit"
                className="w-full gap-2 group"
                disabled={loading}
              >
                {loading ? (
                  <div className="h-4 w-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

