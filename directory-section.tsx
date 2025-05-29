"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin, Phone, Mail, ExternalLink, Star, ArrowRight } from "lucide-react"

export default function DirectorySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const businesses = [
    {
      id: 1,
      name: "Wayuu Desert Tours",
      category: "Turismo Cultural",
      location: "Uribia, La Guajira",
      description:
        "Experiencias auténticas con comunidades wayuu, incluyendo visitas a rancherías y talleres de artesanías.",
      contact: {
        phone: "+57 300 123 4567",
        email: "info@wayuudesert.com",
        website: "www.wayuudesert.com",
      },
      rating: 4.8,
      reviews: 127,
      image: "/placeholder.svg?height=200&width=300&text=Wayuu+Tours",
      tags: ["Turismo Cultural", "Artesanías", "Comunidad Wayuu"],
    },
    {
      id: 2,
      name: "Cabo Ecohotel",
      category: "Hospedaje",
      location: "Cabo de la Vela, La Guajira",
      description: "Hotel ecológico con vista al mar, construido con materiales locales y energía solar.",
      contact: {
        phone: "+57 301 234 5678",
        email: "reservas@caboecohotel.com",
        website: "www.caboecohotel.com",
      },
      rating: 4.6,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=300&text=Cabo+Ecohotel",
      tags: ["Hospedaje", "Sostenible", "Vista al Mar"],
    },
    {
      id: 3,
      name: "Sabores Guajiros",
      category: "Gastronomía",
      location: "Riohacha, La Guajira",
      description: "Restaurante especializado en cocina tradicional wayuu y mariscos frescos del Caribe.",
      contact: {
        phone: "+57 302 345 6789",
        email: "contacto@saboresguajiros.com",
        website: "www.saboresguajiros.com",
      },
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=300&text=Sabores+Guajiros",
      tags: ["Gastronomía", "Mariscos", "Cocina Wayuu"],
    },
    {
      id: 4,
      name: "Aventuras Punta Gallinas",
      category: "Ecoturismo",
      location: "Punta Gallinas, La Guajira",
      description: "Expediciones al punto más septentrional de Sudamérica con guías locales especializados.",
      contact: {
        phone: "+57 303 456 7890",
        email: "info@aventuraspunta.com",
        website: "www.aventuraspunta.com",
      },
      rating: 4.9,
      reviews: 203,
      image: "/placeholder.svg?height=200&width=300&text=Punta+Gallinas",
      tags: ["Ecoturismo", "Aventura", "Guías Locales"],
    },
    {
      id: 5,
      name: "Artesanías Wayuu Authentic",
      category: "Artesanías",
      location: "Manaure, La Guajira",
      description: "Taller familiar de artesanías wayuu tradicionales, mochilas, hamacas y joyería.",
      contact: {
        phone: "+57 304 567 8901",
        email: "info@wayuuauthentic.com",
        website: "www.wayuuauthentic.com",
      },
      rating: 4.5,
      reviews: 78,
      image: "/placeholder.svg?height=200&width=300&text=Artesanias+Wayuu",
      tags: ["Artesanías", "Mochilas", "Tradición Wayuu"],
    },
    {
      id: 6,
      name: "Posada del Desierto",
      category: "Hospedaje",
      location: "Cabo de la Vela, La Guajira",
      description: "Hospedaje familiar con vista al desierto y acceso directo a la playa.",
      contact: {
        phone: "+57 305 678 9012",
        email: "reservas@posadadeldesierto.com",
        website: "www.posadadeldesierto.com",
      },
      rating: 4.3,
      reviews: 92,
      image: "/placeholder.svg?height=200&width=300&text=Posada+Desierto",
      tags: ["Hospedaje", "Familiar", "Playa"],
    },
    {
      id: 7,
      name: "Mariscos del Caribe",
      category: "Gastronomía",
      location: "Riohacha, La Guajira",
      description: "Especialistas en mariscos frescos y pescados del Caribe con recetas tradicionales.",
      contact: {
        phone: "+57 306 789 0123",
        email: "info@mariscosdelcaribe.com",
        website: "www.mariscosdelcaribe.com",
      },
      rating: 4.4,
      reviews: 134,
      image: "/placeholder.svg?height=200&width=300&text=Mariscos+Caribe",
      tags: ["Gastronomía", "Mariscos", "Pescados"],
    },
    {
      id: 8,
      name: "Transporte Guajira Express",
      category: "Transporte",
      location: "Riohacha, La Guajira",
      description: "Servicio de transporte turístico especializado en rutas por La Guajira.",
      contact: {
        phone: "+57 307 890 1234",
        email: "info@guajiraexpress.com",
        website: "www.guajiraexpress.com",
      },
      rating: 4.2,
      reviews: 67,
      image: "/placeholder.svg?height=200&width=300&text=Transporte+Express",
      tags: ["Transporte", "Turístico", "Rutas"],
    },
  ]

  const categories = [
    { name: "Todos", count: businesses.length, color: "bg-gray-100 text-gray-800" },
    {
      name: "Turismo Cultural",
      count: businesses.filter((b) => b.category === "Turismo Cultural").length,
      color: "bg-turquoise-100 text-turquoise-800",
    },
    {
      name: "Hospedaje",
      count: businesses.filter((b) => b.category === "Hospedaje").length,
      color: "bg-coral-100 text-coral-800",
    },
    {
      name: "Gastronomía",
      count: businesses.filter((b) => b.category === "Gastronomía").length,
      color: "bg-amber-100 text-amber-800",
    },
    {
      name: "Ecoturismo",
      count: businesses.filter((b) => b.category === "Ecoturismo").length,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Artesanías",
      count: businesses.filter((b) => b.category === "Artesanías").length,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Transporte",
      count: businesses.filter((b) => b.category === "Transporte").length,
      color: "bg-blue-100 text-blue-800",
    },
  ]

  // Filter businesses based on selected category
  const filteredBusinesses =
    selectedCategory === "Todos" ? businesses : businesses.filter((business) => business.category === selectedCategory)

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-turquoise-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">Directorio de Emprendimientos</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Descubre y conecta con emprendimientos turísticos exitosos en La Guajira. Inspírate y encuentra socios
            potenciales para tu proyecto.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">Explora por categoría</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 border border-opacity-50 ${
                  selectedCategory === category.name
                    ? `${category.color} border-current shadow-md scale-105`
                    : `${category.color} border-current opacity-70 hover:opacity-100`
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Filter Results Info */}
          <div className="text-center mt-4">
            <p className="text-sm text-amber-600">
              {selectedCategory === "Todos"
                ? `Mostrando todos los ${filteredBusinesses.length} emprendimientos`
                : `Mostrando ${filteredBusinesses.length} emprendimiento${filteredBusinesses.length !== 1 ? "s" : ""} de ${selectedCategory}`}
            </p>
          </div>
        </div>

        {/* Featured Businesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredBusinesses.length > 0 ? (
            filteredBusinesses.map((business) => (
              <Card
                key={business.id}
                className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="aspect-video bg-gray-100 relative">
                  <img
                    src={business.image || "/placeholder.svg"}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-amber-800">
                      {business.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-amber-900 mb-2">{business.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{business.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{business.rating}</span>
                      <span className="text-xs text-gray-500">({business.reviews})</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{business.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {business.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{business.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>{business.contact.email}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-turquoise-500 text-turquoise-700 hover:bg-turquoise-50"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visitar Web
                    </Button>
                    <Button size="sm" className="flex-1 bg-coral-500 hover:bg-coral-600 text-white">
                      Contactar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <Building2 className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No hay emprendimientos en esta categoría</h3>
              <p className="text-gray-500">
                Intenta seleccionar otra categoría o vuelve a "Todos" para ver todos los emprendimientos.
              </p>
              <Button
                onClick={() => setSelectedCategory("Todos")}
                variant="outline"
                className="mt-4 border-turquoise-500 text-turquoise-700 hover:bg-turquoise-50"
              >
                Ver todos los emprendimientos
              </Button>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-turquoise-200 bg-turquoise-50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-turquoise-700 mb-2">{businesses.length}+</div>
              <div className="text-turquoise-600 font-medium">Emprendimientos Registrados</div>
            </CardContent>
          </Card>
          <Card className="text-center border-coral-200 bg-coral-50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-coral-700 mb-2">12</div>
              <div className="text-coral-600 font-medium">Municipios Representados</div>
            </CardContent>
          </Card>
          <Card className="text-center border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-amber-700 mb-2">500+</div>
              <div className="text-amber-600 font-medium">Empleos Generados</div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-2 border-turquoise-200 bg-turquoise-50 max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <Building2 className="h-12 w-12 text-turquoise-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-turquoise-900 mb-4">¿Tienes un emprendimiento turístico?</h3>
              <p className="text-turquoise-700 mb-6">
                Únete a nuestro directorio y conecta con más turistas y colaboradores en La Guajira.
              </p>
              <Button className="bg-turquoise-600 hover:bg-turquoise-700 text-white font-semibold px-6 py-3 rounded-full">
                Registrar mi Emprendimiento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
