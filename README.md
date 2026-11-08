# Giga Plugins

Sitio web de Giga Plugins creado con React + Vite.

## Requisitos
- Node.js 18 o superior
- npm

## Ejecutar en tu computadora

```bash
npm install
npm run dev
```

Abre la dirección local que muestre Vite (normalmente http://localhost:5173).

## Crear versión de producción

```bash
npm run build
npm run preview
```

La versión lista para publicar se genera en la carpeta `dist`.

## Personalizar plugins y descargas

Edita `src/plugins.js`. Cada plugin tiene:
- `name`: nombre visible.
- `category`: debe coincidir con una categoría de `categories`.
- `version`: versión del plugin.
- `minecraft`: versiones compatibles.
- `status`: estado visible.
- `description`: descripción.
- `tags`: etiquetas.
- `downloadUrl`: enlace directo al `.jar` o página de descarga.
- `icon`: letras que aparecen en el icono.

Para activar una descarga real, coloca el enlace público de tu archivo `.jar` en `downloadUrl`. Si se deja vacío, el botón se mostrará desactivado.

## Personalizar enlaces

En `src/App.jsx`, cambia:
- `https://discord.com/` por la invitación oficial de tu Discord.
- Los textos de presentación por la información oficial de Giga Plugins.

## Publicación

Puedes desplegar la carpeta `dist` en Vercel, Netlify, Cloudflare Pages o un hosting compatible con sitios estáticos. No necesitas decidir el hosting para desarrollar localmente.
