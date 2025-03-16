"use client";

import { CircleIcon, ExternalLink, Trash2 } from "lucide-react";

import Headline from "@/components/headline";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormAddAccounts from "./components/form-add-accounts";

const mockAccount = [
  {
    number: "321654",
    name: "Carteira",
    color: "#414141",
  },
  {
    number: "321658",
    name: "Nubank",
    color: "#4c1d95",
  },
  {
    number: "644311",
    name: "Inter",
    color: "#ff7220",
  },
  {
    number: "987654",
    name: "Itaú",
    color: "#f88d00",
  },
];

function AccountsPage() {
  return (
    <div className="space-y-4">
      <Headline text="Contas" />

      <div className="grid grid-cols-9 gap-8">
        <div className="col-span-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 text-xs">
                  <TableHead className="w-[120px]">Conta</TableHead>
                  <TableHead className="w-[40px]">Cor</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAccount.map((account) => (
                  <TableRow
                    key={account.number}
                    className="hover:bg-transparent"
                  >
                    <TableCell className="text-muted-foreground">
                      {account.number}
                    </TableCell>
                    <TableCell>
                      <CircleIcon
                        style={{ fill: account.color, color: "transparent" }}
                        size={10}
                      />
                    </TableCell>
                    <TableCell>{account.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground"
                        >
                          <ExternalLink />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground"
                        >
                          <Trash2 />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="col-span-3">
          <FormAddAccounts />
        </div>
      </div>
    </div>
  );
}

export default AccountsPage;
