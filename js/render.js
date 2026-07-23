/* render.js
   ─────────────────────────────────────────────────────────
   Motor de plantillas: convierte los objetos de datos (js/data/*.js)
   en HTML. Este archivo NO contiene contenido editable: todos los
   textos viven en js/data/. Si necesitas cambiar un texto, edita el
   archivo de datos correspondiente, no este archivo.
   ───────────────────────────────────────────────────────── */

/* ═══════════════ Helpers HTML reutilizables ═══════════════ */

/** Oculta campos vacíos: devuelve '' si el valor es null/undefined/"" */
function si(valor, html) {
  if (valor === undefined || valor === null || valor === '') return '';
  return html;
}

function listaUl(items, claseLi) {
  if (!items || !items.length) return '';
  return `<ul>${items.map(it => `<li${claseLi ? ' class="' + claseLi + '"' : ''}>${it}</li>`).join('')}</ul>`;
}

function tarjeta(titulo, cuerpoHtml, badge) {
  const b = badge ? `<span class="time-badge">${badge}</span>` : '';
  return `<div class="card"><div class="card-header">${titulo}${b}</div><div class="card-body">${cuerpoHtml}</div></div>`;
}

function bloquePrompt(etiqueta, texto) {
  if (!texto) return '';
  return `<div class="prompt-block">
    <div class="prompt-label"><span>${etiqueta || 'Prompt sugerido'}</span></div>
    <p class="prompt-text">${texto}</p>
  </div>`;
}

function tarjetaMini(icono, nombre, descripcion) {
  return `<div class="mini-card">
    ${si(icono, `<div class="mini-card-icon" aria-hidden="true">${icono}</div>`)}
    <h4>${nombre}</h4>
    ${si(descripcion, `<p>${descripcion}</p>`)}
  </div>`;
}

function gridTarjetasMini(items) {
  if (!items || !items.length) return '';
  return `<div class="card-grid">${items.map(it => tarjetaMini(it.icono, it.nombre, it.descripcion)).join('')}</div>`;
}

/** Lista de chequeo persistente en localStorage (ver checklists.js) */
function checklistBlock(key, items) {
  if (!items || !items.length) return '';
  const lis = items.map(it => `<li class="checklist-item"><input type="checkbox"><label>${it}</label></li>`).join('');
  return `<div class="checklist-container" data-key="${key}">
    <div class="checklist-header">
      <span class="checklist-progress">0 / ${items.length} completados</span>
      <button class="btn-reset-checklist" type="button">Restablecer lista</button>
    </div>
    <div class="progress-bar-wrap"><div class="progress-bar" style="width:0%"></div></div>
    <ul class="checklist-items">${lis}</ul>
  </div>`;
}

/** Visor embebido de una presentación en PDF, con descarga y apertura en pestaña nueva */
function bloquePdf(url, titulo) {
  if (!url) return '';
  return `<div class="pdf-viewer-wrap">
    <div class="pdf-toolbar">
      <span class="pdf-title">${titulo}</span>
      <a href="${url}" download class="btn-pdf-download"><span aria-hidden="true">⬇</span> Descargar PDF</a>
      <a href="${url}" target="_blank" rel="noopener" class="btn-pdf-open">Abrir en nueva pestaña</a>
    </div>
    <iframe src="${url}" class="pdf-frame" title="Presentación: ${titulo}" loading="lazy"></iframe>
    <p class="pdf-fallback">Si el visor no carga, <a href="${url}" target="_blank" rel="noopener">haz clic aquí para abrir el PDF</a>.</p>
  </div>`;
}

function enlaceRecurso(recurso) {
  const titulo = recurso.url
    ? `<a href="${recurso.url}" target="_blank" rel="noopener">${recurso.titulo}</a>`
    : recurso.titulo;
  return `<li><strong>${titulo}</strong>${si(recurso.nota, ' — ' + recurso.nota)}</li>`;
}

function listaRecursos(recursos) {
  if (!recursos || !recursos.length) return '<p>Recursos por definir.</p>';
  return `<ul>${recursos.map(enlaceRecurso).join('')}</ul>`;
}

/* ═══════════════ Encabezados ═══════════════ */

function encabezadoPagina(titulo, descripcion) {
  return `<div class="page-header">
    <h1>${titulo}</h1>
    ${si(descripcion, `<p>${descripcion}</p>`)}
  </div>`;
}

/* ═══════════════ Barra de pestañas ═══════════════ */

/**
 * Construye la barra de pestañas superior a partir de una lista de
 * {id, label} y resalta la pestaña activa. Si solo hay una pestaña
 * o la lista está vacía, la barra se oculta.
 */
function renderTabNav(tabs, activeId, hashBase) {
  const wrap = document.getElementById('tab-nav-wrapper');
  if (!tabs || tabs.length <= 1) {
    wrap.style.display = 'none';
    wrap.innerHTML = '';
    return;
  }
  wrap.style.display = '';
  const nav = document.createElement('div');
  nav.id = 'tab-nav';
  /* Son enlaces reales de navegación (no widgets de pestañas con manejo de
     flechas de teclado), por lo que se marca el enlace activo con
     aria-current en vez de los roles tab/tablist. */
  tabs.forEach(t => {
    const a = document.createElement('a');
    a.href = `#/${hashBase}/${t.id}`;
    a.className = 'tab-btn' + (t.id === activeId ? ' active' : '');
    if (t.id === activeId) a.setAttribute('aria-current', 'page');
    a.textContent = t.label;
    nav.appendChild(a);
  });
  wrap.innerHTML = '';
  wrap.appendChild(nav);
}

function setPanel(html) {
  const panels = document.getElementById('tab-panels');
  panels.innerHTML = `<div class="tab-panel active">${html}</div>`;
}

/* ═══════════════ Vista: INICIO ═══════════════ */

function renderInicioView() {
  updateTopbarTitle('Inicio');
  renderTabNav([], null, 'inicio');

  const s = SITE_CONFIG;

  const heroLogos = `
    <div class="hero-logos">
      <img src="assets/logos/singularidad.png" alt="Logo del Semillero de Investigación Singularidad" style="max-height:64px">
      <div class="logo-plate"><img src="assets/logos/fucs.png" alt="Logo de la Fundación Universitaria de Ciencias de la Salud, FUCS" style="max-height:40px"></div>
    </div>`;

  const duracionItems = s.duracion.items.map(it => `<div class="duracion-item">${it}</div>`).join('');

  const hero = `
    <div class="hero">
      ${heroLogos}
      <h1>${s.titulo}</h1>
      <p class="subtitulo">${s.subtitulo}</p>
      <p class="descripcion">${s.descripcion}</p>
      <div class="duracion-strip">${duracionItems}</div>
    </div>`;

  const presentacionPdf = si(s.presentacionPdf, `
    <h2 class="section-title">Presentación del programa</h2>
    ${bloquePdf(s.presentacionPdf, 'Portafolio de proyectos formativos — Semillero Singularidad')}
  `);

  const presentacionSemillero = `
    <h2 class="section-title">El Semillero de Investigación Singularidad</h2>
    ${tarjeta('Presentación institucional', `
      <p>${s.semillero.presentacion}</p>
      <div class="datos-institucionales">
        <div class="dato-item"><span class="dato-label">Constitución</span><span class="dato-valor">${s.semillero.fechaConstitucion}</span></div>
        <div class="dato-item"><span class="dato-label">Grupo de investigación</span><span class="dato-valor">${s.semillero.grupoInvestigacion}</span></div>
        <div class="dato-item"><span class="dato-label">Institución</span><span class="dato-valor">${s.semillero.institucion}</span></div>
        <div class="dato-item"><span class="dato-label">Docentes responsables</span><span class="dato-valor">${s.semillero.docentes.join(' · ')}</span></div>
      </div>
    `)}
    ${tarjeta('Objetivo general', `<p>${s.semillero.objetivoGeneral}</p>`)}
    <h3 class="subsection-title">Pilares metodológicos</h3>
    <div class="pilares-grid">
      ${s.semillero.pilares.map(p => `<div class="pilar-card"><h4>${p.titulo}</h4><p>${p.descripcion}</p></div>`).join('')}
    </div>
  `;

  const metodologia = `
    <h2 class="section-title">Metodología transversal</h2>
    ${tarjeta('Flujo común a los cinco proyectos', `
      <div class="flujo-metodologia">
        ${METODOLOGIA_TRANSVERSAL.map((paso, i) => `<div class="flujo-paso"><span class="flujo-num">${i + 1}</span><span>${paso}</span></div>`).join('')}
      </div>
    `)}
  `;

  const herramientas = `
    <h2 class="section-title">Herramientas transversales</h2>
    ${gridTarjetasMini(HERRAMIENTAS_TRANSVERSALES)}
  `;

  const proyectosCards = PROYECTOS.map(p => `
    <div class="proyecto-card">
      <span class="proyecto-num">${p.numero}</span>
      <h3>${p.nombre}</h3>
      <p class="proyecto-desc">${p.resumenBreve}</p>
      <div class="proyecto-meta">
        <span><strong>Duración:</strong> ${p.duracionEstimada}</span>
        <span><strong>Producto final:</strong> ${p.productoFinal}</span>
      </div>
      <a href="#/proyectos/${p.id}" class="btn-action-primary">Ver proyecto →</a>
    </div>
  `).join('');

  const proyectos = `
    <h2 class="section-title">Los cinco proyectos formativos</h2>
    <div class="proyectos-grid">${proyectosCards}</div>
  `;

  setPanel(hero + presentacionPdf + presentacionSemillero + metodologia + herramientas + proyectos);
}

/* ═══════════════ Vista: PROYECTOS (resumen) ═══════════════ */

function renderProyectosOverviewView() {
  updateTopbarTitle('Proyectos');
  renderTabNav([], null, 'proyectos');

  const proyectosCards = PROYECTOS.map(p => `
    <div class="proyecto-card">
      <span class="proyecto-num">${p.numero}</span>
      <h3>${p.nombre}</h3>
      <p class="proyecto-desc">${p.resumenBreve}</p>
      <div class="proyecto-meta">
        <span><strong>Duración:</strong> ${p.duracionEstimada}</span>
        <span><strong>Producto final:</strong> ${p.productoFinal}</span>
      </div>
      <a href="#/proyectos/${p.id}" class="btn-action-primary">Ingresar al proyecto →</a>
    </div>
  `).join('');

  const html = `
    ${encabezadoPagina('Proyectos formativos', 'Cinco proyectos formativos, cada uno con una duración estimada de seis semanas y un encuentro semanal de retroalimentación. Selecciona un proyecto para ver su contenido detallado.')}
    <div class="proyectos-grid">${proyectosCards}</div>
  `;
  setPanel(html);
}

/* ═══════════════ Vista: PROYECTO (detalle) ═══════════════ */

const PROYECTO_TABS = [
  { id: 'presentacion', label: 'Presentación' },
  { id: 'objetivos', label: 'Objetivos' },
  { id: 'producto-esperado', label: 'Producto esperado' },
  { id: 'actividades', label: 'Actividades' },
  { id: 'herramientas', label: 'Herramientas' },
  { id: 'entregables', label: 'Entregables' },
  { id: 'checklist', label: 'Lista de chequeo' },
  { id: 'recursos', label: 'Recursos y fuentes' }
];

function breadcrumbProyectos() {
  return `<a href="#/proyectos" class="proyecto-breadcrumb">← Volver a Proyectos</a>`;
}

function renderProyectoDetalleView(proyectoId, tabId, actividadParam) {
  const proyecto = PROYECTOS.find(p => p.id === proyectoId);
  if (!proyecto) { renderProyectosOverviewView(); return; }

  updateTopbarTitle(proyecto.nombre);
  const activeTab = PROYECTO_TABS.find(t => t.id === tabId) ? tabId : 'presentacion';
  renderTabNav(PROYECTO_TABS, activeTab, 'proyectos/' + proyectoId);

  let cuerpo = '';
  switch (activeTab) {
    case 'presentacion': cuerpo = renderTabPresentacion(proyecto); break;
    case 'objetivos': cuerpo = renderTabObjetivos(proyecto); break;
    case 'producto-esperado': cuerpo = renderTabProductoEsperado(proyecto); break;
    case 'actividades': cuerpo = renderTabActividades(proyecto, actividadParam); break;
    case 'herramientas': cuerpo = renderTabHerramientas(proyecto); break;
    case 'entregables': cuerpo = renderTabEntregables(proyecto); break;
    case 'checklist': cuerpo = renderTabChecklist(proyecto); break;
    case 'recursos': cuerpo = renderTabRecursos(proyecto); break;
  }

  setPanel(breadcrumbProyectos() + cuerpo);
}

function encabezadoProyecto(proyecto) {
  return `
    <div class="page-header">
      <h1>${proyecto.numero}. ${proyecto.nombre}</h1>
      <div class="session-meta">
        <span class="meta-badge acento">${proyecto.duracionEstimada}</span>
        <span class="meta-badge">Producto final: ${proyecto.productoFinal}</span>
      </div>
    </div>`;
}

function renderTabPresentacion(proyecto) {
  return `
    ${encabezadoProyecto(proyecto)}
    ${tarjeta('Propósito del proyecto', `<p>${proyecto.presentacion.proposito}</p>`)}
    ${tarjeta('Contexto', `<p>${proyecto.presentacion.contexto}</p>`)}
    ${si(proyecto.presentacion.alcance, tarjeta('Alcance', `<p>${proyecto.presentacion.alcance}</p>`))}
    ${si(proyecto.presentacionPdf, `
      <h3 class="subsection-title">Presentación en diapositivas</h3>
      ${bloquePdf(proyecto.presentacionPdf, proyecto.nombre)}
    `)}
  `;
}

function renderTabObjetivos(proyecto) {
  return `
    ${encabezadoProyecto(proyecto)}
    ${tarjeta('Objetivo general', `<p>${proyecto.objetivos.general}</p>`)}
    ${tarjeta('Objetivos específicos', listaUl(proyecto.objetivos.especificos))}
  `;
}

function renderTabProductoEsperado(proyecto) {
  const pe = proyecto.productoEsperado;
  return `
    ${encabezadoProyecto(proyecto)}
    ${tarjeta('Descripción del producto esperado', `
      <p>${pe.descripcion}</p>
      ${si(pe.secciones, `<h3>Estructura sugerida</h3>${listaUl(pe.secciones)}`)}
    `)}
  `;
}

function renderTabActividades(proyecto, actividadParam) {
  const num = Math.min(Math.max(parseInt(actividadParam, 10) || 1, 1), proyecto.actividades.length);
  const actividad = proyecto.actividades[num - 1];
  const base = `proyectos/${proyecto.id}/actividades`;

  const pills = proyecto.actividades.map(a =>
    `<a href="#/${base}/${a.numero}" class="actividad-pill${a.numero === num ? ' active' : ''}"${a.numero === num ? ' aria-current="page"' : ''}>Actividad ${a.numero}</a>`
  ).join('');

  const anterior = num > 1
    ? `<a href="#/${base}/${num - 1}" class="btn-nav-actividad">← Actividad ${num - 1}</a>`
    : `<button class="btn-nav-actividad" disabled>← Actividad anterior</button>`;
  const siguiente = num < proyecto.actividades.length
    ? `<a href="#/${base}/${num + 1}" class="btn-nav-actividad">Actividad ${num + 1} →</a>`
    : `<button class="btn-nav-actividad" disabled>Actividad siguiente →</button>`;

  return `
    ${encabezadoProyecto(proyecto)}
    <nav class="actividades-nav" aria-label="Actividades del proyecto">${pills}</nav>
    ${renderActividadContenido(actividad)}
    <div class="actividad-nav-botones">${anterior}${siguiente}</div>
  `;
}

function renderActividadContenido(a) {
  return `
    ${tarjeta(`Actividad ${a.numero}. ${a.titulo}`, `
      <div class="actividad-campo"><h4>Propósito</h4><p>${a.proposito}</p></div>
      <div class="actividad-campo"><h4>Descripción</h4><p>${a.descripcion}</p></div>
      <div class="actividad-campo"><h4>Instrucciones</h4>${listaUl(a.instrucciones)}</div>
      <div class="actividad-campo"><h4>Herramientas recomendadas</h4>${listaUl(a.herramientas)}</div>
      <div class="actividad-campo"><h4>Producto parcial</h4><p>${a.productoParcial}</p></div>
      <div class="actividad-campo"><h4>Tiempo estimado</h4><span class="meta-badge acento">${a.tiempoEstimado}</span></div>
    `, null)}
    ${bloquePrompt('Prompt sugerido — ' + a.titulo, a.prompt)}
    ${tarjeta('Criterios para el encuentro de retroalimentación', listaUl(a.criteriosRetro))}
    ${tarjeta('Recursos sugeridos', listaRecursos(a.recursos))}
  `;
}

function renderTabHerramientas(proyecto) {
  return `
    ${encabezadoProyecto(proyecto)}
    ${tarjeta('Herramientas recomendadas para este proyecto', gridTarjetasMini(proyecto.herramientas))}
  `;
}

function renderTabEntregables(proyecto) {
  return `
    ${encabezadoProyecto(proyecto)}
    ${tarjeta('Entregables del proyecto', listaUl(proyecto.entregables))}
  `;
}

function renderTabChecklist(proyecto) {
  return `
    ${encabezadoProyecto(proyecto)}
    ${tarjeta('Lista de productos y tareas', checklistBlock(proyecto.id + '-productos', proyecto.checklistProductos))}
    ${tarjeta('Lista de calidad', checklistBlock(proyecto.id + '-calidad', proyecto.checklistCalidad))}
  `;
}

function renderTabRecursos(proyecto) {
  return `
    ${encabezadoProyecto(proyecto)}
    ${tarjeta('Recursos y fuentes generales del proyecto', listaRecursos(proyecto.recursos))}
  `;
}

/* ═══════════════ Vista: NOSOTROS ═══════════════ */

const NOSOTROS_TABS = [
  { id: 'integrantes', label: 'Integrantes' },
  { id: 'profundamente', label: 'Laboratorio ProfundaMente' },
  { id: 'singularidad', label: 'Semillero Singularidad' }
];

function renderNosotrosView(tabId) {
  updateTopbarTitle('Nosotros');
  const activeTab = NOSOTROS_TABS.find(t => t.id === tabId) ? tabId : 'integrantes';
  renderTabNav(NOSOTROS_TABS, activeTab, 'nosotros');

  let cuerpo = '';
  if (activeTab === 'integrantes') cuerpo = renderNosotrosIntegrantes();
  else if (activeTab === 'profundamente') cuerpo = renderNosotrosProfundaMente();
  else cuerpo = renderNosotrosSingularidad();

  setPanel(cuerpo);
}

function renderNosotrosIntegrantes() {
  const tarjetas = INTEGRANTES.map(m => `
    <div class="nos-team-card">
      <div class="nos-team-photo-wrap">
        ${si(m.foto, `<img src="${m.foto}" alt="${m.nombre}" class="nos-team-photo">`)}
        <div class="nos-team-links">
          ${(m.enlaces || []).map(e => `<a href="${e.url}" target="_blank" rel="noopener" class="nos-link-btn ${e.principal ? 'nos-link-primary' : 'nos-link-secondary'}">${e.etiqueta}</a>`).join('')}
        </div>
      </div>
      <div class="nos-team-bio">
        <div class="nos-team-header">
          <h3>${m.nombre}</h3>
          ${si(m.credenciales, `<span class="nos-team-credentials">${m.credenciales}</span>`)}
        </div>
        ${si(m.rol, `<p class="nos-team-role">${m.rol}</p>`)}
        ${si(m.resumen, `<p class="nos-team-summary">${m.resumen}</p>`)}
        ${si(m.detalle, `<div class="nos-team-detail">${(m.detalle || []).map(p => `<p>${p}</p>`).join('')}</div>`)}
        ${m.etiquetas && m.etiquetas.length ? `<div class="nos-team-tags">${m.etiquetas.map(t => `<span>${t}</span>`).join('')}</div>` : ''}
      </div>
    </div>
  `).join('');

  return `
    ${encabezadoPagina('Integrantes', 'Docentes responsables del Semillero de Investigación Singularidad.')}
    ${tarjetas}
  `;
}

function renderNosotrosProfundaMente() {
  const lab = LABORATORIO_PROFUNDAMENTE;
  const boton = lab.profundamenteUrl
    ? `<a href="${lab.profundamenteUrl}" target="_blank" rel="noopener" class="btn-action-primary">Visitar sitio del laboratorio →</a>`
    : '';
  return `
    ${encabezadoPagina('Laboratorio ProfundaMente')}
    ${tarjeta('Descripción', `<p>${lab.descripcion}</p>`)}
    ${tarjeta('Relación con la FUCS', `<p>${lab.relacionFucs}</p>`)}
    ${tarjeta('Áreas de interés', listaUl(lab.areasInteres))}
    ${tarjeta('Relación con Singularidad', `<p>${lab.relacionSingularidad}</p>`)}
    ${boton}
  `;
}

function renderNosotrosSingularidad() {
  const s = SEMILLERO_SINGULARIDAD;
  return `
    ${encabezadoPagina('Semillero Singularidad')}
    <div class="datos-institucionales">
      <div class="dato-item"><span class="dato-label">Constitución</span><span class="dato-valor">${s.fechaConstitucion}</span></div>
      <div class="dato-item"><span class="dato-label">Grupo de investigación</span><span class="dato-valor">${s.grupoInvestigacion}</span></div>
      <div class="dato-item"><span class="dato-label">Docentes responsables</span><span class="dato-valor">${s.docentes.join(' · ')}</span></div>
      <div class="dato-item"><span class="dato-label">Población objetivo</span><span class="dato-valor">${s.poblacionObjetivo}</span></div>
    </div>
    ${tarjeta('Justificación', `<p>${s.justificacion}</p>`)}
    ${tarjeta('Objetivo general', `<p>${s.objetivoGeneral}</p>`)}
    ${tarjeta('Objetivos específicos', listaUl(s.objetivosEspecificos))}
    <h3 class="subsection-title">Pilares metodológicos</h3>
    <div class="pilares-grid">
      ${s.pilares.map(p => `<div class="pilar-card"><h4>${p.titulo}</h4><p>${p.descripcion}</p></div>`).join('')}
    </div>
    ${tarjeta('Compromiso ético', `<p>${s.compromisoEtico}</p>`)}
    ${tarjeta('Mecanismo de vinculación', `<p>${s.mecanismoVinculacion}</p>`)}
    ${tarjeta('Contacto', `
      <p><strong>${s.contacto.nombre}</strong></p>
      <p><a href="mailto:${s.contacto.correo}">${s.contacto.correo}</a></p>
    `)}
  `;
}
