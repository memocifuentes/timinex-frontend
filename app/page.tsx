"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Check, Globe, ArrowRight, Zap, ChevronLeft, ChevronRight } from "lucide-react"

export default function LandingPage() {
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [currentSlide, setCurrentSlide] = useState(0)

  const content = {
    es: {
      // Header
      nav: {
        features: "Características",
        pricing: "Planes",
        contact: "Contacto",
        login: "Iniciar Sesión",
      },
      // Hero Section
      hero: {
        badge: "Gestión profesional de agendas",
        title: "Timinex - Deja que las personas reserven tu tiempo",
        subtitle: (
          <>
            La plataforma completa para profesionales de servicios
            <br />
            Agenda, cobra y crece tu negocio desde un solo lugar
          </>
        ),
        cta: "Comenzar gratis",
        ctaSecondary: "Ver demo",
      },
      features: {
        title: "Todo lo que necesitas para gestionar tu negocio",
        subtitle: "Herramientas profesionales diseñadas para hacer crecer tus servicios",
        slides: [
          {
            title: "Calendario Inteligente",
            description:
              "Gestiona todas tus clases, consultas y sesiones desde un calendario intuitivo y fácil de usar. Crea eventos recurrentes, configura capacidades y organiza tu tiempo de forma profesional.",
            image: "/images/feature-calendar.jpg",
            cta: "Explorar calendario",
          },
          {
            title: "Gestión de Contactos",
            description:
              "Administra tu base completa de contactos con historiales detallados, planes de suscripción y seguimiento personalizado. Todo lo que necesitas saber sobre tus clientes en un solo lugar.",
            image: "/images/feature-contacts.jpg",
            cta: "Ver gestión",
          },
          {
            title: "Notificaciones Automáticas",
            description:
              "Envía recordatorios automáticos por email a tus contactos. Reduce ausencias, mejora la experiencia de servicio y mantén a todos informados sin esfuerzo manual.",
            image: "/images/feature-notifications.jpg",
            cta: "Configurar notificaciones",
          },
          {
            title: "Reportes y Métricas",
            description:
              "Visualiza el rendimiento de tu negocio en tiempo real con estadísticas de asistencia, ingresos y ocupación. Toma decisiones inteligentes basadas en datos reales.",
            image: "/images/feature-reports.jpg",
            cta: "Ver reportes",
          },
        ],
      },
      // How it works
      howItWorks: {
        title: "¿Cómo funciona?",
        subtitle: "Comienza a gestionar tu negocio en 3 simples pasos",
        steps: [
          {
            number: "01",
            title: "Crea tu cuenta",
            description:
              "Regístrate en minutos y configura tu perfil profesional con tus datos, ubicaciones y preferencias de negocio.",
          },
          {
            number: "02",
            title: "Configura tu agenda",
            description: "Define tus servicios, horarios, capacidades y condiciones según tu modelo de negocio único.",
          },
          {
            number: "03",
            title: "Invita a tus contactos",
            description:
              "Comparte tu enlace, tus contactos se registran y comienzan a reservar tus servicios de forma automática.",
          },
        ],
      },
      // Pricing Section
      pricing: {
        title: "Planes que se adaptan a tu negocio",
        subtitle: "Elige el plan perfecto para tu etapa de crecimiento",
        plans: [
          {
            name: "Free",
            price: "$0",
            period: "/mes",
            description: "Perfecto para comenzar",
            features: [
              "Hasta 20 contactos",
              "Calendario básico",
              "1 ubicación",
              "Notificaciones por email",
              "Reportes básicos",
            ],
            cta: "Comenzar gratis",
            popular: false,
          },
          {
            name: "Start",
            price: "$29",
            period: "/mes",
            description: "Para profesionales en crecimiento",
            features: [
              "Hasta 100 contactos",
              "Calendario avanzado",
              "3 ubicaciones",
              "Sesiones virtuales",
              "Planes de suscripción",
              "Reportes detallados",
              "Soporte prioritario",
            ],
            cta: "Comenzar prueba",
            popular: true,
          },
          {
            name: "Premium",
            price: "$79",
            period: "/mes",
            description: "Para negocios establecidos",
            features: [
              "Contactos ilimitados",
              "Ubicaciones ilimitadas",
              "Eventos especiales",
              "Múltiples profesionales",
              "API personalizada",
              "Marca blanca",
              "Soporte dedicado 24/7",
            ],
            cta: "Contactar ventas",
            popular: false,
          },
        ],
      },
      // Contact Section
      contact: {
        title: "¿Tienes preguntas?",
        subtitle: "Estamos aquí para ayudarte. Contáctanos y te responderemos pronto.",
        form: {
          name: "Nombre completo",
          email: "Email",
          message: "Mensaje",
          submit: "Enviar mensaje",
        },
      },
      // Footer
      footer: {
        description: "La plataforma profesional para gestionar tu negocio de servicios.",
        product: "Producto",
        company: "Empresa",
        legal: "Legal",
        rights: "Todos los derechos reservados.",
      },
    },
    en: {
      // Header
      nav: {
        features: "Features",
        pricing: "Pricing",
        contact: "Contact",
        login: "Log In",
      },
      // Hero Section
      hero: {
        badge: "Professional schedule management",
        title: "Timinex - Let people book your time",
        subtitle: (
          <>
            The complete platform for service professionals
            <br />
            Schedule, collect, and grow your business from one place
          </>
        ),
        cta: "Start for free",
        ctaSecondary: "Watch demo",
      },
      features: {
        title: "Everything you need to manage your business",
        subtitle: "Professional tools designed to grow your services",
        slides: [
          {
            title: "Smart Calendar",
            description:
              "Manage all your classes, appointments, and sessions from an intuitive and easy-to-use calendar. Create recurring events, configure capacities, and organize your time professionally.",
            image: "/images/feature-calendar.jpg",
            cta: "Explore calendar",
          },
          {
            title: "Contact Management",
            description:
              "Manage your complete contact base with detailed histories, subscription plans, and personalized tracking. Everything you need to know about your clients in one place.",
            image: "/images/feature-contacts.jpg",
            cta: "View management",
          },
          {
            title: "Automatic Notifications",
            description:
              "Send automatic email reminders to your contacts. Reduce absences, improve service experience, and keep everyone informed without manual effort.",
            image: "/images/feature-notifications.jpg",
            cta: "Configure notifications",
          },
          {
            title: "Reports and Metrics",
            description:
              "Visualize your business performance in real-time with attendance, revenue, and occupancy statistics. Make smart decisions based on real data.",
            image: "/images/feature-reports.jpg",
            cta: "View reports",
          },
        ],
      },
      // How it works
      howItWorks: {
        title: "How it works?",
        subtitle: "Start managing your business in 3 simple steps",
        steps: [
          {
            number: "01",
            title: "Create your account",
            description:
              "Sign up in minutes and set up your professional profile with your information, locations, and business preferences.",
          },
          {
            number: "02",
            title: "Set up your schedule",
            description:
              "Define your services, schedules, capacities, and conditions according to your unique business model.",
          },
          {
            number: "03",
            title: "Invite your contacts",
            description: "Share your link, your contacts register and start booking your services automatically.",
          },
        ],
      },
      // Pricing Section
      pricing: {
        title: "Plans that fit your business",
        subtitle: "Choose the perfect plan for your growth stage",
        plans: [
          {
            name: "Free",
            price: "$0",
            period: "/month",
            description: "Perfect to get started",
            features: ["Up to 20 contacts", "Basic calendar", "1 location", "Email notifications", "Basic reports"],
            cta: "Start for free",
            popular: false,
          },
          {
            name: "Start",
            price: "$29",
            period: "/month",
            description: "For growing professionals",
            features: [
              "Up to 100 contacts",
              "Advanced calendar",
              "3 locations",
              "Virtual sessions",
              "Subscription plans",
              "Detailed reports",
              "Priority support",
            ],
            cta: "Start trial",
            popular: true,
          },
          {
            name: "Premium",
            price: "$79",
            period: "/month",
            description: "For established businesses",
            features: [
              "Unlimited contacts",
              "Unlimited locations",
              "Special events",
              "Multiple professionals",
              "Custom API",
              "White label",
              "Dedicated 24/7 support",
            ],
            cta: "Contact sales",
            popular: false,
          },
        ],
      },
      // Contact Section
      contact: {
        title: "Have questions?",
        subtitle: "We're here to help. Contact us and we'll respond soon.",
        form: {
          name: "Full name",
          email: "Email",
          message: "Message",
          submit: "Send message",
        },
      },
      // Footer
      footer: {
        description: "The professional platform to manage your service business.",
        product: "Product",
        company: "Company",
        legal: "Legal",
        rights: "All rights reserved.",
      },
    },
  }

  const t = content[language]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % t.features.slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + t.features.slides.length) % t.features.slides.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-green-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/timinex-logo.png" alt="Timinex" width={140} height={40} className="h-10 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.features}
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.pricing}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="flex items-center gap-2 hover:bg-blue-50"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{language === "es" ? "EN" : "ES"}</span>
              </Button>

              <Link href="/login">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-6">
                  {t.nav.login}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-green-400 py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Timinex Calendar Illustration"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/60 via-blue-500/70 to-green-400/80" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute top-10 left-[5%] w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-green-300/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-ping" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-200/60 rounded-full animate-ping delay-500" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full text-sm font-semibold text-white mb-6 border-2 border-white/40 shadow-lg">
              <Zap className="w-4 h-4" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-lg">
              {t.hero.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white mb-10 max-w-3xl mx-auto text-pretty leading-relaxed drop-shadow-md">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/login">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-blue-900/20"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm font-semibold bg-white/10"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-0 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        {/* Carousel Container */}
        <div className="relative">
          {/* Slides */}
          <div className="relative h-[600px] sm:h-[700px] lg:h-[800px]">
            {t.features.slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Left: Text Content */}
                    <div className="text-white space-y-6 lg:pr-12">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 rounded-full text-sm font-semibold">
                        {language === "es" ? "Característica Principal" : "Key Feature"}
                      </div>
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-lg sm:text-xl text-gray-200 leading-relaxed text-pretty">
                        {slide.description}
                      </p>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                      >
                        {slide.cta}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>

                    {/* Right: Product Screenshot Mockup */}
                    <div className="hidden lg:flex justify-center items-center">
                      <div className="relative">
                        {/* Desktop Screenshot */}
                        <div className="relative bg-white rounded-lg shadow-2xl p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                          <div className="bg-gray-200 rounded-t-md p-2 flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <div className="bg-white w-[500px] h-[350px] rounded-b-md overflow-hidden">
                            <Image
                              src={`/timinex-.jpg?key=sttox&height=350&width=500&query=Timinex ${slide.title} dashboard screenshot`}
                              alt={`${slide.title} screenshot`}
                              width={500}
                              height={350}
                              className="object-cover"
                            />
                          </div>
                        </div>

                        {/* Mobile Screenshot Overlay */}
                        <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-2 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                          <div className="bg-gray-900 rounded-2xl overflow-hidden w-[180px] h-[360px]">
                            <Image
                              src={`/timinex-.jpg?key=385az&height=360&width=180&query=Timinex ${slide.title} mobile app`}
                              alt={`${slide.title} mobile`}
                              width={180}
                              height={360}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-full transition-all duration-300 group border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-full transition-all duration-300 group border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {t.features.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              {t.howItWorks.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-pretty">{t.howItWorks.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl text-white text-3xl font-bold mb-6 shadow-xl shadow-blue-200/50 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              {t.pricing.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-pretty">{t.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.pricing.plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 transition-all duration-300 ${
                  plan.popular
                    ? "border-blue-500 shadow-2xl scale-105 bg-gradient-to-b from-blue-50 to-white"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {language === "es" ? "Más Popular" : "Most Popular"}
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <Button
                    className={`w-full rounded-full py-6 text-lg font-semibold mb-8 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-green-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-pretty">{t.contact.subtitle}</p>
          </div>

          <Card className="border-2 border-blue-100 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.name}</label>
                  <Input className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.email}</label>
                  <Input
                    type="email"
                    className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.message}</label>
                  <Textarea
                    rows={5}
                    className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white rounded-full py-6 text-lg font-semibold shadow-lg">
                  {t.contact.form.submit}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/timinex-logo.png"
                alt="Timinex"
                width={140}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    {t.nav.features}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    {t.nav.pricing}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Timinex. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
