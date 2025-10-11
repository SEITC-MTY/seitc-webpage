"use client";
import React from "react";
import Image from "next/image";
import { Users, Target, Heart, BookOpen, Globe, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Misión",
      description: "Promover el desarrollo académico y profesional de los estudiantes de Ingeniería en Tecnologías Computacionales, fomentando la innovación y el liderazgo tecnológico."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Visión",
      description: "Ser la sociedad estudiantil líder en tecnología, formando profesionistas competentes que transformen la industria con ética y excelencia."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovación",
      description: "Fomentamos el pensamiento creativo y la búsqueda constante de soluciones tecnológicas que impacten positivamente en la sociedad."
    }
  ];

  const activities = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Talleres y Workshops",
      description: "Sesiones prácticas con las últimas tecnologías y herramientas de la industria."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Viajes Académicos",
      description: "Experiencias inmersivas en empresas tecnológicas líderes a nivel mundial."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Networking",
      description: "Conexiones con profesionales, egresados y empresas del sector tecnológico."
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Sobre</span>{" "}
            <span className="bg-gradient-to-r from-[#0C2748] via-[#0C3A6A] to-[#0B89D0] bg-clip-text text-transparent">
              Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La Sociedad Estudiantil de Ingeniería en Tecnologías Computacionales del Tecnológico de Monterrey, 
            Campus Monterrey, es una comunidad comprometida con la excelencia académica y el crecimiento profesional.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              ¿Quiénes somos?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos una organización estudiantil que busca enriquecer la experiencia académica de nuestros miembros 
              a través de actividades que complementen su formación profesional y personal.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde nuestra fundación, hemos trabajado incansablemente para crear un puente entre el mundo académico 
              y la industria tecnológica, ofreciendo oportunidades únicas de crecimiento y desarrollo.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestra comunidad está formada por estudiantes apasionados por la tecnología, la innovación y el 
              impacto positivo que podemos generar en la sociedad a través de nuestros conocimientos y habilidades.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Toma-Protesta.jpeg"
                alt="Miembros de SEITC en ceremonia"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#0C2748] to-[#0B89D0] rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-[#0B89D0] rounded-full opacity-30" />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#0C2748] to-[#0B89D0] rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Qué Hacemos?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/90 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0C2748] to-[#0B89D0] rounded-lg flex items-center justify-center text-white">
                    {activity.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{activity.title}</h4>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;