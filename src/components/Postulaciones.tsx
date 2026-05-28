import React, { useState } from 'react';
import { 
  User, 
  Users, 
  BriefcaseMedical, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Sparkles, 
  FileCheck, 
  Download,
  AlertCircle
} from 'lucide-react';

interface Application {
  code: string;
  residentName: string;
  residentAge: number;
  residentRun: string;
  caregiverName: string;
  caregiverPhone: string;
  caregiverEmail: string;
  dependencyLevel: string;
  comments: string;
  status: 'Recibido' | 'En Evaluación Clínica' | 'Aprobado - Espera de Vacante';
  submittedAt: string;
}

export default function Postulaciones() {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepError, setStepError] = useState('');
  const [formData, setFormData] = useState({
    residentName: '',
    residentAge: '',
    residentRun: '',
    caregiverName: '',
    caregiverPhone: '',
    caregiverEmail: '',
    caregiverRelation: '',
    dependencyLevel: 'Baja Dependencia',
    healthSystem: 'FONASA',
    comments: '',
  });

  const [submittedApplications, setSubmittedApplications] = useState<Application[]>([]);
  const [submissionCompleted, setSubmissionCompleted] = useState(false);
  const [recentCode, setRecentCode] = useState('');

  // Local tracking modal inspection state
  const [activeInspectedApp, setActiveInspectedApp] = useState<Application | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    setStepError('');
    // Basic validation
    if (currentStep === 1) {
      if (!formData.residentName || !formData.residentAge || !formData.residentRun) {
        setStepError('Por favor complete todos los datos del menor para continuar.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.caregiverName || !formData.caregiverPhone || !formData.caregiverEmail) {
        setStepError('Por favor complete los datos de contacto del tutor responsable.');
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStepError('');
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStepError('');

    // Generate unique random reference code
    const randomCode = `HNJ-${Math.floor(100000 + Math.random() * 90000)}`;
    const newApp: Application = {
      code: randomCode,
      residentName: formData.residentName,
      residentAge: parseInt(formData.residentAge) || 2,
      residentRun: formData.residentRun,
      caregiverName: formData.caregiverName,
      caregiverPhone: formData.caregiverPhone,
      caregiverEmail: formData.caregiverEmail,
      dependencyLevel: formData.dependencyLevel,
      comments: formData.comments,
      status: 'Recibido',
      submittedAt: new Date().toLocaleDateString('es-CL')
    };

    setSubmittedApplications((prev) => [newApp, ...prev]);
    setRecentCode(randomCode);
    setSubmissionCompleted(true);
    setCurrentStep(4);
  };

  const resetForm = () => {
    setFormData({
      residentName: '',
      residentAge: '',
      residentRun: '',
      caregiverName: '',
      caregiverPhone: '',
      caregiverEmail: '',
      caregiverRelation: '',
      dependencyLevel: 'Baja Dependencia',
      healthSystem: 'FONASA',
      comments: '',
    });
    setStepError('');
    setSubmissionCompleted(false);
    setRecentCode('');
    setCurrentStep(1);
  };

  return (
    <div id="postulacion-section" className="bg-brand-ivory py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest bg-brand-cream border border-brand-border px-4 py-1.5 rounded-sm select-none">
            Admisión y Registro
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-brand-olive mt-3 tracking-tight">
            Admisión y Ficha de Acogimiento
          </h2>
          <div className="w-20 h-0.5 bg-brand-terracotta mx-auto mt-4" />
          <p className="text-stone-605 mt-4 text-sm sm:text-base leading-relaxed">
            Complete nuestro formulario técnico estructurado en línea para iniciar el proceso de evaluación pediátrica y diagnóstico social coordinado por nuestro equipo multidisciplinario.
          </p>
        </div>

        {/* Process requirements and steps grid info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-sm border border-brand-border shadow-xs flex gap-4 items-start text-justify">
            <div className="p-3 bg-brand-cream text-brand-terracotta border border-brand-border rounded-sm shrink-0 select-none">
              <User className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider">1. Criterio de Edad</h4>
              <p className="text-stone-500 text-xs mt-1.5 leading-relaxed font-sans">
                Acogemos lactantes y niños de 0 a 12 años en situación de vulnerabilidad o desamparo social derivado por Tribunales de Familia.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border border-brand-border shadow-xs flex gap-4 items-start text-justify">
            <div className="p-3 bg-brand-cream text-brand-terracotta border border-brand-border rounded-sm shrink-0 select-none">
              <BriefcaseMedical className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider">2. Informe e Historial Pediátrico</h4>
              <p className="text-stone-500 text-xs mt-1.5 leading-relaxed font-sans">
                Presentar control de sana infancia, carnet de vacunación al día o ficha de derivación judicial correspondiente.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border border-brand-border shadow-xs flex gap-4 items-start text-justify">
            <div className="p-3 bg-brand-cream text-brand-terracotta border border-brand-border rounded-sm shrink-0 select-none">
              <Users className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider">3. Tutor o Cuidadores de Enlace</h4>
              <p className="text-stone-500 text-xs mt-1.5 leading-relaxed font-sans">
                Cada menor debe contar con un adulto responsable calificado, asistente social o institución de enlace oficial para el seguimiento de la estadía.
              </p>
            </div>
          </div>
        </div>

        {/* Form validation alert banner */}
        {stepError && (
          <div className="max-w-4xl mx-auto mb-6 bg-brand-terracotta/10 border border-brand-terracotta/20 text-brand-terracotta px-4 py-3 rounded-sm text-xs font-bold text-center select-none font-sans">
            ⚠️ {stepError}
          </div>
        )}

        {/* THE MAIN INTERACTIVE FORM BLOCK AND ITS STEPS */}
        <div className="bg-white rounded-sm border border-brand-border overflow-hidden max-w-4xl mx-auto mb-16 shadow-xs">
          <div className="bg-brand-olive text-white px-6 py-6 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 select-none">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal italic flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-terracotta fill-current" />
                Formulario Único de Admisión
              </h3>
              <p className="text-brand-cream/80 text-xs mt-1 font-sans">
                {submissionCompleted 
                  ? '¡Solicitud enviada de manera exitosa!' 
                  : `Paso ${currentStep} de 3: Complete los campos indicados de forma rigurosa.`}
              </p>
            </div>

            {/* Step progress dots indicators */}
            {!submissionCompleted && (
              <div className="flex gap-2">
                {[1, 2, 3].map((step) => (
                  <div 
                    id={`postula-step-indicator-${step}`}
                    key={step} 
                    className={`h-2.5 rounded-sm transition-all ${
                      step === currentStep ? 'bg-brand-terracotta w-8' : 'bg-white/20 w-2.5'
                    }`} 
                  />
                ))}
              </div>
            )}
          </div>

          <div className="p-6 sm:p-10">
            {submissionCompleted ? (
              // STEP SUCCESS LANDING SCREEN INDEX 4
              <div id="postulacion-success-card" className="text-center py-6 animate-fadeIn">
                <div className="w-16 h-16 bg-brand-cream text-brand-olive border border-brand-border rounded-sm flex items-center justify-center mx-auto mb-6 shadow-xs">
                  <FileCheck className="w-8 h-8 text-brand-olive" />
                </div>
                <h3 className="font-serif text-2xl font-normal italic text-brand-olive">¡Registro Ingresado de Forma Segura!</h3>
                <p className="text-stone-500 text-sm max-w-md mx-auto mt-2 mb-6 text-justify sm:text-center leading-relaxed font-sans">
                  Hemos generado su código único de expediente. El departamento clínico revisará los antecedentes y contactará al apoderado responsable en un plazo máximo de 3 días hábiles.
                </p>

                {/* Simulated Certificate Block */}
                <div className="bg-brand-cream border border-brand-border rounded-sm p-5 text-left text-xs max-w-sm mx-auto mb-8 font-mono leading-relaxed relative text-brand-charcoal">
                  <div className="absolute top-2.5 right-2.5 text-[8px] bg-brand-olive text-brand-ivory font-sans font-bold tracking-widest px-2.5 py-1 rounded-sm uppercase select-none">
                    RECIBIDO
                  </div>
                  <div className="border-b border-brand-border pb-2 mb-3">
                    <h5 className="font-sans font-bold text-brand-charcoal text-sm leading-none uppercase tracking-wide">HOGAR NIÑO JESÚS ÑUÑOA</h5>
                    <p className="text-[9px] text-stone-400 uppercase tracking-widest mt-1">SISTEMA INTEGRAL DE ADMISIÓN</p>
                  </div>
                  <div>
                    <span className="font-bold">CÓDIGO EXPEDIENTE:</span> <span className="text-brand-terracotta font-bold font-sans">{recentCode}</span><br />
                    <span className="font-bold">LACTANTE / NIÑO:</span> {formData.residentName}<br />
                    <span className="font-bold">EDAD:</span> {formData.residentAge} años / meses<br />
                    <span className="font-bold">RESPONSABLE:</span> {formData.caregiverName}<br />
                    <span className="font-bold">ESTADO INCIAL:</span> En Evaluación Pediátrica<br />
                    <span className="font-bold">REGISTRO REGIONAL:</span> 2026-05-27 RM
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto select-none">
                  <button
                    id="btn-print-admission"
                    onClick={() => alert(`Descargando comprobante oficial de expediente provisorio para ${recentCode}.`)}
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-cream hover:bg-stone-50 text-brand-olive border border-brand-border py-3 rounded-sm text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                  >
                    <Download className="w-4 h-4 text-brand-olive" />
                    <span>Descargar Comprobante</span>
                  </button>
                  <button
                    id="btn-new-admission"
                    onClick={resetForm}
                    className="flex-1 bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory py-3 rounded-sm text-xs font-bold uppercase tracking-wider cursor-pointer select-none transition-colors"
                  >
                    Postular Otro Menor
                  </button>
                </div>
              </div>
            ) : (
              // ACTIVE STEPS WIZARD WIZARD
              <form onSubmit={handleSubmit} className="space-y-6 text-justify">
                
                {/* STEP 1: SOLICITANTE RESIDENTE */}
                {currentStep === 1 && (
                  <div id="step-1-form-group" className="space-y-4 animate-fadeIn font-sans">
                    <div className="border-b border-brand-border pb-2.5 mb-4 select-none">
                      <h4 className="font-sans font-bold text-brand-charcoal text-base uppercase tracking-wider">Paso 1: Antecedentes del Lactante o Menor</h4>
                      <p className="text-stone-400 text-xs">Ingrese los datos personales y biográficos del niño.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-run-name">Nombre Completo del Menor *</label>
                      <input
                        id="postula-run-name"
                        type="text"
                        name="residentName"
                        required
                        placeholder="Ej. Valentina Paz Moretti"
                        value={formData.residentName}
                        onChange={handleInputChange}
                        className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-run-age">Edad (Años / Meses) *</label>
                        <input
                          id="postula-run-age"
                          type="number"
                          name="residentAge"
                          required
                          min="0"
                          max="15"
                          placeholder="Ej. 2"
                          value={formData.residentAge}
                          onChange={handleInputChange}
                          className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-run-run">Cédula Identidad (RUN) del Menor *</label>
                        <input
                          id="postula-run-run"
                          type="text"
                          name="residentRun"
                          required
                          placeholder="Ej. 7.123.456-K"
                          value={formData.residentRun}
                          onChange={handleInputChange}
                          className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-health-system">Sistema de Salud Vigente</label>
                      <select
                        id="postula-health-system"
                        name="healthSystem"
                        value={formData.healthSystem}
                        onChange={handleInputChange}
                        className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive cursor-pointer font-sans"
                      >
                        <option value="FONASA">FONASA (Fonasa copago subsidiado o preferente)</option>
                        <option value="ISAPRE">ISAPRE (Convenios libres previsionales)</option>
                        <option value="DIPRECA / CAPREDENA">DIPRECA / CAPREDENA de FFAA / Orden</option>
                        <option value="Ninguno / Particular">Particular ordinario directo</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 2: DATOS DEL APODERADO TUTOR */}
                {currentStep === 2 && (
                  <div id="step-2-form-group" className="space-y-4 animate-fadeIn font-sans">
                    <div className="border-b border-brand-border pb-2.5 mb-4 select-none">
                      <h4 className="font-sans font-bold text-brand-charcoal text-base uppercase tracking-wider">Paso 2: Antecedentes del Tutor o Institución Solicitante</h4>
                      <p className="text-stone-400 text-xs">Persona natural o institución de enlace para llamados, coordinaciones y urgencias.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-apo-name">Nombre del Tutor o Trabajador Social Responsable *</label>
                      <input
                        id="postula-apo-name"
                        type="text"
                        name="caregiverName"
                        required
                        placeholder="Ej. Giovanni Canessa"
                        value={formData.caregiverName}
                        onChange={handleInputChange}
                        className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-apo-relation">Vínculo con el Solicitante *</label>
                        <input
                          id="postula-apo-relation"
                          type="text"
                          name="caregiverRelation"
                          required
                          placeholder="Ej. Tribunal de Familia, Madre, Padre"
                          value={formData.caregiverRelation}
                          onChange={handleInputChange}
                          className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-apo-phone">Teléfono de Contacto Móvil *</label>
                        <input
                          id="postula-apo-phone"
                          type="tel"
                          name="caregiverPhone"
                          required
                          placeholder="Ej. +56 9 8245 1069"
                          value={formData.caregiverPhone}
                          onChange={handleInputChange}
                          className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-apo-email">Correo Electrónico de Enlace *</label>
                      <input
                        id="postula-apo-email"
                        type="email"
                        name="caregiverEmail"
                        required
                        placeholder="g.canessa@correo.cl"
                        value={formData.caregiverEmail}
                        onChange={handleInputChange}
                        className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: INFORMACION CLINICA Y COMENTARIOS */}
                {currentStep === 3 && (
                  <div id="step-3-form-group" className="space-y-4 animate-fadeIn font-sans">
                    <div className="border-b border-brand-border pb-2.5 mb-4 select-none">
                      <h4 className="font-sans font-bold text-brand-charcoal text-base uppercase tracking-wider">Paso 3: Nivel de Atención y Cuidados Especiales</h4>
                      <p className="text-stone-400 text-xs">Esto nos ayuda a configurar el plan de lactancia o estimulación sugerida.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-dependency">Rango de Cuidado Sugerido</label>
                      <select
                        id="postula-dependency"
                        name="dependencyLevel"
                        value={formData.dependencyLevel}
                        onChange={handleInputChange}
                        className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive cursor-pointer"
                      >
                        <option value="Cuidado de Cuna / Lactancia">Cuidado de Cuna / Lactancia (0 a 2 años)</option>
                        <option value="Cuidado Parvulario y Estimulado">Cuidado Parvulario y Jardín (2 a 6 años)</option>
                        <option value="Cuidado Escolar e Integración">Cuidado Escolar e Integración (6 a 12 años)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1" htmlFor="postula-comments">Ficha Nutricional, Médica o Social Relevante (Alergias, Tratamientos, Derivación)</label>
                      <textarea
                        id="postula-comments"
                        name="comments"
                        rows={4}
                        placeholder="Ej. Alergia a la lactosa, requiere fonoaudiología, derivación Judicial por causa familiar..."
                        value={formData.comments}
                        onChange={handleInputChange}
                        className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive italic leading-relaxed"
                      />
                    </div>

                    <div className="bg-brand-cream rounded-sm p-4 border border-brand-border flex items-start gap-3 select-none">
                      <AlertCircle className="w-5 h-5 text-brand-terracotta shrink-0 mt-0.5" />
                      <p className="text-[11px] text-stone-700 leading-relaxed font-sans">
                        <strong>Nota importante de validez legal:</strong> La postulación ingresada a través de este portal público conforma una declaración informativa preliminar. La admisión requerirá la validación de la carpeta familiar o judicial por parte de la Directora del Área Social y Pediátrica de la Fundación.
                      </p>
                    </div>
                  </div>
                )}

                {/* BUTTON CONTROLS NAVIGATION */}
                <div className="flex justify-between items-center pt-6 border-t border-brand-border mt-8 select-none">
                  {currentStep > 1 ? (
                    <button
                      id="postula-btn-prev"
                      type="button"
                      onClick={handlePrevStep}
                      className="flex items-center gap-1.5 text-stone-500 hover:text-brand-olive text-xs font-bold cursor-pointer uppercase tracking-wider"
                    >
                      <ArrowLeft className="w-4 h-4 text-stone-500" />
                      Atrás
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <button
                      id="postula-btn-next"
                      type="button"
                      onClick={handleNextStep}
                      className="flex items-center gap-1 bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold text-xs px-5 py-3 rounded-sm uppercase tracking-wider cursor-pointer ml-auto"
                    >
                      Siguiente Paso
                      <ArrowRight className="w-4 h-4 text-brand-ivory" />
                    </button>
                  ) : (
                    <button
                      id="postula-btn-submit"
                      type="submit"
                      className="flex items-center gap-1.5 bg-brand-terracotta hover:bg-brand-rust text-white font-bold text-xs px-6 py-3 rounded-sm uppercase tracking-widest cursor-pointer ml-auto"
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                      Enviar Formulario
                    </button>
                  )}
                </div>

              </form>
            )}
          </div>
        </div>

        {/* RECENT LOCAL EXPEDIETES MONITOR - SO THEY CAN INDEED TRACK APPLICATION ACTIONS */}
        {submittedApplications.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h4 className="font-serif text-lg font-normal italic text-brand-olive mb-4">Seguimiento de Expedientes Ingresados Recientemente</h4>
            <div className="space-y-3">
              {submittedApplications.map((app) => (
                <div 
                  id={`track-app-card-${app.code}`}
                  key={app.code} 
                  className="bg-white p-4 rounded-sm border border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-justify font-sans shadow-xs hover:border-brand-olive/35 transition-all"
                >
                  <div className="flex flex-wrap items-center">
                    <span className="font-mono text-xs font-bold text-brand-olive bg-brand-cream border border-brand-border rounded-sm px-2.5 py-0.5 mr-3 select-none">
                      {app.code}
                    </span>
                    <strong className="text-brand-charcoal">Menor:</strong>&nbsp;{app.residentName}&nbsp;({app.residentAge} años)&nbsp;
                    <span className="text-stone-300 text-xs mx-1 hidden sm:inline">|</span>
                    <span className="text-stone-400">Ingresado: {app.submittedAt}</span>
                  </div>

                  <div className="flex items-center gap-3 select-none">
                    <span className="inline-block bg-brand-cream border border-brand-border text-brand-olive text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wide">
                      {app.status}
                    </span>
                    <button
                      id={`track-app-view-alert-${app.code}`}
                      onClick={() => setActiveInspectedApp(app)}
                      className="text-brand-terracotta hover:underline text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Inspeccionar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Track App Inspection Modal Dialog */}
      {activeInspectedApp && (
        <div id="inspect-app-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/85 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-sm border border-brand-border max-w-sm w-full p-6 text-center shadow-2xl relative text-justify">
            
            <button
              id="close-inspect-app-modal"
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 font-bold cursor-pointer"
              onClick={() => setActiveInspectedApp(null)}
            >
              ✕
            </button>

            <div className="text-center mb-5 select-none">
              <div className="w-12 h-12 bg-brand-cream border border-brand-border rounded-sm text-brand-olive flex items-center justify-center mx-auto mb-3">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-normal italic text-brand-olive">Estado del Expediente</h4>
              <p className="text-xs text-stone-400 mt-0.5 font-mono select-none">{activeInspectedApp.code}</p>
            </div>

            <div className="space-y-3.5 text-xs text-stone-700 font-sans">
              <div className="pb-2 border-b border-brand-border">
                <strong className="text-brand-charcoal uppercase text-[10px] tracking-wider block">Menor Acogido:</strong>
                <span className="text-sm font-semibold">{activeInspectedApp.residentName}</span> (RUN {activeInspectedApp.residentRun})
              </div>

              <div>
                <strong className="text-brand-charcoal uppercase text-[10px] tracking-wider block">Tutor de Enlace:</strong>
                {activeInspectedApp.caregiverName} ({activeInspectedApp.caregiverPhone})
              </div>

              <div>
                <strong className="text-brand-charcoal uppercase text-[10px] tracking-wider block">Rango de Cuidado:</strong>
                <span className="bg-brand-cream border border-brand-border px-2 py-0.5 text-[9px] font-bold text-brand-olive rounded-sm uppercase select-none inline-block mt-0.5">
                  {activeInspectedApp.dependencyLevel}
                </span>
              </div>

              <div>
                <strong className="text-brand-charcoal uppercase text-[10px] tracking-wider block">Estado de Revisión:</strong>
                <span className="text-brand-terracotta font-bold uppercase tracking-wider">{activeInspectedApp.status}</span>
              </div>

              <div className="bg-brand-cream p-3 rounded-sm border border-brand-border/60 font-serif italic text-stone-600 block leading-relaxed">
                “La solicitud está en nuestra bandeja técnica. El equipo social con el pediatra de turno analizarán la historia clínica y vacunas dentro de las próximas 48 horas.”
              </div>
            </div>

            <button
              id="btn-dismiss-app-inspect"
              onClick={() => setActiveInspectedApp(null)}
              className="w-full bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold text-xs uppercase tracking-wider py-2.5 rounded-sm transition-colors mt-6 cursor-pointer select-none"
            >
              Entendido
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
