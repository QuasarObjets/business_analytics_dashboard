# Prisma

Este directorio contiene el esquema de base de datos de Prisma, que define la estructura de las tablas y las relaciones entre ellas.

## Configuración

1. Asegúrate de tener PostgreSQL instalado en tu sistema.
2. Ejecuta el siguiente comando para instalar las dependencias de Prisma:

   ```bash
   npm install prisma
   ```

3. Configura la conexión a la base de datos en el archivo `schema.prisma`. Puedes modificar el archivo según tus necesidades.

## Uso

1. Ejecuta el siguiente comando para generar los modelos de Prisma:

   ```bash
   npx prisma generate
   ```

   Esto generará los modelos de Prisma en la carpeta `node_modules/@prisma/client`.

2. Utiliza los modelos generados para interactuar con la base de datos en tu aplicación.

   ```typescript
   import { PrismaClient } from '@prisma/client';

   const prisma = new PrismaClient();

   // Ejemplo de consulta a la base de datos
   const users = await prisma.user.findMany();

   console.log(users);
   ```

   Puedes consultar la documentación de Prisma para obtener más información sobre cómo utilizarlo en tu proyecto.

---

Este archivo es parte del proyecto "Mi Panel de Análisis". Puedes encontrar más información sobre la estructura de archivos y las rutas disponibles en el archivo `README.md` en la raíz del proyecto.