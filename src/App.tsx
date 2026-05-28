import { useState } from 'react';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Users, 
  Award,
  ChevronRight,
  BookOpen,
  Home,
  CheckCircle
} from 'lucide-react';

// Component imports
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import ElHogar from './components/ElHogar';
import Transparencia from './components/Transparencia';
import Postulaciones from './components/Postulaciones';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';
import Colabora from './components/Colabora';

// Mock news data snippet for Home Preview
import { INITIAL_NEWS } from './data';

export default function App() {
  const [tab, setTab] = useState<string>('inicio');
  const [colaboraSubTab, setColaboraSubTab] = useState<'donaciones' | 'coronas' | 'voluntariado'>('donaciones');

  // Multi-step quick action router
  const handleQuickAction = (action: 'donar' | 'corona' | 'voluntariado') => {
    if (action === 'donar') {
      setColaboraSubTab('donaciones');
    } else if (action === 'corona') {
      setColaboraSubTab('coronas');
    } else {
      setColaboraSubTab('voluntariado');
    }
    setTab('colabora');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // List of active pillars for Home Page "Nuestra Propuesta"
  const proposalPillars = [
    {
      title: 'Acogida Cálida y Familiar',
      description: 'Nos enfocamos en reproducir la intimidad y cariño del hogar familiar. Un entorno lleno de ternura que fomenta que los niños crezcan con apego seguro y confianza.',
      icon: HeartHandshake,
      color: 'bg-rose-50 text-rose-800 border-rose-100'
    },
    {
      title: 'Atención Médica y Pediátrica',
      description: 'Enfermería pediátrica disponible las 24 horas del día, supervisión pediátrica semanal, alimentación adaptada a las necesidades de cada lactante y control estricto de desarrollo.',
      icon: Activity,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-100'
    },
    {
      title: 'Estimulación Temprana Activa',
      description: 'Programas de psicomotricidad, fonoaudiología, manualidades infantiles, iniciación musical y lúdicas tardes de literatura en nuestra acogedora ludoteca interactiva.',
      icon: Sparkles,
      color: 'bg-amber-50 text-amber-850 border-amber-100'
    },
    {
      title: 'Entorno Seguro y Protegido',
      description: 'Nuestra sede en Ñuñoa está equipada con salas interactivas luminosas, jardines con pasto suave para juegos libres y modernos sistemas de seguridad infantil adaptados.',
      icon: ShieldCheck,
      color: 'bg-slate-50 text-slate-800 border-slate-100'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-ivory flex flex-col justify-between font-sans text-brand-charcoal antialiased selection:bg-brand-cream selection:text-brand-charcoal">
      
      {/* Header element */}
      <Header 
        currentTab={tab} 
        onTabChange={handleTabChange} 
        onQuickAction={handleQuickAction} 
      />

      {/* Main content body */}
      <main className="flex-1 w-full bg-brand-ivory">
        
        {/* VIEW: HOME / INICIO */}
        {tab === 'inicio' && (
          <div id="view-inicio" className="animate-fadeIn">
            
            {/* 1. Hero banner component slider */}
            <Hero onTabChange={handleTabChange} onQuickAction={handleQuickAction} />

            {/* 2. QUIENES SOMOS PORTAL BRIEF */}
            <section id="home-quienes-somos" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-ivory">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-brand-cream text-brand-terracotta px-4 py-1.5 rounded-sm text-xs font-bold border border-brand-border uppercase tracking-widest">
                    <BookOpen className="w-3.5 h-3.5 text-brand-terracotta" />
                    Quiénes Somos desde 1945
                  </div>
                  
                  <h3 className="font-serif text-3.5xl sm:text-4xl font-normal text-brand-olive tracking-tight leading-tight italic">
                    Una Fundación Incombustible de Amor y Tradición
                  </h3>
                  
                  <p className="text-stone-605 text-sm sm:text-base leading-relaxed text-justify">
                    Fundado en 1945 con un profundo llamado a la protección de la niñez, el <strong className="font-serif italic text-brand-olive">Hogar Niño Jesús</strong> nació en Santiago de Chile con el firme propósito de cobijar, alimentar y brindar cuidado integral a lactantes y menores en situación de vulnerabilidad social.
                  </p>
                  
                  <p className="text-stone-605 text-sm sm:text-base leading-relaxed text-justify">
                    Hoy, décadas después de nuestra fundación, operamos bajo una moderna dirección de asistencia pediátrica, psicomotriz y social, adscrita a los más rigurosos estándares de transparencia técnica y alianzas con la red de protección de la niñez de Chile (Mejor Niñez con herencia del ex-SENAME). Nos enorgullece abrir nuestras puertas en Avenida Holanda como un santuario de amor y crecimiento seguro.
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand-border">
                    <div>
                      <span className="font-serif text-3xl font-normal text-brand-terracotta italic">80+</span>
                      <p className="text-[10px] text-stone-500 uppercase tracking-wider font-bold mt-1">Años de Sello Humanitario</p>
                    </div>
                    <div>
                      <span className="font-serif text-3xl font-normal text-brand-olive italic">Ñuñoa</span>
                      <p className="text-[10px] text-stone-500 uppercase tracking-wider font-bold mt-1">Entorno Infantil de Desarrollo</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      id="btn-home-learn-more"
                      onClick={() => handleTabChange('nosotros')}
                      className="inline-flex items-center gap-1.5 text-brand-terracotta hover:text-brand-rust font-bold text-xs uppercase tracking-widest hover:underline cursor-pointer group"
                    >
                      <span>Conozca Nuestra Historia y Directorio</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-terracotta" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                  {/* Styled Image Deck */}
                  <div className="relative rounded-sm overflow-hidden shadow-sm border border-brand-border">
                    <img
                      src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600&h=650"
                      alt="Enfermera pediatra cuidando a lactante"
                      className="w-full h-[450px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-multiply" />
                  </div>

                  {/* Absolute Badge over the image */}
                  <div className="absolute -bottom-6 -left-6 bg-brand-olive text-brand-ivory px-6 py-5 rounded-sm shadow-md border border-brand-border font-serif max-w-xs hidden sm:block">
                    <span className="text-2xl font-normal block italic">1945</span>
                    <span className="text-[9px] uppercase font-sans font-bold tracking-widest text-brand-cream/80 mt-1 block leading-tight">
                      FUNDADO BENÉFICAMENTE PARA EL CUIDADO Y PROTECCIÓN infantil
                    </span>
                  </div>
                </div>

              </div>
            </section>

            {/* 3. NUESTRA PROPUESTA: VALORES Y PILARES GRID */}
            <section id="home-nuestra-propuesta" className="py-16 sm:py-24 bg-brand-cream border-y border-brand-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest bg-brand-ivory border border-brand-border px-4 py-1.5 rounded-sm">
                    Nuestra Propuesta
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4.5xl font-normal italic text-brand-olive mt-4 tracking-tight">
                    Los 4 Pilares de Nuestra Excelencia
                  </h3>
                  <div className="w-20 h-0.5 bg-brand-terracotta mx-auto mt-4" />
                  <p className="text-stone-600 mt-4 text-sm sm:text-base leading-relaxed">
                    Sostenemos el cuidado pediátrico y educativo en cuatro principios de calidad trascendentales, fusionando la rigurosidad clínica con un ambiente hogareño protector y feliz.
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {proposalPillars.map((p, idx) => {
                    const IconComp = p.icon;
                    return (
                      <div 
                        id={`pillar-card-${idx}`}
                        key={idx} 
                        className="bg-white p-6 sm:p-8 rounded-sm border border-brand-border shadow-xs hover:border-brand-olive/40 transition-all flex gap-5 items-start group"
                      >
                        <div className="p-3.5 rounded-sm shrink-0 bg-brand-cream border border-brand-border text-brand-olive transition-all">
                          <IconComp className="w-6 h-6 shrink-0" />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider mb-2 group-hover:text-brand-terracotta transition-colors">
                            {p.title}
                          </h4>
                          <p className="text-stone-650 text-sm leading-relaxed text-justify">
                            {p.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center mt-12">
                  <button
                    id="btn-home-go-residence"
                    onClick={() => handleTabChange('hogar')}
                    className="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-olive/90 text-brand-ivory font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-colors cursor-pointer"
                  >
                    <span>Explorar Instalaciones y Ludoteca Interactiva</span>
                    <ArrowRight className="w-4 h-4 text-brand-ivory" />
                  </button>
                </div>

              </div>
            </section>

            {/* 4. CALL TO ACTION: AYÚDANOS HOY */}
            <section id="home-ayudanos-hoy" className="py-16 sm:py-24 bg-brand-olive text-brand-ivory border-y border-brand-border relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                <span className="text-brand-terracotta font-sans font-extrabold text-xs tracking-widest uppercase block">
                  Campaña Solidaria Activa
                </span>
                <h3 className="font-serif text-3xl sm:text-4.5xl font-normal italic leading-tight tracking-tight text-brand-ivory">
                  Ayúdanos Hoy a Proteger de Nuestros Niños
                </h3>
                <p className="text-brand-cream/95 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  El Hogar Niño Jesús es una corporación benéfica autónoma sin fines de lucro. La solidaridad activa de familias, profesionales y donantes particulares constituye el sustento primordial de las salas cuna, terapias de estimulación psicomotriz y alimentación saludable de nuestros niños.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 text-sm">
                  {/* Card 1 */}
                  <div className="bg-brand-cream/10 p-5 rounded-sm border border-brand-ivory/20 text-center">
                    <span className="font-serif italic text-lg text-brand-ivory block font-medium">Coronas de Caridad</span>
                    <p className="text-brand-cream/80 text-xs mt-1 leading-relaxed">Consuele a familias en duelo aportando directamente al sustento educativo y de juguetes.</p>
                    <button 
                      onClick={() => handleQuickAction('corona')} 
                      className="mt-3 text-xs text-brand-ivory hover:text-brand-terracotta font-bold flex items-center gap-1 mx-auto cursor-pointer uppercase tracking-widest border-b border-brand-ivory/25 pb-0.5"
                    >
                      Enviar Corona <span>→</span>
                    </button>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-brand-cream/10 p-5 rounded-sm border border-brand-ivory/20 text-center">
                    <span className="font-serif italic text-lg text-brand-ivory block font-medium">Donación Bancaria</span>
                    <p className="text-brand-cream/80 text-xs mt-1 leading-relaxed">Aportes únicos o recurrentes digitales sustentados con rigurosa auditoría.</p>
                    <button 
                      onClick={() => handleQuickAction('donar')} 
                      className="mt-3 text-xs text-brand-ivory hover:text-brand-terracotta font-bold flex items-center gap-1 mx-auto cursor-pointer uppercase tracking-widest border-b border-brand-ivory/25 pb-0.5"
                    >
                      Aportar Dinero <span>→</span>
                    </button>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-brand-cream/10 p-5 rounded-sm border border-brand-ivory/20 text-center">
                    <span className="font-serif italic text-lg text-brand-ivory block font-medium">Voluntariado</span>
                    <p className="text-brand-cream/80 text-xs mt-1 leading-relaxed">Comparta tiempo de lecturas teatrales, kinesiología infantil y estimulación.</p>
                    <button 
                      onClick={() => handleQuickAction('voluntariado')} 
                      className="mt-3 text-xs text-brand-ivory hover:text-brand-terracotta font-bold flex items-center gap-1 mx-auto cursor-pointer uppercase tracking-widest border-b border-brand-ivory/25 pb-0.5"
                    >
                      Postularse <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. ULTIMAS NOTICIAS CAROUSEL / GRID BRIEF */}
            <section id="home-ultimas-noticias" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
                <div>
                  <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest bg-brand-cream border border-brand-border px-4 py-1.5 rounded-sm">
                    Actualidad
                  </span>
                  <h3 className="font-serif text-3xl font-normal italic text-brand-olive mt-3">
                    Vida de Comunidad y Actividades
                  </h3>
                </div>
                <button
                  id="btn-home-go-noticias"
                  onClick={() => handleTabChange('noticias')}
                  className="flex items-center gap-1 hover:text-brand-terracotta text-brand-olive text-xs font-bold uppercase tracking-widest cursor-pointer group shrink-0"
                >
                  <span>Ver todas las noticias</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-terracotta" />
                </button>
              </div>

              {/* Three news item preview preview cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {INITIAL_NEWS.slice(0, 3).map((n) => (
                  <div 
                    id={`home-news-preview-${n.id}`}
                    key={n.id} 
                    className="bg-white rounded-sm border border-brand-border overflow-hidden shadow-xs hover:border-brand-olive/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-44 relative bg-stone-900">
                        <img src={n.image} alt={n.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <span className="absolute top-2.5 right-2.5 bg-brand-terracotta text-brand-ivory font-bold text-[9px] px-2.5 py-1 rounded-sm uppercase tracking-widest">
                          {n.category}
                        </span>
                      </div>
                      <div className="p-5 space-y-2">
                        <div className="flex gap-2 text-[10px] text-stone-400 font-mono">
                          <span>{n.date}</span>
                          <span>•</span>
                          <span>{n.readTime}</span>
                        </div>
                        <h4 className="font-sans font-bold text-brand-charcoal text-base leading-snug line-clamp-2">{n.title}</h4>
                        <p className="text-stone-600 text-xs leading-relaxed line-clamp-3 text-justify">{n.content}</p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <button
                        onClick={() => handleTabChange('noticias')}
                        className="w-full bg-brand-cream hover:bg-brand-olive hover:text-brand-ivory text-brand-olive border border-brand-border text-xs font-bold py-2.5 rounded-sm uppercase tracking-wide transition-colors cursor-pointer"
                      >
                        Leer Noticia Completa
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* RE-ROUTED VIEWS MOUNTING */}
        {tab === 'nosotros' && <Nosotros />}
        {tab === 'hogar' && <ElHogar />}
        {tab === 'transparencia' && <Transparencia />}
        {tab === 'postulacion' && <Postulaciones />}
        {tab === 'noticias' && <Noticias />}
        {tab === 'contacto' && <Contacto />}
        {tab === 'colabora' && <Colabora initialSubTab={colaboraSubTab} />}

      </main>

      {/* Footer element */}
      <Footer onTabChange={handleTabChange} onQuickAction={handleQuickAction} />

    </div>
  );
}
