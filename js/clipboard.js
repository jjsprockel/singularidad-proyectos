/* clipboard.js
   ─────────────────────────────────────────────────────────
   Botón "Copiar prompt" para los bloques de prompt sugerido.
   Muestra una confirmación breve y accesible ("Prompt copiado")
   tanto visualmente como para lectores de pantalla (aria-live).
   ───────────────────────────────────────────────────────── */

function initCopyButtons() {
  document.querySelectorAll('.prompt-block:not([data-copy-init])').forEach(block => {
    block.setAttribute('data-copy-init', '1');
    const textEl = block.querySelector('.prompt-text');
    const label = block.querySelector('.prompt-label');
    if (!textEl || !label) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn-copy';
    btn.setAttribute('aria-label', 'Copiar prompt');
    btn.innerHTML = '<span aria-hidden="true">⧉</span> Copiar prompt';
    btn.addEventListener('click', () => copyPrompt(btn, textEl.innerText || textEl.textContent));
    label.appendChild(btn);
  });
}

function copyPrompt(btn, texto) {
  const anunciar = () => {
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Prompt copiado';
    btn.classList.add('copied');
    anunciarLectorPantalla('Prompt copiado');
    setTimeout(() => {
      btn.innerHTML = original;
      btn.classList.remove('copied');
    }, 1800);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto.trim()).then(anunciar).catch(() => copiarConFallback(texto, anunciar));
  } else {
    copiarConFallback(texto, anunciar);
  }
}

function copiarConFallback(texto, callback) {
  const ta = document.createElement('textarea');
  ta.value = texto.trim();
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) { /* silenciosamente ignorado */ }
  document.body.removeChild(ta);
  callback();
}

/** Región aria-live compartida para anunciar confirmaciones a lectores de pantalla */
function anunciarLectorPantalla(mensaje) {
  let region = document.getElementById('sr-live-region');
  if (!region) {
    region = document.createElement('div');
    region.id = 'sr-live-region';
    region.className = 'sr-only';
    region.setAttribute('aria-live', 'polite');
    region.setAttribute('role', 'status');
    document.body.appendChild(region);
  }
  region.textContent = mensaje;
}
