import { promises as fs } from "fs";
import path from "path";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { generateMeta } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, DollarSign, FileClock } from "lucide-react";
import ProductList from "./product-list";

export async function generateMetadata() {
  return generateMeta({
    title: "Products",
    description:
      "A list of products created using the Tanstack Table. Tailwind is built on CSS and React.",
    canonical: "/pages/products"
  });
}

async function getProducts() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/dashboard/pages/products/data.json")
  );

  return JSON.parse(data.toString());
}

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <Button asChild>
          <Link href="#">
            <PlusCircledIcon className="me-2" /> Add New Product
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Active Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.423</div>
            <p className="text-xs text-muted-foreground">+5.02 % from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">New Leads</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,423</div>
            <p className="text-xs text-muted-foreground">-3.58 % from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Hours</CardTitle>
            <FileClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">168h 40m</div>
            <p className="text-xs text-muted-foreground">+10.35 % from last month</p>
          </CardContent>
        </Card>
      </div>
      <ProductList data={products} />
    </div>
  );
}
