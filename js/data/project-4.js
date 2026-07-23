/* project-4.js — Programa editorial de publicaciones
   ─────────────────────────────────────────────────────────
   CONTENIDO EDITABLE. Ver comentarios de estructura en project-1.js.
   ───────────────────────────────────────────────────────── */

const PROYECTO_4 = {
  id: 'proyecto-4',
  numero: 4,
  nombre: 'Programa editorial de publicaciones',
  resumenBreve: 'Construcción de un sistema reproducible para proponer, seleccionar, revisar, aprobar y publicar contenidos del semillero.',
  duracionEstimada: 'Seis semanas · seis actividades',
  productoFinal: 'Programa editorial publicado como sección del sitio, con su flujo, roles y criterios documentados',
  presentacionPdf: 'assets/presentaciones/proyecto-4.pdf',

  presentacion: {
    proposito: 'Construir un programa editorial reproducible que ordene cómo se proponen, seleccionan, revisan, aprueban, publican y actualizan los contenidos del semillero, incluyendo los del blog desarrollado en el Proyecto 3.',
    contexto: 'Publicar contenido de forma sostenida requiere reglas claras: quién puede proponer un tema, cómo se prioriza, quién revisa y aprueba, y cómo se corrige un error después de publicar. Este proyecto formaliza ese sistema como un producto documentado y publicado del semillero.',
    alcance: 'El proyecto cubre el diseño del flujo editorial completo, sus roles, criterios de selección y calendario, y su publicación como sección del sitio. No implica construir un sistema de gestión de contenidos con backend: el programa editorial se documenta y aplica de forma manual, apoyado en herramientas simples (documentos, calendario compartido).'
  },

  objetivos: {
    general: 'Diseñar, documentar y publicar un programa editorial reproducible que ordene el ciclo completo de vida de las publicaciones del semillero, desde la propuesta de un tema hasta su publicación, promoción y actualización.',
    especificos: [
      'Analizar modelos editoriales de revistas, blogs institucionales y boletines académicos como referentes.',
      'Definir los roles editoriales necesarios y sus responsabilidades.',
      'Diseñar el flujo editorial completo, desde la propuesta hasta la actualización de un contenido publicado.',
      'Establecer criterios explícitos de selección y priorización de temas.',
      'Documentar los procedimientos de revisión, corrección y actualización de contenidos.',
      'Publicar el programa editorial como sección consultable del sitio del semillero.'
    ]
  },

  productoEsperado: {
    descripcion: 'Un programa editorial publicado, que incluye la política editorial, el formulario de propuesta de temas, la matriz de priorización, el calendario de publicaciones, los roles editoriales, el flujo de revisión, los criterios de calidad y los procedimientos de corrección y actualización.',
    secciones: ['Política editorial', 'Formulario de propuesta de temas', 'Matriz de priorización', 'Calendario de publicaciones', 'Roles editoriales', 'Flujo de revisión', 'Criterios de calidad', 'Procedimiento de correcciones', 'Procedimiento de actualización']
  },

  actividades: [
    {
      numero: 1,
      titulo: 'Definición del sistema editorial y benchmarking',
      proposito: 'Delimitar el alcance del programa editorial y reconocer modelos editoriales de referencia.',
      descripcion: 'Se define qué problema resuelve el programa editorial (ordenar la producción de contenido del semillero) y se investigan modelos editoriales de revistas científicas, blogs institucionales y boletines como referentes de roles y flujo.',
      instrucciones: [
        'Describe en un párrafo qué problema concreto resolverá el programa editorial del semillero.',
        'Identifica quiénes participarán del sistema editorial (proponentes, autores, revisores, aprobadores).',
        'Busca y analiza al menos tres modelos editoriales de referencia (una revista científica, un blog institucional, un boletín o newsletter).',
        'Registra en una tabla los roles, el flujo y los criterios de selección de cada referente.',
        'Formula los criterios de calidad que debe cumplir el propio programa editorial (por ejemplo: claridad de roles, trazabilidad de decisiones).'
      ],
      herramientas: ['ChatGPT con Investigación profunda', 'Navegador web'],
      productoParcial: 'Documento con el problema a resolver, los participantes identificados, el benchmarking de modelos editoriales y los criterios de calidad del programa.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Actúa como asesor en gestión editorial para un semillero de investigación universitario que publica un blog y otros contenidos de divulgación en IA aplicada a la salud. Ayúdame a: 1) identificar los roles editoriales mínimos necesarios para un equipo pequeño, 2) comparar cómo revistas científicas y blogs institucionales organizan su flujo de revisión, 3) sugerir tres riesgos frecuentes de un programa editorial mal diseñado (por ejemplo, cuellos de botella en la aprobación).',
      criteriosRetro: [
        'El problema que resuelve el programa editorial está claramente delimitado.',
        'Los participantes identificados son realistas para el tamaño del semillero.',
        'El benchmarking incluye modelos editoriales diversos y comparables.',
        'Los criterios de calidad del programa son verificables.'
      ],
      recursos: [
        { titulo: 'ChatGPT — Investigación profunda (Deep Research)', url: 'https://help.openai.com/en/articles/9720230', nota: 'guía de uso oficial' }
      ]
    },
    {
      numero: 2,
      titulo: 'Gestión de fuentes y definición de criterios de selección',
      proposito: 'Sintetizar los hallazgos del benchmarking y definir los criterios de selección de temas.',
      descripcion: 'Se organizan los referentes en NotebookLM o Gemini Notebook, se sintetizan hallazgos sobre criterios de selección de contenido y se definen los criterios propios de priorización del semillero: pertinencia, utilidad, rigor, oportunidad, originalidad, factibilidad, valor educativo y riesgo.',
      instrucciones: [
        'Carga los referentes analizados en NotebookLM o Gemini Notebook.',
        'Formula preguntas al cuaderno sobre qué criterios usan los referentes para decidir qué se publica.',
        'Sintetiza los hallazgos sobre criterios de selección y priorización editorial.',
        'Define, adaptándolos a este semillero, los criterios de selección: pertinencia, utilidad, rigor, oportunidad, originalidad, factibilidad, valor educativo y riesgo.',
        'Documenta cómo se combinarán estos criterios en una matriz de priorización (por ejemplo, una escala simple por criterio).'
      ],
      herramientas: ['NotebookLM o Gemini Notebook'],
      productoParcial: 'Síntesis de hallazgos y definición de los criterios de selección con su forma de combinación en una matriz de priorización.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Con base en las fuentes que he cargado en este cuaderno sobre modelos editoriales, identifica: 1) qué criterios de selección de contenido usan con mayor frecuencia, 2) cómo priorizan entre varias propuestas cuando los recursos son limitados, 3) qué mecanismos de trazabilidad usan para documentar por qué se aceptó o rechazó una propuesta. Cita las fuentes del cuaderno en cada punto.',
      criteriosRetro: [
        'La síntesis refleja fielmente las fuentes consultadas.',
        'Los criterios de selección quedan definidos de forma operativa, no solo enunciados.',
        'La forma de combinarlos en una matriz es simple y aplicable por el equipo actual.'
      ],
      recursos: [
        { titulo: 'NotebookLM', url: 'https://notebooklm.google/', nota: 'organización de fuentes propias' }
      ]
    },
    {
      numero: 3,
      titulo: 'Ideación del flujo editorial y roles',
      proposito: 'Generar y seleccionar alternativas de flujo editorial y definir los roles necesarios.',
      descripcion: 'Se generan alternativas de flujo editorial completo (desde la propuesta hasta la actualización de un contenido publicado), se evalúan según su viabilidad para un equipo pequeño y se selecciona la versión final, representada gráficamente.',
      instrucciones: [
        'Realiza una lluvia de ideas sobre las etapas que debería tener el flujo editorial, partiendo de la propuesta base: propuesta, evaluación inicial, investigación de base, selección de fuentes, aprobación, asignación de autor, redacción, revisión científica, revisión editorial, aprobación final, publicación, promoción, seguimiento y actualización.',
        'Evalúa si todas las etapas son necesarias para el tamaño actual del semillero o si algunas pueden combinarse.',
        'Define los roles editoriales necesarios (por ejemplo: editor responsable, revisor científico, revisor editorial, autor) y quién puede asumir cada uno.',
        'Representa gráficamente el flujo editorial final seleccionado.',
        'Define el alcance de esta primera versión del programa (por ejemplo, aplicarlo inicialmente solo al blog).'
      ],
      herramientas: ['Herramientas de diseño y prototipado'],
      productoParcial: 'Flujo editorial definido y representado gráficamente, con los roles editoriales asignables documentados.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Estoy diseñando el flujo editorial de un semillero de investigación pequeño que publica un blog académico. El flujo propuesto incluye: propuesta, evaluación inicial, investigación de base, selección de fuentes, aprobación, asignación de autor, redacción, revisión científica, revisión editorial, aprobación final, publicación, promoción, seguimiento y actualización. Revisa si este flujo es viable para un equipo de pocas personas, sugiere qué etapas podrían combinarse sin perder rigor, y propón qué roles mínimos se necesitan.',
      criteriosRetro: [
        'El flujo editorial es realista para el tamaño actual del equipo.',
        'Los roles definidos tienen responsabilidades claras y no se solapan de forma confusa.',
        'La representación gráfica del flujo es comprensible.'
      ],
      recursos: [
        { titulo: 'Figma', url: 'https://www.figma.com/', nota: 'diagramas de flujo y prototipos visuales' }
      ]
    },
    {
      numero: 4,
      titulo: 'Planificación técnica y prototipo de la sección editorial',
      proposito: 'Organizar el trabajo técnico y construir un prototipo de la sección del sitio donde vivirá el programa editorial.',
      descripcion: 'Se descompone el proyecto en tareas, se organiza la estructura de archivos y el repositorio, y se construye un prototipo HTML y CSS de la sección del sitio que presentará el programa editorial (política, flujo, calendario, roles).',
      instrucciones: [
        'Descompón el proyecto en tareas concretas (redacción de la política editorial, diagrama del flujo, calendario, matriz de priorización).',
        'Organiza la estructura de archivos y crea el repositorio o la rama de trabajo correspondiente, integrado con el sitio institucional si ya existe.',
        'Construye el prototipo HTML y CSS de la sección "Programa editorial", con la navegación entre sus apartados.',
        'Diseña el formulario de propuesta de temas como una tabla o formulario simple (sin backend, puede recolectarse por correo o formulario externo institucional).',
        'Verifica que el prototipo funcione correctamente de forma local.'
      ],
      herramientas: ['Visual Studio Code', 'Git', 'GitHub', 'HTML y CSS'],
      productoParcial: 'Repositorio con prototipo HTML y CSS de la sección "Programa editorial", incluyendo el esquema del formulario de propuesta de temas.',
      tiempoEstimado: '3 a 4 horas',
      prompt: 'Voy a construir una sección de "Programa editorial" dentro del sitio institucional de un semillero de investigación, usando HTML, CSS y JavaScript puro, sin backend. Necesito mostrar: política editorial, formulario de propuesta de temas, matriz de priorización, calendario de publicaciones, roles editoriales y flujo de revisión. Ayúdame a proponer una estructura de página y un esqueleto de HTML semántico para esta sección, considerando que el formulario de propuesta no puede procesar datos por sí mismo (debe indicar un canal alterno de envío, como el correo institucional).',
      criteriosRetro: [
        'El repositorio y la estructura de archivos están correctamente organizados.',
        'El prototipo navega correctamente entre los apartados del programa editorial.',
        'El formulario de propuesta indica con claridad cómo se envía realmente, dado que el sitio no tiene backend.'
      ],
      recursos: [
        { titulo: 'GitHub Docs — Crear un repositorio', url: 'https://docs.github.com/repositories', nota: 'primeros pasos con GitHub' }
      ]
    },
    {
      numero: 5,
      titulo: 'Desarrollo del contenido editorial y evaluación',
      proposito: 'Completar la documentación definitiva del programa editorial y evaluar su claridad y funcionamiento.',
      descripcion: 'Se redacta la política editorial completa, la matriz de priorización, el calendario inicial de publicaciones y los procedimientos de corrección y actualización; se realizan pruebas funcionales, de accesibilidad y en dispositivos móviles.',
      instrucciones: [
        'Redacta la política editorial completa del semillero, incluyendo qué se publica y bajo qué principios.',
        'Construye la matriz de priorización con los criterios definidos en la Actividad 2 (pertinencia, utilidad, rigor, oportunidad, originalidad, factibilidad, valor educativo, riesgo).',
        'Define un calendario inicial de publicaciones (frecuencia y responsables, sin fechas específicas si aún no están concertadas).',
        'Redacta los procedimientos de corrección y de actualización de contenidos ya publicados.',
        'Prueba la navegación, evalúa accesibilidad básica y verifica la sección en computador y en dispositivo móvil.'
      ],
      herramientas: ['Visual Studio Code', 'Herramientas de evaluación de accesibilidad'],
      productoParcial: 'Sección de programa editorial con política, matriz de priorización, calendario, procedimientos de corrección y actualización, probada en computador y móvil.',
      tiempoEstimado: '3 a 4 horas',
      prompt: 'Voy a compartirte el borrador de la política editorial y la matriz de priorización de un programa editorial para un semillero de investigación en IA aplicada a la salud. Revísalo y sugiere mejoras en claridad, y señala si los criterios de priorización (pertinencia, utilidad, rigor, oportunidad, originalidad, factibilidad, valor educativo, riesgo) están aplicados de forma consistente y verificable.',
      criteriosRetro: [
        'La política editorial y la matriz de priorización son claras y aplicables.',
        'El calendario y los procedimientos de corrección y actualización están completos.',
        'La navegación funciona sin enlaces rotos y la sección se ve bien en móvil.'
      ],
      recursos: [
        { titulo: 'COPE — Committee on Publication Ethics', url: 'https://publicationethics.org/', nota: 'referentes de ética editorial y corrección de errores' },
        { titulo: 'W3C WAI — Pautas WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', nota: 'principios de accesibilidad' }
      ]
    },
    {
      numero: 6,
      titulo: 'Publicación, documentación y reflexión final',
      proposito: 'Publicar el programa editorial, documentar su aplicación práctica y reflexionar sobre el proceso.',
      descripcion: 'Se aplican los ajustes finales, se publica la sección del programa editorial en el sitio, se documenta cómo aplicarlo en la práctica (por ejemplo, al recibir la primera propuesta de artículo) y se presenta en el encuentro de retroalimentación.',
      instrucciones: [
        'Aplica los ajustes finales detectados en la evaluación anterior.',
        'Publica la sección del programa editorial junto con el resto del sitio institucional en GitHub Pages.',
        'Documenta con un ejemplo práctico cómo se aplicaría el flujo completo a una propuesta real de artículo.',
        'Presenta el programa editorial terminado en el encuentro de retroalimentación.',
        'Completa las listas de chequeo y registra las acciones de mantenimiento pendientes (por ejemplo, revisar el calendario cada semestre).'
      ],
      herramientas: ['GitHub Pages', 'Git'],
      productoParcial: 'Programa editorial publicado, con un ejemplo práctico de aplicación documentado.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Voy a publicar la sección de "Programa editorial" de un semillero de investigación en GitHub Pages. Ayúdame a redactar un ejemplo práctico, paso a paso, de cómo se aplicaría el flujo editorial completo a una propuesta real de artículo, desde que alguien la propone hasta que se publica y se le da seguimiento.',
      criteriosRetro: [
        'La sección está publicada y funciona correctamente.',
        'El ejemplo práctico documentado es realista y aplicable por el equipo actual.',
        'Existe una reflexión explícita sobre el proceso y su viabilidad futura.'
      ],
      recursos: [
        { titulo: 'GitHub Docs — Publicar un sitio con GitHub Pages', url: 'https://docs.github.com/pages/getting-started-with-github-pages', nota: 'pasos de publicación' }
      ]
    }
  ],

  herramientas: [
    { icono: '🧑‍💻', nombre: 'Visual Studio Code', descripcion: 'Edición del código de la sección editorial.' },
    { icono: '🌿', nombre: 'Git y GitHub', descripcion: 'Control de versiones y repositorio del programa editorial.' },
    { icono: '🌐', nombre: 'GitHub Pages', descripcion: 'Publicación gratuita de la sección.' },
    { icono: '💬', nombre: 'ChatGPT con Investigación profunda', descripcion: 'Apoyo en benchmarking y redacción de políticas.' },
    { icono: '📚', nombre: 'NotebookLM o Gemini Notebook', descripcion: 'Organización de referentes editoriales.' },
    { icono: '🎨', nombre: 'Herramientas de diseño y prototipado', descripcion: 'Diagramas del flujo editorial.' }
  ],

  entregables: [
    'Documento de benchmarking de modelos editoriales y criterios de calidad del programa (Actividad 1).',
    'Síntesis de fuentes y criterios de selección definidos (Actividad 2).',
    'Flujo editorial y roles definidos, representados gráficamente (Actividad 3).',
    'Repositorio con prototipo HTML y CSS de la sección editorial (Actividad 4).',
    'Política editorial, matriz de priorización, calendario y procedimientos completos (Actividad 5).',
    'Programa editorial publicado con ejemplo práctico documentado (Actividad 6).'
  ],

  checklistProductos: [
    'Se delimitó el problema que resuelve el programa editorial.',
    'Se realizó el benchmarking de modelos editoriales de referencia.',
    'Se definieron los criterios de selección y priorización de temas.',
    'Se diseñó el flujo editorial completo y se definieron los roles.',
    'Se construyó un prototipo navegable de la sección del programa editorial.',
    'Se redactó la política editorial completa.',
    'Se construyó la matriz de priorización y el calendario inicial.',
    'Se documentaron los procedimientos de corrección y actualización.',
    'Se publicó el programa editorial en el sitio del semillero.',
    'Se documentó un ejemplo práctico de aplicación del flujo.'
  ],

  checklistCalidad: [
    'La política editorial es clara y aplicable por el equipo actual.',
    'Los criterios de priorización son verificables y no solo enunciativos.',
    'Los roles editoriales tienen responsabilidades bien diferenciadas.',
    'El flujo editorial está representado gráficamente de forma comprensible.',
    'La navegación de la sección funciona sin enlaces rotos.',
    'La sección es responsiva y se ve bien en móvil, tableta y computador.',
    'El contraste de color es adecuado para la lectura.',
    'El formulario de propuesta indica claramente cómo enviarla, dado que no hay backend.',
    'Existe un procedimiento documentado de corrección de errores.',
    'El producto fue probado antes de su publicación final.',
    'Existe documentación clara para aplicar el flujo a una propuesta real.'
  ],

  recursos: [
    { titulo: 'COPE — Committee on Publication Ethics', url: 'https://publicationethics.org/', nota: 'principios de ética editorial' },
    { titulo: 'ICMJE — Recommendations', url: 'https://www.icmje.org/recommendations/', nota: 'buenas prácticas de publicación científica' },
    { titulo: 'GitHub Docs — GitHub Pages', url: 'https://docs.github.com/pages', nota: 'publicación de sitios estáticos' },
    { titulo: 'W3C WAI — Pautas WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', nota: 'principios de accesibilidad web' }
  ]
};
