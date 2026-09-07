# Newsletter Digest

Una web estática que recoge lo mejor de las newsletters que leo cada semana: las frases que merecen quedarse, las ideas más destacadas y los apuntes que no quiero perder entre la bandeja de entrada.

Cada domingo se publica un nuevo resumen con lo más interesante de la semana.

## Stack

- [Astro](https://astro.build) (sitio estático, sin framework de UI)
- Contenido en Markdown con [content collections](https://docs.astro.build/en/guides/content-collections/)
- Tipografía editorial: [Fraunces](https://fonts.google.com/specimen/Fraunces) (titulares) y [Newsreader](https://fonts.google.com/specimen/Newsreader) (texto), vía Google Fonts

## Estructura

```
src/
  content.config.ts        # definición de la colección "resumenes"
  content/resumenes/       # un archivo .md por semana (el contenido de la web)
  layouts/Base.astro       # layout base (metas, fuentes, pie)
  styles/global.css        # estilos globales (tipografía, portada, resumen)
  pages/index.astro        # portada con la lista de resúmenes
  pages/resumen/[...id]    # página de cada resumen semanal
```

## Añadir el resumen de una semana nueva

1. Crea un archivo en `src/content/resumenes/` con la fecha del domingo como nombre, por ejemplo `2026-09-13.md`.
2. Rellena el frontmatter:

   ```markdown
   ---
   titulo: "Título de la semana"
   fecha: 2026-09-13
   semana: "7 al 13 de septiembre de 2026"
   ---
   ```

3. Escribe el resumen en Markdown debajo. Las citas destacadas usan `>` (blockquote) y se les puede añadir la fuente con `<span class="fuente">...</span>`.
4. Haz commit y push. La portada y las páginas se generan solas.

## Desarrollo

```bash
npm install
npm run dev      # entorno local en http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve el build localmente
```

## Despliegue

El sitio es 100% estático (`dist/`), así que vale cualquier hosting de estáticos (Netlify, Vercel, Cloudflare Pages, GitHub Pages...).

Para GitHub Pages: en **Settings > Pages** elegir "GitHub Actions" como fuente y usar el workflow oficial de Astro ([docs](https://docs.astro.build/en/guides/deploy/github/)). Si el repo no vive en la raíz del dominio, hay que ajustar `site` y `base` en `astro.config.mjs`.

(No está configurado a propósito: se activará cuando toque.)
