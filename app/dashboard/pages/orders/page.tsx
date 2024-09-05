import { promises as fs } from "fs";
import path from "path";
import { generateMeta } from "@/lib/utils";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import UsersDataTable from "./data-table";

export async function generateMetadata() {
  return generateMeta({
    title: "Orders",
    description:
      "A list of orders created using the Tanstack Table. Tailwind is built on CSS and React.",
    canonical: "/pages/orders"
  });
}

async function getOrders() {
  const data = await fs.readFile(path.join(process.cwd(), "app/dashboard/pages/orders/data.json"));

  return JSON.parse(data.toString());
}

export default async function Page() {
  const orders = await getOrders();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
        <Button asChild>
          <Link href="#">
            <PlusCircledIcon className="me-2" /> Create Order
          </Link>
        </Button>
      </div>
      <UsersDataTable data={orders} />
    </div>
  );
}
