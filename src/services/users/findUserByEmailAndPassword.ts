import { compareSync } from "bcrypt-ts";

import { db } from "@/lib/prisma";

export async function findUserByEmailAndPassword(
  email: string,
  password: string,
) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  const isPasswordMatch = compareSync(password, user.passwordHash);

  if (isPasswordMatch) {
    return { email: user.email, name: user.name };
  }

  return null;
}
