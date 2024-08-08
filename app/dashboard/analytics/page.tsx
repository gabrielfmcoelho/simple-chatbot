import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AverageDailySalesChart } from "@/components/dashboard/analytics/average-daily-sales";
import { Badge } from "@/components/ui/badge";
import { EarningReportsChart } from "@/components/dashboard/analytics/earning-reports-chart";
import {
  AreaChart,
  ChevronUp,
  Clock,
  DollarSignIcon,
  HandCoins,
  MessageCircleReply,
  Ticket,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { SupportTrackerChart } from "@/components/dashboard/analytics/support-tracker-chart";
import { SalesByCountries } from "@/components/dashboard/analytics/sales-by-countries";
import { TotalEarningChart } from "@/components/dashboard/analytics/total-earning-chart";
import { MonthlyCampaignState } from "@/components/dashboard/analytics/monthly-campaign-state";

export const metadata: Metadata = {
  title: "Analytics Dashboard - Shadcn UI Kit",
  description: "...",
};

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base">Website Analytics</CardTitle>
              <CardDescription>Total 28.5% Conversion Rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">
                    432
                  </div>
                  <span>Direct</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">
                    216
                  </div>
                  <span>Organic</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">
                    29%
                  </div>
                  <span>Sessions</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">
                    2.3K
                  </div>
                  <span>Page Views</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">
                    1.6K
                  </div>
                  <span>Leads</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">
                    8%
                  </div>
                  <span>Conversions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-4">
          <Card className="h-full overflow-hidden">
            <CardHeader>
              <CardTitle className="text-base">Average Daily Sales</CardTitle>
              <CardDescription>Total Sales This Month</CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <div className="mb-4 text-2xl font-bold">$28,450</div>
            </CardContent>
            <AverageDailySalesChart />
          </Card>
        </div>
        <div className="col-span-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base">Sales Overview</CardTitle>
              <CardDescription>+20.1% from last month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-2xl font-bold">$42.5k</div>
              <div className="grid grid-cols-2 gap-4 divide-x">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">
                    62.2%
                  </div>
                  <span>Orders</span>
                </div>
                <div className="flex items-center justify-end gap-3 text-sm">
                  <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">
                    25.5%
                  </div>
                  <span>Visits</span>
                </div>
              </div>
              <div className="mt-4 flex overflow-hidden rounded-lg">
                <span
                  className="h-4 bg-primary"
                  style={{ width: "70%" }}
                ></span>
                <span
                  className="h-4 bg-indigo-500"
                  style={{ width: "30%" }}
                ></span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base">Earning Reports</CardTitle>
              <CardDescription>Weekly Earnings Overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="text-2xl font-bold lg:text-4xl">$1.468</div>
                    <Badge variant="success">+4.2%</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    You informed of this week compared to last week
                  </div>
                </div>
                <div className="col-span-2">
                  <EarningReportsChart />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-10 rounded-lg border p-5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                      <DollarSignIcon className="h-5 w-5" />
                    </div>
                    <span>Earnings</span>
                  </div>
                  <div className="text-xl font-bold">$545.69</div>
                  <Progress className="h-1" value={70} />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                      <AreaChart className="h-5 w-5" />
                    </div>
                    <span>Profit</span>
                  </div>
                  <div className="text-xl font-bold">$256.34</div>
                  <Progress className="h-1" value={70} />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                      <HandCoins className="h-5 w-5" />
                    </div>
                    <span>Expense</span>
                  </div>
                  <div className="text-xl font-bold">$74.19</div>
                  <Progress className="h-1" value={70} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base">Earning Reports</CardTitle>
              <CardDescription>Last 7 Days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex flex-col gap-3">
                    <div className="mb-5">
                      <div className="mb-2 text-2xl font-bold lg:text-4xl">
                        65
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Tickets
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <Ticket className="h-6 w-6" />
                      </div>
                      <div>
                        <div>New Tickets</div>
                        <div className="text-sm text-muted-foreground">40</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <div>Open Tickets</div>
                        <div className="text-sm text-muted-foreground">25</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <MessageCircleReply className="h-6 w-6" />
                      </div>
                      <div>
                        <div>Response Time</div>
                        <div className="text-sm text-muted-foreground">
                          1 Day
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <SupportTrackerChart />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base">Sales by Countries</CardTitle>
              <CardDescription>Monthly Sales Overview</CardDescription>
            </CardHeader>
            <CardContent>
              <SalesByCountries />
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base">Total Earning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex items-center gap-3">
                <div className="text-2xl font-bold lg:text-4xl">83%</div>
                <div className="flex items-center text-green-500">
                  <ChevronUp className="me-1 h-4 w-4" /> 24.2%
                </div>
              </div>
              <TotalEarningChart />
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <HandCoins className="h-6 w-6" />
                  </div>
                  <div>
                    <div>Total Revenue</div>
                    <div className="text-sm text-muted-foreground">
                      Client Payment
                    </div>
                  </div>
                  <div className="ms-auto text-green-600">+$126</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <DollarSignIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div>Total Sales</div>
                    <div className="text-sm text-muted-foreground">Refund</div>
                  </div>
                  <div className="ms-auto text-green-600">+$98</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base">
                Monthly Campaign State
              </CardTitle>
              <CardDescription>8.52k Social Visiters</CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyCampaignState />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
