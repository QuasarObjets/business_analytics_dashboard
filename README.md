# BizDash - Panel De Análisis Empresarial - Aplicación Web y Móvil

Este proyecto es un panel de análisis empresarial que utiliza las siguientes tecnologías:

- Next.js: Un framework de React para construir aplicaciones web.
- TypeScript: Un lenguaje de programación tipado que se compila a JavaScript.
- Tailwind CSS: Un framework de CSS utilitario para estilizar la aplicación.
- tRPC: Una biblioteca para crear una capa de transporte entre el cliente y el servidor.
- Prisma: Un ORM (Object-Relational Mapping) para interactuar con la base de datos.
- NextAuth.js: Una biblioteca para la autenticación en Next.js.
- PostgreSQL: Un sistema de gestión de bases de datos relacional.

## Estructura de archivos

El proyecto tiene la siguiente estructura de archivos:

- `api/prisma/schema.prisma`: Este archivo es el esquema de base de datos de Prisma. Define la estructura de las tablas y las relaciones entre ellas.

- `api/prisma/README.md`: Este archivo contiene información sobre cómo configurar y utilizar Prisma en el proyecto.

- `api/trpc`: Esta carpeta contiene varios archivos `.ts` que configuran tRPC, una biblioteca para crear una capa de transporte entre el cliente y el servidor. Estos archivos definen los controladores y los tipos de datos utilizados en la API.

- `api/README.md`: Este archivo contiene información sobre cómo utilizar la API y los endpoints disponibles.

- `app/components`: Esta carpeta contiene varios archivos `.tsx` que definen componentes reutilizables en la aplicación web. Estos componentes pueden incluir botones, formularios, barras de navegación, etc.

- `app/components/README.md`: Este archivo contiene información sobre los componentes disponibles y cómo utilizarlos.

- `app/pages/index.tsx`: Este archivo es la página de inicio de la aplicación web. Contiene el código JSX/TSX para renderizar la página y puede incluir componentes y lógica adicional.

- `app/pages/_app.tsx`: Este archivo es el punto de entrada de la aplicación web. Configura el enrutamiento y el manejo de estado global, y envuelve todas las páginas con componentes de diseño comunes.

- `app/pages/api/auth/[...nextauth].ts`: Este archivo contiene la configuración de autenticación utilizando NextAuth.js. Define las estrategias de autenticación y las rutas para iniciar sesión, cerrar sesión y manejar las respuestas de autenticación de proveedores externos.

- `app/pages/README.md`: Este archivo contiene información sobre las páginas disponibles en la aplicación web y cómo navegar entre ellas.

- `app/styles/globals.css`: Este archivo contiene estilos globales que se aplican a toda la aplicación web. Puede incluir estilos para fuentes, colores, márgenes, etc.

- `app/styles/README.md`: Este archivo contiene información sobre los estilos disponibles y cómo aplicarlos a los componentes.

- `app/lib`: Esta carpeta contiene varios archivos `.ts` que contienen utilidades y librerías utilizadas en la aplicación web. Estas utilidades pueden incluir funciones de ayuda, funciones de formateo de fechas, funciones de manejo de errores, etc.

- `app/lib/README.md`: Este archivo contiene información sobre las utilidades y librerías disponibles y cómo utilizarlas.

- `mobile/src/components`: Esta carpeta contiene varios archivos `.tsx` que definen componentes reutilizables en la aplicación móvil. Estos componentes pueden incluir botones, formularios, barras de navegación, etc.

- `mobile/src/components/README.md`: Este archivo contiene información sobre los componentes disponibles y cómo utilizarlos en la aplicación móvil.

- `mobile/src/screens`: Esta carpeta contiene varios archivos `.tsx` que definen las pantallas de la aplicación móvil. Cada archivo representa una pantalla diferente de la aplicación, como la pantalla de inicio, la pantalla de perfil, etc.

- `mobile/src/screens/README.md`: Este archivo contiene información sobre las pantallas disponibles y cómo navegar entre ellas en la aplicación móvil.

- `mobile/app.json`: Este archivo es la configuración de la aplicación móvil. Define la información de la aplicación, como el nombre, la versión y los íconos.

- `mobile/README.md`: Este archivo contiene información sobre cómo configurar y ejecutar la aplicación móvil.

- `package.json`: Este archivo es el archivo de configuración de npm. Contiene información sobre las dependencias del proyecto y los scripts de construcción y ejecución.

- `tsconfig.json`: Este archivo es el archivo de configuración de TypeScript. Define las opciones del compilador y los archivos a incluir en la compilación.

- `tailwind.config.js`: Este archivo es la configuración de Tailwind CSS. Define los estilos y las clases disponibles en el proyecto.

- `README.md`: Este archivo contiene la documentación general del proyecto, incluyendo información sobre la estructura de archivos y las rutas disponibles.
```
Este archivo README.md proporciona una descripción general del proyecto, incluyendo la estructura de archivos y las tecnologías utilizadas. También proporciona enlaces a los archivos README.md en cada subcarpeta del proyecto para obtener más información sobre cada parte del proyecto.