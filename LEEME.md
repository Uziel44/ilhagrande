# Guia Ilha Grande Aventura

Landing page estática. Cuatro archivos, sin frameworks ni dependencias.

---

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La estructura y todo el texto de la página |
| `index.css` | Todos los estilos, incluidas las dos paletas |
| `index.js` | Menú móvil, acordeón y el año del footer |
| `i18n.js` | Traducciones EN / PT y selector de idioma |
| `img/` | Las fotos. Leé `img/LEEME.txt` para los nombres exactos |
| `robots.txt` | Le dice a Google que puede indexar el sitio |
| `sitemap.xml` | Lista de páginas para Google |
| `.nojekyll` | Necesario para GitHub Pages |

No hay Tailwind por CDN. El CSS está escrito a mano, así que podés leerlo y
entender qué hace cada regla. Tampoco hay librerías de animación: las pocas
animaciones son CSS puro.

---

## Antes de publicar

Estas siete cosas hay que resolverlas sí o sí.

1. **Número de WhatsApp.** Aparece 7 veces en `index.html`. Buscá con
   `Ctrl + H` en VSCode: buscar `5524992149708`, reemplazar por el definitivo.
   En tu material había dos números distintos, hay que elegir uno.

2. **Las fotos.** Poné las imágenes en `img/` con los nombres que están en
   `img/LEEME.txt`. Sin fotos la página se ve pero con bloques vacíos.

3. **Precio del sunset.** En la sección de Karamuru dice "ask us". Si tenés
   precio, ponelo. Está marcado con un `COMENTARIO REEMPLAZO`.

4. **Datos del trekking.** Falta duración, dificultad, horario y precio.
   Buscá el comentario en la sección `.trek`.

5. **Reseñas.** Hay un bloque de testimonios comentado al final de la sección
   `.trust`. Descomentalo solo cuando tengas tres reseñas reales. No inventes
   testimonios: si un cliente los revisa y no existen, perdés la venta.

6. **La URL.** En el `<head>` hay tres lugares con
   `https://uziel44.github.io/ilhagrande/`. Si comprás dominio propio,
   cambialos.

7. **Analytics.** Esta página no tiene GTM ni Google Analytics. Si lo querés,
   pegá el código justo antes de `</head>`. Elegí uno solo de los dos, no los
   dos juntos.

---

## Cómo cambiar los colores

Todo está en `index.css`, en el bloque `:root` de arriba de todo.

```css
--forest:  #0B3B2E;   /* verde profundo */
--jungle:  #1B7A4B;   /* verde tropical */
--frond:   #7FC241;   /* verde fresco */
--glow:    #4FD2F5;   /* celeste de Karamuru */
```

Cambiás un valor ahí y se actualiza en toda la página. No busques colores
sueltos por el HTML: no hay ninguno.

---

## Las dos zonas de color

La web usa verde por defecto y cambia a negro con celeste cuando entra
Karamuru. La secuencia es:

```
Header, hero, about        verde
Split de dos unidades      mitad celeste / mitad verde
Bioluminiscencia           NEGRO + CELESTE
Sunrise y sunset           blanco con acentos celestes
Trekking                   VERDE PLENO
Info, galería, confianza   verde claro
CTA final, footer          verde
```

La sección de bioluminiscencia es la única con un efecto de brillo. Es a
propósito: es el producto estrella y tiene que ser lo que quede en la memoria.
Si agregás brillos en otras secciones, deja de destacarse.

---

## Cómo probarla

Abrí `index.html` con doble clic. Funciona directo desde el disco, no hace
falta servidor.

Para ver cómo queda en celular: clic derecho, Inspeccionar, y arriba a la
izquierda del panel el icono de teléfono.

---

## Cómo publicarla en GitHub Pages

1. Creá un repositorio nuevo.
2. Subí los archivos manteniendo la estructura, con `index.html` en la raíz.
3. Settings → Pages → Source: Deploy from a branch → main → /(root).
4. Esperá dos minutos.

---

## Cosas que evité a propósito

- **Nada de `onclick` en el HTML.** Todo el comportamiento está en `index.js`.
- **Ningún `<style>` dentro del HTML.** Todos los estilos en `index.css`.
- **Ningún `href` vacío.** Cada botón lleva a algún lado.
- **Sin logos de terceros.** Nada de mostrar marcas que no son clientes.
- **Sin testimonios inventados.**
- **Todas las imágenes locales.** Nada servido desde dominios ajenos que
  puedan caerse.

---

## Detalle útil

Cada botón de WhatsApp abre el chat con un mensaje distinto según la sección
desde la que se hizo clic. Cuando te escriba alguien vas a saber si vino por
la bioluminiscencia, por el amanecer o por el trekking, sin preguntarlo.

---

## Idiomas (EN / PT)

Una sola página: `index.html` tiene el texto en **inglés** (respaldo sin JS y
para Google) y `i18n.js` tiene el **portugués**. Al abrir, la web usa el idioma
guardado, si no el del navegador, si no inglés. Los botones EN / PT del header
cambian el idioma sin recargar.

- Texto: `data-i18n="clave"` en el elemento. La clave se traduce en `DICT.pt`.
- Atributos (`alt`, `aria-label`, `content`): `data-i18n-attr="alt:clave"`.
- Mensaje de WhatsApp: `data-wa-key="clave"` en el enlace `wa.me`.
- Para cambiar un texto en portugués, editá su clave en `i18n.js`.
- Para agregar un idioma: sumalo a `LANGS`, creá su bloque en `DICT` y agregá un
  botón `data-lang` en el header.
