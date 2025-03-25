"use server";

import { z } from "zod";

import { signIn } from "../../../../auth";
import { initialActionState } from "../constants/initialActionState";

const singUpSchema = z.object({
  email: z.string().email({ message: "Digite um e-mail válido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres" }),
});

export default async function findUserByCredentialsAction(data: FormData) {
  const formData = singUpSchema.safeParse(Object.fromEntries(data));

  if (!formData.success) {
    const errors = formData.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const { email, password } = formData.data;

  try {
    await signIn("credentials", { email, password, redirect: false });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.type === "CredentialsSignin") {
      return { ...initialActionState, message: "Credenciais inválidas" };
    }

    console.error(err);

    return {
      ...initialActionState,
      message: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
    };
  }

  return { ...initialActionState, success: true };
}
