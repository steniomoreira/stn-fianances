import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ForgotPasswordPage() {
  return (
    <div className="flex min-w-[300px] flex-col items-center gap-4">
      <h2 className="py-6 text-2xl">Redefinir senha com e-mail</h2>

      <form className="w-full space-y-4">
        <div className="space-y-4">
          <Input placeholder="Seu e-mail" autoFocus />
        </div>
        <Button className="w-full">Redefinir senha</Button>
      </form>

      <p className="text-xs text-muted-foreground">
        Voltar ao{" "}
        <Link href="/sign-in" className="text-primary">
          login
        </Link>
      </p>
    </div>
  );
}

export default ForgotPasswordPage;
