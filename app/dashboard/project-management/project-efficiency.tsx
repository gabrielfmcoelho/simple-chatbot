"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { browser: "active", visitors: 30, fill: "var(--color-active)" },
  { browser: "new", visitors: 20, fill: "var(--color-new)" },
  { browser: "completed", visitors: 50, fill: "var(--color-completed)" }
];

const chartConfig = {
  active: {
    label: "Active",
    color: "hsl(var(--chart-1))"
  },
  new: {
    label: "New",
    color: "hsl(var(--chart-2))"
  },
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-3))"
  }
} satisfies ChartConfig;

export default function ProjectEfficiency() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Project Efficiency</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" innerRadius={60} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-2 xl:flex-row">
        {chartData.map((item, key) => (
          <div
            key={key}
            className="flex flex-grow items-center justify-between rounded-lg border py-0.5 ps-3 text-center text-sm capitalize">
            {item.browser}
            <span className="border-s px-2 py-1 text-muted-foreground">{item.visitors}</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
