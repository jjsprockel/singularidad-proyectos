# Proyectos formativos del Semillero Singularidad

Sitio web estático que presenta el programa de proyectos formativos del **Semillero de Investigación Singularidad**, de la Fundación Universitaria de Ciencias de la Salud (FUCS): inteligencia artificial aplicada a la salud, la investigación y la educación.

## Descripción

El sitio documenta cinco proyectos formativos (página personal académica, página institucional del semillero, blog de IA en salud, programa editorial de publicaciones, y promoción y posicionamiento), cada uno organizado en seis actividades con propósito, instrucciones, prompts sugeridos y listas de chequeo persistentes. Incluye además la sección "Nosotros", con los integrantes del semillero, el Laboratorio ProfundaMente y la ficha institucional del propio semillero.

Está inspirado, en su organización funcional (menú lateral, pestañas superiores, botones de copiar prompts y listas de chequeo con `localStorage`), en el taller [`taller-IA-Investigacion`](https://github.com/jjsprockel/taller-IA-Investigacion) del mismo equipo docente.

## Vista general

- **HTML5 + CSS3 + JavaScript puro.** Sin frameworks, sin paso de compilación, sin backend ni base de datos.
- **Tema oscuro** con acento naranja/dorado, inspirado en el logo del Semillero Singularidad.
- **Navegación por hash** (`#/sección/...`): funciona con el botón atrás del navegador y con enlaces directos a una pestaña o actividad concreta.
- **Responsivo**: menú lateral fijo en escritorio, menú desplegable tipo hamburguesa en móvil.
- **Accesible**: HTML semántico, texto alternativo en imágenes, navegación por teclado, foco visible, `aria-current` en la navegación activa, respeto por `prefers-reduced-motion`.

## Estructura del repositorio

```text
Proyectos_Singularidad/
│
├── index.html                  # Punto de entrada único de la aplicación
├── README.md
├── LICENSE
├── .nojekyll                    # Evita que GitHub Pages procese el sitio con Jekyll
│
├── assets/
│   ├── logos/
│   │   ├── singularidad.png     # Logo del Semillero Singularidad
│   │   └── fucs.png             # Logo de la Universidad FUCS
│   ├── images/team/              # Fotografías de los integrantes
│   └── icons/                    # Reservado para íconos adicionales
│
├── css/
│   └── styles.css                # Todo el diseño visual del sitio
│
├── js/
│   ├── app.js                    # Ensambla los cinco proyectos en un solo arreglo
│   ├── navigation.js              # Enrutador por hash, menú lateral y menú móvil
│   ├── render.js                  # Motor de plantillas: datos → HTML
│   ├── clipboard.js                # Botones "Copiar prompt"
│   ├── checklists.js               # Listas de chequeo con localStorage
│   └── data/
│       ├── site-data.js           # Título, subtítulo, metodología y herramientas transversales
│       ├── team-data.js            # Integrantes, Laboratorio ProfundaMente, Semillero Singularidad
│       ├── project-1.js            # Página personal académica
│       ├── project-2.js            # Página institucional del Semillero Singularidad
│       ├── project-3.js            # Blog de IA aplicada a la salud
│       ├── project-4.js            # Programa editorial de publicaciones
│       └── project-5.js            # Promoción y posicionamiento
│
└── docs/
    └── guia-actualizacion.md       # Guía de edición de contenidos en lenguaje no técnico
```

Toda la lógica de presentación vive en `js/render.js` y en `js/navigation.js`; todo el **contenido editable** vive en `js/data/`. Esta separación permite que una sola persona, sin conocimientos avanzados de programación, mantenga el sitio actualizado editando solamente los archivos de datos (ver la [guía de actualización](docs/guia-actualizacion.md)).

## Requisitos

Ninguno. El sitio no requiere instalar dependencias, ni Node.js, ni un gestor de paquetes. Solo necesitas un navegador web moderno (Chrome, Firefox, Edge o Safari) y, opcionalmente, un editor de texto como Visual Studio Code para modificar el contenido.

## Cómo abrir localmente

Puedes abrir `index.html` directamente con doble clic en la mayoría de navegadores. Si tu navegador restringe la carga de scripts locales por política de seguridad, sirve la carpeta con un servidor estático simple:

```bash
# Con Python 3 (viene preinstalado en macOS y la mayoría de distribuciones Linux)
python3 -m http.server 8000
# Luego abre http://localhost:8000 en tu navegador
```

```bash
# Alternativa con Node.js, si lo tienes instalado
npx serve .
```

## Cómo actualizar contenidos

Consulta la [guía de actualización](docs/guia-actualizacion.md) para instrucciones en lenguaje sencillo. En resumen:

- Los textos institucionales, la metodología transversal y las herramientas transversales están en `js/data/site-data.js`.
- Los integrantes, el Laboratorio ProfundaMente y la ficha del semillero están en `js/data/team-data.js`.
- Cada proyecto (nombre, objetivos, las seis actividades, prompts, listas de chequeo, recursos) está en su propio archivo `js/data/project-N.js`.
- Ningún texto vive dentro de `index.html`: esto evita tener que tocar el HTML para actualizar contenido.

## Cómo reemplazar los logos

1. Reemplaza los archivos `assets/logos/singularidad.png` y `assets/logos/fucs.png` por las nuevas imágenes, **conservando exactamente esos mismos nombres de archivo** (o, si usas otros nombres, actualiza las rutas correspondientes en `index.html` y en `js/render.js`, donde se referencian dentro de `renderInicioView`).
2. Verifica que las imágenes tengan un fondo transparente o adecuado al tema oscuro del sitio; si el logo trae fondo claro (como el de la FUCS), ya está alojado dentro de una "placa" blanca (`.logo-plate`) para mantener el contraste.
3. Recarga la página localmente para confirmar que los logos se ven bien proporcionados, sin deformarse.

## Cómo añadir integrantes

Edita el arreglo `INTEGRANTES` en `js/data/team-data.js` y agrega un objeto siguiendo la misma estructura que los existentes (nombre, credenciales, rol, foto, resumen, detalle, etiquetas, enlaces). Si no tienes un dato (por ejemplo, una fotografía), deja el campo vacío (`''` o `[]`); el sitio oculta automáticamente los campos vacíos en lugar de mostrar texto técnico como "undefined".

## Cómo modificar proyectos

Cada proyecto vive en su propio archivo `js/data/project-N.js`. Puedes editar:

- Los datos generales (`nombre`, `resumenBreve`, `duracionEstimada`, `productoFinal`).
- Las pestañas `presentacion`, `objetivos` y `productoEsperado`.
- El arreglo `actividades` (seis objetos, uno por actividad), cada uno con sus campos (`titulo`, `proposito`, `descripcion`, `instrucciones`, `herramientas`, `productoParcial`, `tiempoEstimado`, `prompt`, `criteriosRetro`, `recursos`).
- Las pestañas finales `herramientas`, `entregables`, `checklistProductos`, `checklistCalidad` y `recursos`.

Consulta la [guía de actualización](docs/guia-actualizacion.md) para ejemplos detallados paso a paso.

## Cómo publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la rama `main` del repositorio en GitHub (por ejemplo, `https://github.com/jjsprockel/singularidad-proyectos`).
2. En GitHub, entra al repositorio y ve a **Settings**.
3. En el menú lateral, entra a **Pages**.
4. En **Build and deployment**, elige **Source: Deploy from a branch**.
5. En **Branch**, selecciona `main` y la carpeta `/ (root)`. Guarda los cambios.
6. Espera uno o dos minutos. El sitio quedará disponible en una dirección similar a:

   ```text
   https://jjsprockel.github.io/singularidad-proyectos/
   ```

7. Para actualizar el sitio publicado, simplemente sube (`commit` + `push`) los cambios a `main`; GitHub Pages vuelve a publicar automáticamente.

El archivo `.nojekyll` en la raíz evita que GitHub Pages procese el sitio con Jekyll, lo que podría ignorar carpetas que empiezan con guion bajo o alterar el comportamiento esperado de un sitio estático simple.

## Cómo probar el sitio

Antes de publicar cambios, verifica localmente:

1. Abre `index.html` (o sírvelo con un servidor local, ver arriba).
2. Recorre las tres secciones del menú: Inicio, Proyectos y Nosotros.
3. Entra a cada uno de los cinco proyectos y revisa sus ocho pestañas, incluyendo las seis actividades.
4. Prueba el botón "Copiar prompt" en al menos un prompt.
5. Marca una casilla de una lista de chequeo, recarga la página y confirma que el estado persiste.
6. Prueba el botón "Restablecer lista": debe pedir confirmación antes de borrar el progreso.
7. Reduce el ancho de la ventana (o usa el modo responsivo del navegador) para verificar el menú móvil.
8. Abre la consola del navegador (herramientas de desarrollador) y confirma que no aparezcan errores en rojo.

## Cómo resolver problemas frecuentes

- **Los logos no se ven**: revisa que los archivos existan exactamente en `assets/logos/singularidad.png` y `assets/logos/fucs.png`, con esos nombres y esa capitalización (algunos sistemas distinguen mayúsculas de minúsculas).
- **La página se ve en blanco al abrirla con doble clic**: algunos navegadores bloquean la carga de scripts locales por seguridad (política de origen). Sirve la carpeta con un servidor local (ver "Cómo abrir localmente").
- **Un cambio de texto no se refleja**: confirma que editaste el archivo de datos correcto en `js/data/` y que guardaste el archivo; recarga la página forzando la actualización de caché (Ctrl/Cmd + Shift + R).
- **El botón "Copiar" no funciona**: en algunos navegadores, la API de portapapeles requiere que el sitio se sirva por HTTPS o localhost (no `file://`); usa un servidor local para probarlo.
- **Las listas de chequeo no guardan el progreso**: verifica que el navegador no tenga bloqueado `localStorage` (por ejemplo, en modo de navegación privada algunos navegadores lo restringen).

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

**John Jaime Sprockel Díaz** — Docente responsable del Semillero de Investigación Singularidad
Correo: [jjsprockel@fucsalud.edu.co](mailto:jjsprockel@fucsalud.edu.co)
