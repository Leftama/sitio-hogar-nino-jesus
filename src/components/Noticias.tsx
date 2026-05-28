import React, { useState } from 'react';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  User, 
  Plus, 
  PlusCircle, 
  ChevronRight
} from 'lucide-react';
import { INITIAL_NEWS } from '../data';
import { NewsArticle } from '../types';

export default function Noticias() {
  const [news, setNews] = useState<NewsArticle[]>(INITIAL_NEWS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Celebraciones' | 'Talleres' | 'Comunidad' | 'Institucional'>('all');
  
  // Create News modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalError, setModalError] = useState('');
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'Celebraciones' as NewsArticle['category'],
    image: '',
    author: 'Colectividad Italiana en Chile',
    readTime: '3 min de lectura'
  });

  // Featured News Read More modal state
  const [activeReadingArticle, setActiveReadingArticle] = useState<NewsArticle | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    setModalError('');
    if (!newPost.title || !newPost.content) {
      setModalError('Por favor complete el título y contenido de la noticia.');
      return;
    }

    const defaultImages: Record<NewsArticle['category'], string> = {
      Celebraciones: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
      Talleres: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600',
      Comunidad: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600',
      Institucional: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600'
    };

    const addedArticle: NewsArticle = {
      id: `new-${Date.now()}`,
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      date: new Date().toISOString().split('T')[0],
      image: newPost.image || defaultImages[newPost.category],
      author: newPost.author,
      readTime: newPost.readTime
    };

    setNews([addedArticle, ...news]);
    setShowAddModal(false);
    setNewPost({
      title: '',
      content: '',
      category: 'Celebraciones',
      image: '',
      author: 'Colectividad Italiana en Chile',
      readTime: '3 min de lectura'
    });
  };

  // Filter news articles based on searches
  const filteredNews = news.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="noticias-section" className="bg-brand-ivory py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 border-b border-brand-border pb-6">
          <div>
            <span className="text-brand-terracotta text-xs font-bold uppercase tracking-widest bg-brand-cream border border-brand-border px-3 py-1 rounded-sm select-none">
              Actualidad y Crónicas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-brand-olive mt-3 tracking-tight">
              Noticias y Vida en la Residencia
            </h2>
            <div className="w-20 h-0.5 bg-brand-terracotta mt-4" />
            <p className="text-stone-600 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl text-justify">
              Acompañe el día a día de nuestros nonnos. Desde talleres creativos a celebraciones tradicionales y visitas de voluntariado de las escuelas locales.
            </p>
          </div>

          {/* Quick action: simulate posting news */}
          <button
            id="btn-trigger-add-news"
            onClick={() => { setModalError(''); setShowAddModal(true); }}
            className="flex items-center gap-2 bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm shadow-xs transition-colors cursor-pointer shrink-0 self-start md:self-end select-none"
          >
            <Plus className="w-4 h-4 text-brand-ivory" />
            <span>Publicar Noticia</span>
          </button>
        </div>

        {/* Category Filters Bar and Search Input Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10 items-center">
          
          <div className="lg:col-span-2 flex flex-wrap gap-1 bg-brand-cream p-1 rounded-sm border border-brand-border">
            {[
              { id: 'all', label: 'Todas las Categorías' },
              { id: 'Celebraciones', label: 'Celebraciones' },
              { id: 'Talleres', label: 'Talleres' },
              { id: 'Comunidad', label: 'Vínculo Social' },
              { id: 'Institucional', label: 'Hitos' }
            ].map((cat) => (
              <button
                id={`cat-filter-btn-${cat.id}`}
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-2 rounded-sm text-[10px] uppercase font-bold tracking-wider cursor-pointer transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-brand-olive text-brand-ivory'
                    : 'text-stone-550 hover:text-brand-olive'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-olive w-4 h-4" />
            <input
              id="search-news-input"
              type="text"
              placeholder="Buscar noticias por palabras clave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-border rounded-sm pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
            />
          </div>

        </div>

        {/* NEWS GRID OR TIMELINE LAYOUT */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article 
                id={`news-card-${article.id}`}
                key={article.id} 
                className="bg-white rounded-sm overflow-hidden border border-brand-border shadow-xs hover:border-brand-olive/40 transition-all flex flex-col h-full"
              >
                <div className="h-48 relative overflow-hidden bg-brand-charcoal">
                  <span className="absolute top-3 left-3 bg-brand-olive text-brand-ivory font-bold text-[9px] tracking-widest px-2.5 py-1 rounded-sm uppercase z-10 select-none">
                    {article.category}
                  </span>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between text-justify">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-3 font-sans select-none">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-serif text-[18px] leading-snug font-normal italic text-brand-olive mb-3">
                      {article.title}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                      {article.content}
                    </p>
                  </div>

                  <div className="border-t border-brand-border pt-4 mt-6 flex justify-between items-center bg-brand-cream/35 -mx-6 -mb-6 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-stone-500 flex items-center gap-1 leading-none select-none">
                      <User className="w-3 h-3 text-brand-olive" />
                      Por: {article.author}
                    </span>
                    <button
                      id={`btn-read-news-${article.id}`}
                      onClick={() => setActiveReadingArticle(article)}
                      className="text-brand-terracotta hover:text-brand-rust text-xs font-bold uppercase tracking-wider flex items-center gap-0.5 cursor-pointer hover:underline"
                    >
                      <span>Leer Más</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white text-center py-16 rounded-sm border border-brand-border text-stone-500 max-w-lg mx-auto">
            <Newspaper className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="font-medium text-sm">No se encontraron noticias bajo el criterio seleccionado.</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="text-brand-terracotta font-bold text-xs mt-2 cursor-pointer hover:underline">
              Restablecer todos los filtros
            </button>
          </div>
        )}

      </div>

      {/* Admin simulate Add News Article Dialog Lightbox */}
      {showAddModal && (
        <div id="add-news-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/85 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-sm border border-brand-border max-w-lg w-full overflow-hidden shadow-2xl relative">
            <div className="bg-brand-olive text-white p-4 flex justify-between items-center select-none">
              <h4 className="font-serif text-[18px] font-normal italic text-white flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-white" />
                Nueva Nota de Actualidad
              </h4>
              <button
                id="close-add-news-modal"
                onClick={() => setShowAddModal(false)}
                className="text-white hover:text-brand-cream text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {modalError && (
              <div className="bg-brand-terracotta/10 border-b border-brand-border text-brand-terracotta text-xs font-bold p-3 text-center">
                ⚠️ {modalError}
              </div>
            )}

            <form onSubmit={handleAddNews} className="p-6 space-y-4 text-justify select-none">
              <div>
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="add-news-title">Título del Artículo *</label>
                <input
                  id="add-news-title"
                  type="text"
                  name="title"
                  required
                  placeholder="Ej. Visita de los Reyes de la Ópera y alegría de los Nonnos"
                  value={newPost.title}
                  onChange={handleInputChange}
                  className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="add-news-cat">Categoría *</label>
                  <select
                    id="add-news-cat"
                    name="category"
                    value={newPost.category}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-border rounded-sm px-2.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive cursor-pointer"
                  >
                    <option value="Celebraciones">Celebraciones</option>
                    <option value="Talleres">Talleres</option>
                    <option value="Comunidad">Comunidad</option>
                    <option value="Institucional">Institucional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="add-news-author">Autor / Redactor</label>
                  <input
                    id="add-news-author"
                    type="text"
                    name="author"
                    required
                    placeholder="Ej. Terapia Ocupacional"
                    value={newPost.author}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="add-news-content">Contenido de la Noticia *</label>
                <textarea
                  id="add-news-content"
                  name="content"
                  required
                  rows={4}
                  placeholder="Escriba el detalle de la actividad con el mayor cariño posible..."
                  value={newPost.content}
                  onChange={handleInputChange}
                  className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1 font-sans" htmlFor="add-news-img">URL de Imagen Ilustrativa (Opcional)</label>
                <input
                  id="add-news-img"
                  type="text"
                  name="image"
                  placeholder="Dejar vacío para usar imagen genérica por categoría..."
                  value={newPost.image}
                  onChange={handleInputChange}
                  className="w-full bg-stone-50 border border-brand-border rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-olive"
                />
              </div>

              <div className="flex gap-2.5 pt-4 justify-end border-t border-brand-border">
                <button
                  id="btn-add-news-cancel"
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 hover:bg-stone-50 rounded-sm text-xs font-bold text-stone-600 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  id="btn-add-news-submit"
                  type="submit"
                  className="bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors cursor-pointer"
                >
                  Publicar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reading Article Modal Overlap (Full content display beautifully instead of ugly prompt alert) */}
      {activeReadingArticle && (
        <div id="read-article-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/85 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-sm border border-brand-border max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col justify-between">
            <button
              id="close-read-article-modal"
              onClick={() => setActiveReadingArticle(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold font-sans text-sm cursor-pointer z-20 transition-colors"
            >
              ✕
            </button>

            <div className="relative h-64 bg-brand-charcoal">
              <img
                src={activeReadingArticle.image}
                alt={activeReadingArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-justify">
                <span className="bg-brand-terracotta text-brand-ivory text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-sm uppercase inline-block mb-2">
                  {activeReadingArticle.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal italic text-white leading-tight">
                  {activeReadingArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 text-justify flex-1">
              <div className="flex items-center gap-3 text-xs text-stone-500 mb-4 pb-2 border-b border-brand-border font-sans">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-brand-olive" /> Por: {activeReadingArticle.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Publicado: {activeReadingArticle.date}
                </span>
                <span>•</span>
                <span>{activeReadingArticle.readTime}</span>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-serif">
                {activeReadingArticle.content}
              </p>
            </div>

            <div className="p-4 bg-brand-cream border-t border-brand-border flex justify-end">
              <button
                id="btn-close-article-footer"
                onClick={() => setActiveReadingArticle(null)}
                className="bg-brand-olive hover:bg-brand-olive/95 text-brand-ivory font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm cursor-pointer transition-colors"
              >
                Cerrar Lectura
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
