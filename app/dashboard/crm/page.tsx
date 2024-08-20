import CalendarDateRangePicker from "@/components/dashboard/ecommerce/date-range-picker";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { LeadsByCountryCard } from "@/components/dashboard/crm/leads-by-country";
import { TargetCard } from "@/components/dashboard/crm/target-card";
import { TotalCustomersCard } from "@/components/dashboard/crm/total-customers";
import { TotalRevenueCard } from "@/components/dashboard/crm/total-revenue";
import { ConversionRatioCard } from "@/components/dashboard/crm/conversion-ratio";
import { LeadsCard } from "@/components/dashboard/crm/leads";
import { LeadsBySourceCard } from "@/components/dashboard/crm/leads-by-source";

export const metadata: Metadata = {
  title: "CRM Dashboard - Shadcn UI Kit",
  description:
    "CRM dashboard template offers a streamlined and interactive interface for managing customer relationships, tracking sales, and analyzing performance metrics."
};

export default function Page() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">CRM Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <TargetCard />
          <TotalCustomersCard />
          <TotalRevenueCard />
          <ConversionRatioCard />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <LeadsBySourceCard />
          <LeadsByCountryCard className="col-span-2" />
        </div>

        <LeadsCard className="col-span-2" />
      </div>
    </>
  );
}
