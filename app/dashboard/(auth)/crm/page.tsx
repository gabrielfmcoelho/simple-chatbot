import CalendarDateRangePicker from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { LeadsByCountryCard } from "@/app/dashboard/(auth)/crm/leads-by-country";
import { TargetCard } from "@/app/dashboard/(auth)/crm/target-card";
import { TotalCustomersCard } from "@/app/dashboard/(auth)/crm/total-customers";
import { TotalRevenueCard } from "@/app/dashboard/(auth)/crm/total-revenue";
import { LeadsCard } from "@/app/dashboard/(auth)/crm/leads";
import { LeadBySourceCard } from "@/app/dashboard/(auth)/crm/leads-by-source";
import { generateMeta } from "@/lib/utils";

export async function generateMetadata() {
  return generateMeta({
    title: "CRM Dashboard",
    description:
      "CRM admin dashboard template offers a streamlined and interactive interface for managing customer relationships, tracking sales, and analyzing performance metrics.",
    canonical: "/crm"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <h1 className="text-2xl font-bold tracking-tight">CRM Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          <TargetCard />
          <TotalCustomersCard />
          <TotalRevenueCard />
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          <LeadBySourceCard />
          <LeadsByCountryCard className="xl:col-span-2" />
        </div>

        <LeadsCard className="col-span-2" />
      </div>
    </>
  );
}
