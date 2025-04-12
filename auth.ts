import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { db } from "@/lib/prisma";
import { findUserByEmailAndPassword } from "@/services/users/find-user-by-email-and-password";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        const user = await findUserByEmailAndPassword(
          String(email),
          String(password),
        );

        return user;
      },
    }),
    Google,
  ],
  session: {
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  },
  cookies: {
    sessionToken: {
      name: "stn-token",
    },
  },
});
