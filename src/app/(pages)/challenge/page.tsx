"use client";
import React from "react";
import { MapPin, Clock, Calendar, Users, AlertCircle } from "lucide-react";

const rules = [
  "El cupo está limitado a 30 equipos.",
  "Cada equipo deberá contar con un nombre representativo y estar conformado por 3 estudiantes.",
  "Todos los integrantes deberán ser estudiantes de ITC con la excepción de que se permitirá un máximo de 10 equipos que incluyan 1 integrante de otra carrera.",
  "Es obligatorio que los 3 integrantes del equipo se presenten puntualmente y con su credencial del TEC el día del evento a la hora establecida para el registro. No se permitirá el acceso parcial al evento del equipo.",
  "El primer paso para solicitar el registro deberá realizarse en el QR. Solicitar el registro no garantiza un lugar en el evento.",
  "Se dará prioridad a los equipos que cuenten con alumnas y alumnos como integrantes.",
  "En un plazo no mayor a 48 horas, los integrantes del equipo recibirán un correo electrónico notificando si su solicitud fue ACEPTADA o RECHAZADA.",
  "Los equipos que sean ACEPTADOS deberán completar su registro de manera individual (cada integrante) en la plataforma de Capital One que se les dará vía correo electrónico institucional, dentro de las 48 horas posteriores a la notificación. En caso de no haber completado el registro en el plazo establecido, el equipo será dado de baja para asignar su lugar a otro equipo.",
];

const ChallengePage = () => {
  return (
    <main className="bg-white min-h-screen">

      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-300 font-semibold tracking-widest uppercase text-sm mb-4" data-aos="fade-down">
            ITC + Capital One
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" data-aos="fade-up" data-aos-delay="50">
            SEITC Challenge 2026
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="150">
            ¡Te invitamos a vivir este gran Challenge de 8 horas!
          </p>
        </div>
      </section>

      {/* Event details bar */}
      <section className="bg-blue-800 text-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <Calendar className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Viernes 10 de Abril</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">9:00 a 20:00 hrs</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Pabellón Carreta</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Users className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Equipos de 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 pb-3 border-b border-gray-200" data-aos="fade-up">
            Bases y Requisitos
          </h2>
          <ul className="space-y-5">
            {rules.map((rule, i) => (
              <li
                key={i}
                className="flex gap-4 text-gray-700"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Registration */}
      <section className="bg-blue-50 py-16" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 pb-3 border-b border-blue-100">
            Registro
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Escanea el código QR para solicitar tu registro. Recuerda que solicitarlo no garantiza un lugar — recibirás confirmación por correo en un plazo no mayor a 48 horas.
              </p>
              <div className="flex items-start gap-3 bg-blue-100 text-blue-900 rounded-lg p-4 text-sm">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Cupo limitado a <strong>30 equipos</strong>. Se dará prioridad a equipos con integrantes mixtos.</span>
              </div>
            </div>
            {/* Replace src with the actual QR image path once available */}
            <div className="flex-shrink-0 w-44 h-44 border-2 border-blue-200 rounded-xl bg-white flex items-center justify-center">
              <span className="text-blue-300 text-xs text-center px-4 leading-relaxed">
                Coloca aquí el QR de registro
              </span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ChallengePage;
