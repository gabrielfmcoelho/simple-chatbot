import type { Metadata } from "next";
import { Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ExportButton } from "@/components/CardActionMenus";

import RecentOrders from "@/components/dashboard/ecommerce/recent-orders";
import BestSellingProductList from "@/components/dashboard/ecommerce/best-selling-product-list";
import {
  CustomersChart,
  ReturningRateChart,
  RevenueChart,
  SalesChart,
  TotalRevenueChart,
  VisitBySourceChart,
} from "@/components/dashboard/ecommerce/charts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ecommerce Dashboard - Shadcn UI Kit",
  description:
    "It is an admin panel designed to manage e-commerce projects. It includes customizable components to suit your needs.",
};

export default function Page() {
  return (
    <>
      {/* <div className="mb-4 flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div> */}
      <div className="grid grid-cols-12 gap-4">
        <Card className="sm:col-span-3">
          <CardHeader className="pb-3">
            <CardTitle>Congratulations John! 🎉</CardTitle>
            <CardDescription>Best seller of the month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 mt-4 text-2xl font-bold">$15,231.89</div>
            <Button className="w-full">View Sales</Button>
          </CardContent>
        </Card>

        <Card className="sm:col-span-3">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-normal">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
            <div className="pt-8">
              <RevenueChart />
            </div>
          </CardContent>
        </Card>

        <Card className="sm:col-span-3">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-normal">Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20K</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
            <div className="pt-8">
              <SalesChart />
            </div>
          </CardContent>
        </Card>

        <Card className="sm:col-span-3">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-normal">
              New Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.3K</div>
            <p className="text-xs text-muted-foreground">
              +10.8% from last month
            </p>
            <div className="pt-8">
              <CustomersChart />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 grid grid-cols-8 gap-4">
        <Card className="sm:col-span-5">
          <CardHeader className="pb-3">
            <CardTitle className="flex justify-between text-base font-normal">
              Total Revenue
              <ExportButton />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
              <div className="flex gap-8 rounded-lg border p-4">
                <button className="flex flex-1 flex-col justify-center gap-1 text-left">
                  <span className="text-xs text-muted-foreground">Desktop</span>
                  <span className="text-lg font-bold leading-none sm:text-2xl">
                    24,828
                  </span>
                </button>
                <button className="flex flex-1 flex-col justify-center gap-1 text-left">
                  <span className="text-xs text-muted-foreground">Mobile</span>
                  <span className="text-lg font-bold leading-none sm:text-2xl">
                    25,010
                  </span>
                </button>
              </div>
            </div>
            <div className="pt-8">
              <TotalRevenueChart />
            </div>
          </CardContent>
        </Card>
        <Card className="sm:col-span-3">
          <CardHeader className="pb-3">
            <CardTitle className="flex justify-between">
              <div className="flex items-center gap-2">
                50.56%
                <Badge className="text-green-500" variant="outline">
                  +2.5%
                </Badge>
              </div>
              <ExportButton />
            </CardTitle>
            <CardDescription>Returning Rate</CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <ReturningRateChart />
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4">
        <Card className="sm:col-span-7">
          <CardHeader className="pb-3">
            <CardTitle className="flex justify-between text-base font-normal">
              Recent Orders
              <ExportButton />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrders />
          </CardContent>
        </Card>
        <Card className="sm:col-span-5">
          <CardHeader className="pb-3">
            <CardTitle className="flex justify-between text-base font-normal">
              Best Selling Products
              <ExportButton />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BestSellingProductList />
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4">
        <Card className="sm:col-span-4">
          <CardHeader className="pb-3">
            <CardTitle className="flex justify-between text-base font-normal">
              Sales by Locations
              <ExportButton />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="pt-8">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Canada</span>
                    <span>75%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Greenland</span>
                    <span>47%</span>
                  </div>
                  <Progress value={47} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Russia</span>
                    <span>63%</span>
                  </div>
                  <Progress value={63} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>China</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Australia</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="sm:col-span-4">
          <CardHeader className="pb-3">
            <CardTitle className="flex justify-between text-base font-normal">
              Store Visits by Source
              <ExportButton />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <VisitBySourceChart />
          </CardContent>
        </Card>
        <Card className="sm:col-span-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-normal">
              Customer Reviews
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex justify-between bg-muted p-2">
              <div className="flex gap-1">
                <Star stroke="orange" fill="orange" />
                <Star stroke="orange" fill="orange" />
                <Star stroke="orange" fill="orange" />
                <Star stroke="orange" fill="orange" />
                <Star stroke="orange" />
              </div>
              <span>4.5 out of 5</span>
            </div>
            <div className="text-center text-sm">Total 5.50k reviews</div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0">5 star</span>
                <Progress value={70} color="bg-green-500" className="h-2" />
                <span>70%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0">4 star</span>
                <Progress value={67} color="bg-lime-500" className="h-2" />
                <span>67%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0">3 star</span>
                <Progress value={50} color="bg-orange-500" className="h-2" />
                <span>50%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0">2 star</span>
                <Progress value={42} color="bg-pink-500" className="h-2" />
                <span>42%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0">1 star</span>
                <Progress value={20} color="bg-rose-500" className="h-2" />
                <span>20%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
