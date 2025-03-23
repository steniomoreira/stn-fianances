import { BadgeCheck, LogOut, Sparkles, UserRoundPen } from "lucide-react";

import signOutAction from "@/app/(auth)/sign-out/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DropdownMenuHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8">
          <AvatarImage
            src="https://github.com/steniomoreira.png"
            alt="Stenio Moreira"
          />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col items-center gap-2 px-1 py-1.5">
            <Avatar>
              <AvatarImage
                src="https://github.com/steniomoreira.png"
                alt="Stenio Moreira"
              />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-center text-sm leading-tight">
              <span className="truncate font-semibold">Stenio Moreira</span>
              <span className="truncate text-xs text-muted-foreground">
                steniomoreiradev@gmail.com
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Sparkles />
          Atualizar plano{" "}
          <span className="rounded-md bg-primary px-1 font-semibold text-muted">
            PRO
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserRoundPen />
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BadgeCheck />
          Conta
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <form action={signOutAction}>
          <DropdownMenuItem
            className="w-full text-rose-500 focus:text-red-500"
            asChild
          >
            <button>
              <LogOut />
              Sair
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownMenuHeader;
