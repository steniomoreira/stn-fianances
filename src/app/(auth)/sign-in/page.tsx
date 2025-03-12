import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import googleIcon from "@/assets/images/google.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SingInPage() {
  return (
    <div className="flex min-w-[300px] flex-col items-center gap-4">
      <h2 className="py-6 text-2xl">Bem-vindo de volta!</h2>

      <Button variant="secondary" className="w-full">
        <Image src={googleIcon} alt="log Google" width={14} />
        Login com Google
      </Button>

      <p className="relative flex w-full items-center py-4 text-xs uppercase text-muted-foreground before:mr-3 before:h-[1px] before:flex-1 before:bg-muted-foreground/50 before:content-[''] after:ml-3 after:h-[1px] after:flex-1 after:bg-muted-foreground/50 after:content-['']">
        Ou login com e-mail
      </p>

      <form className="w-full space-y-4">
        <div className="space-y-4">
          <Input placeholder="Seu e-mail" />
          <Input placeholder="Sua senha" />

          <Link
            href="#"
            className="float-right pb-2 text-xs text-muted-foreground"
          >
            Esqueci minha senha
          </Link>
        </div>
        <Button className="relative w-full">
          Login
          <ArrowRight className="absolute right-3" />
        </Button>
      </form>

      <p className="text-xs text-muted-foreground">
        Ainda não tem uma conta?{" "}
        <Link href="/sign-up" className="text-primary">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}

export default SingInPage;
