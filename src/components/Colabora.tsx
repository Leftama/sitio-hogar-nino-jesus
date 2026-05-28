import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Award, 
  Users, 
  CheckCircle, 
  Printer, 
  CreditCard,
  Loader2
} from 'lucide-react';

interface ColaboraProps {
  initialSubTab?: 'donaciones' | 'coronas' | 'voluntariado';
}

export default function Colabora({ initialSubTab = 'donaciones' }: ColaboraProps) {
  const [activeTab, setActiveTab] = useState<'donaciones' | 'coronas' | 'voluntariado'>(initialSubTab);

  useEffect(() => {
    setActiveTab(initialSubTab);
  }, [initialSubTab]);

  // General error banner state
  const [formError, setFormError] = useState('');

  // Donation State
  const [donateAmount, setDonateAmount] = useState('20000');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isProcessingDonation, setIsProcessingDonation] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);

  // Volunteering State
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [volunteerType, setVolunteerType] = useState('Acompañamiento Social');
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);

  // Coronas de Caridad State
  const [coronaSender, setCoronaSender] = useState('');
  const [coronaDeceased, setCoronaDeceased] = useState('');
  const [coronaFamily, setCoronaFamily] = useState('');
  const [coronaEmail, setCoronaEmail] = useState('');
  const [coronaMessage, setCoronaMessage] = useState('“Dios le conceda la paz eterna y a su familia el consuelo y la esperanza en este momento de dolor. Con todo nuestro afecto y solidaridad.”');
  const [coronaAmount, setCoronaAmount] = useState('30000');
  const [coronaCardTheme, setCoronaCardTheme] = useState<'clasica' | 'floreada' | 'espiritual'>('clasica');
  const [coronaPaymentStep, setCoronaPaymentStep] = useState<'form' | 'payment_gateway' | 'completed'>('form');

  // Credit Card Gateway Simulation
  const [ccNumber, setCcNumber] = useState('');
  const [ccExpiry, setCcExpiry] = useState('');
  const [ccCvv, setCcCvv] = useState('');
  const [transacting, setTransacting] = useState(false);
  const [coronaCodeReference, setCoronaCodeReference] = useState('');

  const handleCoronaSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!coronaSender || !coronaDeceased || !coronaFamily || !coronaEmail) {
      setFormError('Por favor complete todos los datos de la corona de caridad antes de proceder.');
      return;
    }
    setCoronaPaymentStep('payment_gateway');
  };

  const handleProcessCoronaCardPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!ccNumber || !ccExpiry || !ccCvv) {
      setFormError('Por favor ingrese los datos de su tarjeta de manera completa.');
      return;
    }

    setTransacting(true);
    setTimeout(() => {
      setTransacting(false);
      setCoronaCodeReference(`CC-${Math.floor(200000 + Math.random() * 70000)}`);
      setCoronaPaymentStep('completed');
    }, 1500);
  };

  const handleProcessDirectDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!donorName || !donorEmail) {
      setFormError('Por favor complete su nombre y correo para procesar la donación.');
      return;
    }
    setIsProcessingDonation(true);
    setTimeout(() => {
      setIsProcessingDonation(false);
      setDonationSuccess(true);
    }, 1200);
  };

  const handleProcessVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!volunteerName || !volunteerEmail) {
      setFormError('Por favor complete los datos de postulación.');
      return;
    }
    setVolunteerSuccess(true);
  };

  const resetAllForms = () => {
    setFormError('');
    setDonateAmount('20000');
    setCustomAmount('');
    setDonorName('');
    setDonorEmail('');
    setDonationSuccess(false);

    setVolunteerName('');
    setVolunteerEmail('');
    setVolunteerSuccess(false);

    setCoronaSender('');
    setCoronaDeceased('');
    setCoronaFamily('');
    setCoronaEmail('');
    setCoronaPaymentStep('form');
  };

  return (
    <div id="colabora-section" className="bg-brand-ivory py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest bg-brand-cream border border-brand-border px-4 py-1.5 rounded-sm">
            Apoya a Nuestros Niños
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-brand-olive mt-4 tracking-tight">
            ¿Cómo Ayudar a Nuestra Fundación?
          </h2>
          <div className="w-20 h-0.5 bg-brand-terracotta mx-auto mt-4" />
          <p className="text-stone-600 mt-4 text-sm sm:text-base leading-relaxed">
            Elija el canal solidario que prefiera. Su generoso aporte nos ayuda a remodelar las salacunas, proveer fórmulas de lactancia, pañales y financiar juegos de estimulación activa.
          </p>
        </div>

        {/* 3 Main Categories Selection Button Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <button
            id="col-tab-donaciones"
            onClick={() => { setActiveTab('donaciones'); resetAllForms(); }}
            className={`flex flex-col items-center p-6 rounded-sm border transition-all cursor-pointer ${
              activeTab === 'donaciones'
                ? 'bg-brand-olive text-brand-ivory border-brand-olive shadow-sm'
                : 'bg-brand-cream text-stone-700 hover:bg-stone-100 border-brand-border shadow-xs'
            }`}
          >
            <Heart className={`w-8 h-8 mb-2 ${activeTab === 'donaciones' ? 'text-brand-terracotta fill-current' : 'text-brand-olive'}`} />
            <span className="font-sans font-bold text-base uppercase tracking-wide text-xs">Donación en Dinero</span>
            <span className="text-xs opacity-80 mt-1.5 text-center leading-relaxed">Aportes únicos o recurrentes de manera segura.</span>
          </button>

          <button
            id="col-tab-coronas"
            onClick={() => { setActiveTab('coronas'); resetAllForms(); }}
            className={`flex flex-col items-center p-6 rounded-sm border transition-all cursor-pointer ${
              activeTab === 'coronas'
                ? 'bg-brand-olive text-brand-ivory border-brand-olive shadow-sm'
                : 'bg-brand-cream text-stone-700 hover:bg-stone-100 border-brand-border shadow-xs'
            }`}
          >
            <Award className={`w-8 h-8 mb-2 ${activeTab === 'coronas' ? 'text-brand-terracotta' : 'text-brand-olive'}`} />
            <span className="font-sans font-bold text-base uppercase tracking-wide text-xs">Coronas de Caridad</span>
            <span className="text-xs opacity-80 mt-1.5 text-center leading-relaxed">Condolencias digitales con impacto directo.</span>
          </button>

          <button
            id="col-tab-voluntariado"
            onClick={() => { setActiveTab('voluntariado'); resetAllForms(); }}
            className={`flex flex-col items-center p-6 rounded-sm border transition-all cursor-pointer ${
              activeTab === 'voluntariado'
                ? 'bg-brand-olive text-brand-ivory border-brand-olive shadow-sm'
                : 'bg-brand-cream text-stone-700 hover:bg-stone-100 border-brand-border shadow-xs'
            }`}
          >
            <Users className={`w-8 h-8 mb-2 ${activeTab === 'voluntariado' ? 'text-brand-terracotta' : 'text-brand-olive'}`} />
            <span className="font-sans font-bold text-base uppercase tracking-wide text-xs">Voluntariado</span>
            <span className="text-xs opacity-80 mt-1.5 text-center leading-relaxed">Regale su tiempo, cariño y tutorías a nuestros niños.</span>
          </button>
        </div>

        {/* Form Error Message Segment */}
        {formError && (
          <div className="max-w-5xl mx-auto mb-6 bg-brand-terracotta/10 border border-brand-terracotta/20 text-brand-terracotta px-4 py-3 rounded-sm text-xs font-bold text-center">
            ⚠️ {formError}
          </div>
        )}

        {/* TAB WORKFLOWS CONTAINER CONTAINER */}
        <div className="bg-white rounded-sm border border-brand-border shadow-sm p-6 sm:p-10 max-w-5xl mx-auto">
          
          {/* TAB 1: DONACIONES EN BANCO */}
          {activeTab === 'donaciones' && (
            <div id="colabora-donaciones-content" className="animate-fadeIn">
              {donationSuccess ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-brand-cream text-brand-olive border border-brand-border rounded-sm flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal italic text-brand-olive">¡Muchas Gracias por su Generosidad!</h3>
                  <p className="text-stone-550 text-xs sm:text-sm max-w-md mx-auto mt-2 mb-6">
                    Estimado/a <strong>{donorName}</strong>, hemos registrado su donación por un valor de <strong>${parseInt(customAmount || donateAmount).toLocaleString('es-CL')} CLP</strong>. Recibirá un recibo tributario oficial en su correo: <em>{donorEmail}</em>.
                  </p>
                  <button
                    onClick={resetAllForms}
                    className="bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-sm cursor-pointer"
                  >
                    Hacer otra Donación
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                  <div className="text-justify">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal italic text-brand-olive mb-4">Aporte Económico Directo</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      Sus generosas contribuciones financian la compra de pañales, útiles escolares, fórmulas lácteas de alta calidad y estimulación temprana. Seleccione uno de nuestros montos preestablecidos o configure uno a su medida.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      {['10000', '20000', '50000', '100000'].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => { setDonateAmount(amount); setCustomAmount(''); }}
                          className={`py-3 rounded-sm text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
                            donateAmount === amount && !customAmount
                              ? 'bg-brand-olive text-brand-ivory border-brand-olive'
                              : 'bg-brand-cream text-stone-705 border-brand-border hover:bg-stone-100'
                          }`}
                        >
                          ${parseInt(amount).toLocaleString('es-CL')}
                        </button>
                      ))}
                    </div>

                    <div className="mb-6">
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2" htmlFor="custom-donate-amount">Otro Monto Personalizado (CLP)</label>
                      <input
                        id="custom-donate-amount"
                        type="number"
                        placeholder="Ej. 15000"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setDonateAmount(''); }}
                        className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                      />
                    </div>
                  </div>

                  <form onSubmit={handleProcessDirectDonation} className="bg-brand-cream p-6 rounded-sm border border-brand-border flex flex-col justify-between text-justify">
                    <div className="space-y-4">
                      <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider flex items-center gap-1.5 border-b border-brand-border pb-2 select-none">
                        <CreditCard className="w-4 h-4 text-brand-olive" />
                        Procesar Transferencia Segura
                      </h4>
                      
                      <div>
                        <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1" htmlFor="donate-donor-name">Nombre del Donante *</label>
                        <input
                          id="donate-donor-name"
                          type="text"
                          required
                          placeholder="Elena Bianchi G."
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          className="w-full bg-white border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1" htmlFor="donate-donor-email">Correo para Recibo Digital *</label>
                        <input
                          id="donate-donor-email"
                          type="email"
                          required
                          placeholder="elena@correo.cl"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="w-full bg-white border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                        />
                      </div>

                      <div className="bg-white text-stone-700 px-3 py-2.5 rounded-sm text-[11px] leading-relaxed border border-brand-border">
                        💳 <strong>Monto a donar:</strong> ${parseInt(customAmount || donateAmount || '0').toLocaleString('es-CL')} CLP.<br />
                        Sus fondos se canalizan a través de nuestro procesador bancario Transbank en pesos chilenos de forma encriptada.
                      </div>
                    </div>

                    <button
                      id="btn-process-direct-donation"
                      type="submit"
                      disabled={isProcessingDonation}
                      className="w-full bg-brand-terracotta hover:bg-brand-rust text-white font-bold py-3 px-4 rounded-sm text-xs uppercase tracking-widest cursor-pointer mt-6"
                    >
                      {isProcessingDonation ? 'Procesando Donativo...' : 'Realizar Transferencia Segura'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CORONAS DE CARIDAD & PASARELA DE PAGOS COMPLETE FLOW */}
          {activeTab === 'coronas' && (
            <div id="colabora-coronas-content" className="animate-fadeIn font-serif">
              
              {/* CORONAS DE CARIDAD STEP 1: FORM OR CARD BUILDER */}
              {coronaPaymentStep === 'form' && (
                <div id="corona-form-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* LEFT: FORM INPUTS */}
                  <form onSubmit={handleCoronaSubmitForm} className="lg:col-span-7 space-y-4 text-justify">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-normal italic text-brand-olive leading-snug">Envío de Corona de Caridad</h3>
                      <p className="text-stone-500 text-xs mt-1.5 mb-6 leading-relaxed">
                        Al enviar una Corona de Caridad, usted aporta fondos a la nutrición y estimulación de los menores en la salacuna en memoria de un ser querido fallecido, y nosotros enviamos un elegante diploma certificado y nota de condolencias a su familia.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="corona-sender-name">De parte de (Remitente) *</label>
                        <input
                          id="corona-sender-name"
                          type="text"
                          required
                          placeholder="Ej. Familia Rossi Canessa"
                          value={coronaSender}
                          onChange={(e) => setCoronaSender(e.target.value)}
                          className="w-full bg-stone-50 border border-brand-border rounded-sm px-3 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="corona-deceased-name">En memoria del fallecido *</label>
                        <input
                          id="corona-deceased-name"
                          type="text"
                          required
                          placeholder="Ej. Don Silvio Moretti Bertoni"
                          value={coronaDeceased}
                          onChange={(e) => setCoronaDeceased(e.target.value)}
                          className="w-full bg-stone-50 border border-brand-border rounded-sm px-3 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="corona-family-name">Para la familia de (Destinatario) *</label>
                        <input
                          id="corona-family-name"
                          type="text"
                          required
                          placeholder="Ej. Sra. Clara Vda. de Moretti"
                          value={coronaFamily}
                          onChange={(e) => setCoronaFamily(e.target.value)}
                          className="w-full bg-stone-50 border border-brand-border rounded-sm px-3 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="corona-email-address">Email de la Familia para aviso *</label>
                        <input
                          id="corona-email-address"
                          type="email"
                          required
                          placeholder="clara.moretti@correo.com"
                          value={coronaEmail}
                          onChange={(e) => setCoronaEmail(e.target.value)}
                          className="w-full bg-stone-50 border border-brand-border rounded-sm px-3 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="corona-msg-detail">Mensaje de Condolencias Personalizado</label>
                      <textarea
                        id="corona-msg-detail"
                        rows={3}
                        value={coronaMessage}
                        onChange={(e) => setCoronaMessage(e.target.value)}
                        className="w-full bg-stone-50 border border-brand-border rounded-sm px-3 py-2.5 text-xs focus:outline-none focus:border-brand-olive leading-relaxed text-stone-700"
                      />
                    </div>

                    {/* Cost Selector Card Option */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { val: '15000', label: 'In Memoriam' },
                        { val: '30000', label: 'Especial' },
                        { val: '50000', label: 'Honores Fundación' },
                      ].map((tier) => (
                        <button
                          key={tier.val}
                          type="button"
                          onClick={() => setCoronaAmount(tier.val)}
                          className={`p-3 rounded-sm border text-center transition-colors cursor-pointer ${
                            coronaAmount === tier.val
                              ? 'bg-brand-cream border-brand-olive text-brand-olive font-bold'
                              : 'bg-stone-50 text-stone-500 border-brand-border'
                          }`}
                        >
                          <span className="block text-[9px] uppercase font-sans tracking-wide">{tier.label}</span>
                          <span className="text-xs sm:text-sm font-bold block mt-0.5 font-sans">${parseInt(tier.val).toLocaleString('es-CL')}</span>
                        </button>
                      ))}
                    </div>

                    {/* Template theme customization */}
                    <div>
                      <span className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2">Diseño del Certificado</span>
                      <div className="flex flex-col sm:flex-row gap-4 font-sans text-xs">
                        {[
                          { id: 'clasica', label: 'Borde Clásico Tradicional' },
                          { id: 'floreada', label: 'Motivo de Ángeles y Rosas' },
                          { id: 'espiritual', label: 'Espiritualidad Elegante' }
                        ].map((theme) => (
                          <label key={theme.id} className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="card-theme"
                              checked={coronaCardTheme === theme.id}
                              onChange={() => setCoronaCardTheme(theme.id as any)}
                              className="accent-brand-olive"
                            />
                            <span>{theme.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      id="btn-goto-corona-checkout"
                      type="submit"
                      className="w-full bg-brand-terracotta hover:bg-brand-rust text-white font-bold py-3 px-4 rounded-sm text-xs tracking-wider uppercase cursor-pointer mt-4"
                    >
                      Continuar a la Pasarela de Pago
                    </button>
                  </form>

                  {/* RIGHT: REAL-TIME BEAUTIFUL LIVE PREVIEW DE CONDOLENCIAS */}
                  <div className="lg:col-span-5 self-start sticky top-24 font-serif">
                    <span className="text-stone-500 font-sans font-bold text-xs uppercase tracking-wider block mb-3 text-center">Vista Previa de la Tarjeta</span>
                    
                    <div className={`p-6 rounded-sm border-2 ${
                      coronaCardTheme === 'clasica' ? 'border-brand-terracotta bg-brand-cream' :
                      coronaCardTheme === 'floreada' ? 'border-brand-olive bg-white' :
                      'border-brand-charcoal bg-stone-50'
                    } min-h-[350px] shadow-sm flex flex-col justify-between items-center text-center text-brand-charcoal relative`}>
                      
                      {/* Stylized background watermark seals */}
                      <div className="absolute top-4 right-4 text-[9px] uppercase tracking-widest font-sans font-bold text-brand-olive border border-brand-border/40 px-2 py-0.5 select-none">
                        DESDE 1945
                      </div>

                      {/* Header decoration */}
                      <div className="flex gap-1.5 justify-center mt-3 select-none">
                        <span className="w-1.5 h-1.5 bg-brand-olive rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-brand-terracotta rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-brand-rust rounded-full"></span>
                      </div>

                      <div className="w-full my-auto space-y-4">
                        <h4 className="font-serif italic text-brand-olive font-extrabold text-lg sm:text-xl leading-none">Hogar Niño Jesús</h4>
                        <div className="border-t border-b border-brand-border/50 py-3 my-4 space-y-2 font-sans text-xs">
                          <p className="text-stone-500 uppercase tracking-widest text-[8px] font-bold">Ofrenda de Condolencia y Caridad</p>
                          <p className="text-stone-850 text-sm">
                            En memoria de: <br /><strong className="font-serif italic text-stone-900 border-b border-dashed border-stone-400 pb-0.5">{coronaDeceased || '(Fallecido)'}</strong>
                          </p>
                        </div>

                        <p className="text-xs italic leading-relaxed text-stone-600 max-w-xs mx-auto px-2 font-serif">
                          {coronaMessage || '“Nuestros sinceros pensamientos de consuelo.”'}
                        </p>

                        <div className="pt-4 font-sans text-[11px] text-stone-500 space-y-1">
                          <p>
                            Remitente: <strong>{coronaSender || '(Su Nombre / Familia)'}</strong>
                          </p>
                          <p>
                            Para la familia de: <strong>{coronaFamily || '(Familia doliente)'}</strong>
                          </p>
                        </div>
                      </div>

                      <p className="text-[9px] font-sans text-stone-400 mt-6 leading-relaxed select-none">
                        Esta ofrenda de caridad se traduce en un aporte directo a los fondos solidarios de Ñuñoa. Se emite con firma digital autorizada de la Corporación.
                      </p>
                    </div>
                  </div>

                </div>
              )}

              {/* CORONAS DE CARIDAD STEP 2: CREDIT CARD PAYMENTS GATEWAY */}
              {coronaPaymentStep === 'payment_gateway' && (
                <div id="corona-checkout-layout" className="max-w-md mx-auto py-6 animate-fadeIn font-sans">
                  <div className="bg-brand-cream border border-brand-border rounded-sm p-6 shadow-sm">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-brand-terracotta rounded-sm flex items-center justify-center mx-auto mb-3 text-brand-ivory font-bold">
                        $
                      </div>
                      <h3 className="font-serif font-normal italic text-brand-olive text-lg">Pasarela de Pago Segura</h3>
                      <p className="text-xs text-stone-500 mt-1">Conexión encriptada vía Transbank Webpay simulado.</p>
                    </div>

                    {/* Checkout Billing details summary */}
                    <div className="bg-white border rounded-sm p-4 my-4 text-xs space-y-2 text-stone-700">
                      <div><strong className="text-stone-900">Operación:</strong> Corona de Caridad digital</div>
                      <div><strong className="text-stone-900">Valor a facturar:</strong> ${parseInt(coronaAmount).toLocaleString('es-CL')} CLP</div>
                      <div><strong className="text-stone-900">Remitente:</strong> {coronaSender}</div>
                      <div><strong className="text-stone-900">Destinatario digital:</strong> {coronaEmail}</div>
                    </div>

                    <form onSubmit={handleProcessCoronaCardPayment} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1" htmlFor="checkout-cc-num">Número de Tarjeta *</label>
                        <input
                          id="checkout-cc-num"
                          type="text"
                          required
                          maxLength="16"
                          placeholder="4500 1200 4580 9621"
                          value={ccNumber}
                          onChange={(e) => setCcNumber(e.target.value.replace(/\D/g, ''))}
                          className="w-full bg-white border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1" htmlFor="checkout-cc-expiry">Vencimiento (MM/AA) *</label>
                          <input
                            id="checkout-cc-expiry"
                            type="text"
                            required
                            maxLength="5"
                            placeholder="12/29"
                            value={ccExpiry}
                            onChange={(e) => setCcExpiry(e.target.value)}
                            className="w-full bg-white border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1" htmlFor="checkout-cc-cvv">Código CVV *</label>
                          <input
                            id="checkout-cc-cvv"
                            type="password"
                            required
                            maxLength="3"
                            placeholder="***"
                            value={ccCvv}
                            onChange={(e) => setCcCvv(e.target.value.replace(/\D/g, ''))}
                            className="w-full bg-white border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4 select-none">
                        <button
                          id="btn-checkout-cancel"
                          type="button"
                          onClick={() => setCoronaPaymentStep('form')}
                          className="flex-1 bg-white border border-brand-border hover:bg-stone-50 text-stone-700 font-bold py-2.5 rounded-sm text-xs cursor-pointer text-center uppercase tracking-wider"
                        >
                          Modificar
                        </button>
                        <button
                          id="btn-checkout-submit"
                          type="submit"
                          disabled={transacting}
                          className="flex-1 bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold py-2.5 rounded-sm text-xs cursor-pointer flex items-center justify-center gap-1 uppercase tracking-wider"
                        >
                          {transacting ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-ivory" />
                              <span>Procesando...</span>
                            </>
                          ) : (
                            <span>PAGAR CON WEBPAY</span>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* CORONAS DE CARIDAD STEP 3: CONGRATULATIONS AND DIPLOMA DOCK PRINTING */}
              {coronaPaymentStep === 'completed' && (
                <div id="corona-completed-layout" className="max-w-2xl mx-auto text-center py-6 animate-fadeIn font-serif">
                  <div className="w-14 h-14 bg-brand-cream text-brand-olive border border-brand-border rounded-sm flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal italic text-brand-olive">¡Corona Enviada con Éxito!</h3>
                  <p className="text-stone-550 text-xs sm:text-sm mt-1 mb-8">
                    La pasarela de pago autorizó la transacción. El sistema envió automáticamente una copia de la tarjeta digital de condolencias al correo ingresado: <strong>{coronaEmail}</strong>.
                  </p>

                  {/* Elegant Printable Diploma Card */}
                  <div className="bg-brand-cream border-4 border-brand-terracotta rounded-sm p-8 sm:p-12 text-left shadow-sm font-serif text-stone-850 relative max-w-xl mx-auto mb-8 leading-relaxed">
                    
                    {/* Retro Stamp Ornament decoration */}
                    <div className="absolute bottom-6 right-6 w-16 h-16 rounded-sm border border-brand-olive/40 opacity-40 flex items-center justify-center text-[8px] font-bold font-sans text-brand-olive uppercase tracking-widest text-center rotate-12">
                      Hogar<br />Niño Jesús<br />1945
                    </div>

                    <div className="border-b border-brand-border pb-3 mb-6 text-center select-none">
                      <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-brand-olive">OFRENDA DE CONDOLENCIA Y CARIDAD</span>
                      <h4 className="font-serif text-2xl font-normal italic text-brand-olive mt-1">Certificado de Corona de Caridad</h4>
                      <p className="text-[8px] text-stone-400 font-sans tracking-widest uppercase">EN MEMORIA DEL MIEMBRO DE NUESTRA COMUNIDAD</p>
                    </div>

                    <div className="space-y-4 text-justify text-xs sm:text-sm text-stone-750">
                      <p>
                        La Corporación del <strong className="font-serif">Hogar Niño Jesús de Ñuñoa</strong> certifica solemnemente que se ha enviado una Corona de Caridad en memoria de:
                      </p>
                      
                      <p className="text-center py-2.5 bg-white border border-dashed border-brand-border rounded-sm">
                        <span className="font-serif text-lg font-bold italic text-brand-charcoal">{coronaDeceased}</span>
                      </p>

                      <p>
                        Esta generosa donación fue efectuada por <strong className="font-sans font-bold">{coronaSender}</strong> y se destinará exclusivamente a resguardar la nutrición, vestuario, salud pediátrica y estimulación de los lactantes y niños vulnerados de nuestra institución en Ñuñoa.
                      </p>

                      <p>
                        Hacemos llegar nuestras sinceras oraciones, consuelo y condolencias a la <strong className="font-sans font-bold">{coronaFamily}</strong> en esta hora de partida.
                      </p>
                    </div>

                    <div className="pt-8 border-t border-brand-border mt-8 flex justify-between items-end text-xs font-sans select-none">
                      <div>
                        <span className="block text-[9px] text-stone-400 font-bold uppercase tracking-wider">Código de Registro:</span>
                        <strong className="font-mono text-brand-terracotta text-xs font-bold">{coronaCodeReference}</strong>
                      </div>
                      <div className="text-right">
                        <span className="block text-[8px] text-stone-400 font-bold uppercase tracking-wider">Directora General Clinica:</span>
                        <strong className="text-stone-850 text-[11px]">Dra. Antonella Mancini S.</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto select-none">
                    <button
                      id="btn-print-co-diploma"
                      onClick={() => alert(`Enviando comando de impresión para la Corona de Caridad con código ${coronaCodeReference}.`)}
                      className="flex-1 flex items-center justify-center gap-2 bg-brand-cream border border-brand-border text-brand-olive py-3 rounded-sm text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xs hover:bg-stone-100"
                    >
                      <Printer className="w-4 h-4 text-brand-olive" />
                      <span>Imprimir</span>
                    </button>
                    <button
                      id="btn-corona-finished"
                      onClick={resetAllForms}
                      className="flex-1 bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold py-3 px-6 rounded-sm text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Volver
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: VOLUNTARIADO FORM */}
          {activeTab === 'voluntariado' && (
            <div id="colabora-voluntariado-content" className="animate-fadeIn">
              {volunteerSuccess ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-brand-cream text-brand-olive border border-brand-border rounded-sm flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal italic text-brand-olive">¡Postulación de Voluntariado Registrada!</h3>
                  <p className="text-stone-550 text-xs sm:text-sm max-w-md mx-auto mt-2 leading-relaxed mb-6 block animate-fadeIn">
                    Estimado/a <strong>{volunteerName}</strong>, agradecemos profundamente su vocación de servicio para acompañar y apoyar a nuestros niños. Nos comunicaremos con usted desde el departamento social para su inducción de bienvenida.
                  </p>
                  <button
                    onClick={resetAllForms}
                    className="bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-sm cursor-pointer"
                  >
                    Postular Otro Voluntario
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="text-justify">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal italic text-brand-olive mb-4">¿Quieres Sumar Sonrisas?</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      El tiempo de cariño es el regalo más hermoso para un niño en proceso de acogida. Como voluntario/a del Hogar Niño Jesús, podrás cooperar en talleres lúdicos infantiles, lectura de cuentos, apoyo en tareas escolares o simplemente compartir momentos recreativos constructivos.
                    </p>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      Damos la bienvenida desde estudiantes universitarios (especialmente del área parvularia, de pedagogía o pediatría) hasta familias y personas con un espíritu alegre de servicio.
                    </p>
                  </div>

                  <form onSubmit={handleProcessVolunteer} className="bg-brand-cream p-6 sm:p-8 rounded-sm border border-brand-border space-y-4 text-justify">
                    <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider border-b border-brand-border pb-2">Enlácese como Voluntario</h4>

                    <div>
                      <label className="block text-xs font-bold text-stone-750 uppercase mb-1 font-sans" htmlFor="vol-name">Nombre Completo *</label>
                      <input
                        id="vol-name"
                        type="text"
                        required
                        placeholder="Ignacio Canessa Bertoni"
                        value={volunteerName}
                        onChange={(e) => setVolunteerName(e.target.value)}
                        className="w-full bg-white border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-750 uppercase mb-1 font-sans" htmlFor="vol-email">Correo de Contacto *</label>
                      <input
                        id="vol-email"
                        type="email"
                        required
                        placeholder="ignacio.canessa@correo.com"
                        value={volunteerEmail}
                        onChange={(e) => setVolunteerEmail(e.target.value)}
                        className="w-full bg-white border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-olive"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-750 uppercase mb-1 font-sans" htmlFor="vol-type">Tipo de Actividad Interesada</label>
                      <select
                        id="vol-type"
                        value={volunteerType}
                        onChange={(e) => setVolunteerType(e.target.value)}
                        className="w-full bg-white border border-brand-border rounded-sm px-2.5 py-2 text-xs focus:outline-none focus:border-brand-olive cursor-pointer font-sans"
                      >
                        <option value="Acompañamiento Social">Acompañamiento Escolar (Apoyo en tareas, lectura)</option>
                        <option value="Asistencia en Talleres">Asistencia en Estimulación (Talleres de arte, juegos lúdicos)</option>
                        <option value="Eventos Especiales">Apoyo Fiestas y Eventos (Día del Niño, Navidad)</option>
                        <option value="Musicoterapia o Canto">Musicoterapia / Canto / Actividades recreativas</option>
                      </select>
                    </div>

                    <button
                      id="btn-process-volunteer"
                      type="submit"
                      className="w-full bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold py-3 px-4 rounded-sm text-xs tracking-wider uppercase cursor-pointer mt-6"
                    >
                      Enviar Postulación de Voluntariado
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
