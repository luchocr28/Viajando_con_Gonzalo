# Viajando con Gonzalo

Aplicación web desarrollada con **React + TypeScript + Vite**.

---

### Stack Tecnológico
- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **Supabase**

---

### Comandos Principales

```bash
npm install         # Instalar dependencias
npm run dev         # Iniciar en modo desarrollo (localhost:5173)
npm run build       # Generar versión de producción
npm run preview     # Previsualizar la versión de producción

### Estructura del Proyecto

src/                 # Código principal de la aplicación
├── App.tsx
├── main.tsx
├── components/      # Componentes reutilizables
├── pages/           # Páginas de la aplicación
├── hooks/           # Custom hooks
├── utils/           # Utilidades y helpers
└── assets/          # Recursos (imágenes, etc.)

public/              # Archivos estáticos (imágenes, videos, etc.)
├── VG_LOGO.png
├── CR.mp4
├── favicon.svg
└── ...

### Los archivos dentro de public/ se acceden con / al inicio:
<img src="/VG_LOGO.png" alt="Logo" />
<video src="/CR.mp4" />


### Git - Comandos Básicos
git status
git add .
git commit -m "Descripción del cambio"
git push



### Flujo Típico de Trabajo
git pull
npm install
npm run dev          # Para desarrollo


## Para produccion
npm run build        # Genera la carpeta dist/
npm run preview      # Previsualiza la build


##Importante - No tocar

node_modules/ → Se genera automáticamente. No subir al repositorio.
Carpeta dist/ → Se genera al hacer npm run build.