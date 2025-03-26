import { db } from "@/lib/prisma";

export async function findUserByEmail(email: string) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  return user;
}
