# Álbum fotográfico — Plus
Novedades:
- 🔄 Exportar/Importar JSON
- 🌙 Modo oscuro con interruptor (persistido en localStorage)
- 🖱️ Arrastrar y soltar para reordenar (HTML5 DnD)
- ☁️ Subida a Cloudinary (unsigned preset)
- 🖼️ Lightbox/carrusel con flechas y autoplay

## Cloudinary (unsigned)
1. En Cloudinary → Settings → Upload → **Upload presets** → **Add upload preset** → **Unsigned**.
2. Copia **cloud name** y **upload preset**.
3. En la app, usa **Subir archivo → configurar** para guardarlos (se almacenan en localStorage).

## Deploy en GitHub Pages
Incluye workflow en `.github/workflows/deploy.yml` (usa `npm install`).

