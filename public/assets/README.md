# Assets — Servicios Múltiples del Noroeste

Coloca los archivos aquí con **exactamente** estos nombres. Las rutas se referencian desde el
código como `/assets/...` (todo lo que está dentro de `public/` se sirve desde la raíz del sitio).

Si un archivo falta, la sección correspondiente muestra un placeholder gris (`#f6f6f6`) en lugar
de romperse.

---

## `images/`

| Archivo | Uso | Tamaño aprox. |
| --- | --- | --- |
| `logo-primary.svg` | Logo del header (versión sobre fondo claro) | ~220×45 |
| `logo-white.svg` | Logo del footer (versión en blanco) | ~220×45 |
| `hero/hero-1.jpg` | Imagen principal del hero | 1400×700 |
| `nosotros/nosotros-1.jpg` | Imagen de la sección "Nosotros" | 391×350 |
| `areas/industrial.png` | Área activa por defecto (PNG con transparencia) | 1230×430 |
| `areas/empresarial.jpg` | Fondo de la fila "Empresarial" al expandirse | 1230×430 |
| `areas/residencial.jpg` | Fondo de la fila "Residencial" | 1230×430 |
| `areas/gubernamental.jpg` | Fondo de la fila "Gubernamental" | 1230×430 |
| `areas/diseno-planos-tramites.jpg` | Fondo de la fila "Diseño, planos y trámites" | 1230×430 |
| `portafolio/remodelacion-laboratorio-quimico/1.jpg` | Portada del proyecto | 394×490 |
| `portafolio/casa-cantera/1.jpg` | Portada del proyecto | |
| `portafolio/oficinas-pjbc/1.jpg` | Portada del proyecto | |
| *Galerías (2-4.jpg): pendientes de parte del cliente* |
| `equipo/equipo-1.png` | Foto de la sección "Profesionales, siempre" | 814×450 |
| `logos/pepsico.svg` | Franja de clientes | ~200×40 |
| `logos/poder-judicial.svg` | Franja de clientes | |
| `logos/gulfstream.svg` | Franja de clientes | |
| `logos/edificaciones-ecologicas.svg` | Franja de clientes | |
| `logos/fonesa.svg` | Franja de clientes | |
| `logos/silza.svg` | Franja de clientes | |
| `og/og-image.jpg` | Imagen de Open Graph (1200×630) | 1200×630 |

> La franja de clientes ya tiene los logos colocados en `public/assets/images/logos/`. Todos los SVGs se muestran con efecto grayscale al pasar el ratón.

## `icons/`

SVG de 24×24 o 32×32, `stroke="currentColor"`, sin color hardcodeado:

| Archivo | Uso |
| --- | --- |
| `arrow-left.svg` | Flecha ← del carrusel |
| `arrow-right.svg` | Flecha → del carrusel |
| `arrow-diagonal.svg` | Flecha ↗ (botón CONTACTO, tarjeta de proyecto, email del footer) |
| `chevron-up.svg` | FAQ abierta / footer de acordeón |
| `chevron-down.svg` | FAQ cerrada / footer de acordeón |
| `close.svg` | X del modal |
| `whatsapp.svg` | Botón flotante de WhatsApp |
| `area-industrial.svg` | Ícono de cada área (ver `src/data/site.ts` → `areas[].icon`) |
| `area-empresarial.svg` | Ícono |
| `area-residencial.svg` | Ícono |
| `area-gubernamental.svg` | Ícono |
| `area-diseno-planos-tramites.svg` | Ícono |
