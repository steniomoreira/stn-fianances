"use client";

import { LoaderCircle } from "lucide-react";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { initialState } from "../../constants/initialStateContants";
import resgisterUserAction from "../actions";

function FormSignUp() {
  const [state, formAction, isPending] = useActionState(
    resgisterUserAction,
    initialState,
  );

  const { errors, message } = state;

  return (
    <>
      <p className="text-red-500">{message}</p>

      <form action={formAction} className="w-full space-y-4">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <Input placeholder="Seu nome" name="name" />
            {errors?.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input placeholder="Seu e-mail" name="email" />
            {errors?.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              placeholder="Sua senha"
              type="password"
              name="passwordHash"
            />
            {errors?.passwordHash && (
              <p className="text-xs text-red-500">{errors.passwordHash}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              placeholder="Confirme sua senha"
              type="password"
              name="passwordConfirmation"
            />
            {errors?.passwordConfirmation && (
              <p className="text-xs text-red-500">
                {errors.passwordConfirmation}
              </p>
            )}
          </div>
        </div>
        <Button className="relative w-full" disabled={isPending}>
          Criar conta
          {isPending && (
            <LoaderCircle className="absolute right-3 animate-spin" />
          )}
        </Button>
      </form>
    </>
  );
}

export default FormSignUp;
