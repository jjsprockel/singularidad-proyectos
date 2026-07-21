/* project-5.js — Promoción y posicionamiento del ecosistema digital
   ─────────────────────────────────────────────────────────
   CONTENIDO EDITABLE. Ver comentarios de estructura en project-1.js.
   ───────────────────────────────────────────────────────── */

const PROYECTO_5 = {
  id: 'proyecto-5',
  numero: 5,
  nombre: 'Promoción y posicionamiento del ecosistema digital',
  resumenBreve: 'Diseño de un plan de comunicación y posicionamiento para aumentar la visibilidad y el uso del sitio y el blog del semillero.',
  duracionEstimada: 'Seis semanas · seis actividades',
  productoFinal: 'Plan de comunicación y posicionamiento publicado como sección del sitio',

  presentacion: {
    proposito: 'Diseñar un plan de comunicación y posicionamiento que aumente la visibilidad, consulta y utilización de la página institucional y el blog construidos en los proyectos anteriores.',
    contexto: 'Un sitio y un blog bien construidos solo cumplen su función si son consultados por sus públicos. Este proyecto cierra el ciclo formativo diseñando cómo dar a conocer el ecosistema digital del semillero, con qué canales, qué mensajes y qué indicadores de seguimiento.',
    alcance: 'El proyecto cubre el diseño del plan de comunicación (públicos, mensajes, canales, calendario, piezas), nociones básicas de SEO aplicadas al sitio existente, la definición de indicadores y un plan de mejora. No incluye la ejecución sostenida de campañas pagas ni la administración de cuentas institucionales de redes sociales.'
  },

  objetivos: {
    general: 'Diseñar y publicar un plan de comunicación y posicionamiento que oriente cómo dar a conocer y aumentar el uso del sitio institucional y el blog del semillero, con públicos, mensajes, canales, indicadores y un plan de mejora definidos.',
    especificos: [
      'Identificar los públicos prioritarios del ecosistema digital del semillero.',
      'Definir mensajes clave adaptados a cada público.',
      'Seleccionar canales de difusión adecuados a los recursos reales del semillero.',
      'Aplicar nociones básicas de SEO al sitio y al blog ya construidos.',
      'Definir indicadores de seguimiento simples y verificables.',
      'Publicar el plan de comunicación como sección consultable del sitio y establecer un mecanismo de mejora continua.'
    ]
  },

  productoEsperado: {
    descripcion: 'Un plan de comunicación y posicionamiento publicado, con públicos, objetivos, mensajes, canales, calendario, piezas de difusión, nociones de SEO, indicadores y mecanismos de seguimiento definidos.',
    secciones: ['Públicos', 'Objetivos', 'Mensajes', 'Canales', 'Calendario', 'Piezas', 'SEO básico', 'Indicadores', 'Mecanismos de seguimiento', 'Plan de mejora']
  },

  actividades: [
    {
      numero: 1,
      titulo: 'Definición de públicos y benchmarking de posicionamiento',
      proposito: 'Delimitar los públicos prioritarios del ecosistema digital y reconocer referentes de comunicación institucional en salud.',
      descripcion: 'Se identifican los públicos del sitio y el blog del semillero (estudiantes, docentes, investigadores, profesionales de la salud, instituciones, comunidad general) y se analizan referentes de comunicación digital de grupos o semilleros de investigación en salud.',
      instrucciones: [
        'Lista los públicos prioritarios del ecosistema digital del semillero: estudiantes, docentes, investigadores, profesionales de la salud, instituciones y comunidad general.',
        'Para cada público, describe brevemente qué necesidad o interés podría llevarlo a visitar el sitio o el blog.',
        'Busca y analiza al menos tres referentes de comunicación digital de semilleros, grupos de investigación o iniciativas de salud digital.',
        'Registra en una tabla qué canales y qué tipo de mensajes usa cada referente.',
        'Formula los criterios de calidad que debe cumplir el plan de comunicación (por ejemplo: coherencia con los públicos, viabilidad con los recursos disponibles).'
      ],
      herramientas: ['ChatGPT con Investigación profunda', 'Navegador web'],
      productoParcial: 'Documento con los públicos priorizados, sus necesidades, el benchmarking de referentes y los criterios de calidad del plan.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Actúa como asesor en comunicación digital para un semillero de investigación universitario en IA aplicada a la salud, con recursos limitados y sin equipo de comunicaciones dedicado. Ayúdame a: 1) priorizar los públicos más relevantes de entre estudiantes, docentes, investigadores, profesionales de la salud, instituciones y comunidad general, 2) sugerir qué necesidad concreta de cada público podría satisfacer el sitio y el blog, 3) identificar tres riesgos comunes al comunicar con recursos limitados, como prometer una frecuencia de publicación que no se puede sostener.',
      criteriosRetro: [
        'Los públicos priorizados son coherentes con el propósito del semillero.',
        'Las necesidades descritas para cada público son específicas, no genéricas.',
        'El benchmarking incluye referentes reales y comparables.',
        'Los criterios de calidad del plan son verificables.'
      ],
      recursos: [
        { titulo: 'ChatGPT — Investigación profunda (Deep Research)', url: 'https://help.openai.com/en/articles/9720230', nota: 'guía de uso oficial' }
      ]
    },
    {
      numero: 2,
      titulo: 'Gestión de fuentes y definición de mensajes y canales',
      proposito: 'Sintetizar los hallazgos del benchmarking y definir los mensajes clave y los canales de difusión.',
      descripcion: 'Se organizan los referentes en NotebookLM o Gemini Notebook, se sintetizan hallazgos sobre mensajes y canales efectivos, y se seleccionan los canales viables para el semillero (sitio web, blog, LinkedIn, Instagram, canales institucionales FUCS, correo electrónico, eventos académicos, códigos QR, redes de semilleros, alianzas académicas).',
      instrucciones: [
        'Carga los referentes analizados en NotebookLM o Gemini Notebook.',
        'Formula preguntas al cuaderno sobre qué mensajes y qué canales usan con mayor frecuencia los referentes analizados.',
        'Sintetiza los hallazgos sobre buenas prácticas de comunicación digital en contextos académicos.',
        'Define un mensaje clave por cada público prioritario identificado en la Actividad 1.',
        'Selecciona, de la lista de canales disponibles, cuáles usará el semillero de forma realista y documenta por qué se descartan los demás.'
      ],
      herramientas: ['NotebookLM o Gemini Notebook'],
      productoParcial: 'Síntesis de hallazgos, mensajes clave por público y selección justificada de canales de difusión.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Con base en las fuentes que he cargado en este cuaderno sobre comunicación digital de semilleros y grupos de investigación, identifica: 1) qué mensajes clave usan con mayor frecuencia para atraer a estudiantes e investigadores, 2) qué canales combinan habitualmente (redes sociales, correo, eventos), 3) qué errores de comunicación institucional deberíamos evitar. Cita las fuentes del cuaderno en cada punto.',
      criteriosRetro: [
        'La síntesis refleja fielmente las fuentes consultadas.',
        'Cada público tiene un mensaje clave diferenciado y coherente.',
        'La selección de canales es realista para los recursos actuales del semillero.'
      ],
      recursos: [
        { titulo: 'NotebookLM', url: 'https://notebooklm.google/', nota: 'organización de fuentes propias' }
      ]
    },
    {
      numero: 3,
      titulo: 'Ideación de piezas y calendario de difusión',
      proposito: 'Generar y seleccionar alternativas de piezas de comunicación y organizar un calendario de difusión.',
      descripcion: 'Se generan alternativas de piezas de comunicación (publicaciones, anuncios de nuevos artículos, invitaciones a vincularse) para los canales seleccionados, se evalúan según viabilidad y se organiza un calendario de difusión inicial.',
      instrucciones: [
        'Realiza una lluvia de ideas de piezas de comunicación posibles para cada canal seleccionado (por ejemplo: anuncio de un nuevo artículo del blog, invitación a vincularse al semillero).',
        'Evalúa cada alternativa según el esfuerzo que requiere producirla y su alcance esperado.',
        'Selecciona un conjunto inicial de piezas viables de producir con los recursos actuales.',
        'Organiza un calendario de difusión inicial (frecuencia y responsable, sin fechas específicas si aún no están concertadas).',
        'Define el alcance de esta primera versión del plan (por ejemplo, iniciar solo con dos canales prioritarios).'
      ],
      herramientas: ['Herramientas de diseño y prototipado'],
      productoParcial: 'Conjunto de piezas de comunicación seleccionadas y calendario de difusión inicial.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Estoy diseñando un plan de comunicación para el sitio y el blog de un semillero de investigación en IA aplicada a la salud, con recursos limitados. Los canales seleccionados son: [lista tus canales]. Ayúdame a proponer tres tipos de piezas de comunicación viables de producir sin diseñador ni presupuesto, y sugiere una frecuencia de publicación realista para un equipo pequeño.',
      criteriosRetro: [
        'Las piezas seleccionadas son viables de producir con los recursos actuales.',
        'El calendario de difusión es realista y no depende de recursos inexistentes.',
        'El alcance definido es coherente con el tiempo restante del proyecto.'
      ],
      recursos: [
        { titulo: 'Figma', url: 'https://www.figma.com/', nota: 'diseño de piezas de comunicación simples' }
      ]
    },
    {
      numero: 4,
      titulo: 'Planificación técnica, SEO básico y prototipo de la sección',
      proposito: 'Organizar el trabajo técnico, aplicar nociones básicas de SEO y construir un prototipo de la sección del plan.',
      descripcion: 'Se descompone el proyecto en tareas, se revisan y ajustan elementos básicos de SEO en el sitio y el blog ya construidos (títulos, descripciones, textos alternativos), y se construye un prototipo HTML y CSS de la sección "Promoción y posicionamiento" del sitio.',
      instrucciones: [
        'Descompón el proyecto en tareas concretas (ajustes de SEO, redacción del plan, diseño de la sección, definición de indicadores).',
        'Revisa el sitio institucional y el blog ya construidos: verifica que cada página tenga un título descriptivo y una breve meta descripción.',
        'Verifica que las imágenes del sitio y del blog tengan texto alternativo adecuado, como parte de un SEO básico y accesible.',
        'Construye el prototipo HTML y CSS de la sección "Promoción y posicionamiento", integrada al sitio institucional.',
        'Verifica que el prototipo funcione correctamente de forma local.'
      ],
      herramientas: ['Visual Studio Code', 'Git', 'GitHub', 'Analítica web y posicionamiento'],
      productoParcial: 'Ajustes básicos de SEO aplicados al sitio y al blog, y prototipo HTML y CSS de la sección del plan de comunicación.',
      tiempoEstimado: '3 a 4 horas',
      prompt: 'Voy a revisar el SEO básico de un sitio institucional y un blog académico construidos con HTML estático, sin frameworks. Ayúdame a elaborar una lista de verificación simple de SEO on-page aplicable sin herramientas de pago: título único por página, meta descripción, uso correcto de encabezados, texto alternativo en imágenes y enlaces internos claros.',
      criteriosRetro: [
        'Las páginas principales del sitio y el blog tienen título y meta descripción propios.',
        'Las imágenes revisadas cuentan con texto alternativo adecuado.',
        'El prototipo de la sección del plan navega correctamente.'
      ],
      recursos: [
        { titulo: 'Google Search Console', url: 'https://search.google.com/search-console', nota: 'seguimiento gratuito de indexación y búsquedas' },
        { titulo: 'MDN Web Docs — Meta etiquetas', url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/meta', nota: 'referencia técnica de SEO on-page' }
      ]
    },
    {
      numero: 5,
      titulo: 'Desarrollo del plan y definición de indicadores',
      proposito: 'Completar el contenido definitivo del plan de comunicación y definir sus indicadores de seguimiento.',
      descripcion: 'Se redacta el plan completo con públicos, objetivos, mensajes, canales, calendario y piezas; se definen indicadores simples (visitas, usuarios recurrentes, tiempo de lectura, navegación entre artículos, suscripciones, solicitudes de vinculación, propuestas recibidas, colaboraciones, cumplimiento editorial, actualizaciones realizadas) y se prueba la sección en computador y móvil.',
      instrucciones: [
        'Redacta el plan de comunicación completo integrando los públicos, mensajes, canales, calendario y piezas definidos en actividades anteriores.',
        'Define los indicadores de seguimiento que se usarán: visitas, usuarios recurrentes, tiempo de lectura, navegación entre artículos, suscripciones, solicitudes de vinculación, propuestas recibidas, colaboraciones, cumplimiento editorial y actualizaciones realizadas.',
        'Describe cómo se medirá cada indicador con herramientas gratuitas disponibles.',
        'Prueba la navegación de la sección del plan y corrige enlaces rotos.',
        'Evalúa accesibilidad básica y verifica la sección en computador y en dispositivo móvil.'
      ],
      herramientas: ['Visual Studio Code', 'Herramientas de evaluación de accesibilidad', 'Analítica web y posicionamiento'],
      productoParcial: 'Plan de comunicación completo con indicadores definidos y su método de medición, probado en computador y móvil.',
      tiempoEstimado: '3 a 4 horas',
      prompt: 'Voy a compartirte el borrador de un plan de comunicación de un semillero de investigación en IA aplicada a la salud. Revísalo y sugiere mejoras en claridad, y ayúdame a definir cómo mediría de forma gratuita cada uno de estos indicadores: visitas al sitio, usuarios recurrentes, tiempo de lectura, navegación entre artículos, suscripciones, solicitudes de vinculación y colaboraciones recibidas.',
      criteriosRetro: [
        'El plan de comunicación integra de forma coherente públicos, mensajes, canales y calendario.',
        'Los indicadores definidos son medibles con herramientas gratuitas.',
        'La navegación de la sección funciona correctamente y se ve bien en móvil.'
      ],
      recursos: [
        { titulo: 'Google Analytics', url: 'https://analytics.google.com/', nota: 'analítica web gratuita' },
        { titulo: 'W3C WAI — Pautas WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', nota: 'principios de accesibilidad' }
      ]
    },
    {
      numero: 6,
      titulo: 'Publicación, plan de mejora y reflexión final',
      proposito: 'Publicar el plan de comunicación, definir un mecanismo de mejora continua y reflexionar sobre el proceso.',
      descripcion: 'Se aplican los ajustes finales, se publica la sección del plan de comunicación, se define un plan de mejora continua (revisión periódica de indicadores) y se presenta el producto en el encuentro de retroalimentación.',
      instrucciones: [
        'Aplica los ajustes finales detectados en la evaluación anterior.',
        'Publica la sección del plan de comunicación junto con el resto del sitio institucional en GitHub Pages.',
        'Define un plan de mejora continua: con qué frecuencia se revisarán los indicadores y quién lo hará.',
        'Presenta el plan de comunicación terminado en el encuentro de retroalimentación.',
        'Completa las listas de chequeo y registra las acciones de seguimiento pendientes.'
      ],
      herramientas: ['GitHub Pages', 'Git'],
      productoParcial: 'Plan de comunicación y posicionamiento publicado, con un plan de mejora continua definido.',
      tiempoEstimado: '2 a 3 horas',
      prompt: 'Voy a publicar la sección de "Promoción y posicionamiento" del sitio de un semillero de investigación en GitHub Pages. Ayúdame a redactar un plan de mejora continua simple: con qué frecuencia debería revisarse cada indicador definido, qué señales indicarían que hay que ajustar los mensajes o los canales, y cómo documentar esos ajustes en el tiempo.',
      criteriosRetro: [
        'La sección está publicada y funciona correctamente.',
        'El plan de mejora continua es realista y tiene una frecuencia de revisión definida.',
        'Existe una reflexión explícita sobre el proceso y sus limitaciones.'
      ],
      recursos: [
        { titulo: 'GitHub Docs — Publicar un sitio con GitHub Pages', url: 'https://docs.github.com/pages/getting-started-with-github-pages', nota: 'pasos de publicación' }
      ]
    }
  ],

  herramientas: [
    { icono: '🧑‍💻', nombre: 'Visual Studio Code', descripcion: 'Edición del código de la sección del plan.' },
    { icono: '🌿', nombre: 'Git y GitHub', descripcion: 'Control de versiones y repositorio del plan de comunicación.' },
    { icono: '🌐', nombre: 'GitHub Pages', descripcion: 'Publicación gratuita de la sección.' },
    { icono: '💬', nombre: 'ChatGPT con Investigación profunda', descripcion: 'Apoyo en benchmarking y redacción del plan.' },
    { icono: '📚', nombre: 'NotebookLM o Gemini Notebook', descripcion: 'Organización de referentes de comunicación digital.' },
    { icono: '📈', nombre: 'Analítica web y posicionamiento', descripcion: 'Medición de indicadores del plan.' }
  ],

  entregables: [
    'Documento de públicos priorizados, benchmarking y criterios de calidad (Actividad 1).',
    'Síntesis de fuentes, mensajes clave y canales seleccionados (Actividad 2).',
    'Piezas de comunicación y calendario de difusión inicial (Actividad 3).',
    'Ajustes básicos de SEO y prototipo de la sección del plan (Actividad 4).',
    'Plan de comunicación completo con indicadores definidos (Actividad 5).',
    'Plan de comunicación publicado con plan de mejora continua (Actividad 6).'
  ],

  checklistProductos: [
    'Se identificaron y priorizaron los públicos del ecosistema digital.',
    'Se realizó el benchmarking de referentes de comunicación digital.',
    'Se definieron mensajes clave por público y se seleccionaron los canales.',
    'Se definieron piezas de comunicación viables y un calendario inicial.',
    'Se aplicaron ajustes básicos de SEO al sitio y al blog existentes.',
    'Se construyó un prototipo navegable de la sección del plan.',
    'Se definieron los indicadores de seguimiento y su método de medición.',
    'Se probó la sección en computador y en dispositivo móvil.',
    'Se publicó el plan de comunicación en el sitio del semillero.',
    'Se definió un plan de mejora continua.'
  ],

  checklistCalidad: [
    'Los públicos y mensajes del plan son coherentes entre sí.',
    'Los canales seleccionados son realistas para los recursos del semillero.',
    'Los indicadores definidos son medibles con herramientas gratuitas.',
    'La navegación de la sección funciona sin enlaces rotos.',
    'La sección es responsiva y se ve bien en móvil, tableta y computador.',
    'El contraste de color es adecuado para la lectura.',
    'Las páginas principales tienen título y meta descripción propios.',
    'Las imágenes tienen texto alternativo adecuado.',
    'No se exponen datos sensibles de terceros en las piezas de comunicación.',
    'El producto fue probado antes de su publicación final.',
    'Existe un plan de mejora continua documentado.'
  ],

  recursos: [
    { titulo: 'Google Search Console', url: 'https://search.google.com/search-console', nota: 'seguimiento gratuito de indexación y búsquedas' },
    { titulo: 'Google Analytics', url: 'https://analytics.google.com/', nota: 'analítica web gratuita' },
    { titulo: 'MDN Web Docs — Meta etiquetas', url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/meta', nota: 'referencia técnica de SEO on-page' },
    { titulo: 'W3C WAI — Pautas WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', nota: 'principios de accesibilidad web' }
  ]
};
