# Plan — Landing page Servicios Múltiples del Noroeste

Fuente de verdad: Figma `SMN_DiseñoPrototipo` (file key `7KK41PDChVxM8Ff8RYe4NT`).
Frame de referencia: `01_Home` (1440×5639) y `01_Home_Mobile` (400×5084).

## Decisiones tomadas

| Tema | Decisión |
| --- | --- |
| Tipografía display | **Archivo Variable** (`@fontsource-variable/archivo`, eje `wght` 100–900) sustituye a Area Normal (licencia comercial) |
| Tipografía UI | **Plus Jakarta Sans Variable** (`@fontsource-variable/plus-jakarta-sans`) |
| Botón CONTACTO | Scroll suave a `#contacto` (banda oscura del footer con `ventas@servimulti.com`) |
| Carrusel de portafolio | **Loop infinito** |
| Estilos | CSS puro con custom properties (`src/styles/global.css`) + estilos scoped de Astro |
| Assets | `public/assets/` (el usuario los coloca) |

## Design tokens

```
--brand:      #ff4f00   --text:  #2d2d2d   --surface-dark: #2b2b2b
--bg:         #f9f9f9   --bg-soft: #f6f6f6 --muted: #d9d9d9   --white: #fff
--container:  1230px    --gutter: 24px (desktop) / 16px (móvil)
--font-display: 'Archivo Variable'   --font-ui: 'Plus Jakarta Sans Variable'
```

Escala (del Figma): hero H1 `60/800/-1.2` · hero subtítulo `20/400/83%` · eyebrow `14/700/+0.7` ·
título de sección `34/900/-0.68` · lead `38/600` · body `16/400` · card title `20/800/-0.4` ·
badge `14/700` · stat número `60/600` · stat label `20/800` · stat caption `16/300` ·
FAQ `16/700` pregunta · email footer `90/100/-9` · nav/footer `16/600` (PJS) · copyright `16/200` (PJS).

## Fases

### Fase 0 — Entorno
- [x] `.env` con `FIGMA_API_KEY` + `.env.example` (`.env` ya estaba en `.gitignore`).
- [x] MCP `figma` configurado en `opencode.jsonc` con `{env:FIGMA_API_KEY}`.

### Fase 1 — Dependencias y limpieza
- [x] `npm i @fontsource-variable/archivo @fontsource-variable/plus-jakarta-sans`.
- [x] Borrar el esqueleto placeholder (tema oscuro/azul).

### Fase 2 — Assets
- [x] Crear `public/assets/{images/{hero,nosotros,areas,portafolio,equipo,logos,og},icons}`.
- [x] `public/assets/README.md` con el inventario de archivos a colocar.
- [ ] **Usuario:** colocar imágenes, logos e iconos con esos nombres exactos.

### Fase 3 — Tokens y tipografía
- [x] `src/styles/global.css`: variables, reset, `@import` de las fuentes, utilidades.

### Fase 4 — Datos
- [x] `src/data/site.ts`: nav, hero, about, areas, projects, stats, faq, clients, footer.

### Fase 5 — Componentes UI
- [x] `ui/ArrowButton.astro` · [x] `ui/CloseButton.astro` · [x] `ui/Badge.astro` · [x] `ui/SectionHeading.astro`

### Fase 6 — Secciones
- [x] Header · Hero · About · Specialties · Portfolio · ProjectModal · Team · FAQ · Clients · Footer

### Fase 7 — Ensamblaje y verificación
- [x] `layouts/Layout.astro` + `pages/index.astro`
- [x] `astro check` y `astro build` sin errores
- [ ] Revisión visual contra los PNG de Figma (400px / 1440px)
- [ ] Reemplazar placeholders por los assets reales
