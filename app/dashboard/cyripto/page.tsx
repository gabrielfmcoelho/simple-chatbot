import Link from "next/link";
import { generateMeta } from "@/lib/utils";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import CyriptoCurrencyPriceCards from "./cyripto-currency-price-cards";
import DigitalWallets from "./digital-wallets";
import { RecentActivities } from "./recent-activities";
import { BalanceSummeryChart } from "./balance-summary";
import CoinBuySell from "./coin-buy-sell";
import CalendarDateRangePicker from "@/components/dashboard/ecommerce/date-range-picker";
import { Button } from "@/components/ui/button";

export async function generateMetadata() {
  return generateMeta({
    title: "Cyripto Dashboard",
    description:
      "Cyripto dashboard template is a comprehensive and intuitive interface to effectively monitor cryptocurrency prices, market trends and portfolio performance.",
    canonical: "/cyripto"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Cyripto Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <div className="gap-4 space-y-4 lg:grid lg:grid-cols-6 lg:space-y-0 xl:grid-cols-7">
        <div className="space-y-4 lg:col-span-12 xl:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>Available balance in USD</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="text-3xl font-bold">$179,850.950</div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-1 rounded-lg bg-muted px-4 py-3">
                  <span>Wallets</span>
                  <span className="text-2xl">10</span>
                </div>
                <div className="flex flex-col gap-1 rounded-lg bg-muted px-4 py-3">
                  <span>Transactions</span>
                  <span className="text-2xl">34,405</span>
                </div>
              </div>
              <div className="text-sm italic text-muted-foreground">
                Last activity at 19 Nov, 2025
              </div>
            </CardContent>
          </Card>
          <CyriptoCurrencyPriceCards />
        </div>
        <div className="lg:col-span-6 xl:col-span-2">
          <DigitalWallets />
        </div>
        <div className="lg:col-span-6 xl:col-span-2">
          <CoinBuySell />
        </div>
        <div className="lg:col-span-12 xl:col-span-2">
          <RecentActivities />
        </div>
        <div className="lg:col-span-12 xl:col-span-5">
          <BalanceSummeryChart />
        </div>
      </div>
    </>
  );
}
