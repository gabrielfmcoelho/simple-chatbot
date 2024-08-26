import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import UsersDataTable from "./data-table";

export const metadata: Metadata = {
  title: "Products - Shadcn UI Kit",
  description:
    "A list of products created using the Tanstack Table. Tailwind is built on CSS and React."
};

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
      <UsersDataTable data={products} />
    </div>
  );
}
