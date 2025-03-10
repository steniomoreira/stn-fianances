import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import googleIcon from "@/assets/images/google.svg";
import bgSignin from "@/assets/images/image-sign-in.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SingInPage() {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="relative flex flex-col items-center justify-center bg-muted p-4">
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image
              src="/logo-stn-finance.svg"
              alt="STN Finance"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xl font-semibold">STN Finance</p>
        </div>

        <Image
          src={bgSignin}
          alt="background signin"
          width={350}
          className="flex-1 object-contain"
        />

        <footer className="text-sm">
          Todos os direitos reservados &copy;{" "}
          <span className="text-primary">STN DEV</span>
          {` - ${new Date().getFullYear()}`}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <div className="flex min-w-[300px] flex-col items-center gap-4">
          <h2 className="py-6 text-2xl">Bem-vindo de volta</h2>

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
              <Input placeholder="Seua senha" />

              <Link
                href="#"
                className="float-right text-xs text-muted-foreground"
              >
                Esqueceu sua senha
              </Link>
            </div>
            <Button className="relative w-full">
              Login
              <ArrowRight className="absolute right-3" />
            </Button>
          </form>
        </div>

        <p className="text-xs text-muted-foreground">
          Ainda não tem uma conta?{" "}
          <a href="#" className="text-primary">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}

export default SingInPage;
