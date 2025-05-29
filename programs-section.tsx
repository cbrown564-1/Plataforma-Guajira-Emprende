import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DollarSign,
  GraduationCap,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Building2,
  Lightbulb,
  HandHeart,
} from "lucide-react"

export default function ProgramsSection() {
  const programs = [
    {
      id: 1,
      title: "Fondo Emprender Turismo",
      description: "Financiación hasta $50M para proyectos turísticos sostenibles en La Guajira",
      type: "Fondo No Reembolsable",
      deadline: "15 Mar 2024",
      eligibility: "Jóvenes 18-28 años",
      icon: DollarSign,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      accentColor: "bg-green-600",
    },
    {
      id: 2,
      title: "Escuela de Turismo Wayuu",
      description: "Programa de formación en turismo cultural y gestión empresarial",
      type: "Formación Gratuita",
      deadline: "30 Ene 2024",
      eligibility: "Comunidades locales",
      icon: GraduationCap,
      iconColor: "text-turquoise-600",
      bgColor: "bg-turquoise-50",
      borderColor: "border-turquoise-200",
      accentColor: "bg-turquoise-600",
    },
    {
      id: 3,
      title: "Microcréditos Bancóldex",
      description: "Créditos blandos para emprendimientos turísticos con acompañamiento",
      type: "Microcrédito",
      deadline: "Convocatoria Abierta",
      eligibility: "PYMES turísticas",
      icon: Users,
      iconColor: "text-coral-600",
      bgColor: "bg-coral-50",
      borderColor: "border-coral-200",
      accentColor: "bg-coral-600",
    },
    {
      id: 4,
      title: "Incubadora de Turismo",
      description: "Acompañamiento integral para startups de turismo sostenible",
      type: "Incubación",
      deadline: "20 Feb 2024",
      eligibility: "Emprendedores",
      icon: Building2,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      accentColor: "bg-amber-600",
    },
    {
      id: 5,
      title: "Innovación Turística",
      description: "Apoyo para proyectos tecnológicos que transformen el turismo",
      type: "Capital Semilla",
      deadline: "10 Abr 2024",
      eligibility: "Equipos técnicos",
      icon: Lightbulb,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      accentColor: "bg-purple-600",
    },
    {
      id: 6,
      title: "Turismo Comunitario",
      description: "Fortalecimiento de iniciativas turísticas comunitarias wayuu",
      type: "Apoyo Directo",
      deadline: "Permanente",
      eligibility: "Comunidades wayuu",
      icon: HandHeart,
      iconColor: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      accentColor: "bg-rose-600",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">Programas Disponibles</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Descubre todos los programas de financiación, formación y apoyo diseñados para impulsar tu emprendimiento
            turístico en La Guajira
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {programs.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {programs.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-amber-300 opacity-50" />
              ))}
            </div>
            <p className="text-center text-sm text-amber-600 mt-2">Desliza para ver más programas →</p>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-turquoise-500 text-turquoise-700 hover:bg-turquoise-50 font-semibold px-8 py-3 rounded-full"
          >
            Ver Todos los Programas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProgramCard({ program }: { program: any }) {
  const IconComponent = program.icon

  return (
    <Card
      className={`w-80 md:w-full flex-shrink-0 snap-start ${program.borderColor} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white relative overflow-hidden group`}
    >
      {/* Accent stripe */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${program.accentColor}`} />

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-xl ${program.bgColor} group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className={`h-6 w-6 ${program.iconColor}`} />
          </div>
          <div className="text-right">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              Activo
            </span>
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-amber-900 mt-4 group-hover:text-turquoise-700 transition-colors duration-300">
          {program.title}
        </CardTitle>
        <p className="text-amber-700 text-sm leading-relaxed">{program.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Program Type */}
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50">
          <DollarSign className="h-4 w-4 text-amber-600 flex-shrink-0" />
          <div>
            <span className="text-xs text-gray-500 block">Tipo</span>
            <span className="text-sm font-medium text-amber-800">{program.type}</span>
          </div>
        </div>

        {/* Deadline */}
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50">
          <Calendar className="h-4 w-4 text-amber-600 flex-shrink-0" />
          <div>
            <span className="text-xs text-gray-500 block">Cierre</span>
            <span className="text-sm text-amber-700">{program.deadline}</span>
          </div>
        </div>

        {/* Eligibility */}
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50">
          <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
          <div>
            <span className="text-xs text-gray-500 block">Dirigido a</span>
            <span className="text-sm text-amber-700">{program.eligibility}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button
          className={`w-full ${program.accentColor} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-200 group-hover:shadow-lg`}
        >
          Ver Detalles
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </CardFooter>
    </Card>
  )
}
