import { useState } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  TrendingUp, 
  Coins, 
  CheckCircle, 
  ShieldAlert,
  Loader2
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid 
} from 'recharts';
import { TRANSPARENCY_DOCS, FINANCIALS_INCOME, FINANCIALS_EXPENSES, FINANCIALS_HISTORIC_BUDGET } from '../data';
import { DocumentFile } from '../types';

export default function Transparencia() {
  const [docFilter, setDocFilter] = useState<'all' | 'convenios' | 'estados_financieros' | 'memorias' | 'presupuestos'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingDoc, setDownloadingDoc] = useState<DocumentFile | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Filter documents
  const filteredDocs = TRANSPARENCY_DOCS.filter(doc => {
    const matchesCategory = docFilter === 'all' || doc.category === docFilter;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Recharts color palettes (Editorial colorways)
  const INCOME_COLORS = ['#454E3D', '#A64B2A', '#7A8C6E', '#C2A383']; // Olive, Terracotta, Soft Olive, Warm Gold
  const EXPENSE_COLORS = ['#A64B2A', '#454E3D', '#8C6C52', '#C2A383', '#7A8C6E']; 

  // Trigger simulated download sequence
  const startDownload = (doc: DocumentFile) => {
    setDownloadingDoc(doc);
    setDownloadProgress(0);
    setDownloadSuccess(false);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadSuccess(true);
          return 100;
        }
        return prev + 20;
      });
    }, 250);
  };

  const closeDownloadModal = () => {
    setDownloadingDoc(null);
    setDownloadProgress(0);
    setDownloadSuccess(false);
  };

  return (
    <div id="transparencia-section" className="bg-brand-ivory py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest bg-brand-cream border border-brand-border px-4 py-1.5 rounded-sm">
            Transparencia Institucional
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-brand-olive mt-4 tracking-tight font-serif">
            Nuestros Números, Convenios y Memorias
          </h2>
          <div className="w-20 h-0.5 bg-brand-terracotta mx-auto mt-4" />
          <p className="text-stone-600 mt-4 text-sm sm:text-base leading-relaxed">
            Consistente con nuestra vocación sin fines de lucro, ponemos a disposición del público general y entidades reguladoras nuestros balances auditados, presupuestos y memorias anuales completas.
          </p>
        </div>

        {/* 1. STATE CONVENTIONS (SENAMA) SUMMARY SECTION */}
        <div className="bg-white rounded-sm p-6 sm:p-10 border border-brand-border shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-[10px] font-bold text-brand-terracotta uppercase tracking-wider bg-brand-cream border border-brand-border px-2.5 py-1 rounded-sm inline-block mb-3 select-none">
                Convenio Nacional Vigente
              </span>
              <h3 className="font-serif text-2xl font-normal italic text-brand-olive mb-4">
                Acreditación Mejor Niñez (SENAME) y Subvención Estatal
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4 text-justify">
                El Hogar Niño Jesús cuenta con acreditación de colaborador oficial del Servicio Nacional de Protección Especializada a la Niñez y Adolescencia (Mejor Niñez, ex-SENAME), dependiente del Ministerio de Desarrollo Social y Familia del Gobierno de Chile. Este convenio garantiza el financiamiento de vacantes residenciales integrales para lactantes y niños en situación de vulneración grave de derechos, procedentes de Tribunales de Familia.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-stone-700">
                <div className="flex gap-2.5 items-center">
                  <CheckCircle className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Fiscalización técnica trimestral pediátrica y psicomotriz.</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <CheckCircle className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Estándares de nutrición infantil y lactancia certificados.</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <CheckCircle className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Personal TENS con especialización en estimulación temprana continua.</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <CheckCircle className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Plataforma social de acompañamiento para reinserciones y acogidas.</span>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-cream rounded-sm p-6 border border-brand-border flex flex-col justify-center items-center text-center">
              <ShieldAlert className="w-12 h-12 text-brand-terracotta mb-3 animate-none" />
              <h4 className="font-sans font-bold text-brand-charcoal text-sm uppercase tracking-wider">Estado de Licenciamiento</h4>
              <p className="text-stone-500 text-xs mt-1.5 leading-relaxed max-w-xs text-center">
                Inscrito en el Registro de Colaboradores de Mejor Niñez Nº 85-3094. Aprobación Sanitaria de Salas de Cunas vigente Nº 10-249 RM.
              </p>
              <span className="mt-4 bg-brand-olive text-brand-ivory font-mono text-[9px] font-bold tracking-widest px-3.5 py-1.5 rounded-sm uppercase select-none">
                VIGENTE Y CERTIFICADO
              </span>
            </div>
          </div>
        </div>

        {/* 2. RECHARTS FINANCIAL DASHBOARD SECTION */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-brand-olive" />
            <h3 className="font-serif text-2xl font-normal italic text-brand-olive">Dashboard de Transparencia Económica (2025)</h3>
          </div>
          <p className="text-stone-500 text-sm max-w-2xl mb-8">
            Análisis interactivo de la procedencia de los ingresos destinados a sostener la labor y la asignación exacta de los recursos en servicios a los niños.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            {/* Chart 1: Income Origins (Pie Chart) */}
            <div className="bg-white p-6 rounded-sm border border-brand-border shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Coins className="w-4 h-4 text-brand-olive" />
                <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider">Orígenes del Financiamiento (%)</h4>
              </div>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={FINANCIALS_INCOME}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {FINANCIALS_INCOME.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={INCOME_COLORS[index % INCOME_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: '11px', fontFamily: 'Inter, sans-serif' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Expenses Destination (Pie Chart) */}
            <div className="bg-white p-6 rounded-sm border border-brand-border shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-brand-terracotta" />
                <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider">Distribución del Gasto Operativo (%)</h4>
              </div>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={FINANCIALS_EXPENSES}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {FINANCIALS_EXPENSES.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={EXPENSE_COLORS[index % EXPENSE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: '11px', fontFamily: 'Inter, sans-serif' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Chart 3: Historical Budget Flow (Bar Chart) */}
          <div className="bg-white p-6 rounded-sm border border-brand-border shadow-xs">
            <h4 className="font-sans font-bold text-brand-charcoal text-[13px] uppercase tracking-wider mb-2">Evolución Presupuestaria Histórica (En Millones de CLP)</h4>
            <p className="text-xs text-stone-500 mb-6">Muestra consolidada de total de ingresos ordinarios versus egresos anuales, proyectando sustentabilidad contable ordinaria.</p>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={FINANCIALS_HISTORIC_BUDGET} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFECE5" />
                  <XAxis dataKey="year" stroke="#454E3D" fontSize={11} tickLine={false} />
                  <YAxis stroke="#454E3D" fontSize={11} tickLine={false} unit="M" />
                  <Tooltip formatter={(value) => `$${value}M CLP`} />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="Ingresos" fill="#454E3D" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="Egresos" fill="#A64B2A" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 3. DOCUMENT REPOSITORY TABLE / GRID SECTION */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-2 border-b border-brand-border">
            <div>
              <h3 className="font-serif text-2xl font-normal italic text-brand-olive">Repositorio Oficial de Documentos</h3>
              <p className="text-stone-500 text-sm mt-1">Busque y descargue los archivos PDF oficiales de balances económicos, memorias de gestión y actas.</p>
            </div>

            {/* In-tab sub-filter for documents */}
            <div className="flex flex-wrap gap-1 bg-brand-cream p-1 rounded-sm border border-brand-border w-full md:w-auto">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'memorias', label: 'Memorias Anuales' },
                { id: 'estados_financieros', label: 'Estados Financieros' },
                { id: 'presupuestos', label: 'Presupuestos' },
                { id: 'convenios', label: 'Convenios' }
              ].map((subFilter) => (
                <button
                  id={`doc-filter-btn-${subFilter.id}`}
                  key={subFilter.id}
                  onClick={() => setDocFilter(subFilter.id as any)}
                  className={`px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                    docFilter === subFilter.id
                      ? 'bg-brand-olive text-brand-ivory'
                      : 'text-stone-500 hover:text-brand-olive'
                  }`}
                >
                  {subFilter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-olive w-4 h-4" />
            <input
              id="doc-search-input"
              type="text"
              placeholder="Buscar documentos por nombre, año o palabras clave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-border rounded-sm pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
            />
          </div>

          {/* Document list render */}
          {filteredDocs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDocs.map((doc) => (
                <div 
                  id={`doc-card-${doc.id}`}
                  key={doc.id} 
                  className="bg-white p-5 rounded-sm border border-brand-border flex justify-between items-start gap-4 hover:border-brand-olive/40 transition-all text-justify"
                >
                  <div className="flex gap-3 items-start">
                    <div className="p-3 bg-brand-cream border border-brand-border text-brand-terracotta rounded-sm shrink-0 mt-0.5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-brand-charcoal text-sm leading-snug">{doc.name}</h4>
                      <p className="text-stone-550 text-xs mt-1 mr-2 leading-relaxed">{doc.description}</p>
                      
                      <div className="flex gap-2.5 items-center mt-3 text-[11px] text-stone-500">
                        <span className="font-bold bg-brand-cream border border-brand-border px-2 py-0.5 rounded-sm text-brand-olive">{doc.year}</span>
                        <span>• Tamaño: {doc.size}</span>
                        <span>• Formato: PDF Oficial</span>
                      </div>
                    </div>
                  </div>

                  <button
                    id={`doc-download-btn-${doc.id}`}
                    onClick={() => startDownload(doc)}
                    className="flex items-center gap-1.5 bg-brand-cream hover:bg-brand-olive text-brand-olive hover:text-brand-ivory px-3.5 py-2 rounded-sm text-xs font-bold uppercase tracking-wide border border-brand-border transition-colors cursor-pointer shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white text-center py-12 rounded-sm border border-brand-border text-stone-500">
              <FileText className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <p className="font-medium text-sm">No se encontraron documentos en esta categoría con el criterio de búsqueda.</p>
              <button onClick={() => { setSearchQuery(''); setDocFilter('all'); }} className="text-brand-terracotta hover:underline font-bold text-xs mt-2 cursor-pointer">
                Restablecer filtros de búsqueda
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Simulated Document Downloader Modal Context */}
      {downloadingDoc && (
        <div id="download-progress-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/80 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-sm p-6 sm:p-8 max-w-sm w-full border border-brand-border text-center relative shadow-2xl">
            
            <button
              id="close-download-status"
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 font-bold cursor-pointer"
              onClick={closeDownloadModal}
            >
              ✕
            </button>

            {downloadSuccess ? (
              <div id="download-completed-view">
                <div className="w-12 h-12 bg-brand-cream text-brand-olive border border-brand-border rounded-sm flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-[18px] font-normal italic text-brand-olive">Descarga Exitosa</h4>
                <p className="text-stone-500 text-xs mt-1 mb-4">Se ha descargado el documento de forma oficial y firmado digitalmente por la fundación.</p>
                
                <div className="bg-brand-cream text-brand-charcoal p-3.5 rounded-sm text-left text-[11px] leading-relaxed border border-brand-border mb-5 font-mono">
                  <span className="font-bold">DOCUMENTO:</span> {downloadingDoc.name}<br />
                  <span className="font-bold">SHA-256:</span> d48f1f5825bc83921...<br />
                  <span className="font-bold">FECHA:</span> 2026-05-27 UTC<br />
                  <span className="font-bold">ORIGEN:</span> SECURE_REPO_HOGARNINOJESUS
                </div>

                <button
                  id="download-dismiss-button"
                  onClick={closeDownloadModal}
                  className="w-full bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold text-xs uppercase tracking-wider py-2.5 rounded-sm transition-colors cursor-pointer"
                >
                  Finalizar Descarga
                </button>
              </div>
            ) : (
              <div id="download-loading-view">
                <Loader2 className="w-10 h-10 text-brand-olive animate-spin mx-auto mb-4" />
                <h4 className="font-serif text-[18px] font-normal italic text-brand-olive">Preparando PDF Oficial</h4>
                <p className="text-stone-500 text-xs mt-1 mb-5">Conectando con el servidor seguro de archivística. Firmando digitalmente certificado...</p>

                {/* Progress bar */}
                <div className="w-full bg-stone-100 rounded-full h-2 mb-2 overflow-hidden border border-brand-border">
                  <div 
                    className="bg-brand-olive h-full rounded-sm transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-stone-700 font-mono">{downloadProgress}%</span>
              </div>
            )}
            
          </div>
        </div>
      )}

    </div>
  );
}
