import { Badge, BadgeCheck, Link2 } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

import BadgeSeparator from "./badge-separator";

const dataTransactions = {
  revenue: [
    { id: "1", paid: true, name: "Freelancing", date: "02 Mar, 2025" },
    { id: "2", paid: true, name: "Freelancing", date: "05 Mar, 2025" },
    { id: "3", paid: false, name: "Freelancing", date: "10 Mar, 2025" },
    { id: "4", paid: true, name: "Freelancing", date: "15 Mar, 2025" },
  ],
  expense: [
    { id: "1", paid: true, name: "Aluguel", date: "02 Mar, 2025" },
    { id: "2", paid: false, name: "Gasolina", date: "05 Mar, 2025" },
    { id: "3", paid: true, name: "Academia", date: "08 Mar, 2025" },
    { id: "4", paid: true, name: "Faculdade", date: "12 Mar, 2025" },
  ],
};

function Transactions() {
  return (
    <div className="h-screen w-full rounded-lg border p-4">
      <h2 className="font-semibold">Últimas Transações</h2>

      <div className="py-4">
        <BadgeSeparator text="Receita" />

        <div className="mt-2 space-y-4">
          {dataTransactions.revenue.map((revenue) => (
            <Card key={revenue.id}>
              <CardContent className="px-4 py-2">
                <div className="flex h-full items-center gap-4">
                  {revenue.paid ? (
                    <BadgeCheck size={20} className="text-green-700" />
                  ) : (
                    <Badge size={20} className="text-green-700/40" />
                  )}

                  <div className="flex-1">
                    <p className="text-sm">{revenue.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {revenue.date}
                    </p>
                  </div>

                  <Link href="/transactions">
                    <Link2 size={20} className="text-muted-foreground" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="py-4">
        <BadgeSeparator variant="expense" text="Despesa" />

        <div className="mt-2 space-y-4">
          {dataTransactions.expense.map((expense) => (
            <Card key={expense.id}>
              <CardContent className="px-4 py-2">
                <div className="flex h-full items-center gap-4">
                  {expense.paid ? (
                    <BadgeCheck size={20} className="text-green-700" />
                  ) : (
                    <Badge size={20} className="text-green-700/40" />
                  )}

                  <div className="flex-1">
                    <p className="text-sm">{expense.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {expense.date}
                    </p>
                  </div>

                  <Link href="/transactions">
                    <Link2 size={20} className="text-muted-foreground" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
