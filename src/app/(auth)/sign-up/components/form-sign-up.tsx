"use client";

import { LoaderCircle } from "lucide-react";
import { useActionState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import MessageError from "../../components/message-error";
import { actionState } from "../../constants/actionState";
import resgisterUserAction from "../actions";

function FormSignUp() {
  const [state, formAction, isPending] = useActionState(
    resgisterUserAction,
    actionState,
  );

  const { errors, message } = state;

  if (message) {
    toast.warning(message, { id: "signUpToast" });
  }

  return (
    <form action={formAction} className="w-full space-y-4">
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <Input placeholder="Seu nome" name="name" />
          {errors?.name && <MessageError text={errors.name} />}
        </div>

        <div className="flex flex-col gap-2">
          <Input placeholder="Seu e-mail" name="email" />
          {errors?.email && <MessageError text={errors.email} />}
        </div>

        <div className="flex flex-col gap-2">
          <Input placeholder="Sua senha" type="password" name="password" />
          {errors?.password && <MessageError text={errors.password} />}
        </div>

        <div className="flex flex-col gap-2">
          <Input
            placeholder="Confirme sua senha"
            type="password"
            name="passwordConfirmation"
          />
          {errors?.passwordConfirmation && (
            <MessageError text={errors.passwordConfirmation} />
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
  );
}

export default FormSignUp;
