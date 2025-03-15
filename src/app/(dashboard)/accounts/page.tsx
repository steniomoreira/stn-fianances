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

const mockAccount = [
  {
    number: "321654",
    name: "Carteira",
    color: "#414141",
    type: "MONEY",
    closinDay: null,
  },
  {
    number: "321658",
    name: "Nubank",
    color: "#4c1d95",
    type: "CREDIT_CARD",
    closinDay: "10",
  },
  {
    number: "644311",
    name: "Inter",
    color: "#ff7220",
    type: "CHECKING ACCOUNT",
    closinDay: null,
  },
  {
    number: "987654",
    name: "Itaú",
    color: "#f88d00",
    type: "SAVINGS_ACCOUNT",
    closinDay: null,
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
                  <TableHead className="w-[60px]">Cor</TableHead>
                  <TableHead>Conta</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAccount.map((account) => (
                  <TableRow
                    key={account.number}
                    className="hover:bg-transparent"
                  >
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

        <div className="col-span-3">form</div>
      </div>
    </div>
  );
}

export default AccountsPage;
