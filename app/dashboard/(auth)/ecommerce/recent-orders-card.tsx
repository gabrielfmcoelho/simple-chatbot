"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const orders = [
  {
    name: "Amelia Grant",
    email: "amelia@example.com",
    image: "/images/avatars/1.png",
    amount: "$249.99",
    status: "Success"
  },
  {
    name: "Eleanor Ward",
    email: "eleanor@example.com",
    image: "/images/avatars/2.png",
    amount: "$149.99",
    status: "Processing"
  },
  {
    name: "Henry Carter",
    email: "henry@example.com",
    image: "/images/avatars/3.png",
    amount: "$99.99",
    status: "Success"
  },
  {
    name: "Olivia Harris",
    email: "olivia@example.com",
    image: "/images/avatars/4.png",
    amount: "$199.99",
    status: "Failed"
  },
  {
    name: "James Robinson",
    email: "james@example.com",
    image: "/images/avatars/5.png",
    amount: "$299.99",
    status: "Success"
  },
  {
    name: "Sophia Martinez",
    email: "sophia@example.com",
    image: "/images/avatars/6.png",
    amount: "$179.99",
    status: "Processing"
  },
  {
    name: "Liam Thompson",
    email: "liam@example.com",
    image: "/images/avatars/7.png",
    amount: "$89.99",
    status: "Success"
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    image: "/images/avatars/8.png",
    amount: "$259.99",
    status: "Failed"
  }
];

export function EcommerceRecentOrdersCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.email} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={order.image} alt={order.name} />
                <AvatarFallback>{order.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{order.name}</p>
                <p className="text-sm text-muted-foreground">{order.email}</p>
              </div>
              <div className="ml-auto font-medium">
                <div className="flex items-center gap-x-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      order.status === "Success"
                        ? "bg-green-500"
                        : order.status === "Processing"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  />
                  {order.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
