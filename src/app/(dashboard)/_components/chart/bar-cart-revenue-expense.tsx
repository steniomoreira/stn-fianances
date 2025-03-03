"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { month: "Outubro", revenue: 186, expense: 80 },
  { month: "Novembro", revenue: 305, expense: 200 },
  { month: "Dezembro", revenue: 237, expense: 120 },
  { month: "Janeiro", revenue: 73, expense: 190 },
  { month: "Fevereiro", revenue: 209, expense: 130 },
  { month: "Março", revenue: 230, expense: 320 },
];

const chartConfig = {
  revenue: {
    label: "Receita",
    color: "hsl(var(--chart-1))",
  },
  expense: {
    label: "Despesa",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function BarChartReneuExpense() {
  return (
    <Card className="border-0 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>Balanço Receita/Despesa</CardTitle>
        <CardDescription className="text-xs">
          De Outubro a Março/2025
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[180px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dashed"
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
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tendência de alta de 5,2% nesse período{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando o balanço dos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
