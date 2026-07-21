/* checklists.js
   ─────────────────────────────────────────────────────────
   Listas de chequeo marcables con persistencia en localStorage.
   Cada contenedor usa una clave única (proyecto + tipo de lista);
   cada casilla dentro del contenedor se guarda por su índice, de
   modo que la clave completa en localStorage es única por
   proyecto y por elemento: "checklist-<clave>" + índice.

   Incluye confirmación en línea antes de restablecer una lista,
   sin usar diálogos nativos bloqueantes.
   ───────────────────────────────────────────────────────── */

function initChecklists() {
  document.querySelectorAll('.checklist-container:not([data-cl-init])').forEach(container => {
    container.setAttribute('data-cl-init', '1');
    const key = container.dataset.key;
    if (!key) return;

    const items = container.querySelectorAll('.checklist-item');
    const progressEl = container.querySelector('.checklist-progress');
    const progressBar = container.querySelector('.progress-bar');
    const resetBtn = container.querySelector('.btn-reset-checklist');

    const saved = JSON.parse(localStorage.getItem('checklist-' + key) || '{}');

    items.forEach((item, i) => {
      const cb = item.querySelector('input[type="checkbox"]');
      if (!cb) return;
      const id = 'cl-' + key + '-' + i;
      cb.id = id;
      const lbl = item.querySelector('label');
      if (lbl) lbl.setAttribute('for', id);

      if (saved[i]) {
        cb.checked = true;
        item.classList.add('done');
      }

      cb.addEventListener('change', () => {
        item.classList.toggle('done', cb.checked);
        guardarEstado(key, items);
        actualizarProgreso(items, progressEl, progressBar);
      });

      item.addEventListener('click', e => {
        if (e.target !== cb && e.target.tagName !== 'LABEL') {
          cb.checked = !cb.checked;
          cb.dispatchEvent(new Event('change'));
        }
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => pedirConfirmacionReset(resetBtn, container, key, items, progressEl, progressBar));
    }

    actualizarProgreso(items, progressEl, progressBar);
  });
}

function guardarEstado(key, items) {
  const estado = {};
  items.forEach((item, i) => {
    const cb = item.querySelector('input[type="checkbox"]');
    if (cb && cb.checked) estado[i] = true;
  });
  localStorage.setItem('checklist-' + key, JSON.stringify(estado));
}

function actualizarProgreso(items, progressEl, progressBar) {
  const total = items.length;
  const hechos = Array.from(items).filter(item => {
    const cb = item.querySelector('input[type="checkbox"]');
    return cb && cb.checked;
  }).length;

  if (progressEl) progressEl.textContent = `${hechos} / ${total} completados`;
  if (progressBar) {
    const pct = total > 0 ? Math.round((hechos / total) * 100) : 0;
    progressBar.style.width = pct + '%';
  }
}

/** Confirmación en línea (accesible) antes de eliminar el progreso guardado */
function pedirConfirmacionReset(resetBtn, container, key, items, progressEl, progressBar) {
  if (container.querySelector('.confirm-inline')) return; // ya está pidiendo confirmación

  const confirmWrap = document.createElement('span');
  confirmWrap.className = 'confirm-inline';
  confirmWrap.setAttribute('role', 'group');
  confirmWrap.setAttribute('aria-label', 'Confirmar restablecimiento de la lista');
  confirmWrap.innerHTML = `
    <span>¿Restablecer esta lista?</span>
    <button type="button" class="btn-confirm-yes">Sí, restablecer</button>
    <button type="button" class="btn-confirm-no">Cancelar</button>
  `;
  resetBtn.insertAdjacentElement('afterend', confirmWrap);
  resetBtn.disabled = true;

  confirmWrap.querySelector('.btn-confirm-yes').addEventListener('click', () => {
    items.forEach(item => {
      const cb = item.querySelector('input[type="checkbox"]');
      if (cb) cb.checked = false;
      item.classList.remove('done');
    });
    localStorage.removeItem('checklist-' + key);
    actualizarProgreso(items, progressEl, progressBar);
    anunciarLectorPantalla('Lista restablecida');
    confirmWrap.remove();
    resetBtn.disabled = false;
  });

  confirmWrap.querySelector('.btn-confirm-no').addEventListener('click', () => {
    confirmWrap.remove();
    resetBtn.disabled = false;
  });
}
