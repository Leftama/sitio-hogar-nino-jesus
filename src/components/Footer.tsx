import { Phone, Mail, MapPin, Facebook, Instagram, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onTabChange: (tab: string) => void;
  onQuickAction: (action: 'donar' | 'corona' | 'voluntariado') => void;
}

export default function Footer({ onTabChange, onQuickAction }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-charcoal text-brand-cream/80 pt-16 pb-8 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand/About Col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif italic text-2xl font-bold text-brand-ivory tracking-tight">Hogar Niño Jesús</span>
              <span className="text-[9px] bg-brand-terracotta text-brand-ivory uppercase tracking-widest px-2 py-0.5 rounded-sm font-bold">1945</span>
            </div>
            <p className="text-brand-cream/70 text-sm leading-relaxed mb-6">
              Una obra social sin fines de lucro dedicada a brindar calidez familiar, amor, protección y salud de excelencia a lactantes y niños vulnerables.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-brand-cream/50">Síguenos:</span>
              <a href="https://facebook.com/hogarninojesus" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-terracotta rounded-sm text-brand-cream hover:text-white transition-colors cursor-pointer" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/hogarninojesus" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-terracotta rounded-sm text-brand-cream hover:text-white transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Col */}
          <div>
            <h3 className="text-brand-terracotta font-bold text-xs uppercase tracking-widest mb-4">Navegación</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'nosotros', label: 'Sobre Nosotros' },
                { id: 'hogar', label: 'El Hogar' },
                { id: 'transparencia', label: 'Transparencia Institucional' },
                { id: 'postulacion', label: 'Admisión / Postulaciones' },
                { id: 'noticias', label: 'Noticias y Actividades' },
                { id: 'contacto', label: 'Contacto y Ubicación' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="hover:text-brand-terracotta text-brand-cream/80 hover:text-brand-ivory transition-colors text-left font-medium cursor-pointer"
                  >
                    › {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Support Col */}
          <div>
            <h3 className="text-brand-terracotta font-bold text-xs uppercase tracking-widest mb-4">Colabora Hoy</h3>
            <p className="text-brand-cream/70 text-xs leading-relaxed mb-4">
              Cada aporte directo nos ayuda a optimizar las terapias infantiles, asegurar alimentación y papillas nutritivas, y renovar las ludotecas de estimulación. Su solidaridad sostiene el futuro de los niños.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => { onQuickAction('donar'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full flex items-center justify-center gap-2 bg-brand-terracotta hover:bg-brand-rust text-brand-ivory px-4 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Donar Dinero</span>
              </button>
              <button
                onClick={() => { onQuickAction('corona'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-brand-ivory px-4 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-white/20 hover:border-white/40"
              >
                <span>Corona de Caridad</span>
              </button>
            </div>
          </div>

          {/* Coordinates Col */}
          <div>
            <h3 className="text-brand-terracotta font-bold text-xs uppercase tracking-widest mb-4">Datos de Contacto</h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-terracotta shrink-0 mt-0.5" />
                <span className="text-brand-cream/90">
                  <strong>Dirección:</strong><br />
                  Avenida Holanda 3639,<br />
                  Ñuñoa, Santiago, Chile
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-terracotta shrink-0" />
                <span className="text-brand-cream/90">
                  <strong>Teléfono:</strong><br />
                  <a href="tel:+56222048386" className="hover:text-brand-terracotta transition-colors">
                    +56 2 2 204 83 86
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-terracotta shrink-0" />
                <span className="text-brand-cream/90">
                  <strong>Correo oficial:</strong><br />
                  <a href="mailto:contacto@hogarninojesus.cl" className="hover:text-brand-terracotta transition-colors">
                    contacto@hogarninojesus.cl
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower copyright bar with badges */}
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-cream/40">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-terracotta" />
            <span>Fundación Hogar Niño Jesús de Ñuñoa. Persona jurídica sin fines de lucro.</span>
          </div>
          <div>
            <span>© {currentYear} Hogar Niño Jesús. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
