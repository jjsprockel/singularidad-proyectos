# Guía de actualización del sitio

Esta guía explica, sin lenguaje técnico, cómo mantener actualizado el sitio del Semillero Singularidad. Todo el contenido que normalmente necesitarás cambiar está en archivos de texto dentro de la carpeta `js/data/`. No es necesario tocar el diseño ni la programación del sitio para actualizar textos.

Recomendación general: abre estos archivos con un editor de texto simple (por ejemplo, Visual Studio Code, que es gratuito) en lugar de un procesador de texto como Word, para no dañar el formato del archivo.

## Antes de empezar

Cada archivo de datos tiene comentarios al inicio (líneas que empiezan con `/*` y terminan en `*/`) que explican qué se puede editar. Los textos que ves entre comillas (`'así'` o `"así"`) son los que aparecen en el sitio; el resto es estructura que no debes modificar.

Ejemplo de un campo editable:

```js
titulo: 'Proyectos formativos del Semillero Singularidad',
```

Para cambiarlo, solo reemplaza el texto entre comillas, sin borrar las comillas ni la coma final.

## Cómo cambiar el título del sitio

Abre `js/data/site-data.js` y busca el objeto `SITE_CONFIG` al inicio del archivo. Ahí encontrarás:

```js
titulo: 'Proyectos formativos del Semillero Singularidad',
subtitulo: 'Inteligencia artificial aplicada a la salud, la investigación y la educación',
descripcion: 'El programa de proyectos formativos del Semillero Singularidad busca...',
```

Cambia el texto entre comillas por el nuevo título, subtítulo o descripción.

## Cómo modificar textos institucionales

- Los textos sobre el semillero que aparecen en **Inicio** están en `js/data/site-data.js`, dentro de `SITE_CONFIG.semillero`.
- La ficha institucional completa (justificación, objetivos específicos, población, compromiso ético, mecanismo de vinculación, contacto) que aparece en **Nosotros → Semillero Singularidad** está en `js/data/team-data.js`, dentro del objeto `SEMILLERO_SINGULARIDAD`.
- La información del Laboratorio ProfundaMente está en el mismo archivo, dentro de `LABORATORIO_PROFUNDAMENTE`.

## Cómo reemplazar los logos

1. Prepara las nuevas imágenes en formato PNG (preferido, admite fondo transparente).
2. Reemplaza los archivos existentes:
   - `assets/logos/singularidad.png`
   - `assets/logos/fucs.png`
3. Usa exactamente esos mismos nombres de archivo para no tener que cambiar nada más. Si prefieres usar otro nombre, deberás actualizar la ruta en dos lugares: `index.html` (en la sección del menú lateral) y `js/render.js` (dentro de la función `renderInicioView`, donde se muestran los logos en la portada de Inicio).
4. Abre el sitio localmente para comprobar que el nuevo logo se vea bien proporcionado, sin estirarse ni deformarse.

## Cómo editar un proyecto

Cada uno de los cinco proyectos vive en su propio archivo:

- `js/data/project-1.js` — Página personal académica
- `js/data/project-2.js` — Página institucional del Semillero Singularidad
- `js/data/project-3.js` — Blog de IA aplicada a la salud
- `js/data/project-4.js` — Programa editorial de publicaciones
- `js/data/project-5.js` — Promoción y posicionamiento

Dentro de cada archivo encontrarás, en este orden:

1. **Datos generales**: `nombre`, `resumenBreve`, `duracionEstimada`, `productoFinal`.
2. **presentacion**: propósito, contexto y alcance del proyecto.
3. **objetivos**: objetivo general y lista de objetivos específicos.
4. **productoEsperado**: descripción del producto final y sus secciones.
5. **actividades**: una lista con las seis actividades del proyecto (ver más abajo).
6. **herramientas, entregables, checklistProductos, checklistCalidad, recursos**: contenido de las últimas pestañas.

## Cómo añadir o modificar una actividad

Cada actividad es un bloque como este dentro del arreglo `actividades`:

```js
{
  numero: 1,
  titulo: 'Identidad digital académica y benchmarking',
  proposito: 'Delimitar el propósito de la página personal...',
  descripcion: 'Se define qué se busca comunicar con la página...',
  instrucciones: [
    'Escribe en un párrafo el propósito de tu página...',
    'Identifica a tu público principal...'
  ],
  herramientas: ['ChatGPT con Investigación profunda', 'Navegador web'],
  productoParcial: 'Documento breve con el propósito de la página...',
  tiempoEstimado: '2 a 3 horas',
  prompt: 'Actúa como asesor en identidad digital académica...',
  criteriosRetro: [
    'El propósito de la página está formulado con claridad.'
  ],
  recursos: [
    { titulo: 'MDN Web Docs', url: 'https://developer.mozilla.org/es/', nota: 'referencia técnica' }
  ]
}
```

Para modificar una actividad existente, edita el texto entre comillas de cada campo. Cada elemento de una lista (como `instrucciones` o `criteriosRetro`) va entre comillas y separado por comas, dentro de los corchetes `[ ]`.

El proyecto debe mantener exactamente **seis actividades**, ya que la navegación (pestañas "Actividad 1" a "Actividad 6" y los botones de anterior/siguiente) se genera automáticamente a partir de la cantidad de elementos en este arreglo.

## Cómo modificar un prompt

El campo `prompt` de cada actividad es el texto que aparece en el bloque de "Prompt sugerido" y que los usuarios pueden copiar con el botón correspondiente. Simplemente reemplaza el texto entre comillas por el nuevo prompt. No necesitas escapar caracteres especiales salvo las comillas dobles internas (si tu prompt contiene comillas, usa comillas simples `'` para encerrarlo, como en los ejemplos existentes).

## Cómo añadir integrantes

Abre `js/data/team-data.js` y busca el arreglo `INTEGRANTES`. Copia el bloque de un integrante existente y pégalo antes del corchete de cierre `]`, separándolo con una coma. Luego reemplaza cada campo:

```js
{
  nombre: 'Nombre completo',
  credenciales: 'Título o credenciales (opcional)',
  rol: 'Cargo o rol dentro del semillero',
  foto: 'assets/images/team/nombre-archivo.jpg',
  resumen: 'Una frase breve de presentación.',
  detalle: ['Un párrafo con más detalle.', 'Otro párrafo si es necesario.'],
  etiquetas: ['Área 1', 'Área 2'],
  enlaces: [
    { etiqueta: 'LinkedIn', url: 'https://www.linkedin.com/in/...', principal: true }
  ]
}
```

Si no tienes un dato (por ejemplo, no hay fotografía disponible todavía), dejas ese campo como texto vacío `''` o como una lista vacía `[]`. El sitio oculta automáticamente los campos vacíos: nunca deberías ver la palabra "undefined" o "null" en la página publicada. Si llegas a verla, revisa que hayas dejado el campo realmente vacío y no con un texto como la palabra "undefined" escrita literalmente.

Recuerda colocar la fotografía dentro de `assets/images/team/` antes de referenciarla.

## Cómo cambiar enlaces

Los enlaces externos (redes sociales, sitios de referencia, recursos) están dentro de arreglos como `enlaces` (en integrantes) o `recursos` (en actividades y proyectos), siguiendo el formato:

```js
{ titulo: 'Texto visible del enlace', url: 'https://direccion-completa.com', nota: 'aclaración opcional' }
```

Para cambiar un enlace, reemplaza el valor de `url`. Para quitar la nota aclaratoria, deja `nota: ''`.

## Cómo agregar recursos

Dentro de cualquier actividad o al final de cada proyecto (pestaña "Recursos y fuentes"), agrega un nuevo objeto al arreglo `recursos` siguiendo el mismo formato mostrado arriba, separado por una coma del elemento anterior.

## Cómo revisar las listas de chequeo

Las listas de chequeo de cada proyecto están en los arreglos `checklistProductos` y `checklistCalidad`, dentro de cada archivo `project-N.js`. Cada elemento es un texto simple entre comillas. Para agregar un ítem, agrega una línea nueva con el texto entre comillas seguido de una coma; para quitar uno, borra su línea completa (incluida la coma sobrante si era el último elemento).

Ten en cuenta que las listas de chequeo se guardan en el navegador de cada visitante (`localStorage`), por lo que cambiar el texto de un ítem no borra el progreso de otros ítems, pero si cambias el **orden** o **agregas/quitas** ítems, el progreso guardado previamente por otras personas podría desalinearse con los nuevos ítems (esto es una limitación esperada de un sitio sin base de datos: cada persona guarda su propio progreso localmente).

## Cómo probar antes de publicar

1. Guarda todos los archivos que modificaste.
2. Abre `index.html` en tu navegador (o sirve la carpeta con un servidor local; ver el README para instrucciones).
3. Verifica que el cambio se vea correctamente en la sección o proyecto correspondiente.
4. Revisa que no aparezca la palabra "undefined" ni "null" en ningún lugar del sitio.
5. Abre las herramientas de desarrollador del navegador (tecla F12 o clic derecho → Inspeccionar) y revisa la pestaña "Consola": no debe mostrar mensajes en rojo.
6. Prueba el sitio también en la vista móvil (reduce el ancho de la ventana o usa el modo responsivo del navegador).

## Cómo subir cambios a GitHub

Si usas la interfaz web de GitHub:

1. Entra al repositorio en GitHub y navega hasta el archivo que modificaste.
2. Haz clic en el ícono de lápiz ("Edit this file").
3. Pega o escribe tus cambios.
4. Baja hasta el final de la página, escribe un mensaje breve describiendo el cambio y haz clic en "Commit changes...".

Si usas Git desde la terminal:

```bash
git add js/data/project-1.js
git commit -m "docs: actualizar actividad 3 del proyecto 1"
git push
```

GitHub Pages volverá a publicar el sitio automáticamente uno o dos minutos después de recibir los cambios en la rama `main`.
