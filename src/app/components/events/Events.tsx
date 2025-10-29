"use client"
import { Button } from 'seitc/app/_components/UI/Button2';
import { Badge } from 'seitc/app/_components/UI/Badge';
import { Filter, Clock, Calendar, MapPin, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Dialog, DialogContent, DialogHeader, DialogTitle} from 'seitc/app/_components/UI/Dialog';

// Importar las imágenes
import bienvenidaLogo from "../../../../public/images/Logo1.svg";
import bloombergLogo from "../../../../public/images/bloomberg.png";
import challengeLogo from "../../../../public/images/Logo_Blanco.svg";
import concienciaLogo from "../../../../public/images/Logo_Blanco.svg";
import cvLogo from "../../../../public/images/Logo2.svg";
import prepLogo from "../../../../public/images/Logo4.png";
import talksLogo from "../../../../public/images/Logo2.svg";
import datadogLogo from "../../../../public/images/datadog.png";
import panelmujeres from "../../../../public/images/panel_mujeres.jpeg";
import uber from "../../../../public/images/uber.png";


// Definir tipos/interfaces
interface DescripcionCompleja {
    texto: string;
    bullets: string[];
}

interface Evento {
    id: number;
    titulo: string;
    fecha: string;
    fechaFin?: string;
    tipo: 'taller' | 'evento' | 'conferencia' | 'competencia' | 'panel' | 'charla' | 'Recruitment';
    estado: 'pasado' | 'proximo';
    descripcion: string | DescripcionCompleja;
    ubicacion: string;
    hora?: string;
    cupos?: number;
    inscritos?: number;
    linkRegistro?: string;
}



export default function Events() {
    const [selectedFilter, setSelectedFilter] = useState("todos")
    const [selectedEvento, setSelectedEvento] = useState<Evento | null>(null)
    // Inicializar AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    // Refrescar AOS cuando cambian los filtros
    useEffect(() => {
        AOS.refresh();
    }, [selectedFilter]);
    
    const eventos: Evento[] = [
    /*{
        id: 1,
        titulo: "Bienvenida ITC",
        fecha: "2025-08-15",
        tipo: "evento",
        estado: "proximo",
        descripcion: "Un evento de integración dirigido a los estudiantes de nuevo ingreso a la carrera de Ingeniería en Tecnologías Computacionales (ITC), es un comienzo y recepción que ayuda a fomentar el sentido de comunidad y acompañar a los alumnos. Combina momentos informativos, dinámicas y espacios de convivencia.",
        ubicacion: "Campus Principal",
        cupos: 100,
        inscritos: 45,
    },*/
    {
        id: 1,
        titulo: "Bloomberg at Tec",
        // rango de 3 días: fecha (inicio) se mantiene para compatibilidad con el resto del código
        fecha: "2025-08-27",
        fechaFin: "2025-08-29",
        tipo: "conferencia",
        estado: "pasado",
        descripcion: "Una conferencia que ofrece a los estudiantes una experiencia directa con la empresa Bloomberg, mediante una charla interactiva. El evento incluye un espacio de networking donde los asistentes podrán conocer de primera mano las tecnologías que utiliza Bloomberg, las oportunidades laborales disponibles y el perfil profesional que buscan.",
        ubicacion: "Aulas 2, Auditorio de Biblioteca",
        cupos: 120,
        inscritos: 95,
        linkRegistro: ""
    },
    {
        id: 2,
        titulo: "Forjando Caminos: Mujeres en Ingenieria",
        fecha: "2025-09-02",
        tipo: "panel",
        estado: "pasado",
        descripcion: "El panel “Forjando Caminos: Mujeres en Ingeniería” busca visibilizar y celebrar el papel de las mujeres en el ámbito de la ingeniería. A través de un espacio de diálogo y reflexión, ingenieras compartirán sus experiencias, retos y logros, inspirando a las nuevas generaciones a seguir construyendo un futuro más inclusivo e innovador.",
        ubicacion: "Auditorio de Aulas 6 (A6 – 306)",
        hora: "4:00 pm - 6:00 pm",
        cupos: 50,
        inscritos: 32,
        linkRegistro: ""
    },
    {
        id: 3,
        titulo: "Datadog",
        fecha: "2025-09-04",
        tipo: "Recruitment",
        estado: "pasado",
        descripcion: {
        texto: "Este evento virtual exclusivo, organizado por Datadog en colaboración con el Tecnológico de Monterrey, está dirigido a estudiantes de Ciencias Computacionales e Ingeniería en Tecnologías Computacionales interesados en iniciar su carrera en Nueva York.",
        bullets: [
            "Conocer el programa de prácticas profesionales de Datadog y vacantes de tiempo completo para Software Engineer.",
            "Escuchar a ingenieros que comenzaron su carrera en Datadog como interns o early hires.",
            "Obtener consejos para destacar en entrevistas y entender mejor la cultura de ingeniería de la empresa."
        ]
        },
        ubicacion: "En línea vía Zoom",
        linkRegistro: ""
    },
    {
        id: 4,
        titulo: "ITC Talks @ Uber",
        fecha: "2025-09-19",
        tipo: "charla",
        estado: "pasado",
        descripcion: "Una charla con David Celis Martínez, exalumno de Ingeniería en Tecnologías Computacionales y referente en la comunidad tech. Ganador del Swift Student Challenge 2023 de Apple, con dos internships en Uber en el área de ingeniería, y actualmente Software Engineer en Uber en San Francisco. David compartirá cómo fue su camino desde el ITC hasta Silicon Valley: retos, aprendizajes, consejos prácticos y anécdotas únicas de su experiencia en la industria tecnológica global. Además, habrá un espacio de Q&A en vivo, ideal para estudiantes interesados en desarrollo de software, movilidad internacional, y cómo destacar en programas altamente competitivos.",
        ubicacion: "En Linea, Via Zoom",
        cupos: 40,
        inscritos: 12,
        linkRegistro: ""
    },
    {
        id: 5,
        titulo: "CV Power Up",
        fecha: "2025-09-25",
        tipo: "taller",
        estado: "pasado",
        descripcion: "Un taller para optimizar el currículum de estudiantes de Ingeniería en Tecnologías Computacionales, con enfoque en la industria tech y de software, logrando al menos 25 asistentes activos durante una sesión de 2 horas, y brindando retroalimentación personalizada a los participantes que traigan su CV.",
        ubicacion: "Aula de Conferencias",
        cupos: 25,
        inscritos: 21,
        linkRegistro: ""
    },
    {
        id: 6,
        titulo: "Ingeniería con Conciencia",
        fecha: "2025-10-02",
        tipo: "panel",
        estado: "pasado",
        descripcion: "Un evento tipo panel dirigido a estudiantes ITC y de la avenida ICT, el cual tiene como propósito discutir la relevancia de la ética profesional y tecnológica en la industria. A través de casos reales y experiencias compartidas por expertos, se busca generar un diálogo de alto impacto sobre cómo las decisiones que se toman pueden tener un efecto significativo en nuestro entorno.",
        ubicacion: "Sala Novela, Piso 6 - Biblioteca",
        cupos: 35,
        inscritos: 18,
        linkRegistro: ""
    },
    {
        id: 7,
        titulo: "Prep2Intern",
        fecha: "2025-12-10",
        tipo: "conferencia",
        estado: "proximo",
        descripcion: "Una conferencia donde estudiantes de ITC que han conseguido internships en empresas reconocidas (nacionales o internacionales), a través de un panel conversacional, con el objetivo de inspirar y orientar a por lo menos 30 estudiantes en su camino hacia prácticas profesionales o internships en la industria tecnológica.",
        ubicacion: "Auditorio de Aulas 6",
        cupos: 30,
        inscritos: 15,
        linkRegistro: ""
    },
    /*
    {
        id: 8,
        titulo: "SEITC Challenge",
        fecha: "2025-10-15",
        tipo: "competencia",
        estado: "proximo",
        descripcion: "Un hackatón dirigido a estudiantes de Ingeniería, con el objetivo de fomentar la creatividad, la solución de problemas reales y el trabajo en equipo.",
        ubicacion: "Laboratorios de Innovación",
        cupos: 60,
        inscritos: 28,
    }*/
    ];

    // Filtrar eventos basado en el filtro seleccionado
    const eventosFiltrados = selectedFilter === "todos" 
        ? eventos 
        : eventos.filter(evento => evento.tipo === selectedFilter);

    // Función para formatear fecha
    const formatFecha = (fechaStr: string) => {
        const fecha = new Date(fechaStr);
        return fecha.toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    // Retorna la imagen correspondiente según el evento
    const getEventoImage = (evento: Evento) => {
        switch (evento.titulo) {
        case "Bienvenida ITC":
            return bienvenidaLogo;
        case "Bloomberg at Tec":
            return bloombergLogo;
        case "SEITC Challenge":
            return challengeLogo;
        case "Ingeniería con Conciencia":
            return concienciaLogo;
        case "CV Power Up":
            return cvLogo;
        case "Prep2Intern":
            return prepLogo;
        case "ITC Talks":
            return talksLogo;
        case "Datadog":
            return datadogLogo;
        case "Forjando Caminos: Mujeres en Ingenieria":
            return panelmujeres;
        case "ITC Talks @ Uber":
            return uber;
        default:
            return bienvenidaLogo;
        }
    };

    const getEventoColor = (tipo: string) => {
        // Use the event type to return different color styles and avoid unused parameter warnings
        switch (tipo) {
            case "taller":
                return "bg-green-100 text-green-800 border border-green-200";
            case "evento":
                return "bg-purple-100 text-purple-800 border border-purple-200";
            case "conferencia":
                return "bg-yellow-100 text-yellow-800 border border-yellow-200";
            case "competencia":
                return "bg-red-100 text-red-800 border border-red-200";
            case "panel":
                return "bg-indigo-100 text-indigo-800 border border-indigo-200";
            case "charla":
                return "bg-teal-100 text-teal-800 border border-teal-200";
            case "Recruitment":
                return "bg-[#1746A2] text-white border border-blue-700";
            default:
                return "bg-blue-100 text-blue-800 border border-blue-200";
        }
    };

    const filtros = [
        { id: "todos", label: "Todos", count: eventos.length },
        { id: "taller", label: "Talleres", count: eventos.filter(e => e.tipo === "taller").length },
        { id: "evento", label: "Eventos", count: eventos.filter(e => e.tipo === "evento").length },
        { id: "conferencia", label: "Conferencias", count: eventos.filter(e => e.tipo === "conferencia").length },
        { id: "competencia", label: "Competencias", count: eventos.filter(e => e.tipo === "competencia").length },
        { id: "panel", label: "Paneles", count: eventos.filter(e => e.tipo === "panel").length },
        { id: "charla", label: "Charlas", count: eventos.filter(e => e.tipo === "charla").length },
        { id: "Recruitment", label: "Recruitment", count: eventos.filter(e => e.tipo === "Recruitment").length },
    ];

    const truncateText = (text: string, shortLength: number = 60, longLength: number = 100) => {
        return {
            short: text.length > shortLength ? text.slice(0, shortLength) + "..." : text,
            long: text.length > longLength ? text.slice(0, longLength) + "..." : text
        };
    };

    return (
        <>
            <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300">
                {/* Header */}
                <div className="text-center py-12 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white via-blue-200 to-gray-200 bg-clip-text text-transparent">
                            EVENTOS
                        </span>
                    </h1>
                    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
                        Descubre todas las oportunidades de aprendizaje y networking que tenemos para ti
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="w-150 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    </div>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
                    <div className="flex items-center space-x-2 text-white/70">
                        <Filter className="h-4 w-4" />
                        <span className="text-sm font-medium">Filtrar por:</span>
                    </div>
                    {filtros.map((filtro) => (
                        <Button
                            key={filtro.id}
                            variant={selectedFilter === filtro.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedFilter(filtro.id)}
                            className={`rounded-2xl transition-all duration-300 ${
                                selectedFilter === filtro.id 
                                ? "bg-gradient-primary shadow-glow scale-105 text-white border-2 border-blue-400 shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(34,211,238,0.4),0_0_60px_rgba(34,211,238,0.2)]" 
                                : "text-blue-600 border-2 border-white/50 hover:bg-blue-600 hover:text-white hover:border-cyan-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(34,211,238,0.4),0_0_60px_rgba(34,211,238,0.2)]"
                            }`}
                        >
                            {filtro.label}
                            <Badge 
                                variant="secondary" 
                                className={`ml-2 text-xs transition-colors duration-300 ${
                                    selectedFilter === filtro.id 
                                    ? "bg-white/20 text-white" 
                                    : "bg-blue-100 text-blue-800 group-hover:bg-white/90 group-hover:text-blue-600"
                                }`}
                            >
                                {filtro.count}
                            </Badge>
                        </Button>
                    ))}
                </div>

                {/* Timeline de Eventos - Tarjetas responsivas */}
                <div className="flex flex-col items-center py-8 gap-6 md:gap-8 px-30">
                    {eventosFiltrados.map((evento, index) => {
                        // Solo alternar en pantallas grandes
                        const align = index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0";
                        const fechaInicio = evento.fecha;
                        const fechaFin = evento.fechaFin;
                        const fechaObjInicio = fechaInicio ? new Date(fechaInicio) : null;
                        const fechaObjFin = fechaFin ? new Date(fechaFin) : null;

                        const animation = index % 2 === 0 ? "fade-right" : "fade-left";
                        
                        const descripcionTexto = typeof evento.descripcion === "string" 
                            ? evento.descripcion 
                            : evento.descripcion?.texto || "";
                        
                        const textVersions = truncateText(descripcionTexto);

                        return  (
                            <div
                                key={evento.id}
                                data-aos={animation}
                                className={`w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-lg border border-blue-200/20 cursor-pointer animate-fade-in transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 ${align}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => setSelectedEvento(evento)}
                            >
                                {/* Layout móvil: Vertical */}
                                <div className="flex flex-col sm:hidden p-4 gap-4">
                                    {/* Header móvil con fecha */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-blue-600/10">
                                                <Image
                                                    src={getEventoImage(evento)} 
                                                    alt={evento.titulo} 
                                                    className="w-8 h-8 object-contain" 
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-blue-900 leading-tight">{evento.titulo}</h3>
                                                <Badge className={`${getEventoColor(evento.tipo)} text-xs mt-1`}>
                                                    {evento.tipo === "Recruitment" ? "Recruitment" : evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                                                </Badge>
                                            </div>
                                        </div>
                                        
                                        {/* Fecha móvil */}
                                        <div className="flex flex-col items-center">
                                            {fechaObjFin && fechaObjInicio ? (
                                                <>
                                                    <span className="text-lg font-extrabold text-blue-900">
                                                        {fechaObjInicio.getDate()}-{fechaObjFin.getDate()}
                                                    </span>
                                                    <span className="text-xs font-bold text-blue-600 uppercase">
                                                        {fechaObjInicio.toLocaleDateString('es-ES', { month: 'short' })}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="text-lg font-extrabold text-blue-900">
                                                        {fechaObjInicio ? fechaObjInicio.getDate() : ''}
                                                    </span>
                                                    <span className="text-xs font-bold text-blue-600 uppercase">
                                                        {fechaObjInicio ? fechaObjInicio.toLocaleDateString('es-ES', { month: 'short' }) : ''}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Info móvil */}
                                    <div className="space-y-2">
                                        <div className="text-xs text-gray-600">
                                            📍 {evento.ubicacion}
                                        </div>
                                        {evento.hora && (
                                            <div className="flex items-center gap-1 text-xs text-blue-600 font-semibold">
                                                <Clock className="w-3 h-3" />
                                                {evento.hora}
                                            </div>
                                        )}
                                        <div className="text-xs text-gray-500 leading-relaxed">
                                            {(() => {
                                                if (typeof evento.descripcion === "string") {
                                                    return evento.descripcion.length > 60 ? evento.descripcion.slice(0, 60) + "..." : evento.descripcion;
                                                } else if (evento.descripcion && 'texto' in evento.descripcion) {
                                                    return evento.descripcion.texto.length > 60 ? evento.descripcion.texto.slice(0, 60) + "..." : evento.descripcion.texto;
                                                }
                                                return "";
                                            })()}
                                        </div>
                                    </div>
                                </div>

                                {/* Layout tablet/desktop: Horizontal */}
                                <div className="hidden sm:flex items-center px-4 md:px-6 py-4 md:py-6 gap-4 md:gap-6">
                                    {/* Imagen */}
                                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-blue-600/10">
                                        <Image
                                            src={getEventoImage(evento)} 
                                            alt={evento.titulo} 
                                            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" 
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    
                                    {/* Info del evento */}
                                    <div className="flex-1 flex flex-col justify-center min-w-0">
                                        <div className="flex items-start gap-2 mb-2">
                                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-blue-900 leading-tight">{evento.titulo}</h3>
                                            <Badge className={getEventoColor(evento.tipo)}>
                                                {evento.tipo === "Recruitment" ? (
                                                    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-[#1746A2] text-white shadow-none">
                                                        Recruitment
                                                    </span>
                                                ) : (
                                                    evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)
                                                )}
                                            </Badge>
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-600 mb-1 truncate">
                                            {evento.ubicacion}
                                        </div>
                                        {evento.hora && (
                                            <div className="flex items-center gap-1 text-xs text-blue-600 font-semibold mb-1">
                                                <Clock className="w-4 h-4 text-blue-600" />
                                                {evento.hora}
                                            </div>
                                        )}
                                        {/* Texto responsivo usando clases CSS */}
                                        <div className="text-xs text-gray-500 leading-relaxed">
                                            <span className="sm:hidden">{textVersions.short}</span>
                                            <span className="hidden sm:inline lg:hidden">{truncateText(descripcionTexto, 70, 70).short}</span>
                                            <span className="hidden lg:inline">{textVersions.long}</span>
                                        </div>
                                    </div>
                                    
                                    {/* Fecha grande - Solo en desktop */}
                                    <div className="hidden md:flex flex-col items-center justify-center ml-4">
                                        {fechaObjFin && fechaObjInicio ? (
                                            <>
                                                <span className="text-xl lg:text-3xl font-extrabold text-blue-900 mb-1">
                                                    {fechaObjInicio.getDate()} - {fechaObjFin.getDate()}
                                                </span>
                                                <span className="text-sm lg:text-base font-bold text-blue-600 uppercase tracking-wide">
                                                    {fechaObjInicio.toLocaleDateString('es-ES', { month: 'short' })}
                                                    {fechaObjInicio.getMonth() !== fechaObjFin.getMonth() ?
                                                        ` / ${fechaObjFin.toLocaleDateString('es-ES', { month: 'short' })}` : ''}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-xl lg:text-3xl font-extrabold text-blue-900 mb-1">
                                                    {fechaObjInicio ? fechaObjInicio.getDate() : ''}
                                                </span>
                                                <span className="text-sm lg:text-base font-bold text-blue-600 uppercase tracking-wide">
                                                    {fechaObjInicio ? fechaObjInicio.toLocaleDateString('es-ES', { month: 'short' }) : ''}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        {/* Modal con información del evento */}
            <Dialog open={!!selectedEvento} onOpenChange={() => setSelectedEvento(null)}>
                <DialogContent className="max-w-2xl bg-white border-0 shadow-xl rounded-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            {selectedEvento?.titulo}
                        </DialogTitle>
                    </DialogHeader>
                    
                    {selectedEvento && (
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-blue-600/10">
                                    <Image 
                                        src={getEventoImage(selectedEvento)} 
                                        alt={selectedEvento.titulo} 
                                        className="w-12 h-12 object-contain"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 flex-wrap">
                                <Badge className={getEventoColor(selectedEvento.tipo)}>
                                    {selectedEvento.tipo === "Recruitment" ? (
                                        <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-[#1746A2] text-white shadow-none">
                                            Recruitment
                                        </span>
                                    ) : (
                                        selectedEvento.tipo.charAt(0).toUpperCase() + selectedEvento.tipo.slice(1)
                                    )}
                                </Badge>
                                {selectedEvento.estado === "pasado" && (
                                    <Badge variant="outline" className="text-gray-600 border-gray-300">
                                        Evento Pasado
                                    </Badge>
                                )}
                            </div>

                            {/* Descripción del evento */}
                            {selectedEvento.titulo === "Datadog" && selectedEvento.descripcion && typeof selectedEvento.descripcion === 'object' && 'texto' in selectedEvento.descripcion ? (
                                <>
                                    <p className="text-gray-600 leading-relaxed mb-2">
                                        {selectedEvento.descripcion.texto}
                                    </p>
                                    <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                                        {selectedEvento.descripcion.bullets.map((item: string, idx: number) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <p className="text-gray-600 leading-relaxed">
                                    {typeof selectedEvento.descripcion === 'string' 
                                        ? selectedEvento.descripcion 
                                        : selectedEvento.descripcion?.texto || ""
                                    }
                                </p>
                            )}
                            
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <Calendar className="h-5 w-5 text-blue-600" />
                                    <span className="font-medium text-gray-800">
                                        {formatFecha(selectedEvento.fecha)}
                                        {selectedEvento.fechaFin && ` - ${formatFecha(selectedEvento.fechaFin)}`}
                                    </span>
                                </div>
                                
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <MapPin className="h-5 w-5 text-blue-600" />
                                    <span className="font-medium text-gray-800">{selectedEvento.ubicacion}</span>
                                </div>
                                
                                {selectedEvento.hora && (
                                    <div className="flex items-center space-x-3 text-gray-600">
                                        <Clock className="h-5 w-5 text-blue-600" />
                                        <span className="font-medium text-gray-800">{selectedEvento.hora}</span>
                                    </div>
                                )}
                                
                                {selectedEvento.cupos && selectedEvento.inscritos && (
                                    <>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <Users className="h-5 w-5 text-blue-600" />
                                            <span className="font-medium text-gray-800">
                                                {selectedEvento.inscritos}/{selectedEvento.cupos} inscritos
                                            </span>
                                        </div>
                                        
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div 
                                                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                                                style={{ width: `${(selectedEvento.inscritos / selectedEvento.cupos) * 100}%` }}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>

                            {selectedEvento.estado === "proximo" && (
                                <Button 
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 text-white rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105"
                                    disabled={selectedEvento.cupos && selectedEvento.inscritos ? selectedEvento.inscritos >= selectedEvento.cupos : false}
                                    onClick={() => {
                                        if (selectedEvento.linkRegistro) {
                                            window.open(selectedEvento.linkRegistro, '_blank');
                                        } else {
                                            // Fallback si no hay link
                                            alert('El registro para este evento estará disponible próximamente.');
                                        }
                                    }}
                                >
                                    {selectedEvento.cupos && selectedEvento.inscritos && selectedEvento.inscritos >= selectedEvento.cupos 
                                        ? "Cupos Agotados" 
                                        : "Registrarse"
                                    }
                                </Button>
                            )}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
    
}