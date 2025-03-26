import { hashSync } from "bcrypt-ts";

import { db } from "@/lib/prisma";

interface RegisterUserProps {
  name: string;
  email: string;
  password: string;
}

export async function registerUser({
  name,
  email,
  password,
}: RegisterUserProps) {
  await db.user.create({
    data: {
      name,
      email,
      passwordHash: hashSync(password),
    },
  });
}
