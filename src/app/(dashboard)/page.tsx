import { BarChartReneuExpense } from "./_components/chart/bar-cart-revenue-expense";
import { LineChartExpense } from "./_components/chart/line-chart-expense";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <h1 className="px-6 text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-9">
        <div className="col-span-6">
          <div className="flex">
            <div className="flex-1">
              <LineChartExpense />
            </div>

            <div className="w-[330px]">
              <BarChartReneuExpense />
            </div>
          </div>
        </div>

        <div className="col-span-3">Transações</div>
      </div>
    </div>
  );
}
