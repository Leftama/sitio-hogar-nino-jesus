import { useState } from 'react';
import { History, Award, BookOpen, Heart, Eye, Users, ChevronRight, Play } from 'lucide-react';
import { HISTORY_TIMELINE, TEAM_MEMBERS } from '../data';

export default function Nosotros() {
  const [activeSubTab, setActiveSubTab] = useState<'historia' | 'mision' | 'directorio' | 'equipo'>('historia');
  const [showDocumentaryModal, setShowDocumentaryModal] = useState(false);

  const subTabs = [
    { id: 'historia', label: 'Nuestra Historia', icon: History },
    { id: 'mision', label: 'Misión y Valores', icon: BookOpen },
    { id: 'directorio', label: 'El Directorio', icon: Users },
    { id: 'equipo', label: 'Equipo Ejecutivo', icon: Award }
  ] as const;

  const filteredTeam = TEAM_MEMBERS.filter(member => 
    member.category === (activeSubTab === 'directorio' ? 'directorio' : 'equipo')
  );

  return (
    <div id="nosotros-section" className="bg-brand-ivory py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest bg-brand-cream border border-brand-border px-4 py-1.5 rounded-sm">
            Sobre Nosotros
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-brand-olive mt-4 tracking-tight">
            Nuestra Historia, Nuestra Gente
          </h2>
          <div className="w-20 h-0.5 bg-brand-terracotta mx-auto mt-4" />
          <p className="text-stone-600 mt-4 text-sm sm:text-base leading-relaxed">
            Una fundación sin fines de lucro en la comuna de Ñuñoa dedicada a brindar amor, cuidado pediátrico de excelencia, estimulación temprana y protección integral para lactantes y niños en situación de desamparo.
          </p>
        </div>

        {/* Sub Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto border-b border-brand-border pb-4">
          {subTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                id={`subtab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  activeSubTab === tab.id
                    ? 'bg-brand-olive text-brand-ivory'
                    : 'bg-brand-cream text-stone-600 hover:bg-stone-100 border border-brand-border'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sub-tab Content Area */}
        <div className="bg-white rounded-sm shadow-sm border border-brand-border p-6 sm:p-10 mb-12">
          
          {/* Active sub-tab CONTENT: HISTORIA */}
          {activeSubTab === 'historia' && (
            <div id="content-historia" className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
                <div>
                  <h3 className="font-serif text-2xl font-normal italic text-brand-olive mb-4 flex items-center gap-2">
                    <span>80+ Años de Amor y Protección</span>
                  </h3>
                  <p className="text-stone-600 text-justify text-sm sm:text-base leading-relaxed mb-4">
                    La historia del Hogar Niño Jesús es un testimonio de la inmensa solidaridad y vocación comunitaria en Ñuñoa. Lo que comenzó en 1945 como un humilde refugio de amor impulsado por un grupo de familias y profesionales visionarios, hoy se alza como una residencia de acogida acreditada líder en el desarrollo psicomotor en la primera infancia.
                  </p>
                  <p className="text-stone-600 text-justify text-sm sm:text-base leading-relaxed">
                    Nuestros pasillos resuenan con las risas, juegos lúdicos y cantos interactivos de los más pequeños, fomentando un entorno familiar seguro donde los niños pueden sanar heridas complejas y florecer íntegramente con el cuidado oportuno de médicos y educadoras.
                  </p>
                </div>
                <div className="relative rounded-sm overflow-hidden group border border-brand-border">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=700"
                    alt="Niños jugando felices"
                    className="w-full h-[320px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/10 transition-colors" />
                </div>
              </div>

              {/* Timeline layout */}
              <div className="border-l border-brand-olive ml-4 md:ml-24 space-y-8 relative">
                {HISTORY_TIMELINE.map((item, index) => (
                  <div key={index} className="relative pl-6 md:pl-10">
                    {/* Circle icon marker */}
                    <div className="absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-sm bg-brand-terracotta" />
                    
                    {/* Absolute year column on deep screens */}
                    <span className="hidden md:block absolute left-[-90px] top-1 font-serif italic text-lg text-brand-olive">
                      {item.year}
                    </span>
                    
                    <div>
                      <h4 className="font-sans font-bold text-base sm:text-lg text-brand-charcoal uppercase tracking-wide">
                        <span className="md:hidden text-brand-terracotta font-serif mr-2">[{item.year}]</span>
                        {item.title}
                      </h4>
                      <p className="text-stone-600 text-sm mt-1 leading-relaxed max-w-3xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active sub-tab CONTENT: MISION Y VALORES */}
          {activeSubTab === 'mision' && (
            <div id="content-mision" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch animate-fadeIn">
              <div className="bg-brand-cream p-6 sm:p-8 rounded-sm border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-brand-olive text-brand-ivory rounded-sm flex items-center justify-center font-bold text-xl mb-6">
                    M
                  </div>
                  <h3 className="font-serif text-2.5xl font-normal italic text-brand-olive mb-4">Nuestra Misión</h3>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed text-justify">
                    Ofrecer un acogimiento integral residencial de la más alta calidad y calidez a lactantes y niños en situación de desamparo en Chile, garantizando un entorno de absoluto respeto, apego seguro, nutrición de excelencia y estimulación psicomotriz oportuna. Sostenemos nuestro modelo bajo estándares irrefutables de transparencia clínica, pedagógica y social.
                  </p>
                </div>
                <div className="mt-6 border-t border-brand-border pt-4 flex gap-4 text-[10px] uppercase tracking-wider font-bold text-brand-olive">
                  <span>● Respeto Humano</span>
                  <span>● Estimulación Temprana</span>
                  <span>● Apego Seguro</span>
                </div>
              </div>

              <div className="bg-brand-cream p-6 sm:p-8 rounded-sm border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-brand-terracotta text-brand-ivory rounded-sm flex items-center justify-center font-bold text-xl mb-6">
                    V
                  </div>
                  <h3 className="font-serif text-2.5xl font-normal italic text-brand-terracotta mb-4">Nuestra Visión</h3>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed text-justify">
                    Ser reconocidos como el estándar dorado de residencias de acogida y protección de la infancia en Chile, consolidando un ecosistema de apego seguro y estimulación de vanguardia, donde los niños recuperen su autoestima y la comunidad civil colabore como una sola alma.
                  </p>
                </div>
                <div className="mt-6 border-t border-brand-border pt-4 flex gap-4 text-[10px] uppercase tracking-wider font-bold text-brand-terracotta">
                  <span>● Apoyo Mutuo</span>
                  <span>● Profesionalismo</span>
                  <span>● Transparencia Total</span>
                </div>
              </div>
            </div>
          )}

          {/* Active sub-tab CONTENT: DIRECTORIO / EQUIPO */}
          {(activeSubTab === 'directorio' || activeSubTab === 'equipo') && (
            <div id={`content-${activeSubTab}`} className="space-y-6 animate-fadeIn">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-normal italic text-brand-olive">
                  {activeSubTab === 'directorio' ? 'El Honorable Directorio' : 'Nuestro Personal Clínico y Operativo'}
                </h3>
                <p className="text-stone-500 text-sm mt-1">
                  {activeSubTab === 'directorio' 
                    ? 'Profesionales expertos que guían las políticas de la Fundación de forma enteramente voluntaria (Ad Honorem) y solidaria.'
                    : 'Un equipo multidisciplinario altamente calificado que interactúa diariamente con amor ante las necesidades individuales.'
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTeam.map((member) => (
                  <div key={member.id} className="bg-white rounded-sm border border-brand-border overflow-hidden hover:border-brand-olive/40 transition-all">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-48 object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4">
                      <h4 className="font-sans font-bold text-brand-charcoal text-base">{member.name}</h4>
                      <p className="text-brand-terracotta text-xs font-bold uppercase tracking-wider mb-2.5">{member.role}</p>
                      {member.bio && (
                        <p className="text-stone-600 text-xs leading-relaxed border-t border-brand-border pt-2">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Feature Banner: Documentary Hitos "Un Hogar para la Infancia" */}
        <div className="bg-brand-olive rounded-sm overflow-hidden text-brand-ivory border border-brand-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch">
            
            <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-brand-terracotta font-bold tracking-widest text-xs uppercase mb-3">
                <Award className="w-4 h-4 text-brand-terracotta" />
                Preservación del Desarrollo Infantil y Apego Seguro
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal italic mb-4 leading-tight text-white">
                Documental "Luz de Infancia" (Aniversario)
              </h3>
              <p className="text-brand-cream/90 text-sm sm:text-base leading-relaxed mb-6">
                En conmemoración de nuestras décadas de labor benéfica, se recopiló material cinematográfico y correspondencia de las fundadoras de la institución. Los testimonios reflejan la evolución psicomotriz de los pequeños egresados y se grabó en las dependencias de la ludoteca en Ñuñoa.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  id="btn-play-documentary"
                  onClick={() => setShowDocumentaryModal(true)}
                  className="bg-brand-terracotta hover:bg-brand-rust text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-colors cursor-pointer"
                >
                  Ver Trailer del Documental
                </button>
              </div>
            </div>

            <div className="relative min-h-[250px] lg:min-h-full bg-brand-charcoal">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600"
                alt="Cinema projector and old documents"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-sm flex items-center justify-center border border-white/45 cursor-pointer shadow-lg transition-transform hover:scale-105" onClick={() => setShowDocumentaryModal(true)}>
                  <Play className="w-6 h-6 fill-white text-white ml-1" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Documentary Trailer Dialog Lightbox simulation */}
      {showDocumentaryModal && (
        <div id="documentary-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/80 p-4 backdrop-blur-xs">
          <div className="bg-brand-charcoal rounded-sm border border-brand-border max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <div className="p-4 border-b border-brand-border flex justify-between items-center bg-[#242424]">
              <h4 className="font-serif text-brand-ivory font-bold text-sm select-none">Trailer: Documental 'Luz de Infancia'</h4>
              <button
                id="close-documentary-modal"
                onClick={() => setShowDocumentaryModal(false)}
                className="text-brand-cream/70 hover:text-white text-xs font-bold p-1 cursor-pointer"
              >
                CERRAR ✕
              </button>
            </div>
            
            {/* Embedded simulation video block */}
            <div className="aspect-video relative bg-brand-charcoal flex flex-col justify-center items-center p-6 text-center">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=700"
                  alt="Film background preview"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="z-10 max-w-md">
                <Award className="w-12 h-12 text-brand-terracotta mx-auto mb-3" />
                <p className="font-serif text-brand-ivory text-base font-normal italic">"Luz de Infancia: 80 Años de Amor y Protección en Ñuñoa"</p>
                <p className="text-[10px] text-brand-cream/60 mt-2">Duración del film completo: 42 minutos. Producido por la Fundación Benéfica Hogar Niño Jesús de Ñuñoa.</p>
                <div className="mt-4 px-4 py-3 bg-white/5 rounded-sm text-[11px] text-brand-cream/80 border border-brand-border/20 text-justify leading-relaxed">
                  🎥 El documental completo se exhibe de manera gratuita en nuestra ludoteca multiuso los sábados para visitas, profesionales del sector y voluntariado. Puedes inscribirte en la sección de Contacto.
                </div>
                <button
                  id="docu-modal-ack"
                  onClick={() => setShowDocumentaryModal(false)}
                  className="mt-5 bg-brand-terracotta hover:bg-brand-rust text-brand-ivory font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm cursor-pointer"
                >
                  ENTENDIDO, ¡EXCELENTE HISTORIA!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
