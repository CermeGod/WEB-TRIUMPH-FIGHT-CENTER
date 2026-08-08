# Triumph Fight Center — Web

Landing de la academia de **Muay Thai, Boxeo y Kickboxing** en Surco, Lima.
Rediseño total 2026: dirección de arte "fight poster" editorial.

## Stack

- **React 18 + Vite 6** (JSX)
- CSS vanilla con tokens de diseño (`src/index.css`)
- `lucide-react` para iconos
- `@vercel/analytics`
- Optimización de imágenes con `sharp` (`optimize.js`) + compresión build (`vite-plugin-compression`, `purgecss`)

## Correr en local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
npm run preview  # sirve /dist
```

## Sistema de diseño

Tema único oscuro editorial. El ritmo visual lo dan secciones que **alternan
fondo oscuro / hueso** (`.section` + `.section--light`), que reasigna las
variables de color localmente para que los componentes funcionen igual en
ambos fondos.

- **Tipografía:** Anton (display/posters), Kanit (UI/subtítulos), Inter (cuerpo).
- **Paleta:** tinta `#0a0a0c`, hueso `#f1ece3`, rojo sangre `#e4080a`, oro `#e8b23a` (con cuentagotas).
- **Kicker** (`.kicker`) reemplaza al viejo badge dorado tipo "plantilla".

## Estructura

`Header` (nav sticky + menú móvil) · `Hero` (titular real gigante + foto tratada)
· `Banner` (marquee de valores) · `Classes` (disciplinas + cursos eventuales)
· `Gloria` (sala de campeones) · `Eventos` (cartelera tipo ticket + comunidad)
· `Profesor` (coach) · `Footer` · botón flotante de WhatsApp.

## Datos reales

Teléfono/WhatsApp **900 966 701**, dirección **Av. Primavera 1288, Surco**,
redes (Instagram / Facebook / TikTok `@triumphfightcenter.peru`), campeones
(Leonardo Palomino, Katerine Vargas) y coach (Joel Álvarez) provienen del
contenido original del negocio.

## Pendiente / [CONFIRMAR]

- Sección de **precios/membresías** (`Plans.jsx`) sigue deshabilitada por el negocio.
- Enlaces "Comprar entradas" de los eventos apuntan a `#` (falta la URL de venta).
- Fechas de eventos verificarlas con el equipo antes de publicar.
