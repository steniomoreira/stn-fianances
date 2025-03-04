import { EllipsisVertical } from "lucide-react";

import Headline from "@/components/headline";
import { Button } from "@/components/ui/button";

import { BarChartReneuExpense } from "./_components/chart/bar-cart-revenue-expense";
import { LineChartExpense } from "./_components/chart/line-chart-expense";
import Summary from "./_components/summary/summary";
import LastTransactions from "./_components/transaction/last-transactions";

export default function DashboardPage() {
  return (
    <div className="flex flex-col p-4">
      <Headline text="Dashboard" />

      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-6 space-y-4">
          <div className="flex gap-2">
            <LineChartExpense />
            <BarChartReneuExpense />
          </div>

          <Summary />

          <div className="flex items-center justify-end gap-2">
            <p>Gerar relatórios</p>
            <Button size="icon" variant="outline">
              <EllipsisVertical />
            </Button>
          </div>
        </div>

        <div className="col-span-3">
          <LastTransactions />
        </div>
      </div>
    </div>
  );
}
