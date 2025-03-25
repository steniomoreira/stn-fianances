"use server";

import { z } from "zod";

import { FormState } from "@/types/form-state-types";

import { signIn } from "../../../../auth";
import { actionState } from "../constants/actionState";

const singUpSchema = z.object({
  email: z.string().email({ message: "Digite um e-mail válido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres" }),
});

export default async function findUserByCredentialsAction(
  data: FormData,
): Promise<FormState> {
  const formData = singUpSchema.safeParse(Object.fromEntries(data));

  if (!formData.success) {
    const errors = formData.error.flatten().fieldErrors;

    return { ...actionState, errors };
  }

  const { email, password } = formData.data;

  try {
    await signIn("credentials", { email, password, redirect: false });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.type === "CredentialsSignin") {
      return {
        ...actionState,
        message: "Credenciais inválidas",
        type: "error",
      };
    }

    console.error(err);

    return {
      ...actionState,
      message: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
      type: "error",
    };
  }

  return { ...actionState, success: true };
}
