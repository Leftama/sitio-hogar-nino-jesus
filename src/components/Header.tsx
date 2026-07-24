import { useState } from 'react';
import { Phone, Heart, Award, Users, Menu, X, Landmark } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onQuickAction: (action: 'donar' | 'corona' | 'voluntariado') => void;
}

export default function Header({ currentTab, onTabChange, onQuickAction }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'hogar', label: 'El Hogar' },
    { id: 'transparencia', label: 'Transparencia' },
    { id: 'postulacion', label: 'Postulación' },
    { id: 'noticias', label: 'Noticias' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'colabora', label: 'Colabora' }
  ];

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-brand-border">
      {/* Upper Topbar for Core Contacts & Quick Actions */}
      <div className="bg-brand-olive text-brand-ivory text-xs py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-semibold tracking-wide">
              <span>TELÉFONO: +56 2 227 11 98</span>
            </div>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="hidden md:inline opacity-90 uppercase tracking-wide">AV. OSSA 750, ÑUÑOA</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest opacity-60 font-semibold hidden lg:inline">Desde 1973</span>
            <span className="hidden lg:inline opacity-30">|</span>
            {/* Quick Action Buttons */}
            <button
              id="header-btn-donate"
              onClick={() => onQuickAction('donar')}
              className="bg-brand-terracotta hover:bg-brand-rust text-brand-ivory px-4 py-1.5 rounded-sm transition-colors text-xs font-bold tracking-wide cursor-pointer"
            >
              DONAR
            </button>
            <button
              id="header-btn-corona"
              onClick={() => onQuickAction('corona')}
              className="border border-brand-ivory/60 hover:bg-brand-ivory/10 text-brand-ivory px-4 py-1.5 rounded-sm transition-colors text-xs font-bold tracking-wide cursor-pointer"
            >
              CORONAS DE CARIDAD
            </button>
            <button
              id="header-btn-volunteer"
              onClick={() => onQuickAction('voluntariado')}
              className="bg-brand-ivory text-brand-olive hover:bg-brand-cream px-4 py-1.5 rounded-sm transition-colors text-xs font-bold tracking-wide cursor-pointer"
            >
              VOLUNTARIADO
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex justify-between items-center">
          {/* Logo Brand Brand */}
          <div 
            id="brand-logo"
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Elegant baby/heart rose emblem */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-sm bg-brand-cream text-brand-olive border border-brand-border transition-transform duration-300 group-hover:scale-105">
              <Heart className="w-6 h-6 text-brand-olive fill-brand-terracotta/45" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif italic text-2xl text-brand-olive font-bold">Hogar Niño Jesús</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-terracotta font-bold">Desde 1973</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                id={`nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                  currentTab === item.id 
                    ? 'text-brand-terracotta' 
                    : 'text-stone-600 hover:text-brand-olive'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-stone-600 hover:text-brand-olive hover:bg-brand-cream focus:outline-none rounded-sm"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div id="mobile-menu-container" className="lg:hidden bg-white border-t border-brand-border py-3 px-4 shadow-sm">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                id={`mobnav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-sm text-sm uppercase tracking-wider font-semibold transition-all ${
                  currentTab === item.id 
                    ? 'text-brand-olive bg-brand-cream border-l-4 border-brand-olive font-bold' 
                    : 'text-stone-700 hover:text-brand-olive hover:bg-brand-cream'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Mobile quick action buttons */}
          <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-3 gap-2">
            <button
              id="mob-btn-donate"
              onClick={() => { onQuickAction('donar'); setIsMenuOpen(false); }}
              className="flex flex-col items-center justify-center gap-1 bg-brand-terracotta hover:bg-brand-rust text-brand-ivory font-bold p-2.5 rounded-sm text-xs text-center cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current text-brand-ivory" />
              <span>Donaciones</span>
            </button>
            <button
              id="mob-btn-corona"
              onClick={() => { onQuickAction('corona'); setIsMenuOpen(false); }}
              className="flex flex-col items-center justify-center gap-1 bg-brand-cream hover:bg-brand-cream/80 text-brand-olive font-bold p-2.5 rounded-sm text-xs text-center border border-brand-border cursor-pointer"
            >
              <Award className="w-4 h-4 text-brand-terracotta" />
              <span>Coronas</span>
            </button>
            <button
              id="mob-btn-volunteer"
              onClick={() => { onQuickAction('voluntariado'); setIsMenuOpen(false); }}
              className="flex flex-col items-center justify-center gap-1 bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold p-2.5 rounded-sm text-xs text-center cursor-pointer"
            >
              <Users className="w-4 h-4 text-brand-ivory" />
              <span>Voluntarios</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
