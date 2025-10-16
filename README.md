# Álbum fotográfico (React + Vite + Tailwind)

App de una sola página para organizar **fotos** por secciones y **videos de YouTube**. Todo se guarda en `localStorage` (no requiere backend).

## Demo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Despliegue en GitHub Pages

Este repo ya incluye un workflow para publicar en **GitHub Pages** usando **GitHub Actions**.

1. Crea un repositorio en GitHub (puedes llamarlo como quieras).
2. Sube el código (ver pasos abajo).
3. En GitHub, ve a **Settings → Pages** y en “Source” elige **GitHub Actions**.
4. El workflow construirá y publicará automáticamente la carpeta `dist/` en Pages.

### ¿Por qué no tengo que tocar el `base` de Vite?
El archivo `vite.config.js` infiere automáticamente el `base` como `/<nombre-del-repo>/` cuando corre en Actions. Localmente usa `/`.

## Subir a GitHub (primera vez)

```bash
git init
git add .
git commit -m "init: álbum fotográfico"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

Luego de unos minutos verás tu sitio en **Settings → Pages**.

## Scripts
- `npm run dev` — desarrollo
- `npm run build` — build de producción
- `npm run preview` — servidor para previsualizar producción

## Licencia
MIT
