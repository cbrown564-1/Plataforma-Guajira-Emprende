import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="La Guajira desert landscape with traditional Wayuu textiles"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 via-amber-900/30 to-red-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Government Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="text-white text-sm font-medium">
              Gobierno de Colombia • Ministerio de Comercio, Industria y Turismo
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Emprende en el
            <span className="block text-yellow-300">Turismo Colombiano</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Descubre oportunidades únicas para desarrollar tu negocio turístico en La Guajira y toda Colombia.
            Conectamos emprendedores con recursos, financiación y conocimiento ancestral.
          </p>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 h-auto rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Encuentra Oportunidades
            </Button>
          </div>

          {/* Supporting Text */}
          <div className="pt-6 sm:pt-8">
            <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
              Respaldado por el gobierno colombiano para fortalecer el turismo sostenible y preservar nuestras
              tradiciones culturales
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-10" />

      {/* Cultural Pattern Overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
        <div className="w-full h-full bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
