# Autenticación de API

Este directorio contiene la configuración de autenticación para la API del panel de análisis.

## Archivos

- `auth/[...nextauth].ts`: Este archivo contiene la configuración de autenticación utilizando NextAuth.js. Define las estrategias de autenticación y las rutas para iniciar sesión, cerrar sesión y manejar las respuestas de autenticación de proveedores externos.

## Uso

Para utilizar la autenticación en la API, siga los siguientes pasos:

1. Asegúrese de tener configurada una base de datos PostgreSQL y haber ejecutado las migraciones de Prisma.

2. Configure las estrategias de autenticación en el archivo `auth/[...nextauth].ts`. Puede agregar o modificar las estrategias según sus necesidades.

3. Utilice las rutas de autenticación proporcionadas por NextAuth.js para iniciar sesión, cerrar sesión y manejar las respuestas de autenticación de proveedores externos.

4. Proteja las rutas de la API que requieren autenticación utilizando los middleware proporcionados por NextAuth.js.

## Ejemplo de configuración

```typescript
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure las estrategias de autenticación aquí
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Agregue más proveedores aquí
  ],

  // Configure las opciones adicionales aquí
  // ...

  // Defina las rutas de inicio de sesión, cierre de sesión y manejo de respuestas de autenticación de proveedores externos
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Ruta para mostrar errores de autenticación
    // Agregue más rutas personalizadas aquí
  },

  // Proteja las rutas de la API que requieren autenticación
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user = token.userId;
      return session;
    },
  },
});
```

Recuerde configurar las variables de entorno `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` con las credenciales de su aplicación de Google.

Para obtener más información sobre cómo configurar la autenticación con NextAuth.js, consulte la documentación oficial: [NextAuth.js Documentation](https://next-auth.js.org/)

Para obtener más información sobre las rutas disponibles en la API, consulte el archivo `api/README.md`.

Este archivo es solo una guía básica para configurar la autenticación en la API del panel de análisis. Asegúrese de personalizarlo según sus necesidades y requisitos específicos.