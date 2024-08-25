import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import UsersDataTable from "./data-table";

export const metadata: Metadata = {
  title: "Users - Shadcn UI Kit",
  description:
    "A list of users created using the Tanstack Table. Tailwind is built on CSS and React."
};

async function getUsers() {
  const data = await fs.readFile(path.join(process.cwd(), "app/dashboard/pages/users/data.json"));

  return JSON.parse(data.toString());
}

export default async function Page() {
  const users = await getUsers();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          </div>
          <Button asChild>
            <Link href="#">
              <PlusCircledIcon className="me-2" /> Add New User
            </Link>
          </Button>
        </div>
        <UsersDataTable data={users} />
      </div>
    </>
  );
}
