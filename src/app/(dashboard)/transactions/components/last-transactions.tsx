import { IconName } from "lucide-react/dynamic";
import Link from "next/link";

import IconWrapper from "@/components/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/formatter";

const EXPENSE = "EXPENSE";

const dataLastTransactions = [
  {
    id: "1",
    type: "REVENUE",
    name: "Freelancing",
    iconName: "briefcase-business",
    date: "02 Mar, 2025",
    amount: 150,
  },
  {
    id: "2",
    type: "REVENUE",
    name: "Freelancing",
    iconName: "briefcase-business",
    date: "05 Mar, 2025",
    amount: 850.54,
  },
  {
    id: "3",
    type: "REVENUE",
    name: "Freelancing",
    iconName: "briefcase-business",
    date: "10 Mar, 2025",
    amount: 451.55,
  },
  {
    id: "4",
    type: "EXPENSE",
    name: "Aluguel",
    iconName: "house",
    date: "15 Mar, 2025",
    amount: 500,
  },
  {
    id: "5",
    type: "EXPENSE",
    name: "Gasolina",
    iconName: "car",
    date: "05 Mar, 2025",
    amount: 850.54,
  },
  {
    id: "6",
    type: "REVENUE",
    name: "Freelancing",
    iconName: "briefcase-business",
    date: "10 Mar, 2025",
    amount: 451.55,
  },
  {
    id: "7",
    type: "EXPENSE",
    name: "Aluguel",
    iconName: "house",
    date: "15 Mar, 2025",
    amount: 500,
  },
  {
    id: "8",
    type: "EXPENSE",
    name: "Gasolina",
    iconName: "car",
    date: "05 Mar, 2025",
    amount: 850.54,
  },
  {
    id: "9",
    type: "REVENUE",
    name: "Freelancing",
    iconName: "briefcase-business",
    date: "10 Mar, 2025",
    amount: 451.55,
  },
  {
    id: "10",
    type: "EXPENSE",
    name: "Aluguel",
    iconName: "house",
    date: "15 Mar, 2025",
    amount: 500,
  },
];

const isExpense = (type: string) => type === EXPENSE;

function LastTransactions() {
  return (
    <div className="w-full space-y-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Transações</h2>
        <Button variant="outline" className="rounded-full text-xs" asChild>
          <Link href="/transactions">Ver mais</Link>
        </Button>
      </div>

      <Separator />
      <div className="space-y-6">
        {dataLastTransactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center">
            <IconWrapper
              icon={transaction.iconName as IconName}
              color="gray"
              size="sm"
            />

            <div className="ml-2 flex-1">
              <p className="text-xs">{transaction.name}</p>
              <p className="text-xs text-muted-foreground">
                {transaction.date}
              </p>
            </div>

            <p
              className={`${isExpense(transaction.type) ? "text-red-500" : "text-lime-500"} text-sm`}
            >
              {isExpense(transaction.type) ? "- " : "+ "}
              {formatCurrency(transaction.amount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastTransactions;
