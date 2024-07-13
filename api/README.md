# API

Esta carpeta contiene la API del panel de análisis empresarial. Utiliza las siguientes tecnologías:

- Prisma: ORM (Object-Relational Mapping) para interactuar con la base de datos PostgreSQL.
- tRPC: Biblioteca para crear una capa de transporte entre el cliente y el servidor.
- NextAuth.js: Biblioteca para la autenticación de usuarios.
- PostgreSQL: Base de datos relacional.

## Estructura de archivos

- `prisma/schema.prisma`: Este archivo es el esquema de base de datos de Prisma. Define la estructura de las tablas y las relaciones entre ellas.

- `prisma/README.md`: Este archivo contiene información sobre cómo configurar y utilizar Prisma en el proyecto.

- `trpc`: Esta carpeta contiene varios archivos `.ts` que configuran tRPC. Estos archivos definen los controladores y los tipos de datos utilizados en la API.

- `trpc/README.md`: Este archivo contiene información sobre cómo utilizar tRPC en el proyecto.

- `README.md`: Este archivo contiene información sobre cómo utilizar la API y los endpoints disponibles.

# App

Esta carpeta contiene la aplicación web del panel de análisis empresarial. Utiliza las siguientes tecnologías:

- Next.js: Framework de React para aplicaciones web.
- TypeScript: Lenguaje de programación.
- Tailwind CSS: Framework de CSS.

## Estructura de archivos

- `components`: Esta carpeta contiene varios archivos `.tsx` que definen componentes reutilizables en la aplicación web.

- `components/README.md`: Este archivo contiene información sobre los componentes disponibles y cómo utilizarlos.

- `pages/index.tsx`: Este archivo es la página de inicio de la aplicación web. Contiene el código JSX/TSX para renderizar la página y puede incluir componentes y lógica adicional.

- `pages/_app.tsx`: Este archivo es el punto de entrada de la aplicación web. Configura el enrutamiento y el manejo de estado global, y envuelve todas las páginas con componentes de diseño comunes.

- `pages/api/auth/[...nextauth].ts`: Este archivo contiene la configuración de autenticación utilizando NextAuth.js. Define las estrategias de autenticación y las rutas para iniciar sesión, cerrar sesión y manejar las respuestas de autenticación de proveedores externos.

- `pages/README.md`: Este archivo contiene información sobre las páginas disponibles en la aplicación web y cómo navegar entre ellas.

- `styles/globals.css`: Este archivo contiene estilos globales que se aplican a toda la aplicación web.

- `styles/README.md`: Este archivo contiene información sobre los estilos disponibles y cómo aplicarlos a los componentes.

- `lib`: Esta carpeta contiene varios archivos `.ts` que contienen utilidades y librerías utilizadas en la aplicación web.

- `lib/README.md`: Este archivo contiene información sobre las utilidades y librerías disponibles y cómo utilizarlas.

# Mobile

Esta carpeta contiene la aplicación móvil del panel de análisis empresarial. Utiliza las siguientes tecnologías:

- React Native: Framework para construir aplicaciones móviles multiplataforma.
- TypeScript: Lenguaje de programación.

## Estructura de archivos

- `src/components`: Esta carpeta contiene varios archivos `.tsx` que definen componentes reutilizables en la aplicación móvil.

- `src/components/README.md`: Este archivo contiene información sobre los componentes disponibles y cómo utilizarlos en la aplicación móvil.

- `src/screens`: Esta carpeta contiene varios archivos `.tsx` que definen las pantallas de la aplicación móvil.

- `src/screens/README.md`: Este archivo contiene información sobre las pantallas disponibles y cómo navegar entre ellas en la aplicación móvil.

- `app.json`: Este archivo es la configuración de la aplicación móvil. Define la información de la aplicación, como el nombre, la versión y los íconos.

- `README.md`: Este archivo contiene información sobre cómo configurar y ejecutar la aplicación móvil.

# Otros archivos

- `package.json`: Este archivo es el archivo de configuración de npm. Contiene información sobre las dependencias del proyecto y los scripts de construcción y ejecución.

- `tsconfig.json`: Este archivo es el archivo de configuración de TypeScript. Define las opciones del compilador y los archivos a incluir en la compilación.

- `tailwind.config.js`: Este archivo es la configuración de Tailwind CSS. Define los estilos y las clases disponibles en el proyecto.

- `README.md`: Este archivo contiene la documentación general del proyecto, incluyendo información sobre la estructura de archivos y las rutas disponibles.