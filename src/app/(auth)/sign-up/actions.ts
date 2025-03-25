"use server";

import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
import { z } from "zod";

import { db } from "@/lib/prisma";

import { actionState } from "../constants/actionState";

const singUpSchema = z
  .object({
    name: z.string().refine((value) => value.split(" ").length > 1, {
      message: "Por favor, digite nome e sobre nome.",
    }),
    email: z.string().email({ message: "Digite um e-mail válido." }),
    password: z
      .string()
      .min(6, { message: "A senha deve conter no mínimo 6 caracteres" }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não correspondem",
    path: ["passwordConfirmation"],
  });

export default async function resgisterUserAction(_: unknown, data: FormData) {
  const result = singUpSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { ...actionState, errors };
  }

  const { name, email, password } = result.data;

  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return { ...actionState, message: "Este usuário já existe!" };
  }

  await db.user
    .create({
      data: {
        name,
        email,
        passwordHash: hashSync(password),
      },
    })
    .then(() => {
      redirect(`/sign-in?email=${email}`);
    });

  return { ...actionState, success: true };
}
