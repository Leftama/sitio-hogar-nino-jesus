import { ChefHat, Palette, Activity, GraduationCap, Sparkles, ShieldCheck, HeartPulse, HelpCircle } from 'lucide-react';
import { WORKSHOPS } from '../data';

export default function ElHogar() {
  const iconMap: Record<string, any> = {
    ChefHat: ChefHat,
    Palette: Palette,
    Activity: Activity,
    GraduationCap: GraduationCap
  };

  const infraItems = [
    {
      title: 'Salas de Lactancia y Salacunas',
      desc: 'Nuestras cunas y salas de descanso están totalmente equipadas con monitores de apnea, barandas de seguridad infantil, iluminación natural regulada y climatización individual para un descanso óptimo.'
    },
    {
      title: 'Jardines de Estimulación',
      desc: 'Un oasis natural protegido en Ñuñoa con pasto sintético acolchado, juegos blandos modulares y arenero orgánico donde los niños disfrutan y desarrollan su motricidad del gateo al aire libre.'
    },
    {
      title: 'Ludoteca y Comedores Infantiles',
      desc: 'Zonas comunes diseñadas con pisos de goma eva antigolpes, bibliotecas de cuentos ilustrados gigantes, juguetes sensoriales e interactivos ideales para el desarrollo seguro.'
    },
    {
      title: 'Sala Multiuso de Psicomotricidad',
      desc: 'Un amplio espacio adaptado para fonoaudiología, estimulación sensorial, actividades grupales lúdicas, títeres y tardes de kinesiología infantil.'
    }
  ];

  const medicalSpecs = [
    {
      title: 'Enfermería Pediátrica 24/7',
      desc: 'Técnicos de enfermería de nivel superior (TENS) pediátricos de turno permanente las 24 horas del día, supervisados de cerca por enfermeras universitarias.'
    },
    {
      title: 'Control Pediátrico Quincenal',
      desc: 'Rondas periódicas de pediatras de cabecera del hogar que evalúan las pautas del crecimiento biológico, hitos de maduración neurológica y vacunas.'
    },
    {
      title: 'Fórmula y Nutrición Infantil',
      desc: 'Menús balanceados e hipoalergénicos supervisados por nutricionistas: fórmulas lácteas especiales, papillas de frutas naturales y control de intolerancias alimentarias.'
    },
    {
      title: 'Kinesiología Infantil Temprana',
      desc: 'Sesiones personalizadas de psicomotricidad para facilitar los hitos del gateo, el equilibrio y la marcha firme, mitigando cualquier rezago motor transitorio.'
    }
  ];

  return (
    <div id="hogar-section" className="bg-brand-ivory py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest bg-brand-cream border border-brand-border px-4 py-1.5 rounded-sm">
            Nuestra Residencia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-brand-olive mt-4 tracking-tight">
            Un Entorno de Estimulación, Seguridad y Amor
          </h2>
          <div className="w-20 h-0.5 bg-brand-terracotta mx-auto mt-4" />
          <p className="text-stone-600 mt-4 text-sm sm:text-base leading-relaxed">
            Nuestras instalaciones ubicadas en Avenida Holanda de Ñuñoa combinan la infraestructura de protección pediátrica recomendada con el calor y la ternura de una verdadera familia.
          </p>
        </div>

        {/* 1. INFRASTRUCTURE SUB-SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-5 h-5 text-brand-terracotta" />
            <h3 className="font-serif text-2xl font-normal italic text-brand-olive">Infraestructura y Ambientes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infraItems.map((item, idx) => (
              <div 
                id={`infra-card-${idx}`}
                key={idx} 
                className="bg-white rounded-sm border border-brand-border p-6 hover:border-brand-olive/40 transition-all text-justify"
              >
                <div className="w-8 h-8 rounded-sm bg-brand-cream border border-brand-border text-brand-olive flex items-center justify-center font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider mb-2">{item.title}</h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ACTIVE WORKSHOPS (TALLERES) SUB-SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-5 h-5 text-brand-terracotta" />
            <h3 className="font-serif text-2xl font-normal italic text-brand-olive">Talleres de Estimulación Temprana</h3>
          </div>
          <p className="text-stone-500 text-sm max-w-2xl mb-8">
            Diseñamos experiencias de aprendizaje activo enfocadas en la estimulación sensorial, psicomotriz y expresión artística de cada pequeño de forma totalmente lúdica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKSHOPS.map((workshop) => {
              const IconComp = iconMap[workshop.iconName] || HelpCircle;
              return (
                <div 
                  id={`workshop-item-${workshop.id}`}
                  key={workshop.id} 
                  className="bg-white rounded-sm border border-brand-border overflow-hidden flex flex-col sm:flex-row items-stretch hover:border-brand-olive/40 transition-all text-justify"
                >
                  <div className="w-full sm:w-[40%] relative min-h-[160px] sm:min-h-full">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-brand-cream border border-brand-border text-brand-olive rounded-sm flex items-center justify-center">
                          <IconComp className="w-4 h-4 shrink-0" />
                        </div>
                        <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider leading-tight">{workshop.title}</h4>
                      </div>
                      <p className="text-stone-600 text-xs leading-relaxed mb-4">
                        {workshop.description}
                      </p>
                    </div>
                    
                    <div className="border-t border-brand-border pt-3 flex flex-wrap justify-between items-center text-xs text-stone-500 gap-1 select-none">
                      <span><strong>Horario:</strong> {workshop.schedule}</span>
                      <span className="bg-brand-cream border border-brand-border text-brand-olive px-2.5 py-1 rounded-sm font-bold text-[10px] uppercase tracking-wide">Docente: {workshop.instructor}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. MEDICAL & RECREATIONAL SERVICES SUB-SECTION */}
        <div className="bg-brand-olive text-brand-ivory rounded-sm p-8 sm:p-12 border border-brand-border relative overflow-hidden text-justify">
          <div className="flex items-center gap-3 mb-8">
            <HeartPulse className="w-6 h-6 text-brand-terracotta" />
            <h3 className="font-serif text-2xl sm:text-3xl font-normal italic text-white">Servicios de Salud y Cuidado Clínico</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {medicalSpecs.map((spec, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-2 bg-brand-cream border border-brand-border text-brand-terracotta rounded-sm shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-[13px] uppercase tracking-wide mb-1">{spec.title}</h4>
                  <p className="text-brand-cream/80 text-xs sm:text-sm leading-relaxed">{spec.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-cream/70">
            <p className="text-center sm:text-left">
              ⭐ Nuestro hogar cuenta con la autorización de SENAME, SEREMI de Salud de la Región Metropolitana y acreditación oficial vigente para protección residencial infantil.
            </p>
            <span className="font-sans text-[9px] uppercase tracking-widest bg-brand-terracotta text-brand-ivory px-3 py-1.5 rounded-sm border border-brand-rust shrink-0 select-none">
              RESGUARDO Y ESTIMULACIÓN DE CUNA A JARDÍN
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
