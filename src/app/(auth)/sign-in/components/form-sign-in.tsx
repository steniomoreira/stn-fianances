"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import MessageError from "../../components/message-error";
import { initialActionState } from "../../constants/initialActionState";
import findUserByCredentialsAction from "../actions";

function FormSignIn() {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState<{
    success: boolean;
    message: string | null;
    errors: Record<string, string[]> | null;
  }>(initialActionState);

  const { message, errors } = formState;

  const route = useRouter();

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const state = await findUserByCredentialsAction(data);

      if (state.success) {
        route.push("/");
      }

      setFormState(state);
    });
  }

  if (message) {
    toast.error(message, { id: "signInToast" });
  }

  return (
    <form onSubmit={handleSignIn} className="w-full">
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
