# Viajando con Gonzalo

Aplicación web desarrollada con **React + TypeScript + Vite**.

### Stack Tecnológico
- **React + TypeScript** → Interfaz y componentes  
- **Vite** → Servidor de desarrollo y compilación  
- **Tailwind CSS** → Estilos y diseño  
- **Supabase** → Base de datos y backend  

---

### Comandos Principales

```bash
npm install          # Instalar dependencias
npm run dev          # Iniciar el proyecto


*El proyecto corre en: http://localhost:5173*
*Para detenerlo, presiona Ctrl + C en la terminal.*


## 🌟 Estructura del Proyecto

src/                 # Código principal de la aplicación
├── App.tsx
├── main.tsx
├── components/      # Componentes reutilizables
├── pages/           # Páginas
├── hooks/           # Custom hooks
├── utils/           # Utilidades
└── assets/          # Recursos dentro de src

public/              # Archivos estáticos (imágenes, videos, etc.)
├── VG_LOGO.png
├── CR.mp4
├── favicon.svg
└── ...

*<img src="/VG_LOGO.png" alt="Logo" />*
*<video src="/CR.mp4" />*


## 🌟 Git - Comandos Básicos

git status
git add .
git commit -m "Descripción del cambio"
git push

Flujo diario recomendado:

cd Viajando_con_Gonzalo
npm run dev
Hacer cambios dentro de src/
git add .
git commit -m "mensaje claro"
git push

## 🌟 Importante - No tocar

node_modules/ → Se genera automáticamente con npm install. No subir al repositorio.
No modificar archivos fuera de la carpeta src/ salvo que sea realmente necesario.