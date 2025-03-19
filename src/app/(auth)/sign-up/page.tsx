import Link from "next/link";

import FormSignUp from "./components/form-sign-up";

function SingUpPage() {
  return (
    <div className="flex min-w-[300px] flex-col items-center gap-4">
      <h2 className="py-6 text-2xl">Cadastrar-se com e-mail</h2>

      <FormSignUp />

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
