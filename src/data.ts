import { NewsArticle, TeamMember, DocumentFile, Workshop, Testimonial } from './types';

export const HISTORY_TIMELINE = [
  {
    year: '1945',
    title: 'Fundación del Hogar Niño Jesús',
    description: 'Bajo la iniciativa de un grupo de voluntarias y benefactores de Ñuñoa, se funda el hogar con el propósito de entregar refugio, amor y sustento nutricional a lactantes y niños de escasos recursos o en estado de desamparo.'
  },
  {
    year: '1968',
    title: 'Consolidación de la Sede Ñuñoa',
    description: 'Se adquiere el terreno definitivo en una tranquila zona residencial en Ñuñoa (Av. Holanda). Un espacio rodeado de jardines para que los niños puedan jugar en un ambiente seguro, luminoso y terapéutico.'
  },
  {
    year: '1990',
    title: 'Área Pediátrica y Estimulación Parvularia',
    description: 'Se implementa un consultorio pediátrico interno de forma permanente y una sala de estimulación sensorial, consolidando rutinas de fonoaudiología y kinesiología para niños con retraso psicomotor.'
  },
  {
    year: '2012',
    title: 'Acreditación y Alianza con Mejor Niñez',
    description: 'El hogar firma su incorporación como colaborador acreditado del área de cuidado residencial. Esto permite recibir subvenciones y fiscalizaciones rigurosas que garantizan el óptimo estándar de derechos infantiles.'
  },
  {
    year: '2026',
    title: 'Inauguración de la Nueva Ludoteca',
    description: 'Celebración de décadas de cuidado. Apertura de un moderno espacio lúdico y de estimulación de la lectura infantil financiado íntegramente por aportes de la comunidad local y donaciones benéficas.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  // Directorio
  {
    id: 'd1',
    name: 'María Teresa Balmaceda S.',
    role: 'Presidenta del Directorio',
    category: 'directorio',
    bio: 'Psicóloga infantil y filántropa dedicada a la defensa del bienestar integral de la niñez con más de 25 años en programas de acogida y reinserción familiar.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'd2',
    name: 'Andrés Vial Edwards',
    role: 'Vicepresidente del Directorio',
    category: 'directorio',
    bio: 'Abogado especialista en derecho de familia y de la infancia. Asesor clave en gobernanza y articulación jurídica con la red de protección infantil del Estado.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'd3',
    name: 'Dra. Carolina Silva P.',
    role: 'Directora Médica del Directorio',
    category: 'directorio',
    bio: 'Médica pediatra y neonatóloga, ex-jefa del departamento de pediatría. Propulsora del modelo de apego seguro y desarrollo neurológico de la primera infancia.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'd4',
    name: 'Mauricio de la Cruz M.',
    role: 'Tesorero del Directorio',
    category: 'directorio',
    bio: 'Ingeniero Comercial con vasta trayectoria en la optimización financiera de fundaciones humanitarias, enfocado en resguardar la máxima asignación a cuidado directo.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  // Equipo Ejecutivo
  {
    id: 'e1',
    name: 'Gabriela Fuentes Larraín',
    role: 'Directora Ejecutiva General',
    category: 'equipo',
    bio: 'Especialista en dirección de residencias académicas infantiles y educación parvularia con 15 años liderando equipos clínicos y de asistencia pedagógica.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'e2',
    name: 'Dr. Roberto Maturana R.',
    role: 'Pediatra Jefe de Residencia',
    category: 'equipo',
    bio: 'Responsable del control del crecimiento pediátrico y de la salud de todos los lactantes y niños, especialista en neurodesarrollo psicomotor infantil.',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'e3',
    name: 'Laura Valenzuela Salas',
    role: 'Enfermera Coordinadora Pediátrica',
    category: 'equipo',
    bio: 'Líder del equipo de enfermería pediátrica. Encargada de coordinar los programas de vacunas, tratamientos y el cuidado tierno de los bebés.',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'e4',
    name: 'Elena Benavente',
    role: 'Nutricionista y Cocina Infantil',
    category: 'equipo',
    bio: 'Encargada de formular miniciosas recetas y planes de minutas balanceadas, papillas de alta nutrición y meriendas saludables llenas de sabor y cariño.',
    photo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'w1',
    title: 'Estimulación Temprana y Psicomotricidad',
    description: 'Los lactantes y niños participan en dinámicas lúdicas guiadas para potenciar el gateo, el equilibrio, la exploración espacial y el desarrollo saludable de la motricidad fina.',
    schedule: 'Lunes a Jueves, 10:00 am',
    instructor: 'Kinesióloga Pediátrica Laura Bertoni',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'w2',
    title: 'Arte y Expresión Creativa Infantil',
    description: 'Sesiones de pintura dactilar, modelado en plasticina, dibujo y manualidades temáticas donde cada niño estimula su concentración, imaginación y autoestima.',
    schedule: 'Lunes y Miércoles, 15:30 pm',
    instructor: 'Educadora Gabriela Fuentes',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'w3',
    title: 'Ludoteca y Cuentacuentos Interactivos',
    description: 'Lecturas teatrales, títeres, juegos de mesa educativos y canciones infantiles dirigidas a ejercitar la memoria lingüística activa y ampliar el vocabulario temprano.',
    schedule: 'Martes e Hitos de Viernes, 16:00 pm',
    instructor: 'Psicóloga Infantil Laura Valenzuela',
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'w4',
    title: 'Iniciación Musical y Ritmo Pediátrico',
    description: 'Taller lúdico de reconocimiento de sonidos, canto coral y manejo de instrumentos sencillos de percusión para potenciar la inteligencia auditiva infantil.',
    schedule: 'Viernes, 11:00 am',
    instructor: 'Musicoterapeuta Andrés Vial',
    iconName: 'ChefHat',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600'
  }
];

export const TRANSPARENCY_DOCS: DocumentFile[] = [
  // Memorias
  {
    id: 'doc-m1',
    name: 'Memoria de Gestión Infantil 2025',
    category: 'memorias',
    year: '2025',
    size: '4.2 MB',
    description: 'Hitos institucionales de acogida, evolución psicomotriz de los menores, número de egresos familiares integrados y mejoras edilicias.'
  },
  {
    id: 'doc-m2',
    name: 'Memoria Anual Residencial 2024',
    category: 'memorias',
    year: '2024',
    size: '3.6 MB',
    description: 'Rendición de programas de estimulación, actividades corporativas de voluntariado y capacitaciones en apego seguro para las tías cuidadoras.'
  },
  // Estados Financieros
  {
    id: 'doc-b1',
    name: 'Balance Financiero Auditado 2025',
    category: 'estados_financieros',
    year: '2025',
    size: '2.1 MB',
    description: 'Informe contable verificado de activos, pasivos e ingresos por donaciones ordinarias, avalado por auditores externos independientes.'
  },
  {
    id: 'doc-b2',
    name: 'Estado de Resultados y Egresos 2025',
    category: 'estados_financieros',
    year: '2025',
    size: '1.8 MB',
    description: 'Desglose minucioso de inversión en alimentación pediátrica, insumos médicos y mantención del recinto en Ñuñoa.'
  },
  // Presupuestos
  {
    id: 'doc-p1',
    name: 'Presupuesto Operativo Niño Jesús 2026',
    category: 'presupuestos',
    year: '2026',
    size: '1.4 MB',
    description: 'Planificación de metas financieras, adquisición de mobiliario infantil de seguridad y financiamiento de terapias especiales.'
  },
  // Convenios
  {
    id: 'doc-c1',
    name: 'Convenio de Colaboración Mejor Niñez 2025',
    category: 'convenios',
    year: '2025',
    size: '2.8 MB',
    description: 'Marco regulatorio y subsidios estatales con el Servicio de Protección Especializada de la Niñez (Ministerio de Desarrollo Social de Chile).'
  },
  {
    id: 'doc-c2',
    name: 'Protocolo de Práctica Universitaria Parvularia 2024',
    category: 'convenios',
    year: '2024',
    size: '1.1 MB',
    description: 'Alianzas con centros universitarios chilenos para internación supervisada de estudiantes de fonoaudiología, pedagogía y terapia infantil.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Camilo Sanzana Toro',
    relation: 'Padre Adoptivo del pequeño Mateo',
    text: '“Cuando iniciamos el proceso de adopción de Mateo, el Hogar Niño Jesús fue nuestro faro de tranquilidad. Las tías no solo cuidaron de su salud con excelente profesionalismo, sino que nos prepararon en apego seguro con una sensibilidad humana invaluable. Mateo llegó a nuestra casa lleno de risa y confianza.”',
    date: 'Febrero 2026'
  },
  {
    id: 't2',
    author: 'Daniela Vergara Fuentes',
    relation: 'Voluntaria Permanente desde 2022',
    text: '“Este no es solo un hogar clínico; es un santuario de ternura. Participar en las tardes de cuentacuentos y ver los ojitos alegres de los lactantes al recibir un abrazo es el regalo más luminoso de mi semana en Ñuñoa.”',
    date: 'Mayo 2026'
  },
  {
    id: 't3',
    author: 'Francisca Olivares M.',
    relation: 'Estudiante de Educación Parvularia U.C.',
    text: '“Realizar mi pasantía clínica infantil en el Hogar me demostró un estándar sobresaliente de derechos. Cada niño recibe estimulación a su propio ritmo, con raciones nutricionales perfectas y un amor incombustible que cura heridas invisibles.”',
    date: 'Diciembre 2025'
  }
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Celebración del Día del Niño y recreaciones al aire libre',
    content: 'El pasado fin de semana transformamos los hermosos jardines del Hogar Niño Jesús para celebrar la alegría de la infancia. Con la caritativa colaboración de grupos de teatro locales, los niños disfrutaron de títeres, juegos de psicomotricidad de burbujas gigantes, helados y sorpresas recreativas. La jornada estuvo coronada por un almuerzo nutritivo y muchas risas compartidas con nuestros queridos voluntarios.',
    date: '2026-05-18',
    category: 'Celebraciones',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600',
    readTime: '3 min de lectura',
    author: 'Comunicaciones Hogar Niño Jesús'
  },
  {
    id: 'n2',
    title: 'Tarde de Estimulación Sensorial y CuentaCuentos de Ñuñoa',
    content: 'En nuestro compromiso por potenciar las destrezas cognoscitivas de los más pequeños, organizamos una provechosa sesión intergeneracional de estimulación fonoaudiológica con el apoyo voluntario del Centro Cultural de la comuna. Los niños se sumergieron en narraciones interactivas de cuentos de madera y títeres táctiles, fomentando significativamente la expresión verbal y la interacción colectiva.',
    date: '2026-04-12',
    category: 'Talleres',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
    readTime: '3 min de lectura',
    author: 'Terapia Ocupacional Infantil'
  },
  {
    id: 'n3',
    title: 'Inauguración de la Nueva Ludoteca "Estrellas de Madera"',
    content: 'Gracias a la exitosa campaña de donaciones y coronas de caridad lograda el año pasado, inauguramos oficialmente nuestra nueva ludoteca comunitaria interactiva. Equipada con juegos pedagógicos Montessori, materiales terapéuticos libres de tóxicos y piso suave anti-golpes, este espacio será el epicentro de la felicidad para la rehabilitación psicomotora diaria de nuestros lactantes.',
    date: '2026-03-02',
    category: 'Comunidad',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min de lectura',
    author: 'Directorio Ejecutivo'
  },
  {
    id: 'n4',
    title: 'Renovación del Convenio Técnico con "Mejor Niñez" en Santiago',
    content: 'Nos complace anunciar la exitosa renovación anual de nuestra acreditación técnica con el Servicio de Protección Especializada de la Niñez. Esta ratificación legal y financiera certifica que el Hogar Niño Jesús cumple y supera todas las directrices de acogida residencial del país, asegurando que cada menor reciba tratamientos médicos, estimulación e inmunizaciones de primer nivel.',
    date: '2026-02-14',
    category: 'Institucional',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    readTime: '4 min de lectura',
    author: 'Área Legal y Social'
  },
  {
    id: 'n5',
    title: 'Entrega de Juguetes Navideños y Visita de Ángeles Voluntarios',
    content: 'En una emotiva víspera navideña iluminada de bondad, el Hogar recibió la visita de la pastoral comunitaria del colegio de la comuna. Trajeron con ellos cartitas preparadas a mano, calcetines y juguetes educativos idóneos para la primera infancia. Compartimos una once especial y cantamos villancicos infantiles, finalizando una velada mágica de dulce paz que llenó de esperanzas los pequeños corazones.',
    date: '2025-12-24',
    category: 'Celebraciones',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    readTime: '3 min de lectura',
    author: 'Coordinación de Voluntarios'
  }
];

// Recharts Static Data
export const FINANCIALS_INCOME = [
  { name: 'Donaciones de Socios y Empresas', value: 40 },
  { name: 'Subvenciones Estatales Mejor Niñez', value: 35 },
  { name: 'Eventos de Beneficencia', value: 15 },
  { name: 'Coronas de Caridad', value: 10 }
];

export const FINANCIALS_EXPENSES = [
  { name: 'Cuidado Pediátrico & Enfermería', value: 50 },
  { name: 'Nutrición Infantil y Papillas', value: 20 },
  { name: 'Terapias de Estimulación Temprana', value: 15 },
  { name: 'Equipamiento de Seguridad y Mantención', value: 10 },
  { name: 'Gastos Administrativos / Transparencia', value: 5 }
];

export const FINANCIALS_HISTORIC_BUDGET = [
  { year: '2021', Ingresos: 320, Egresos: 300, Superavit: 20 },
  { year: '2022', Ingresos: 360, Egresos: 345, Superavit: 15 },
  { year: '2023', Ingresos: 410, Egresos: 388, Superavit: 22 },
  { year: '2024', Ingresos: 460, Egresos: 440, Superavit: 20 },
  { year: '2025', Ingresos: 510, Egresos: 485, Superavit: 25 },
  { year: '2026 (Proy)', Ingresos: 560, Egresos: 530, Superavit: 30 }
];
