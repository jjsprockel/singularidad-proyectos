/* navigation.js
   ─────────────────────────────────────────────────────────
   Enrutador basado en el hash de la URL, menú lateral,
   menú móvil (hamburguesa) y botón "volver arriba".
   No contiene contenido editable.
   ───────────────────────────────────────────────────────── */

const SECCIONES_MENU = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'nosotros', label: 'Nosotros' }
];

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
  SECCIONES_MENU.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#/' + item.id;
    a.dataset.section = item.id;
    a.textContent = item.label;
    li.appendChild(a);
    nav.appendChild(li);
  });
}

function updateSidebarActive(section) {
  document.querySelectorAll('#nav-menu a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === section);
  });
}

/* ─── Enrutador ─── */
function route() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);
  const section = parts[0] || 'inicio';

  updateSidebarActive(section);
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
