import type { Metadata } from "next";
import CalendarDateRangePicker from "@/components/dashboard/ecommerce/date-range-picker";
import TeamMembersCard from "./cards/theme-members";
import SubscriptionsCard from "./cards/subscriptions";
import TotalRevenueCard from "./cards/total-revenue";
import { ChatCard } from "./cards/chat";
import { Button } from "@/components/ui/button";
import MetricCard from "./cards/metric";
import { PaymentsCard } from "./cards/payment";
import { PaymentMethodCard } from "./cards/payment-method";

export const metadata: Metadata = {
  title: "Dashboard - Shadcn UI Kit",
  description:
    "It is an admin panel designed to manage e-commerce projects. It includes customizable components to suit your needs.",
};

export default function Page() {
  return (
    <>
      <div className="container m-auto">
        <div className="mb-4 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <TeamMembersCard />
          <SubscriptionsCard />
          <TotalRevenueCard />
          <ChatCard />
          <div className="col-span-2">
            <MetricCard className="h-full" />
          </div>
          <div className="col-span-2">
            <PaymentsCard className="h-full" />
          </div>
          <PaymentMethodCard />
        </div>
      </div>
    </>
  );
}
