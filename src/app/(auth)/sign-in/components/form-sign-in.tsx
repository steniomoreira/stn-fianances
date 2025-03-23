"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import MessageError from "../../components/message-error";
import { initialActionState } from "../../constants/initialActionState";
import findUserByCredentialsAction from "../actions";

function FormSignIn() {
  const [state, formAction, isPending] = useActionState(
    findUserByCredentialsAction,
    initialActionState,
  );

  const { errors, success, message } = state;

  if (success) {
    redirect("/");
  }

  if (message) {
    toast.error(message, { id: "signInToast" });
  }

  return (
    <form action={formAction} className="w-full">
      <div className="mb-4 space-y-4">
        <div className="flex flex-col gap-2">
          <Input placeholder="Seu e-mail" name="email" />
          {errors?.email && <MessageError text={errors.email} />}
        </div>

        <div className="flex flex-col gap-2">
          <Input placeholder="Sua senha" type="password" name="password" />
          {errors?.password && <MessageError text={errors.password} />}

          <Link
            href="/forgot-password"
            className="w-fit self-end text-xs text-muted-foreground"
          >
            Esqueci minha senha
          </Link>
        </div>
      </div>
      <Button className="relative w-full" disabled={isPending}>
        Login
        {isPending ? (
          <LoaderCircle className="absolute right-3 animate-spin" />
        ) : (
          <ArrowRight className="absolute right-3" />
        )}
      </Button>
    </form>
  );
}

export default FormSignIn;
