Proyecto: Viajando con Gonzalo

Stack:
- React + TypeScript
- Vite
- Tailwind CSS
- Supabase

Comandos principales:

Iniciar proyecto:
npm run dev

Detener localhost:
Ctrl + C

Instalar dependencias:
npm install

Estructura:
src/ → código principal (componentes, páginas, estilos)
public/ → imágenes, videos y archivos estáticos

Imágenes/videos en public:
Se llaman con "/" al inicio:
Ejemplo:
<img src="/VG_LOGO.png" />
<video src="/CR.mp4" />



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

Git:
Ver cambios:
git status

Guardar cambios:
git add .
git commit -m "Descripción del cambio"
git push

No modificar:
node_modules/



En un proyecto Vite + React, el comando para generar la versión de producción es:

npm run build


Eso ejecuta:

"build": "vite build"

que vi en tu package.json.


# Flujo típico
git pull
npm install
npm run build
npm run preview

Después del build

Se crea una carpeta:

dist/