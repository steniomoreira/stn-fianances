import Headline from "@/components/headline";

import { BarChartReneuExpense } from "./_components/chart/bar-cart-revenue-expense";
import { LineChartExpense } from "./_components/chart/line-chart-expense";
import Summary from "./_components/summary/summary";
import Transactions from "./_components/transaction/transactions";

export default function DashboardPage() {
  return (
    <div className="flex flex-col p-6">
      <Headline text="Dashboard" />

      <div className="grid grid-cols-9">
        <div className="col-span-7">
          <div className="flex">
            <div className="flex-1">
              <LineChartExpense />
            </div>

            <div className="w-[330px]">
              <BarChartReneuExpense />
            </div>
          </div>

          <Summary />
        </div>

        <div className="col-span-2">
          <Transactions />
        </div>
      </div>
    </div>
  );
}
