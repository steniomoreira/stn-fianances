import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SingUpPage() {
  return (
    <div className="flex min-w-[300px] flex-col items-center gap-4">
      <h2 className="py-6 text-2xl">Cadastrar-se com e-mail</h2>

      <form className="w-full space-y-4">
        <div className="space-y-4">
          <Input placeholder="Seu nome" />
          <Input placeholder="Seu e-mail" />
          <Input placeholder="Sua senha" />
          <Input placeholder="Confirme sua senha" />
        </div>
        <Button className="w-full">Criar conta</Button>
      </form>

      <p className="text-xs text-muted-foreground">
        Já tem uma conta?{" "}
        <Link href="/sign-in" className="text-primary">
          Fazer login
        </Link>
      </p>
    </div>
  );
}

export default SingUpPage;
