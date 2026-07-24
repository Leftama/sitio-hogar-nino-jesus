import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onTabChange: (tabId: string) => void;
  onQuickAction: (action: 'donar' | 'corona' | 'voluntariado') => void;
}

export default function Hero({ onTabChange, onQuickAction }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1600&h=800',
      title: 'Un verdadero hogar, una verdadera familia',
      subtitle: 'Residencia para adultas mayores, 40 años entregando una atención de excelencia con cariño, respeto y dedicación.',
      badge: '40 AÑOS DE HISTORIA Y AMOR',
      ctaText: 'Postulaciones',
      ctaTab: 'postulacion'
    },
    {
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600&h=800',
      title: 'Estimulación Temprana y Juego',
      subtitle: 'Talleres lúdico-terapéuticos diarios de psicomotricidad, manualidades infantiles, música y expresión emocional en nuestra moderna ludoteca.',
      badge: 'TERAPIAS Y ESTIMULACIÓN PARVULARIA',
      ctaText: 'Ver Talleres y El Hogar',
      ctaTab: 'hogar'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091159399-6d7bd4124c98?auto=format&fit=crop&q=80&w=1600&h=800',
      title: 'Tu Apoyo Transforma Su Futuro',
      subtitle: 'A través de aportes únicos, apadrinamiento, voluntariado o coronas de caridad financias vacunas de primer nivel, nutrición especial y estimulación oportuna.',
      badge: 'DONACIONES Y VOLUNTARIADO',
      ctaText: 'Cómo Colaborar',
      ctaTab: 'colabora'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden bg-stone-900">
      {/* Slides mapping */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          {/* Cover image */}
          <div className="absolute inset-0 bg-brand-terracotta mix-blend-multiply opacity-15 z-10" />
          <div className="absolute inset-0 bg-brand-charcoal/65 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />

          {/* Typography details overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center">
              {/* Badge element */}
              <div className="inline-block bg-brand-terracotta text-brand-ivory text-[10px] sm:text-xs font-bold tracking-widest px-4 py-1.5 rounded-sm mb-4 uppercase border border-brand-rust">
                {slide.badge}
              </div>

              {/* Title element */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight mb-4 drop-shadow-lg leading-tight">
                {slide.title}
              </h1>

              {/* Subtitle description */}
              <p className="font-sans text-brand-ivory/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 drop-shadow-sm leading-relaxed hidden sm:block">
                {slide.subtitle}
              </p>
              {/* Mobile text fallback */}
              <p className="font-sans text-brand-ivory/90 text-sm max-w-2xl mx-auto mb-6 leading-relaxed block sm:hidden">
                Un verdadero hogar para lactantes y niños con el afecto, el amor y el amparo profesional que merecen.
              </p>

              {/* CTA row button options */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id={`hero-cta-tab-${idx}`}
                  onClick={() => onTabChange(slide.ctaTab)}
                  className="w-full sm:w-auto bg-brand-terracotta hover:bg-brand-rust text-brand-ivory font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all cursor-pointer"
                >
                  <span>{slide.ctaText.toUpperCase()}</span>
                </button>
                <button
                  id={`hero-cta-action-${idx}`}
                  onClick={() => onQuickAction('donar')}
                  className="w-full sm:w-auto bg-brand-olive hover:bg-brand-olive/90 text-brand-ivory font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all border border-brand-olive/50 cursor-pointer"
                >
                  <span>APOYAR LA FUNDACIÓN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Control arrows */}
      <button
        id="hero-control-prev"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-35 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors hidden sm:flex cursor-pointer"
        aria-label="Anterior Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        id="hero-control-next"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-35 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors hidden sm:flex cursor-pointer"
        aria-label="Siguiente Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-y-0.5 -translate-x-1/2 z-35 flex gap-2">
        {slides.map((_, idx) => (
          <button
            id={`hero-dot-${idx}`}
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-6 h-1 transition-all cursor-pointer ${
              idx === currentSlide ? 'bg-brand-terracotta' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir a slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
