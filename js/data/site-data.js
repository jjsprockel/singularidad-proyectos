/* site-data.js
   ─────────────────────────────────────────────────────────
   CONTENIDO EDITABLE: título, subtítulo, textos institucionales,
   duración del programa, metodología transversal y herramientas
   transversales que aparecen en la sección Inicio.

   Para cambiar el título del sitio, el subtítulo o la duración,
   edita los campos de SITE_CONFIG. Para añadir un paso al flujo
   metodológico, agrega un elemento al arreglo METODOLOGIA_TRANSVERSAL.
   Para añadir una herramienta transversal, agrega un objeto al
   arreglo HERRAMIENTAS_TRANSVERSALES.
   ───────────────────────────────────────────────────────── */

const SITE_CONFIG = {
  titulo: 'Proyectos formativos del Semillero Singularidad',
  subtitulo: 'Inteligencia artificial aplicada a la salud, la investigación y la educación',
  descripcion: 'El programa de proyectos formativos del Semillero Singularidad busca desarrollar competencias para investigar, diseñar, construir, evaluar y divulgar soluciones digitales relacionadas con la inteligencia artificial aplicada a la salud, la educación y la investigación.',

  duracion: {
    items: [
      'Cinco proyectos formativos.',
      'Cada proyecto tiene una duración estimada de seis semanas.',
      'Se realizará un encuentro semanal de retroalimentación.',
      'Las fechas se encuentran por concertar.'
    ]
  },

  /* Síntesis institucional del semillero, mostrada en Inicio.
     La ficha completa (objetivos específicos, población, compromiso
     ético, etc.) vive en team-data.js → SEMILLERO_SINGULARIDAD, para
     no duplicar contenido entre Inicio y Nosotros. */
  semillero: {
    fechaConstitucion: '1 de marzo de 2025',
    grupoInvestigacion: 'Grupo de Investigación y Proyección Social en Ciencias de la Salud',
    institucion: 'Fundación Universitaria de Ciencias de la Salud (FUCS)',
    docentes: ['John Jaime Sprockel Díaz', 'Arley Gómez López'],
    presentacion: 'El Semillero de Investigación Singularidad fue constituido el 1 de marzo de 2025 y pertenece al Grupo de Investigación y Proyección Social en Ciencias de la Salud de la Fundación Universitaria de Ciencias de la Salud. Reúne a estudiantes y docentes interesados en el estudio y la aplicación responsable de la inteligencia artificial en el ámbito de la salud.',
    objetivoGeneral: 'Fomentar la investigación, el desarrollo y la aplicación ética de la inteligencia artificial en salud, mediante un enfoque interdisciplinario que potencie la formación académica, la generación de soluciones innovadoras y la divulgación del conocimiento.',
    pilares: [
      { titulo: 'Formación', descripcion: 'Desarrollo de competencias técnicas, metodológicas y críticas en inteligencia artificial aplicada a la salud.' },
      { titulo: 'Experimentación', descripcion: 'Exploración práctica y guiada de herramientas de IA en contextos académicos reales.' },
      { titulo: 'Aplicación', descripcion: 'Construcción de productos digitales verificables que resuelven necesidades concretas del semillero.' },
      { titulo: 'Presentación y divulgación', descripcion: 'Comunicación pública y transparente de los procesos y resultados obtenidos.' }
    ]
  }
};

/* Flujo metodológico transversal a los cinco proyectos (sección 5.3) */
const METODOLOGIA_TRANSVERSAL = [
  'Definición del problema',
  'Investigación profunda',
  'Gestión de fuentes',
  'Lluvia de ideas',
  'Selección de alternativas',
  'Planificación',
  'Construcción',
  'Evaluación',
  'Publicación',
  'Retroalimentación'
];

/* Herramientas transversales usadas a lo largo de los cinco proyectos (sección 5.4) */
const HERRAMIENTAS_TRANSVERSALES = [
  { icono: '💬', nombre: 'ChatGPT con Investigación profunda', descripcion: 'Exploración documentada de evidencia, síntesis conceptual y apoyo en la redacción académica.' },
  { icono: '📚', nombre: 'NotebookLM o Gemini Notebook', descripcion: 'Organización de fuentes propias y consultas referenciadas directamente sobre ellas.' },
  { icono: '🧑‍💻', nombre: 'Visual Studio Code', descripcion: 'Edición del código HTML, CSS y JavaScript de cada producto.' },
  { icono: '🌿', nombre: 'Git', descripcion: 'Control de versiones del trabajo y registro histórico de los cambios.' },
  { icono: '🐙', nombre: 'GitHub', descripcion: 'Alojamiento del código fuente y gestión colaborativa de los repositorios.' },
  { icono: '🌐', nombre: 'GitHub Pages', descripcion: 'Publicación gratuita y directa de los sitios estáticos construidos en cada proyecto.' },
  { icono: '🧱', nombre: 'HTML, CSS y JavaScript', descripcion: 'Tecnologías base para construir interfaces sin necesidad de frameworks ni compilación.' },
  { icono: '🎨', nombre: 'Herramientas de diseño y prototipado', descripcion: 'Wireframes y bocetos de arquitectura visual antes de construir cada producto.' },
  { icono: '♿', nombre: 'Herramientas de evaluación de accesibilidad', descripcion: 'Verificación de contraste, navegación por teclado y buenas prácticas WCAG.' },
  { icono: '📈', nombre: 'Analítica web y posicionamiento', descripcion: 'Seguimiento básico de visitas y prácticas de SEO para mejorar la visibilidad de los productos.' }
];
