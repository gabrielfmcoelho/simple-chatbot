"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const students = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "1.png",
    score: 2023
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "2.png",
    score: 1956
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "3.png",
    score: 1891
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "4.png",
    score: 1824
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "5.png",
    score: 1783
  }
];

export function LeaderboardCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leader Board</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {students.map((student, index) => (
            <div key={student.email} className="mb-4 flex items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <Avatar>
                  <AvatarImage
                    src={`/images/avatars/${student.avatar}`}
                    alt={student.name}
                  />
                  <AvatarFallback>{student.name[0]}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">{student.name}</p>
                  <p className="text-sm text-muted-foreground">{student.email}</p>
                </div>
              </div>
              <div className="ml-auto font-medium">{student.score} points</div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
