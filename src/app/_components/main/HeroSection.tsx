"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useSlides } from "seitc/app/data/main/slides";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = useSlides();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 segundos para un balance entre velocidad y tiempo de lectura
        return () => clearInterval(timer);
    }, [slides.length]);

    const scrollToNext = () => {
        const element = document.getElementById("sobre-nosotros");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover scale-105"
                            onError={(e) => {
                                console.error('Error loading image:', slide.image);
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent" />
                    </div>
                ))}
            </div>

            {/* Geometric Overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-64 h-64 border border-white/20 rounded-full animate-pulse" />
                <div className="absolute bottom-32 left-20 w-32 h-32 bg-white/10 transform rotate-45 animate-pulse" />
                <div className="absolute top-1/2 right-1/4 w-48 h-48 border-2 border-white/10 transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-white">
                                {slides[currentSlide].title.split(" ").slice(0, 3).join(" ")}
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                {slides[currentSlide].title.split(" ").slice(3).join(" ")}
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                            {slides[currentSlide].subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Button Components */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20 max-w-lg overflow-x-auto pb-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${currentSlide === index
                            ? "bg-white scale-125 shadow-lg"
                            : "bg-white/50 hover:bg-white/75"
                            }`}
                        title={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation arrows */}
            {/* Previous slide button */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
                aria-label="Previous slide"
            >
                <ChevronDown className="w-6 h-6 text-white rotate-90" />
            </button>

            {/* Next slide button */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
                aria-label="Next slide"
            >
                <ChevronDown className="w-6 h-6 text-white -rotate-90" />
            </button>

            {/* Slide counter */}
            <div className="absolute top-8 right-8 z-20 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">
                    {currentSlide + 1} / {slides.length}
                </span>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 text-white/70 hidden md:flex flex-col items-center space-y-2">
                <span className="text-sm tracking-wide">SCROLL</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
        </section>
    );
};

export default HeroSection;