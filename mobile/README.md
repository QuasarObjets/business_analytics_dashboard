# Aplicación Móvil

Este directorio contiene los archivos relacionados con la aplicación móvil del panel de análisis empresarial.

## Estructura de archivos

- `src/components`: Esta carpeta contiene varios archivos `.tsx` que definen componentes reutilizables en la aplicación móvil. Estos componentes pueden incluir botones, formularios, barras de navegación, etc. Consulta el archivo [README.md](src/components/README.md) para obtener más información sobre los componentes disponibles y cómo utilizarlos en la aplicación móvil.

- `src/screens`: Esta carpeta contiene varios archivos `.tsx` que definen las pantallas de la aplicación móvil. Cada archivo representa una pantalla diferente de la aplicación, como la pantalla de inicio, la pantalla de perfil, etc. Consulta el archivo [README.md](src/screens/README.md) para obtener más información sobre las pantallas disponibles y cómo navegar entre ellas en la aplicación móvil.

## Configuración

- `app.json`: Este archivo es la configuración de la aplicación móvil. Define la información de la aplicación, como el nombre, la versión y los íconos.

## Ejecución

Para ejecutar la aplicación móvil, sigue estos pasos:

1. Asegúrate de tener todas las dependencias instaladas. Ejecuta el siguiente comando en la raíz del proyecto:

   ```bash
   npm install
   ```

2. Luego, ejecuta el siguiente comando para iniciar la aplicación móvil:

   ```bash
   npm run start
   ```

   Esto abrirá el Metro Bundler en tu navegador y mostrará un código QR. Puedes escanear este código QR utilizando la aplicación Expo Go en tu dispositivo móvil para ver la aplicación en tiempo real.

   También puedes ejecutar la aplicación en un emulador de Android o iOS utilizando los comandos proporcionados en el Metro Bundler.

¡Disfruta de la aplicación móvil del panel de análisis empresarial!

Recuerda consultar el archivo [README.md](../README.md) en la raíz del proyecto para obtener más información sobre la estructura de archivos y las rutas disponibles en el proyecto.