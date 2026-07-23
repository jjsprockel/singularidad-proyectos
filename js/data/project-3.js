/* project-3.js — Blog de inteligencia artificial aplicada a la salud
   ─────────────────────────────────────────────────────────
   CONTENIDO EDITABLE. Ver comentarios de estructura en project-1.js.
   ───────────────────────────────────────────────────────── */

const PROYECTO_3 = {
  id: 'proyecto-3',
  numero: 3,
  nombre: 'Blog de inteligencia artificial aplicada a la salud',
  resumenBreve: 'Diseño y construcción de un blog institucional de divulgación, educación e investigación en IA y salud.',
  duracionEstimada: 'Seis semanas · seis actividades',
  productoFinal: 'Blog integrado o enlazado a la página del semillero, con su primera plantilla de artículo definida',
  presentacionPdf: 'assets/presentaciones/proyecto-3.pdf',

  presentacion: {
    proposito: 'Diseñar y construir un blog institucional orientado a la divulgación, la educación y la investigación en inteligencia artificial aplicada a la salud, integrado o enlazado a la página del semillero.',
    contexto: 'La divulgación periódica de contenido es una de las formas más efectivas de mostrar la actividad de un semillero de investigación. Este proyecto construye la estructura, las categorías y la plantilla editorial que permitirán publicar artículos de forma sostenible en el tiempo.',
    alcance: 'El proyecto cubre la estructura del blog, sus categorías, la plantilla de artículo y la política editorial básica. La publicación sistemática de artículos y su flujo de aprobación se desarrollan en profundidad en el Proyecto 4 (Programa editorial de publicaciones).'
  },

  objetivos: {
    general: 'Diseñar y construir un blog institucional funcional, accesible y sostenible, con una estructura de categorías clara y una plantilla de artículo replicable, orientado a la divulgación de IA aplicada a la salud.',
    especificos: [
      'Delimitar el propósito editorial del blog y su relación con la página institucional del semillero.',
      'Analizar referentes de blogs académicos y de divulgación científica en salud.',
      'Definir las categorías temáticas del blog y su criterio de clasificación.',
      'Diseñar una plantilla de artículo que incluya los campos necesarios para la transparencia académica.',
      'Construir el blog con HTML, CSS y JavaScript puro, integrado o enlazado al sitio del semillero.',
      'Redactar la política editorial básica, las instrucciones para autores y la declaración de uso de IA.'
    ]
  },

  productoEsperado: {
    descripcion: 'Un blog institucional publicado, con una estructura de categorías definida, una plantilla de artículo reutilizable y cinco publicaciones piloto construidas con esa plantilla: una explicación conceptual, una lectura crítica de artículo, un tutorial o guía práctica, una nota sobre ética o regulación, y una publicación sobre un proyecto del semillero.',
    secciones: ['Inicio del blog', 'Categorías', 'Autores', 'Artículos', 'Política editorial', 'Instrucciones para autores', 'Declaración de uso de IA', 'Política de correcciones', 'Contacto']
  },

  actividades: [
    {
      numero: 1,
      titulo: 'Definición editorial y benchmarking de blogs',
      proposito: 'Delimitar el propósito editorial del blog y reconocer referentes de divulgación en IA y salud.',
      descripcion: 'Se define qué tipo de contenido publicará el blog, a quién se dirige y qué lo diferenciará de una red social o de un blog personal. Se analizan blogs académicos o de divulgación científica en salud como referentes de estructura y tono.',
      instrucciones: [
        'Redacta el propósito editorial del blog: qué tipo de contenido publicará y con qué frecuencia aproximada.',
        'Identifica el público principal del blog (estudiantes, docentes, comunidad de salud, público general interesado).',
        'Busca y analiza al menos tres blogs académicos o de divulgación científica en salud o tecnología.',
        'Registra en una tabla la estructura, categorías y tono de cada referente.',
        'Formula los criterios de calidad editorial del blog (por ejemplo: rigor, claridad, transparencia sobre el uso de IA).'
      ],
      herramientas: ['ChatGPT con Investigación profunda', 'Navegador web'],
      productoParcial: 'Documento con el propósito editorial, el público objetivo, el benchmarking de blogs y los criterios de calidad.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Actúa como asesor editorial para un blog de divulgación académica en inteligencia artificial aplicada a la salud, dirigido por un semillero de investigación universitario. Ayúdame a: 1) definir un propósito editorial claro en dos frases, 2) identificar tres públicos posibles y qué esperaría cada uno del blog, 3) sugerir tres criterios de calidad editorial que deberíamos aplicar a cada artículo publicado.',
      criteriosRetro: [
        'El propósito editorial está formulado con claridad.',
        'El público objetivo es coherente con el propósito.',
        'El benchmarking incluye referentes reales y comparables.',
        'Los criterios de calidad editorial son verificables.'
      ],
      recursos: [
        { titulo: 'ChatGPT — Investigación profunda (Deep Research)', url: 'https://help.openai.com/en/articles/9720230', nota: 'guía de uso oficial' }
      ]
    },
    {
      numero: 2,
      titulo: 'Gestión de fuentes y definición de categorías',
      proposito: 'Sintetizar hallazgos del benchmarking y definir las categorías temáticas del blog.',
      descripcion: 'Se organizan los referentes en NotebookLM o Gemini Notebook, se sintetizan hallazgos sobre estructura editorial y se define el conjunto de categorías temáticas del blog, con su criterio de clasificación.',
      instrucciones: [
        'Carga los referentes analizados en NotebookLM o Gemini Notebook.',
        'Formula preguntas al cuaderno sobre cómo organizan sus categorías los blogs analizados.',
        'Sintetiza los hallazgos sobre buenas prácticas editoriales y de transparencia.',
        'Define el conjunto final de categorías temáticas del blog y un criterio claro para clasificar un artículo en cada una.',
        'Documenta la decisión sobre autoría (autores individuales, autoría colectiva del semillero, o ambas).'
      ],
      herramientas: ['NotebookLM o Gemini Notebook'],
      productoParcial: 'Síntesis de hallazgos y lista definitiva de categorías temáticas con su criterio de clasificación.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Con base en las fuentes que he cargado en este cuaderno sobre blogs académicos y de divulgación en salud, identifica: 1) cómo organizan sus categorías temáticas, 2) qué prácticas de transparencia editorial usan (declaración de conflictos, uso de IA, fecha de actualización), 3) qué patrones de autoría son más frecuentes. Cita las fuentes específicas del cuaderno en cada punto.',
      criteriosRetro: [
        'La síntesis refleja fielmente las fuentes consultadas.',
        'Las categorías definidas son mutuamente distinguibles.',
        'La decisión sobre autoría está documentada y justificada.'
      ],
      recursos: [
        { titulo: 'NotebookLM', url: 'https://notebooklm.google/', nota: 'organización de fuentes propias' }
      ]
    },
    {
      numero: 3,
      titulo: 'Ideación de la plantilla de artículo',
      proposito: 'Generar y seleccionar alternativas de plantilla editorial para los artículos del blog.',
      descripcion: 'Se generan alternativas de plantilla de artículo considerando los campos necesarios para la transparencia académica (autor, categoría, declaración de uso de IA, referencias), se evalúan y se selecciona la versión final representada en un esquema.',
      instrucciones: [
        'Realiza una lluvia de ideas sobre los campos que debería tener la plantilla de artículo, partiendo de la propuesta base del proyecto.',
        'Evalúa cada alternativa según utilidad para el lector y facilidad de completarla por un autor.',
        'Selecciona la plantilla final de artículo con todos sus campos.',
        'Esquematiza cómo se verá un artículo publicado (wireframe simple).',
        'Define el alcance de esta primera versión: cinco publicaciones piloto de tipos distintos (una explicación conceptual, una lectura crítica de artículo, un tutorial o guía práctica, una nota sobre ética o regulación, y una publicación sobre un proyecto del semillero).'
      ],
      herramientas: ['Herramientas de diseño y prototipado'],
      productoParcial: 'Plantilla final de artículo definida y wireframe de cómo se visualizará un artículo publicado.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Estoy diseñando la plantilla de artículo para un blog académico de divulgación en IA aplicada a la salud. La plantilla base incluye: título, resumen, autor, fecha, categoría, público objetivo, pregunta central, desarrollo, implicaciones para salud o educación, limitaciones, conclusiones, referencias, declaración de uso de IA, conflictos de interés y fecha de actualización. Revisa si falta algún campo relevante para la transparencia académica y sugiere en qué orden deberían presentarse visualmente.',
      criteriosRetro: [
        'La plantilla incluye todos los campos necesarios para la transparencia académica.',
        'El wireframe del artículo es legible y prioriza el contenido sobre el adorno visual.',
        'El alcance definido es realista para el tiempo restante.'
      ],
      recursos: [
        { titulo: 'Figma', url: 'https://www.figma.com/', nota: 'wireframes y prototipos visuales' }
      ]
    },
    {
      numero: 4,
      titulo: 'Planificación técnica y prototipo del blog',
      proposito: 'Organizar el trabajo técnico y construir un prototipo navegable del blog.',
      descripcion: 'Se descompone el proyecto en tareas, se organiza la estructura de archivos y el repositorio, y se construye un prototipo HTML y CSS con la navegación entre inicio del blog, categorías y un artículo de muestra que servirá de base para las cinco publicaciones piloto.',
      instrucciones: [
        'Descompón el proyecto en tareas concretas (estructura del listado de artículos, plantilla de artículo, páginas de política editorial).',
        'Organiza la estructura de archivos (por ejemplo, una carpeta por artículo o un listado central) y crea el repositorio o rama correspondiente.',
        'Construye el prototipo HTML y CSS: página de inicio del blog con listado de artículos y una página de artículo individual usando la plantilla definida.',
        'Enlaza el blog desde la página institucional del semillero (Proyecto 2), si ya está disponible.',
        'Verifica que el prototipo funcione correctamente de forma local.'
      ],
      herramientas: ['Visual Studio Code', 'Git', 'GitHub', 'HTML y CSS'],
      productoParcial: 'Repositorio con prototipo HTML y CSS del blog, incluyendo listado de artículos y una página de artículo individual.',
      tiempoEstimado: '3 a 4 horas',
      prompt: 'Voy a construir un blog académico estático con HTML, CSS y JavaScript puro para publicarlo en GitHub Pages, enlazado a la página institucional de un semillero de investigación. Ayúdame a proponer una estructura de carpetas y archivos que facilite agregar nuevos artículos en el futuro sin duplicar código, y un esqueleto de HTML semántico para la página de listado de artículos y para la página de un artículo individual.',
      criteriosRetro: [
        'El repositorio y la estructura de archivos facilitan agregar artículos futuros.',
        'El prototipo navega correctamente entre el listado y el artículo de muestra.',
        'El blog queda enlazado desde la página institucional, si corresponde.'
      ],
      recursos: [
        { titulo: 'GitHub Docs — Crear un repositorio', url: 'https://docs.github.com/repositories', nota: 'primeros pasos con GitHub' }
      ]
    },
    {
      numero: 5,
      titulo: 'Desarrollo del contenido editorial y evaluación',
      proposito: 'Completar el contenido editorial del blog y evaluar su funcionamiento y accesibilidad.',
      descripcion: 'Se redacta la política editorial, las instrucciones para autores, la declaración de uso de IA y la política de correcciones, se redactan y construyen las cinco publicaciones piloto con la plantilla definida, y se realizan pruebas funcionales, de accesibilidad y en dispositivos móviles.',
      instrucciones: [
        'Redacta la política editorial básica del blog (qué se publica, qué no, y bajo qué criterios).',
        'Redacta las instrucciones para autores y la declaración de uso de inteligencia artificial.',
        'Redacta la política de correcciones (cómo se corrige un error una vez publicado un artículo).',
        'Construye las cinco publicaciones piloto utilizando la plantilla definida en la Actividad 3: una explicación conceptual, una lectura crítica de artículo, un tutorial o guía práctica, una nota sobre ética o regulación, y una publicación sobre un proyecto del semillero.',
        'Prueba la navegación, evalúa accesibilidad básica y verifica el blog en computador y en dispositivo móvil.'
      ],
      herramientas: ['Visual Studio Code', 'Herramientas de evaluación de accesibilidad'],
      productoParcial: 'Blog con política editorial, instrucciones para autores, declaración de uso de IA, política de correcciones y las cinco publicaciones piloto completas, probado en computador y móvil.',
      tiempoEstimado: '4 a 6 horas',
      prompt: 'Voy a compartirte el borrador de la política editorial y las instrucciones para autores de un blog académico de divulgación en IA aplicada a la salud. Revísalo y sugiere mejoras en claridad, y señala si falta algún criterio importante de calidad, transparencia o manejo de correcciones que debería incluirse.',
      criteriosRetro: [
        'La política editorial y las instrucciones para autores son claras y completas.',
        'Las cinco publicaciones piloto cumplen con todos los campos de la plantilla y cubren los cinco tipos previstos.',
        'La navegación funciona sin enlaces rotos y el blog se ve bien en móvil.'
      ],
      recursos: [
        { titulo: 'COPE — Committee on Publication Ethics', url: 'https://publicationethics.org/', nota: 'referentes de ética editorial' },
        { titulo: 'W3C WAI — Pautas WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', nota: 'principios de accesibilidad' }
      ]
    },
    {
      numero: 6,
      titulo: 'Publicación, documentación y reflexión final',
      proposito: 'Publicar el blog, documentar cómo agregar nuevos artículos y reflexionar sobre el proceso.',
      descripcion: 'Se aplican los ajustes finales, se publica el blog en GitHub Pages, se documenta el procedimiento para publicar un nuevo artículo y se presenta el producto en el encuentro de retroalimentación.',
      instrucciones: [
        'Aplica los ajustes finales detectados en la evaluación anterior.',
        'Activa GitHub Pages (o verifica que el blog quede correctamente enlazado si comparte repositorio con el sitio institucional).',
        'Documenta el procedimiento paso a paso para publicar un nuevo artículo usando la plantilla.',
        'Presenta el blog terminado en el encuentro de retroalimentación.',
        'Completa las listas de chequeo y registra las acciones de mantenimiento editorial pendientes.'
      ],
      herramientas: ['GitHub Pages', 'Git'],
      productoParcial: 'Blog publicado, con documentación del procedimiento para publicar nuevos artículos.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Voy a publicar un blog académico en GitHub Pages. Ayúdame a redactar el procedimiento paso a paso para publicar un nuevo artículo usando una plantilla ya definida, dirigido a un autor del semillero que no tiene experiencia técnica previa, incluyendo cómo completar cada campo de la plantilla y cómo verificar que el artículo quedó publicado correctamente.',
      criteriosRetro: [
        'El blog está publicado y funciona correctamente.',
        'El procedimiento para publicar artículos es claro para un autor sin experiencia técnica.',
        'Existe una reflexión explícita sobre el proceso editorial recorrido.'
      ],
      recursos: [
        { titulo: 'GitHub Docs — Publicar un sitio con GitHub Pages', url: 'https://docs.github.com/pages/getting-started-with-github-pages', nota: 'pasos de publicación' }
      ]
    }
  ],

  herramientas: [
    { icono: '🧑‍💻', nombre: 'Visual Studio Code', descripcion: 'Edición del código del blog.' },
    { icono: '🌿', nombre: 'Git y GitHub', descripcion: 'Control de versiones y repositorio del blog.' },
    { icono: '🌐', nombre: 'GitHub Pages', descripcion: 'Publicación gratuita del blog.' },
    { icono: '💬', nombre: 'ChatGPT con Investigación profunda', descripcion: 'Apoyo editorial y de redacción.' },
    { icono: '📚', nombre: 'NotebookLM o Gemini Notebook', descripcion: 'Organización de referentes editoriales.' },
    { icono: '🎨', nombre: 'Herramientas de diseño y prototipado', descripcion: 'Wireframes de la plantilla de artículo.' }
  ],

  entregables: [
    'Documento de propósito editorial, benchmarking y criterios de calidad (Actividad 1).',
    'Síntesis de fuentes y categorías temáticas definidas (Actividad 2).',
    'Plantilla final de artículo y wireframe (Actividad 3).',
    'Repositorio con prototipo HTML y CSS del blog (Actividad 4).',
    'Blog con política editorial, instrucciones para autores y las cinco publicaciones piloto (Actividad 5).',
    'Blog publicado con documentación del procedimiento editorial (Actividad 6).'
  ],

  checklistProductos: [
    'Se definió el propósito editorial y el público del blog.',
    'Se realizó el benchmarking de blogs académicos y de divulgación.',
    'Se definieron las categorías temáticas y su criterio de clasificación.',
    'Se diseñó la plantilla de artículo con todos sus campos.',
    'Se construyó un prototipo navegable del blog.',
    'Se redactó la política editorial, las instrucciones para autores y la declaración de uso de IA.',
    'Se construyeron las cinco publicaciones piloto completas.',
    'Se probó el blog en computador y en dispositivo móvil.',
    'Se publicó el blog en GitHub Pages.',
    'Se documentó el procedimiento para publicar nuevos artículos.'
  ],

  checklistCalidad: [
    'El contenido editorial es claro y coherente con el propósito del blog.',
    'Las categorías temáticas son claras y no se superponen de forma confusa.',
    'La plantilla de artículo incluye declaración de uso de IA y de conflictos de interés.',
    'La navegación entre artículos y categorías funciona correctamente.',
    'El blog es responsivo y se ve bien en móvil, tableta y computador.',
    'El contraste de color es adecuado para la lectura.',
    'Las imágenes tienen texto alternativo.',
    'No se exponen datos sensibles de pacientes ni de terceros.',
    'Existe una política de correcciones visible.',
    'El producto fue probado antes de su publicación final.',
    'Existe documentación clara para publicar nuevos artículos.'
  ],

  recursos: [
    { titulo: 'MDN Web Docs (español)', url: 'https://developer.mozilla.org/es/', nota: 'referencia técnica de HTML, CSS y JavaScript' },
    { titulo: 'COPE — Committee on Publication Ethics', url: 'https://publicationethics.org/', nota: 'principios de ética editorial' },
    { titulo: 'ICMJE — Recommendations', url: 'https://www.icmje.org/recommendations/', nota: 'referencia de buenas prácticas de publicación científica' },
    { titulo: 'GitHub Docs — GitHub Pages', url: 'https://docs.github.com/pages', nota: 'publicación de sitios estáticos' }
  ]
};
