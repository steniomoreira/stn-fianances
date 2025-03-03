import { LineChartRevenue } from "./_components/chart/line-chart-revenue";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <h1 className="px-6 text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-9">
        <div className="col-span-6">
          <LineChartRevenue />
        </div>
        <div className="col-span-3">Transações</div>
      </div>
    </div>
  );
}
