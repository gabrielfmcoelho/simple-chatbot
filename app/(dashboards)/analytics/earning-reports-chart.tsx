"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
const chartData = [
  { day: "Mo", sales: 35 },
  { day: "Thu", sales: 30 },
  { day: "We", sales: 37 },
  { day: "Th", sales: 14 },
  { day: "Fr", sales: 20 },
  { day: "Sa", sales: 24 },
  { day: "Su", sales: 38 },
];

const chartConfig = {
  desktop: {
    label: "Sales",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function EarningReportsChart() {
  return (
    <ChartContainer className="h-[150px] w-full" config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar
          dataKey="sales"
          fill="var(--color-desktop)"
          radius={5}
          barSize={40}
        />
      </BarChart>
    </ChartContainer>
  );
}
