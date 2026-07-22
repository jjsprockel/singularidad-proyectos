/* navigation.js
   ─────────────────────────────────────────────────────────
   Enrutador basado en el hash de la URL, menú lateral,
   menú móvil (hamburguesa) y botón "volver arriba".
   No contiene contenido editable.
   ───────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  initMobileMenu();
  initBackToTop();
  route();
  window.addEventListener('hashchange', route);
});

/* ─── Menú lateral ─── */
function buildSidebar() {
  const nav = document.getElementById('nav-menu');

  function addLink(href, label, section, projectId) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.dataset.section = section;
    if (projectId) {
      a.dataset.project = projectId;
      li.className = 'nav-sub';
    }
    a.textContent = label;
    li.appendChild(a);
    nav.appendChild(li);
    return li;
  }

  addLink('#/inicio', 'Inicio', 'inicio');
  addLink('#/proyectos', 'Proyectos', 'proyectos');
  PROYECTOS.forEach(p => {
    addLink(`#/proyectos/${p.id}`, `${p.numero}. ${p.nombre}`, 'proyectos', p.id);
  });
  addLink('#/nosotros', 'Nosotros', 'nosotros');
}

function updateSidebarActive(section, projectId) {
  document.querySelectorAll('#nav-menu a').forEach(a => {
    if (a.dataset.project) {
      a.classList.toggle('active', a.dataset.project === projectId);
    } else {
      a.classList.toggle('active', a.dataset.section === section);
    }
  });
}

/* ─── Enrutador ─── */
function route() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);
  const section = parts[0] || 'inicio';

  updateSidebarActive(section, section === 'proyectos' ? parts[1] : null);
  closeMobileMenu();

  if (section === 'proyectos' && parts[1]) {
    renderProyectoDetalleView(parts[1], parts[2], parts[3]);
  } else if (section === 'proyectos') {
    renderProyectosOverviewView();
  } else if (section === 'nosotros') {
    renderNosotrosView(parts[1]);
  } else {
    renderInicioView();
  }

  afterRender();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function updateTopbarTitle(titulo) {
  const el = document.querySelector('.topbar-title');
  if (el) el.textContent = titulo;
}

function afterRender() {
  if (typeof initCopyButtons === 'function') initCopyButtons();
  if (typeof initChecklists === 'function') initChecklists();
}

/* ─── Menú móvil ─── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  hamburger?.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('visible', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  overlay?.addEventListener('click', closeMobileMenu);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileMenu();
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('visible');
  hamburger?.setAttribute('aria-expanded', 'false');
}

/* ─── Botón "volver arriba" ─── */
function initBackToTop() {
  const btn = document.getElementById('btn-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
