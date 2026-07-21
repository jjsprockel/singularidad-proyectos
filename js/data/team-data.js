/* team-data.js
   ─────────────────────────────────────────────────────────
   CONTENIDO EDITABLE: integrantes del semillero, datos del
   Laboratorio ProfundaMente y ficha institucional completa del
   Semillero Singularidad (sección "Nosotros").

   Los nombres, cargos, fotografías, descripciones y enlaces de
   los integrantes fueron tomados del repositorio de referencia
   https://github.com/jjsprockel/taller-IA-Investigacion, donde
   ambos docentes también dirigen el taller de IA en investigación.
   No se ha inventado información: los campos sin dato confirmado
   se dejan vacíos ('') y el sitio los oculta automáticamente.

   Para añadir un integrante, agrega un objeto al arreglo
   INTEGRANTES siguiendo la misma estructura.
   ───────────────────────────────────────────────────────── */

const INTEGRANTES = [
  {
    nombre: 'John Jaime Sprockel Díaz',
    credenciales: 'MD ESP, MSc, MBA',
    rol: 'Médico internista · Director Laboratorio ProfundaMente · Docente responsable del Semillero Singularidad',
    foto: 'assets/images/team/john-sprockel.jpg',
    resumen: 'Médico internista, profesor e investigador con enfoque en inteligencia artificial aplicada a la salud, analítica clínica y desarrollo de modelos predictivos.',
    detalle: [
      'Cuenta con formación de maestría en epidemiología clínica y MBA, con experiencia en el diseño, implementación y validación de soluciones basadas en inteligencia artificial en contextos clínicos y académicos. Su trabajo se centra en la integración de modelos de machine learning, deep learning y procesamiento de lenguaje natural en procesos asistenciales, investigación clínica y educación médica.',
      'Ha liderado iniciativas de innovación en salud digital, incluyendo el desarrollo de sistemas de apoyo a la decisión clínica, plataformas de análisis de datos y proyectos de patología digital, promoviendo la articulación entre investigación, tecnología y práctica clínica.'
    ],
    etiquetas: ['Machine Learning', 'Medicina Interna', 'Analítica Clínica', 'NLP', 'Educación médica'],
    enlaces: [
      { etiqueta: 'LinkedIn', url: 'https://www.linkedin.com/in/john-jaime-sprockel-diaz-6961921b1/', principal: true },
      { etiqueta: 'ResearchGate', url: 'https://www.researchgate.net/profile/John-Sprockel', principal: false }
    ]
  },
  {
    nombre: 'Arley Gómez López',
    credenciales: 'MD, PhD',
    rol: 'Médico cirujano · Docente-investigador FUCS · Docente responsable del Semillero Singularidad',
    foto: 'assets/images/team/arley-gomez.jpg',
    resumen: 'Docente investigador de la Fundación Universitaria de Ciencias de la Salud (FUCS), con formación interdisciplinaria en medicina, biología y ciencias biomédicas.',
    detalle: [
      'Médico cirujano y biólogo, con maestría en biología molecular y biotecnología, doctorado en ciencias biomédicas y formación posdoctoral en nanotecnología aplicada a la medicina. Posee amplia experiencia en investigación biomédica, medicina traslacional y nanomedicina.',
      'Ha participado como evaluador de proyectos de investigación clínica y biomédica, en programas de formación doctoral, y cuenta con experiencia en el desarrollo de redes académicas y científicas a nivel nacional e internacional.'
    ],
    etiquetas: ['Biología molecular', 'Nanomedicina', 'Medicina traslacional', 'Investigación biomédica'],
    enlaces: [
      { etiqueta: 'LinkedIn', url: 'https://www.linkedin.com/in/arley-g%C3%B3mez-086a7b24/', principal: true },
      { etiqueta: 'ResearchGate', url: 'https://www.researchgate.net/profile/Arley-Gomez-Lopez', principal: false }
    ]
  }
];

/* Laboratorio ProfundaMente — la URL oficial fue confirmada en el
   repositorio de referencia (enlace usado activamente en su sitio
   institucional). Si en algún momento cambia, edita profundamenteUrl;
   si se deja vacío (''), el botón se oculta automáticamente. */
const LABORATORIO_PROFUNDAMENTE = {
  descripcion: 'ProfundaMente es un laboratorio de investigación e innovación orientado al desarrollo de soluciones basadas en evidencia, la formación de talento y la transformación de los procesos clínicos, investigativos y educativos en salud.',
  relacionFucs: 'El laboratorio opera dentro de la Fundación Universitaria de Ciencias de la Salud (FUCS) e integra un equipo interdisciplinario de profesionales con experiencia en medicina, ciencias biomédicas, ciencia de datos e inteligencia artificial, comprometidos con la generación de conocimiento y su aplicación responsable en el sistema de salud.',
  areasInteres: [
    'Investigación científica rigurosa, reproducible y trazable.',
    'Desarrollo tecnológico aplicado a necesidades reales del sistema de salud.',
    'Validación clínica y metodológica de las soluciones desarrolladas.',
    'Implementación responsable, con marco ético y regulatorio explícito.'
  ],
  relacionSingularidad: 'El Semillero de Investigación Singularidad se articula con el Laboratorio ProfundaMente como espacio formativo para estudiantes, bajo la dirección de los mismos docentes responsables, extendiendo su labor de investigación e innovación en IA aplicada a la salud hacia la formación de nuevas generaciones de investigadores.',
  profundamenteUrl: 'https://jjsprockel.github.io/profundamente-web/'
};

/* Ficha institucional completa del Semillero Singularidad. */
const SEMILLERO_SINGULARIDAD = {
  fechaConstitucion: '1 de marzo de 2025',
  grupoInvestigacion: 'Grupo de Investigación y Proyección Social en Ciencias de la Salud, Fundación Universitaria de Ciencias de la Salud (FUCS)',
  docentes: ['John Jaime Sprockel Díaz', 'Arley Gómez López'],
  justificacion: 'La inteligencia artificial está transformando de forma acelerada la investigación, la práctica clínica y la educación en salud. El Semillero Singularidad se constituye como un espacio formativo interdisciplinario para que estudiantes de la FUCS desarrollen competencias prácticas, críticas y éticas en el uso de estas tecnologías, mediante proyectos formativos reales, verificables y de utilidad institucional.',
  objetivoGeneral: 'Fomentar la investigación, el desarrollo y la aplicación ética de la inteligencia artificial en salud, mediante un enfoque interdisciplinario que potencie la formación académica, la generación de soluciones innovadoras y la divulgación del conocimiento.',
  objetivosEspecificos: [
    'Desarrollar competencias prácticas en el uso crítico y responsable de herramientas de inteligencia artificial aplicadas a la salud, la investigación y la educación.',
    'Construir productos digitales verificables (páginas web, blogs, programas editoriales y planes de posicionamiento) que fortalezcan la presencia institucional del semillero.',
    'Promover la investigación, la experimentación y la divulgación como ejes formativos continuos de los integrantes del semillero.',
    'Articular el trabajo del semillero con el Laboratorio ProfundaMente y con la comunidad académica de la FUCS.'
  ],
  pilares: [
    { titulo: 'Formación', descripcion: 'Desarrollo de competencias técnicas, metodológicas y críticas en inteligencia artificial aplicada a la salud.' },
    { titulo: 'Experimentación', descripcion: 'Exploración práctica y guiada de herramientas de IA en contextos académicos reales.' },
    { titulo: 'Aplicación', descripcion: 'Construcción de productos digitales verificables que resuelven necesidades concretas del semillero.' },
    { titulo: 'Presentación y divulgación', descripcion: 'Comunicación pública y transparente de los procesos y resultados obtenidos.' }
  ],
  poblacionObjetivo: 'Estudiantes de pregrado de áreas relacionadas con la atención en salud ofrecidas por la FUCS, incluyendo medicina, enfermería, fisioterapia y psicología.',
  compromisoEtico: 'El semillero promueve el uso responsable de la inteligencia artificial: toda salida generada por IA debe verificarse frente a fuentes confiables, se declara explícitamente su uso en cada producto, no se emplean datos sensibles de pacientes sin autorización, y se reconoce que la IA no sustituye el juicio clínico, metodológico ni docente.',
  mecanismoVinculacion: 'Los estudiantes interesados en vincularse al Semillero Singularidad pueden comunicarse directamente con los docentes responsables para conocer los requisitos y cupos disponibles.',
  contacto: {
    nombre: 'John Jaime Sprockel Díaz',
    correo: 'jjsprockel@fucsalud.edu.co'
  }
};
