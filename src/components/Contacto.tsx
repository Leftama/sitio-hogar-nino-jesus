import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Info,
  Navigation
} from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Consulta General',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setFormSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'Consulta General',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div id="contacto-section" className="bg-brand-ivory py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest bg-brand-cream border border-brand-border px-4 py-1.5 rounded-sm">
            Canales de Enlace
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-brand-olive mt-3 tracking-tight">
            Contáctenos, Visítenos en Ñuñoa
          </h2>
          <div className="w-20 h-0.5 bg-brand-terracotta mx-auto mt-4" />
          <p className="text-stone-605 mt-4 text-sm sm:text-base leading-relaxed">
            Nuestros coordinadores sociales y clínicos se encuentran a su entera disposición para responder dudas sobre vacantes, voluntariado o coronas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          
          {/* LEFT COLUMN: INTERACTIVE EMAIL ENQUIRY FORM */}
          <div className="bg-white rounded-sm p-6 sm:p-10 border border-brand-border shadow-sm flex flex-col justify-between">
            {formSubmitted ? (
              <div id="contact-success-toast" className="text-center py-10 my-auto animate-fadeIn">
                <div className="w-14 h-14 bg-brand-cream text-brand-olive border border-brand-border rounded-sm flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal italic text-brand-olive">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-stone-550 text-xs sm:text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Estimado/a <strong>{formData.name}</strong>, agradecemos su interés en el Hogar Niño Jesús. Hemos canalizado su consulta sobre <em>"{formData.topic}"</em> a la dirección de asistencia social.
                </p>
                
                <div className="bg-brand-cream text-brand-charcoal p-4 rounded-sm mt-6 text-left text-xs max-w-sm mx-auto border border-brand-border leading-relaxed font-mono">
                  <span className="font-sans font-bold text-brand-olive">Resumen de Enlace Técnico:</span><br />
                  <span className="font-bold">ASUNTO:</span> {formData.topic}<br />
                  <span className="font-bold">EMAIL:</span> {formData.email}<br />
                  <span className="font-bold">NÚMERO TICKET:</span> TICK_HNJ_{Math.floor(1000 + Math.random() * 9000)}
                </div>

                <button
                  id="btn-contact-reset"
                  onClick={handleReset}
                  className="mt-8 bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold text-xs px-5 py-2.5 rounded-sm transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Enviar Otra Consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-justify">
                <div>
                  <h3 className="font-serif text-xl font-normal italic text-brand-olive mb-2">Formulario de Contacto Directo</h3>
                  <p className="text-stone-500 text-xs mb-6">Complete los campos y le responderemos en menos de 24 horas hábiles.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="contact-name">Nombre Completo *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Ej. Sofia Rossi"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="contact-email">Correo Electrónico *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="sofia@correo.cl"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="contact-phone">Teléfono de Enlace (Opcional)</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Ej. +56 9 1234 5678"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="contact-topic">Área de Consulta / Tema *</label>
                    <select
                      id="contact-topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-brand-border rounded-sm px-2.5 py-2 text-xs focus:outline-none focus:border-brand-olive cursor-pointer"
                    >
                      <option value="Consulta General">Consulta General / Información</option>
                      <option value="Admisión y Vacantes">Admisión y Ficha de Acogimiento</option>
                      <option value="Voluntariado">Postulación a Voluntariado</option>
                      <option value="Donaciones y Coronas">Donaciones y Coronas de Caridad</option>
                      <option value="Prensa y Extensión">Prensa / Extensión Comunitaria</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="contact-msg">Mensaje / Detalle de su Solicitud *</label>
                  <textarea
                    id="contact-msg"
                    name="message"
                    required
                    rows={4}
                    placeholder="Escriba su mensaje detallado aquí... Incluya el nombre del menor si corresponde para agilizar el análisis."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50 border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                  />
                </div>

                <button
                  id="btn-contact-submit"
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-brand-terracotta hover:bg-brand-rust text-white font-bold py-3 px-4 rounded-sm text-xs uppercase tracking-widest transition-colors cursor-pointer disabled:opacity-50"
                >
                  {sending ? 'Enviando...' : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Enviar Consulta a Administración</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: DIRECT CONTACT DETAILS + STYLISH HTML/VECTOR MAP */}
          <div className="space-y-6 flex flex-col justify-between">
            
            <div className="bg-white rounded-sm p-6 border border-brand-border shadow-xs text-justify">
              <h3 className="font-serif text-lg font-normal italic text-brand-olive mb-4 flex items-center gap-2 select-none">
                <Info className="w-4.5 h-4.5 text-brand-terracotta" />
                Información de Acceso Directo
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700">
                <div className="space-y-4">
                  <div className="flex gap-2.5 items-start">
                    <MapPin className="w-4.5 h-4.5 text-brand-olive mt-0.5 shrink-0" />
                    <span>
                      <strong>Sede Ñuñoa:</strong><br />
                      Avenida Holanda 3639,<br />
                      Ñuñoa, Santiago (Esquina Diagonal Oriente).
                    </span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Phone className="w-4.5 h-4.5 text-brand-olive shrink-0" />
                    <span>
                      <strong>Teléfono Principal:</strong><br />
                      +56 2 2 204 83 86
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2.5 items-start">
                    <Mail className="w-4.5 h-4.5 text-brand-olive mt-0.5 shrink-0" />
                    <span>
                      <strong>Correo Electrónico:</strong><br />
                      contacto@hogarninojesus.cl
                    </span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <Clock className="w-4.5 h-4.5 text-brand-olive mt-0.5 shrink-0" />
                    <span>
                      <strong>Horario de Visitas:</strong><br />
                      Lunes a Sábado:<br />
                      10:00 - 13:00 / 15:30 - 18:30<br />
                      Dom: 10:00 - 13:00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* HIGH FIDELITY INTERACTIVE VECTOR MAP DESIGN (CUSTOM BUILT HTML MAP GRAPHICS) */}
            <div className="bg-white rounded-sm p-6 border border-brand-border shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider flex items-center justify-between select-none">
                  <span>Ubicación en Ñuñoa (Plano Vectorial)</span>
                  <Navigation className="w-4 h-4 text-brand-terracotta animate-pulse" />
                </h4>
                <p className="text-[11px] text-stone-500 mt-1 mb-4 leading-relaxed text-justify">
                  Ubicación privilegiada en Avenida Holanda, sector residencial seguro de Providencia / Ñuñoa. Cercano a la estación de Metro <strong>Inés de Suárez (Línea 6)</strong>.
                </p>
              </div>

              {/* Graphic custom map container */}
              <div className="relative h-48 bg-brand-cream rounded-sm border border-brand-border overflow-hidden flex flex-col justify-center items-center shadow-inner">
                {/* Horizontal reference streets (gray lines representing Ñuñoa streets) */}
                <div className="absolute top-1/4 w-full h-[18px] bg-stone-200/60 border-t border-b border-stone-300/35 flex items-center pl-4 text-[9px] text-stone-500 font-mono select-none">
                  Av. Francisco Bilbao
                </div>
                <div className="absolute bottom-1/4 w-full h-[18px] bg-stone-200/60 border-t border-b border-stone-300/35 flex items-center pl-4 text-[9px] text-stone-550 font-mono select-none">
                  Diagonal Oriente
                </div>

                {/* Vertical reference streets */}
                <div className="absolute left-[30%] h-full w-[24px] bg-stone-200 flex justify-center items-center border-l border-r border-stone-300/40 select-none">
                  <span className="text-[9px] text-stone-600 font-mono rotate-90 whitespace-nowrap">Av. Holanda</span>
                </div>
                <div className="absolute right-[25%] h-full w-[16px] bg-stone-100 select-none"></div>

                {/* Metro station indicator (green icon balloon) */}
                <div className="absolute top-4 left-[20%] z-10 bg-white border border-brand-olive rounded-sm px-1.5 py-0.5 shadow-xs text-[9px] font-bold text-brand-charcoal flex items-center gap-1 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-olive inline-block animate-ping"></span>
                  Ⓜ Inés de Suárez (L6)
                </div>

                {/* THE PIN "HOGAR ITALIANO" */}
                <div className="absolute bottom-10 left-[23%] z-20 flex flex-col items-center">
                  <div className="relative bg-brand-terracotta text-brand-ivory font-bold px-2.5 py-1 rounded-sm border border-brand-rust shadow-sm text-[10px]">
                    🏠 Hogar Niño Jesús
                    <span className="text-[8px] font-medium block text-brand-cream/80">Holanda 3639</span>
                    <span className="absolute -bottom-1 left-[40%] w-2 h-2 bg-brand-terracotta border-r border-b border-brand-rust rotate-45"></span>
                  </div>
                </div>

                {/* Map Compass/Zoom buttons simulation */}
                <div className="absolute bottom-2.5 right-2.5 flex flex-col gap-1 select-none">
                  <button onClick={() => alert('Acercando plano...')} className="w-6 h-6 bg-white border border-brand-border rounded-sm text-xs hover:bg-brand-cream cursor-pointer text-center font-bold font-sans flex items-center justify-center">
                    +
                  </button>
                  <button onClick={() => alert('Alejando plano...')} className="w-6 h-6 bg-white border border-brand-border rounded-sm text-xs hover:bg-brand-cream cursor-pointer text-center font-bold font-sans flex items-center justify-center">
                    -
                  </button>
                </div>
              </div>

              {/* Action trigger button */}
              <button
                id="btn-trigger-external-gmaps"
                onClick={() => alert('Cargando Google Maps para Avenida Holanda 3639, Ñuñoa en pestaña nueva.')}
                className="mt-4 w-full text-center bg-brand-cream hover:bg-stone-100 text-brand-olive border border-brand-border py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none"
              >
                🗺️ Obtener indicaciones de cómo llegar (Abrir Google Maps)
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
