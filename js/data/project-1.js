/* project-1.js — Página personal académica
   ─────────────────────────────────────────────────────────
   CONTENIDO EDITABLE. Estructura:
   - Datos generales del proyecto (nombre, duración, producto final).
   - presentacion / objetivos / productoEsperado: textos de las
     primeras tres pestañas.
   - actividades: arreglo con las seis actividades del proyecto.
   - herramientas / entregables / checklistProductos / checklistCalidad
     / recursos: contenido de las pestañas finales.

   Para modificar un texto, edita el campo correspondiente.
   Para añadir un recurso, agrega un objeto {titulo, url, nota} al
   arreglo "recursos" (url y nota son opcionales).
   ───────────────────────────────────────────────────────── */

const PROYECTO_1 = {
  id: 'proyecto-1',
  numero: 1,
  nombre: 'Página personal académica',
  resumenBreve: 'Diseño y publicación de una página personal académica para estudiantes o profesionales de ciencias de la salud.',
  duracionEstimada: 'Seis semanas · seis actividades',
  productoFinal: 'Página personal académica publicada en GitHub Pages',

  presentacion: {
    proposito: 'Diseñar y publicar una página personal académica para estudiantes o profesionales de ciencias de la salud, que presente de forma clara y ética su formación, intereses académicos, proyectos y producción.',
    contexto: 'Una identidad digital académica bien construida facilita la visibilidad profesional, la conexión con otros investigadores y la presentación ordenada de la trayectoria formativa. Este proyecto acompaña a cada integrante en la construcción de su propia página, aplicando principios de arquitectura de información, diseño accesible y publicación reproducible.',
    alcance: 'El proyecto cubre desde la definición del propósito de la página hasta su publicación pública en GitHub Pages, incluyendo la evaluación de accesibilidad y la documentación necesaria para mantenerla actualizada.'
  },

  objetivos: {
    general: 'Construir y publicar una página personal académica funcional, accesible y responsiva, que refleje de manera ética y verificable la formación, los intereses y la producción académica de su autor o autora.',
    especificos: [
      'Diferenciar la página personal académica de otros formatos como la hoja de vida o el portafolio profesional.',
      'Analizar referentes de páginas académicas existentes para identificar buenas prácticas de estructura y contenido.',
      'Diseñar una arquitectura de información clara para las secciones de la página.',
      'Construir la página utilizando HTML y CSS, sin frameworks que requieran compilación.',
      'Publicar la página mediante GitHub Pages y verificar su correcto funcionamiento en distintos dispositivos.',
      'Aplicar criterios básicos de accesibilidad y de privacidad en la presentación de la información personal.'
    ]
  },

  productoEsperado: {
    descripcion: 'Una página pública en GitHub Pages, construida con HTML, CSS y JavaScript puro, organizada en secciones claras y navegables, con información veraz y presentada de forma ética.',
    secciones: ['Inicio', 'Sobre mí', 'Formación', 'Intereses académicos', 'Proyectos', 'Producción académica', 'Docencia o actividades formativas', 'Recursos', 'Contacto']
  },

  actividades: [
    {
      numero: 1,
      titulo: 'Identidad digital académica y benchmarking',
      proposito: 'Delimitar el propósito de la página personal y reconocer referentes que orienten su estructura y estilo.',
      descripcion: 'Se define qué se busca comunicar con la página, quién la visitará y qué la diferencia de una hoja de vida o un portafolio. Se investigan páginas personales académicas de profesionales de la salud o la investigación como referentes de estructura, tono y organización.',
      instrucciones: [
        'Escribe en un párrafo el propósito de tu página personal académica: qué quieres comunicar y a quién.',
        'Identifica a tu público principal (por ejemplo, docentes, pares académicos, potenciales colaboradores).',
        'Busca y analiza al menos tres páginas personales académicas de profesionales de la salud o la investigación.',
        'Registra en una tabla qué secciones tiene cada referente, qué te gusta y qué no aplicarías.',
        'Formula tres criterios de calidad que tu página debe cumplir (por ejemplo: claridad, veracidad, accesibilidad).'
      ],
      herramientas: ['ChatGPT con Investigación profunda', 'Navegador web'],
      productoParcial: 'Documento breve con el propósito de la página, el público objetivo, el benchmarking de tres referentes y los criterios de calidad definidos.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Actúa como asesor en identidad digital académica para profesionales de ciencias de la salud. Voy a describirte mi perfil (formación, intereses académicos y objetivo con la página). A partir de esa descripción: 1) sugiere el propósito central que debería tener mi página personal académica, 2) propón tres públicos posibles a los que debería dirigirse, 3) sugiere tres criterios de calidad medibles para evaluar la página al final del proyecto. Sé conciso y justifica cada sugerencia en una frase.',
      criteriosRetro: [
        'El propósito de la página está formulado con claridad.',
        'El público objetivo está identificado y es coherente con el propósito.',
        'El benchmarking incluye al menos tres referentes reales y comparables.',
        'Los criterios de calidad son verificables al final del proyecto.'
      ],
      recursos: [
        { titulo: 'MDN Web Docs — Introducción a HTML', url: 'https://developer.mozilla.org/es/docs/Web/HTML', nota: 'referencia técnica general' },
        { titulo: 'ChatGPT — Investigación profunda (Deep Research)', url: 'https://help.openai.com/en/articles/9720230', nota: 'guía de uso oficial' }
      ]
    },
    {
      numero: 2,
      titulo: 'Gestión de fuentes y comparación de plataformas',
      proposito: 'Organizar los referentes recopilados y comparar plataformas de publicación disponibles para decidir la más adecuada.',
      descripcion: 'Se cargan los referentes y notas de la actividad anterior en NotebookLM o Gemini Notebook para sintetizar hallazgos comunes. Se comparan alternativas de publicación (GitHub Pages frente a otras opciones gratuitas) y se documenta la decisión con su justificación.',
      instrucciones: [
        'Crea un cuaderno en NotebookLM o Gemini Notebook y carga los enlaces o notas de los referentes analizados.',
        'Formula al menos tres preguntas al cuaderno sobre patrones comunes de estructura y contenido.',
        'Sintetiza en un párrafo los hallazgos principales sobre buenas prácticas de páginas personales académicas.',
        'Compara GitHub Pages con al menos una alternativa de publicación gratuita, considerando facilidad de uso, control y necesidad de backend.',
        'Registra la decisión tomada (plataforma de publicación) y su justificación.'
      ],
      herramientas: ['NotebookLM o Gemini Notebook', 'GitHub Pages'],
      productoParcial: 'Síntesis de hallazgos sobre buenas prácticas y documento de decisión sobre la plataforma de publicación, con su justificación.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Con base en las fuentes que he cargado en este cuaderno sobre páginas personales académicas, identifica: 1) los elementos estructurales que se repiten con mayor frecuencia, 2) las prácticas de presentación de la producción académica que consideras más claras, 3) posibles limitaciones o riesgos éticos en la forma en que estas páginas presentan logros o afiliaciones. Cita las fuentes específicas del cuaderno en cada punto.',
      criteriosRetro: [
        'El cuaderno de fuentes está organizado y las preguntas formuladas son pertinentes.',
        'La síntesis refleja fielmente el contenido de las fuentes consultadas.',
        'La comparación de plataformas considera criterios explícitos y no solo preferencia personal.',
        'La decisión final está justificada por escrito.'
      ],
      recursos: [
        { titulo: 'NotebookLM', url: 'https://notebooklm.google/', nota: 'organización de fuentes propias' },
        { titulo: 'GitHub Pages — Documentación oficial', url: 'https://docs.github.com/pages', nota: 'publicación de sitios estáticos' }
      ]
    },
    {
      numero: 3,
      titulo: 'Ideación de secciones y wireframe',
      proposito: 'Generar y seleccionar alternativas de estructura de contenido para la página personal.',
      descripcion: 'A partir de los hallazgos de las actividades anteriores, se generan varias alternativas de organización de secciones, se evalúan con criterios explícitos y se selecciona una, representada en un esquema o wireframe simple.',
      instrucciones: [
        'Realiza una lluvia de ideas de posibles secciones adicionales a las sugeridas (Inicio, Sobre mí, Formación, Intereses académicos, Proyectos, Producción académica, Docencia, Recursos, Contacto).',
        'Evalúa cada alternativa de organización según claridad, relevancia para el público objetivo y facilidad de mantenimiento.',
        'Selecciona la estructura final de secciones y su orden de aparición en el menú.',
        'Dibuja o esquematiza un wireframe simple (a mano, en una herramienta de diseño o en texto) de la página de inicio.',
        'Define el alcance final: qué se incluirá y qué quedará explícitamente fuera de esta primera versión.'
      ],
      herramientas: ['Herramientas de diseño y prototipado', 'ChatGPT con Investigación profunda'],
      productoParcial: 'Esquema o wireframe de la página de inicio y lista definitiva de secciones con su orden en el menú.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Soy un estudiante o profesional de ciencias de la salud construyendo mi página personal académica. Estas son las secciones que estoy considerando: [lista tus secciones]. Ayúdame a: 1) proponer un orden de navegación lógico para estas secciones, 2) sugerir qué contenido mínimo debería tener la sección "Sobre mí" para transmitir mi perfil sin exagerar logros, 3) señalar si alguna sección es redundante o si falta alguna sección relevante para mi público objetivo.',
      criteriosRetro: [
        'Las alternativas de estructura fueron evaluadas con criterios explícitos, no solo por preferencia.',
        'El wireframe representa con claridad la jerarquía visual de la página de inicio.',
        'El alcance definido es realista para el tiempo restante del proyecto.'
      ],
      recursos: [
        { titulo: 'Figma', url: 'https://www.figma.com/', nota: 'wireframes y prototipos visuales' }
      ]
    },
    {
      numero: 4,
      titulo: 'Planificación técnica y prototipo inicial',
      proposito: 'Organizar el trabajo técnico y construir un primer prototipo navegable de la página.',
      descripcion: 'Se descompone el proyecto en tareas concretas, se organiza la estructura de archivos, se crea el repositorio en GitHub y se construye un prototipo inicial en HTML y CSS con la navegación básica funcionando, aunque el contenido definitivo aún no esté completo.',
      instrucciones: [
        'Descompón el proyecto en tareas concretas (por ejemplo: estructura HTML, hoja de estilos, contenido de cada sección, revisión final).',
        'Organiza una estructura de archivos simple: index.html, carpeta css/, carpeta assets/ para imágenes.',
        'Crea el repositorio en GitHub (o una rama de trabajo si ya existe) para alojar el código.',
        'Construye el prototipo inicial: HTML con la navegación entre secciones y una hoja de estilos base.',
        'Verifica que el prototipo abre correctamente al abrir index.html de forma local.'
      ],
      herramientas: ['Visual Studio Code', 'Git', 'GitHub', 'HTML y CSS'],
      productoParcial: 'Repositorio creado con un prototipo HTML y CSS inicial, navegable localmente, con la estructura de archivos definida.',
      tiempoEstimado: '3 a 4 horas',
      prompt: 'Voy a construir una página personal académica estática con HTML, CSS y JavaScript puro, sin frameworks ni pasos de compilación, para publicarla en GitHub Pages. Mis secciones son: [lista tus secciones]. Ayúdame a proponer una estructura de carpetas y archivos simple y mantenible, y un esqueleto de HTML semántico (encabezados, nav, main, footer) para la página de inicio, sin escribir aún el contenido definitivo de cada sección.',
      criteriosRetro: [
        'El repositorio está creado y accesible.',
        'La estructura de archivos es clara y separa HTML, CSS e imágenes.',
        'El prototipo navega correctamente entre las secciones definidas.'
      ],
      recursos: [
        { titulo: 'Git — Documentación oficial', url: 'https://git-scm.com/doc', nota: 'control de versiones' },
        { titulo: 'GitHub Docs — Crear un repositorio', url: 'https://docs.github.com/repositories', nota: 'primeros pasos con GitHub' }
      ]
    },
    {
      numero: 5,
      titulo: 'Desarrollo del contenido y evaluación',
      proposito: 'Completar el contenido real de la página y evaluar su funcionamiento, accesibilidad y presentación.',
      descripcion: 'Se redacta y construye el contenido definitivo de cada sección, se realizan pruebas funcionales de navegación, se evalúa la accesibilidad básica y se prueba la página en computador y en dispositivo móvil, incorporando ajustes según la retroalimentación recibida.',
      instrucciones: [
        'Redacta y agrega el contenido real de cada sección definida (formación, intereses, proyectos, producción académica, etc.).',
        'Revisa que toda la información presentada sea veraz y esté expresada de forma ética, sin exagerar logros.',
        'Prueba la navegación completa de la página, verificando que todos los enlaces internos funcionen.',
        'Evalúa la accesibilidad básica: texto alternativo en imágenes, contraste y navegación por teclado.',
        'Abre la página en un dispositivo móvil o en el modo responsivo del navegador y corrige lo que no se vea bien.'
      ],
      herramientas: ['Visual Studio Code', 'Herramientas de evaluación de accesibilidad'],
      productoParcial: 'Página con el contenido definitivo cargado, probada en computador y móvil, con ajustes de accesibilidad aplicados.',
      tiempoEstimado: '3 a 4 horas',
      prompt: 'Voy a compartirte el texto que escribí para la sección "Sobre mí" y "Formación" de mi página personal académica. Revísalo y sugiere mejoras en: 1) claridad y concisión, 2) tono profesional y ético (sin exagerar logros), 3) coherencia con un público de [describe tu público]. Señala frases que debería replantear y por qué.',
      criteriosRetro: [
        'El contenido de todas las secciones está completo y es veraz.',
        'La navegación funciona sin enlaces rotos.',
        'Las imágenes tienen texto alternativo y el contraste es adecuado.',
        'La página se visualiza correctamente en computador y en móvil.'
      ],
      recursos: [
        { titulo: 'WebAIM — Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/', nota: 'verificación de contraste de color' },
        { titulo: 'W3C WAI — Pautas WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', nota: 'principios de accesibilidad' }
      ]
    },
    {
      numero: 6,
      titulo: 'Publicación, documentación y reflexión final',
      proposito: 'Publicar la página, documentar su mantenimiento y reflexionar sobre el proceso realizado.',
      descripcion: 'Se realizan los ajustes finales, se publica la página mediante GitHub Pages, se documenta cómo actualizarla en el futuro y se presenta el producto terminado, cerrando el proyecto con una reflexión sobre lo aprendido y las acciones de mantenimiento pendientes.',
      instrucciones: [
        'Aplica los últimos ajustes de contenido, estilo o corrección detectados en la evaluación anterior.',
        'Activa GitHub Pages en el repositorio y verifica que la página publicada funcione igual que en local.',
        'Escribe una breve documentación (puede ser el README del repositorio) sobre cómo actualizar el contenido en el futuro.',
        'Presenta la página terminada en el encuentro de retroalimentación.',
        'Completa las listas de chequeo del proyecto y registra qué acciones de mantenimiento quedan pendientes (por ejemplo, actualizar producción académica periódicamente).'
      ],
      herramientas: ['GitHub Pages', 'Git'],
      productoParcial: 'Página publicada y accesible públicamente, con documentación básica de mantenimiento.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Voy a publicar mi página personal académica en GitHub Pages. Ayúdame a redactar una breve sección de "cómo actualizar este sitio" para el README del repositorio, dirigida a una persona sin experiencia técnica avanzada, que explique cómo cambiar un texto, cómo agregar una publicación nueva a la sección de producción académica y cómo confirmar que los cambios ya están publicados.',
      criteriosRetro: [
        'La página está publicada correctamente en GitHub Pages y funciona sin errores.',
        'La documentación de mantenimiento es clara para una persona no técnica.',
        'Existe una reflexión explícita sobre el proceso y sus limitaciones.',
        'Se identificaron acciones de mantenimiento futuras concretas.'
      ],
      recursos: [
        { titulo: 'GitHub Docs — Publicar un sitio con GitHub Pages', url: 'https://docs.github.com/pages/getting-started-with-github-pages', nota: 'pasos de publicación' }
      ]
    }
  ],

  herramientas: [
    { icono: '🧑‍💻', nombre: 'Visual Studio Code', descripcion: 'Edición del código de la página.' },
    { icono: '🌿', nombre: 'Git y GitHub', descripcion: 'Control de versiones y alojamiento del repositorio.' },
    { icono: '🌐', nombre: 'GitHub Pages', descripcion: 'Publicación gratuita del sitio.' },
    { icono: '💬', nombre: 'ChatGPT con Investigación profunda', descripcion: 'Apoyo en benchmarking y redacción.' },
    { icono: '📚', nombre: 'NotebookLM o Gemini Notebook', descripcion: 'Organización de fuentes y referentes.' },
    { icono: '🎨', nombre: 'Herramientas de diseño y prototipado', descripcion: 'Wireframes de la página.' },
    { icono: '♿', nombre: 'Herramientas de evaluación de accesibilidad', descripcion: 'Verificación de contraste y navegación por teclado.' }
  ],

  entregables: [
    'Documento de benchmarking y criterios de calidad (Actividad 1).',
    'Síntesis de fuentes y decisión de plataforma de publicación (Actividad 2).',
    'Wireframe y estructura definitiva de secciones (Actividad 3).',
    'Repositorio con prototipo HTML y CSS inicial (Actividad 4).',
    'Página con contenido completo, probada en computador y móvil (Actividad 5).',
    'Página publicada en GitHub Pages con documentación de mantenimiento (Actividad 6).'
  ],

  checklistProductos: [
    'Se definió el propósito y el público objetivo de la página.',
    'Se realizó el benchmarking de páginas personales académicas.',
    'Se organizaron las fuentes y se documentó la decisión de plataforma.',
    'Se elaboró un wireframe de la página de inicio.',
    'Se construyó un prototipo navegable en HTML y CSS.',
    'Se completó el contenido definitivo de todas las secciones.',
    'Se evaluó la accesibilidad básica de la página.',
    'Se probó la página en computador y en dispositivo móvil.',
    'Se publicó la página en GitHub Pages.',
    'Se documentó el proceso de mantenimiento del sitio.'
  ],

  checklistCalidad: [
    'El contenido es claro y está dirigido al público definido.',
    'La información presentada es veraz y no exagera logros o experiencia.',
    'La navegación entre secciones funciona sin enlaces rotos.',
    'El sitio es responsivo y se ve bien en móvil, tableta y computador.',
    'El contraste de color es adecuado para la lectura.',
    'Las imágenes tienen texto alternativo.',
    'No se exponen datos personales sensibles.',
    'Se declara el uso de inteligencia artificial en la construcción del sitio, cuando corresponda.',
    'Todos los enlaces internos y externos funcionan correctamente.',
    'El producto fue probado antes de su publicación final.',
    'Existe documentación básica para actualizar el sitio en el futuro.'
  ],

  recursos: [
    { titulo: 'MDN Web Docs (español)', url: 'https://developer.mozilla.org/es/', nota: 'referencia técnica de HTML, CSS y JavaScript' },
    { titulo: 'GitHub Docs — GitHub Pages', url: 'https://docs.github.com/pages', nota: 'publicación de sitios estáticos' },
    { titulo: 'W3C WAI — Pautas WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', nota: 'principios de accesibilidad web' },
    { titulo: 'NotebookLM', url: 'https://notebooklm.google/', nota: 'organización de fuentes propias' }
  ]
};
