import { generateMeta } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import CalendarDateRangePicker from "@/components/date-range-picker";

import { WelcomeCard } from "./welcome-card";
import { EcommerceRevenueCard } from "./revenue-card";
import { EcommerceSalesCard } from "./sales-card";
import { EcommerceNewCustomerCard } from "./new-customer-card";
import { EcommerceTotalRevenueCard } from "./total-revenue-card";
import { EcommerceReturnRateCard } from "./return-rate-card";
import { EcommerceBestSellingProductCard } from "./best-selling-products-card";
import { EcommerceRecentOrdersCard } from "./recent-orders-card";
import { EcommerceSalesByLocationCard } from "./sales-by-location";
import { EcommerceVisitBySourceCard } from "./visit-by-source-card";
import { EcommerceCustomerReviewsCard } from "./customer-reviews-card";

export async function generateMetadata() {
  return generateMeta({
    title: "Ecommerce Dashboard",
    description:
      "The e-commerce admin dashboard template is an admin template that you can use for your e-commerce website projects. Built with shadcn/ui.",
    canonical: "/ecommerce"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <h1 className="text-2xl font-bold tracking-tight">E-commerce Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-12">
        <WelcomeCard />
        <EcommerceRevenueCard />
        <EcommerceSalesCard />
        <EcommerceNewCustomerCard />
      </div>
      <div className="mt-4 space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
        <EcommerceTotalRevenueCard />
        <EcommerceReturnRateCard />
      </div>

      <div className="mt-4 space-y-4 lg:grid lg:grid-cols-12 lg:gap-4 lg:space-y-0">
        <EcommerceRecentOrdersCard />
        <EcommerceBestSellingProductCard />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <EcommerceSalesByLocationCard />
        <EcommerceVisitBySourceCard />
        <EcommerceCustomerReviewsCard />
      </div>
    </>
  );
}
