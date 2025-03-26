import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { findUserByEmailAndPassword } from "@/services/users/find-user-by-email-and-password";

export const { handlers, signIn, signOut, auth } = NextAuth({
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
  ],
});
