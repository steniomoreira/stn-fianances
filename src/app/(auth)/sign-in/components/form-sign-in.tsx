"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { initialState } from "../../constants/initialStateContants";
import findUserByCredentialsAction from "../actions";

function FormSignIn() {
  const [state, formAction, isPending] = useActionState(
    findUserByCredentialsAction,
    initialState,
  );

  const { errors } = state;

  return (
    <form action={formAction} className="w-full space-y-4">
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <Input placeholder="Seu e-mail" name="email" />
          {errors?.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input placeholder="Sua senha" type="password" name="password" />
          {errors?.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        <Link
          href="/forgot-password"
          className="float-right pb-2 text-xs text-muted-foreground"
        >
          Esqueci minha senha
        </Link>
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
