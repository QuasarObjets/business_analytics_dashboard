import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const options: NextAuthOptions = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Agrega aquí otras estrategias de autenticación según tus necesidades
  ],
  // Configura aquí las opciones adicionales de NextAuth.js según tus necesidades
};

export default (req, res) => NextAuth(req, res, options);