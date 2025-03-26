"use server";

import { z } from "zod";

import { findUserByEmail } from "@/services/users/find-user-by-email";
import { registerUser } from "@/services/users/register-user";
import { FormState } from "@/types/form-state-types";

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

export default async function resgisterUserAction(
  data: FormData,
): Promise<FormState> {
  const result = singUpSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { ...actionState, errors };
  }

  const { name, email, password } = result.data;

  const user = await findUserByEmail(email);

  if (user) {
    return {
      ...actionState,
      message: "Este usuário já está cadastrado!",
      type: "warning",
    };
  }

  try {
    await registerUser({ name, email, password });
  } catch (err) {
    console.error(err);

    return {
      ...actionState,
      message: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
      type: "error",
    };
  }

  return {
    ...actionState,
    success: true,
    message: "Usuário cadastrado com sucesso!",
    type: "success",
  };
}
