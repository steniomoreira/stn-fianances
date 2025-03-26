"use client";

import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState } from "@/hooks/use-form-state";

import MessageError from "../../components/message-error";
import resgisterUserAction from "../actions";

function FormSignUp() {
  const route = useRouter();

  const [{ errors }, formAction, isPending] = useFormState(
    resgisterUserAction,
    () => {
      route.push("/sign-in");
    },
  );

  return (
    <form onSubmit={formAction} className="w-full space-y-4">
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
