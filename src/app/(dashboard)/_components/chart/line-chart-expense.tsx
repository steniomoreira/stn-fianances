"use client";

import { Area, AreaChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatCurrency } from "@/utils/formatter";
const chartData = [
  { date: "01/03/2025", amount: 3356.4 },
  { date: "10/03/2025", amount: 150 },
  { date: "12/03/2025", amount: 2288.6 },
  { date: "15/03/2025", amount: 1500 },
  { date: "20/03/2025", amount: 130.5 },
  { date: "25/03/2025", amount: 1000 },
];

const chartConfig = {
  amount: {
    label: "Despesa",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function LineChartExpense() {
  return (
    <Card className="-ml-6 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>Despesas do mês</CardTitle>
        <CardDescription className="text-xs">
          Registros de despesas do período 01 a 31 de Março/2025
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 10,
              right: 10,
            }}
          >
            <YAxis
              axisLine={false}
              tickLine={false}
              width={80}
              tickMargin={14}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={14}
              tickFormatter={(value) => value.slice(0, 5)}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name) => (
                    <>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as React.CSSProperties
                          }
                        />
                        {chartConfig[name as keyof typeof chartConfig]?.label ||
                          name}
                      </div>
                      {formatCurrency(Number(value))}
                    </>
                  )}
                />
              }
            />

            <Area
              dataKey="amount"
              type="natural"
              fill="var(--color-amount)"
              fillOpacity={0.1}
              stroke="var(--color-amount)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
