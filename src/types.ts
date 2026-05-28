export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Celebraciones' | 'Talleres' | 'Comunidad' | 'Institucional';
  image: string;
  readTime: string;
  author: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'directorio' | 'equipo';
  bio?: string;
  photo: string;
}

export interface DocumentFile {
  id: string;
  name: string;
  category: 'convenios' | 'estados_financieros' | 'memorias' | 'presupuestos';
  year: string;
  size: string;
  description: string;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  schedule: string;
  instructor: string;
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  relation: string; // e.g. "Familiar de residente", "Residente"
  text: string;
  date: string;
}
