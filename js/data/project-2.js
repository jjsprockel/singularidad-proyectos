/* project-2.js — Página institucional del Semillero Singularidad
   ─────────────────────────────────────────────────────────
   CONTENIDO EDITABLE. Ver comentarios de estructura en project-1.js.
   ───────────────────────────────────────────────────────── */

const PROYECTO_2 = {
  id: 'proyecto-2',
  numero: 2,
  nombre: 'Página institucional del Semillero Singularidad',
  resumenBreve: 'Construcción de la página institucional que presenta al semillero, sus integrantes, proyectos y actividades.',
  duracionEstimada: 'Seis semanas · seis actividades',
  productoFinal: 'Sitio institucional del Semillero Singularidad publicado en GitHub Pages',
  presentacionPdf: 'assets/presentaciones/proyecto-2.pdf',

  presentacion: {
    proposito: 'Construir la página institucional del Semillero de Investigación Singularidad, que presente de forma clara y actualizable qué es el semillero, sus objetivos, integrantes, proyectos y forma de vinculación.',
    contexto: 'El semillero requiere un sitio propio que lo represente ante la comunidad académica de la FUCS y externa, sirva de punto de entrada a sus proyectos y facilite la vinculación de nuevos integrantes. Este proyecto construye ese sitio como producto formativo del propio semillero.',
    alcance: 'El proyecto cubre el diseño de la arquitectura institucional del sitio, su construcción técnica, la definición de mecanismos básicos de contacto y la publicación del sitio, sin incluir aún el blog (que se desarrolla como proyecto independiente y se enlaza desde aquí).'
  },

  objetivos: {
    general: 'Diseñar, construir y publicar la página institucional del Semillero Singularidad, con información clara, veraz y actualizable sobre su propósito, integrantes, líneas de trabajo y proyectos.',
    especificos: [
      'Analizar referentes de semilleros, grupos y laboratorios de investigación para identificar buenas prácticas institucionales.',
      'Identificar los públicos de la página institucional (estudiantes, docentes, comunidad académica).',
      'Diseñar la arquitectura de información del sitio institucional.',
      'Construir el sitio con HTML, CSS y JavaScript puro, aplicando la identidad visual del semillero.',
      'Incorporar un mecanismo básico de contacto y una política de privacidad.',
      'Publicar el sitio y documentar el procedimiento para actualizar sus contenidos.'
    ]
  },

  productoEsperado: {
    descripcion: 'Un sitio institucional publicado en GitHub Pages, que presenta al semillero de forma ordenada y facilita el acceso a sus proyectos, integrantes y actividades.',
    secciones: ['Inicio', 'Qué es Singularidad', 'Misión y propósito', 'Objetivos', 'Líneas de trabajo', 'Integrantes', 'Proyectos', 'Talleres y actividades', 'Blog', 'Recursos', 'Noticias y eventos', 'Cómo vincularse', 'Contacto']
  },

  actividades: [
    {
      numero: 1,
      titulo: 'Definición institucional y benchmarking',
      proposito: 'Delimitar qué debe comunicar el sitio institucional y reconocer referentes de semilleros y grupos de investigación.',
      descripcion: 'Se parte de la información institucional ya existente del semillero (objetivo, pilares, docentes responsables) para definir qué debe comunicar el sitio. Se investigan sitios de semilleros, grupos de investigación y laboratorios como referentes de estructura y tono institucional.',
      instrucciones: [
        'Revisa la información institucional disponible del semillero (fecha de constitución, grupo de investigación, objetivo general, pilares metodológicos).',
        'Identifica los públicos principales del sitio institucional (estudiantes interesados, docentes, comunidad académica externa).',
        'Busca y analiza al menos tres sitios de semilleros, grupos o laboratorios de investigación como referentes.',
        'Registra en una tabla las secciones, el tono y los mecanismos de contacto de cada referente.',
        'Formula los criterios de calidad que debe cumplir el sitio institucional.'
      ],
      herramientas: ['ChatGPT con Investigación profunda', 'Navegador web'],
      productoParcial: 'Documento con la información institucional de base, los públicos identificados, el benchmarking y los criterios de calidad.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Actúa como asesor en comunicación institucional para grupos y semilleros de investigación en salud. Te compartiré la información de base del Semillero Singularidad (objetivo, pilares metodológicos, docentes responsables). A partir de ella, sugiere: 1) tres públicos prioritarios para el sitio institucional, 2) un tono de comunicación adecuado (formal, cercano, técnico), 3) tres riesgos comunes al comunicar información institucional que deberíamos evitar (por ejemplo, prometer resultados no confirmados).',
      criteriosRetro: [
        'La información institucional de base está correctamente recogida, sin inventar datos.',
        'Los públicos identificados son coherentes con el propósito del semillero.',
        'El benchmarking incluye referentes reales y comparables.',
        'Los criterios de calidad son verificables.'
      ],
      recursos: [
        { titulo: 'ChatGPT — Investigación profunda (Deep Research)', url: 'https://help.openai.com/en/articles/9720230', nota: 'guía de uso oficial' }
      ]
    },
    {
      numero: 2,
      titulo: 'Gestión de fuentes y decisiones de arquitectura',
      proposito: 'Sintetizar los hallazgos del benchmarking y tomar decisiones documentadas sobre la arquitectura del sitio.',
      descripcion: 'Se organizan los referentes en NotebookLM o Gemini Notebook, se comparan formas de estructurar la información institucional y se documentan las decisiones de arquitectura con su justificación, incluyendo el tratamiento de datos de integrantes y visitantes.',
      instrucciones: [
        'Carga los referentes analizados en NotebookLM o Gemini Notebook.',
        'Formula preguntas al cuaderno sobre cómo los referentes presentan su misión, objetivos y líneas de trabajo.',
        'Sintetiza los hallazgos sobre buenas prácticas de comunicación institucional.',
        'Decide cómo se presentará la información de los integrantes (qué datos incluir y cuáles no, por privacidad).',
        'Documenta la decisión sobre el mecanismo de contacto (formulario, correo directo, ambos) y su justificación.'
      ],
      herramientas: ['NotebookLM o Gemini Notebook'],
      productoParcial: 'Síntesis de hallazgos y documento de decisiones sobre arquitectura, tratamiento de datos de integrantes y mecanismo de contacto.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Con base en las fuentes que he cargado en este cuaderno sobre sitios de semilleros y grupos de investigación, identifica: 1) cómo presentan de forma ética la información de sus integrantes (qué datos muestran y cuáles omiten), 2) qué mecanismos de contacto usan con mayor frecuencia, 3) qué elementos institucionales (misión, objetivos, líneas de trabajo) suelen ir en la página de inicio frente a páginas internas. Cita las fuentes del cuaderno en cada punto.',
      criteriosRetro: [
        'La síntesis refleja fielmente las fuentes consultadas.',
        'La decisión sobre datos de integrantes considera explícitamente la privacidad.',
        'El mecanismo de contacto elegido es viable sin backend propio.'
      ],
      recursos: [
        { titulo: 'NotebookLM', url: 'https://notebooklm.google/', nota: 'organización de fuentes propias' }
      ]
    },
    {
      numero: 3,
      titulo: 'Ideación de la arquitectura institucional',
      proposito: 'Generar y seleccionar alternativas de organización para las secciones institucionales del sitio.',
      descripcion: 'Se generan alternativas de organización de las secciones institucionales (misión, objetivos, líneas de trabajo, proyectos, integrantes) evaluándolas según claridad y facilidad de mantenimiento, y se selecciona la estructura final representada en un wireframe.',
      instrucciones: [
        'Realiza una lluvia de ideas sobre cómo agrupar las secciones institucionales sugeridas.',
        'Evalúa cada alternativa según claridad para el visitante y facilidad de mantenimiento por una sola persona.',
        'Selecciona la estructura final de secciones y el orden del menú.',
        'Esquematiza un wireframe de la página de inicio y de la página "Qué es Singularidad".',
        'Define el alcance de esta primera versión (por ejemplo, la sección "Noticias y eventos" puede iniciar vacía con aviso de contenido próximo).'
      ],
      herramientas: ['Herramientas de diseño y prototipado'],
      productoParcial: 'Wireframe de la página de inicio y de "Qué es Singularidad", con la estructura definitiva de secciones.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Estoy diseñando la arquitectura de información del sitio institucional de un semillero de investigación en IA aplicada a la salud. Las secciones consideradas son: [lista tus secciones]. Ayúdame a proponer un orden de navegación lógico, agrupando lo institucional (misión, objetivos, líneas de trabajo) de forma separada de lo dinámico (proyectos, blog, noticias), y sugiere qué debería mostrarse primero en la página de inicio.',
      criteriosRetro: [
        'La arquitectura separa claramente contenido institucional estable de contenido dinámico.',
        'El wireframe es legible y representa la jerarquía de la información.',
        'El alcance definido es realista para el tiempo restante.'
      ],
      recursos: [
        { titulo: 'Figma', url: 'https://www.figma.com/', nota: 'wireframes y prototipos visuales' }
      ]
    },
    {
      numero: 4,
      titulo: 'Planificación técnica y prototipo institucional',
      proposito: 'Organizar el trabajo técnico y construir un prototipo navegable del sitio institucional.',
      descripcion: 'Se descompone el proyecto en tareas, se organiza la estructura de archivos y el repositorio, y se construye un prototipo HTML y CSS con la navegación institucional funcionando, integrando ya la identidad visual del semillero.',
      instrucciones: [
        'Descompón el proyecto en tareas concretas (estructura HTML, estilos, contenido de cada sección institucional, integración de proyectos).',
        'Organiza la estructura de archivos y crea el repositorio o la rama de trabajo correspondiente.',
        'Construye el prototipo HTML y CSS con la navegación entre las secciones institucionales.',
        'Integra los logos del semillero y de la FUCS conservando su proporción.',
        'Verifica que el prototipo funcione correctamente al abrirlo de forma local.'
      ],
      herramientas: ['Visual Studio Code', 'Git', 'GitHub', 'HTML y CSS'],
      productoParcial: 'Repositorio con prototipo HTML y CSS navegable, con la identidad visual del semillero integrada.',
      tiempoEstimado: '3 a 4 horas',
      prompt: 'Voy a construir el sitio institucional de un semillero de investigación en IA aplicada a la salud, con HTML, CSS y JavaScript puro, para publicarlo en GitHub Pages. Mis secciones institucionales son: [lista tus secciones]. Ayúdame a proponer una estructura de carpetas y un esqueleto de HTML semántico para la página de inicio y para la página "Qué es Singularidad", sin escribir aún el contenido definitivo.',
      criteriosRetro: [
        'El repositorio y la estructura de archivos están correctamente organizados.',
        'El prototipo navega sin errores entre las secciones institucionales.',
        'Los logos están integrados sin deformarse.'
      ],
      recursos: [
        { titulo: 'GitHub Docs — Crear un repositorio', url: 'https://docs.github.com/repositories', nota: 'primeros pasos con GitHub' }
      ]
    },
    {
      numero: 5,
      titulo: 'Desarrollo del contenido institucional y evaluación',
      proposito: 'Completar el contenido institucional definitivo y evaluar el funcionamiento y la accesibilidad del sitio.',
      descripcion: 'Se redacta el contenido definitivo de cada sección institucional, se integra el mecanismo de contacto y el aviso de privacidad, se realizan pruebas funcionales y de accesibilidad, y se prueba el sitio en computador y en dispositivo móvil.',
      instrucciones: [
        'Redacta el contenido definitivo de cada sección institucional con base en la información real del semillero.',
        'Incorpora el mecanismo de contacto definido y un aviso claro de política de privacidad.',
        'Incluye un aviso visible de que el sitio no ofrece orientación médica individual.',
        'Prueba la navegación completa y corrige enlaces rotos o secciones incompletas.',
        'Evalúa accesibilidad básica y prueba el sitio en computador y en dispositivo móvil.'
      ],
      herramientas: ['Visual Studio Code', 'Herramientas de evaluación de accesibilidad'],
      productoParcial: 'Sitio institucional con contenido definitivo, mecanismo de contacto, aviso de privacidad y aviso sobre orientación médica, probado en computador y móvil.',
      tiempoEstimado: '3 a 4 horas',
      prompt: 'Voy a compartirte el texto que escribí para las secciones "Qué es Singularidad" y "Misión y propósito" de un sitio institucional de un semillero de investigación en salud. Revísalo y sugiere mejoras en claridad, tono institucional y coherencia con la información oficial que te comparto. Señala si alguna frase podría interpretarse como una promesa no respaldada o como asesoría médica individual.',
      criteriosRetro: [
        'El contenido institucional es veraz y coherente con la información oficial del semillero.',
        'El aviso de privacidad y el aviso sobre orientación médica están visibles.',
        'La navegación funciona sin enlaces rotos.',
        'El sitio se visualiza correctamente en computador y en móvil.'
      ],
      recursos: [
        { titulo: 'W3C WAI — Pautas WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', nota: 'principios de accesibilidad' },
        { titulo: 'Ley 1581 de 2012 (Colombia) — Protección de datos personales', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981', nota: 'referencia para el aviso de privacidad' }
      ]
    },
    {
      numero: 6,
      titulo: 'Publicación, documentación y reflexión final',
      proposito: 'Publicar el sitio institucional, documentar su actualización y reflexionar sobre el proceso.',
      descripcion: 'Se aplican los ajustes finales, se publica el sitio en GitHub Pages, se documenta el procedimiento para actualizar contenidos (por ejemplo, agregar un nuevo integrante o proyecto) y se presenta el sitio en el encuentro de retroalimentación.',
      instrucciones: [
        'Aplica los ajustes finales detectados en la evaluación anterior.',
        'Activa GitHub Pages y verifica que el sitio publicado funcione igual que en local.',
        'Documenta el procedimiento para actualizar contenidos frecuentes (nuevo integrante, nuevo proyecto, nueva noticia).',
        'Presenta el sitio terminado en el encuentro de retroalimentación.',
        'Completa las listas de chequeo y registra las acciones de mantenimiento pendientes.'
      ],
      herramientas: ['GitHub Pages', 'Git'],
      productoParcial: 'Sitio institucional publicado, con documentación del procedimiento de actualización de contenidos.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Voy a publicar el sitio institucional de un semillero de investigación en GitHub Pages. Ayúdame a redactar el procedimiento de actualización de contenidos para el README del repositorio: cómo agregar un nuevo integrante, cómo agregar un nuevo proyecto a la lista y cómo publicar una noticia, dirigido a una persona que mantendrá el sitio sin ser desarrolladora.',
      criteriosRetro: [
        'El sitio está publicado y funciona correctamente en GitHub Pages.',
        'El procedimiento de actualización es claro para una persona no técnica.',
        'Existe una reflexión explícita sobre el proceso y las decisiones tomadas.'
      ],
      recursos: [
        { titulo: 'GitHub Docs — Publicar un sitio con GitHub Pages', url: 'https://docs.github.com/pages/getting-started-with-github-pages', nota: 'pasos de publicación' }
      ]
    }
  ],

  herramientas: [
    { icono: '🧑‍💻', nombre: 'Visual Studio Code', descripcion: 'Edición del código del sitio institucional.' },
    { icono: '🌿', nombre: 'Git y GitHub', descripcion: 'Control de versiones y repositorio del sitio.' },
    { icono: '🌐', nombre: 'GitHub Pages', descripcion: 'Publicación gratuita del sitio institucional.' },
    { icono: '💬', nombre: 'ChatGPT con Investigación profunda', descripcion: 'Apoyo en benchmarking y redacción institucional.' },
    { icono: '📚', nombre: 'NotebookLM o Gemini Notebook', descripcion: 'Organización de referentes institucionales.' },
    { icono: '🎨', nombre: 'Herramientas de diseño y prototipado', descripcion: 'Wireframes de la arquitectura institucional.' }
  ],

  entregables: [
    'Documento de benchmarking institucional y criterios de calidad (Actividad 1).',
    'Síntesis de fuentes y decisiones de arquitectura (Actividad 2).',
    'Wireframe de inicio y estructura definitiva de secciones (Actividad 3).',
    'Repositorio con prototipo HTML y CSS institucional (Actividad 4).',
    'Sitio con contenido completo, aviso de privacidad y prueba en móvil (Actividad 5).',
    'Sitio institucional publicado con documentación de actualización (Actividad 6).'
  ],

  checklistProductos: [
    'Se recopiló y verificó la información institucional de base.',
    'Se realizó el benchmarking de semilleros, grupos y laboratorios.',
    'Se organizaron las fuentes y se documentaron las decisiones de arquitectura.',
    'Se elaboró un wireframe de la arquitectura institucional.',
    'Se construyó un prototipo navegable con la identidad visual integrada.',
    'Se completó el contenido definitivo de todas las secciones institucionales.',
    'Se incorporó el mecanismo de contacto y el aviso de privacidad.',
    'Se probó el sitio en computador y en dispositivo móvil.',
    'Se publicó el sitio en GitHub Pages.',
    'Se documentó el procedimiento para actualizar contenidos.'
  ],

  checklistCalidad: [
    'El contenido institucional es claro y veraz.',
    'La información presentada coincide con los datos oficiales del semillero.',
    'La navegación funciona sin enlaces rotos.',
    'El sitio es responsivo y se ve bien en móvil, tableta y computador.',
    'El contraste de color es adecuado para la lectura.',
    'Las imágenes y logos tienen texto alternativo.',
    'Se incluye un aviso de que el sitio no ofrece orientación médica individual.',
    'Se incluye una política de privacidad visible.',
    'Se declara el uso de inteligencia artificial en la construcción del sitio, cuando corresponda.',
    'El producto fue probado antes de su publicación final.',
    'Existe un procedimiento documentado para actualizar el sitio.'
  ],

  recursos: [
    { titulo: 'MDN Web Docs (español)', url: 'https://developer.mozilla.org/es/', nota: 'referencia técnica de HTML, CSS y JavaScript' },
    { titulo: 'GitHub Docs — GitHub Pages', url: 'https://docs.github.com/pages', nota: 'publicación de sitios estáticos' },
    { titulo: 'W3C WAI — Pautas WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', nota: 'principios de accesibilidad web' },
    { titulo: 'Ley 1581 de 2012 (Colombia)', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981', nota: 'marco de referencia para protección de datos personales' }
  ]
};
