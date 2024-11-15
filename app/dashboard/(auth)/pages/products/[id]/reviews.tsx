"use client";

import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../../../../../../components/ui/avatar";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ScrollArea } from "../../../../../../components/ui/scroll-area";
import { Separator } from "../../../../../../components/ui/separator";

const reviews = [
  {
    id: 1,
    name: "Jessica K.",
    image: "/images/avatars/4.png",
    title: "Decent but could be better",
    description:
      "The product is decent, but there's room for improvement. The quality is good, but some features could be enhanced.",
    rating: 3,
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Michael B.",
    image: "/images/avatars/5.png",
    title: "Beautiful design",
    description:
      "I'm really impressed with the design. It's sleek, modern, and fits perfectly with my needs.",
    rating: 5,
    date: "5 days ago"
  },
  {
    id: 3,
    name: "Anna M.",
    image: "/images/avatars/6.png",
    title: "Satisfied with my purchase",
    description:
      "Overall, I'm satisfied with my purchase. The product meets my expectations and serves its purpose well.",
    rating: 4,
    date: "1 week ago"
  },
  {
    id: 4,
    name: "Chris T.",
    image: "/images/avatars/7.png",
    title: "Could be improved",
    description:
      "While the product has some good features, there are several areas where it could be improved.",
    rating: 3,
    date: "2 weeks ago"
  },
  {
    id: 5,
    name: "Lisa G.",
    image: "/images/avatars/8.png",
    title: "Great for everyday use",
    description:
      "This product has become an essential part of my daily routine. It's reliable and easy to use.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: 6,
    name: "David L.",
    image: "/images/avatars/9.png",
    title: "Not worth the price",
    description:
      "Unfortunately, I don't feel the product justifies its price point. There are better alternatives available.",
    rating: 2,
    date: "1 month ago"
  },
  {
    id: 7,
    name: "Theodore Bell",
    image: "/images/avatars/10.png",
    title: "Highly functional and stylish",
    description:
      "This product perfectly combines functionality with style. It's exactly what I was looking for.",
    rating: 5,
    date: "1 month ago"
  }
];

export function Reviews() {
  return (
    <Card>
      <CardContent className="grid gap-6 p-6">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="grid gap-0.5">
                <h1 className="text-xl font-bold">Customer Reviews</h1>
                <p className="text-sm text-muted-foreground">See what our customers are saying.</p>
              </div>
            </div>
            <Button>Write a Review</Button>
          </div>
          <Separator className="my-4" />
          <ScrollArea className="h-[400px] pr-4">
            <div className="grid gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <h3 className="text-sm font-medium">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-0.5">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                      {Array.from({ length: 5 - review.rating }, (_, i) => (
                        <Star key={i + review.rating} className="h-4 w-4 text-muted-foreground/20" />
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="font-bold">{review.title}</h3>
                    <p className="text-sm text-muted-foreground">{review.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}
