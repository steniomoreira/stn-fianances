import Image from "next/image";

import bgSignIn from "@/assets/images/bg-sign-in.svg";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="grid h-full grid-cols-2">
        <div className="relative flex flex-auto flex-col items-end justify-center p-4">
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

          <Image src={bgSignIn} alt="background signin" width={450} />
        </div>

        <div className="flex flex-col items-start justify-center gap-4 p-4">
          {children}
        </div>
      </div>

      <footer className="px-4 py-6 text-center text-sm text-muted-foreground">
        Todos os direitos reservados &copy;{" "}
        <span className="text-primary">STN DEV</span>
        {` - ${new Date().getFullYear()}`}
      </footer>
    </div>
  );
}

export default AuthLayout;
