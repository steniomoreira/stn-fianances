"use server";

import { z } from "zod";

import { signIn } from "../../../../auth";
import { initialState } from "../constants/initialStateContants";

const singUpSchema = z.object({
  email: z.string().email({ message: "Digite um e-mail válido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres" }),
});

export default async function findUserByCredentialsAction(
  _: unknown,
  data: FormData,
) {
  const formData = singUpSchema.safeParse(Object.fromEntries(data));

  if (!formData.success) {
    const errors = formData.error.flatten().fieldErrors;

    return { ...initialState, errors };
  }

  const { email, password } = formData.data;

  try {
    await signIn("credentials", { email, password, redirect: false });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.type === "CredentialsSignin") {
      return { ...initialState, message: "Dados de login incorretos" };
    }

    console.error(err);

    return {
      ...initialState,
      message: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
    };
  }

  return { ...initialState, success: true };
}
