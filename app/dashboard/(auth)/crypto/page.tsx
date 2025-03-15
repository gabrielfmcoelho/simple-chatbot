import { generateMeta } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import CalendarDateRangePicker from "@/components/date-range-picker";

import DigitalWallets from "./digital-wallets";
import { RecentActivities } from "./recent-activities";
import { BalanceSummeryChart } from "./balance-summary";
import CoinBuySell from "./coin-buy-sell";
import OverviewCard from "./overview-card";
import CryptoCurrencyPriceCards from "./crypto-currency-price-cards";

export async function generateMetadata() {
  return generateMeta({
    title: "Crypto Dashboard",
    description:
      "The crypto admin dashboard is a template for effectively tracking cryptocurrency prices, market trends and portfolio performance. Built with shadcn/ui.",
    canonical: "/crypto"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Crypto Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      {/*<div className="mb-4">
        <CryptoCurrencyPriceCards />
      </div>*/}
      <div className="space-y-4">
        <div className="gap-4 space-y-4 lg:grid lg:grid-cols-6 lg:space-y-0">
          <OverviewCard />
          <DigitalWallets />
          <CoinBuySell />
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          <RecentActivities />
          <BalanceSummeryChart />
        </div>
      </div>
    </>
  );
}
