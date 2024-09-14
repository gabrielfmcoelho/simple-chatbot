import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle, CircleCheck, Dot } from "lucide-react";

type Reminder = {
  id: number;
  note?: string;
  level?: string;
  type?: string;
  isCompleted: boolean;
  date?: string;
};

const reminders: Reminder[] = [
  {
    id: 1,
    note: "New designer: first call & onboarding",
    level: "low",
    type: "Design Education",
    isCompleted: false,
    date: "Today, 12:30"
  },
  {
    id: 1,
    note: "New designer: first call & onboarding",
    level: "medium",
    type: "Meeting",
    isCompleted: true,
    date: "Today, 10:00"
  },
  {
    id: 1,
    note: "New designer: first call & onboarding",
    level: "high",
    type: "Customer Support",
    isCompleted: false,
    date: "Tomorrow, 16:30"
  }
];

export default function Reminders() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          Reminder{" "}
          <Button variant="outline">
            Set Reminder <ArrowRight className="ms-1 h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-flow-col gap-4">
        {reminders.map((reminder) => (
          <Card key={reminder.id}>
            <CardHeader>
              <CardTitle className="flex items-center font-normal capitalize">
                <span
                  className={cn("d-inline me-2 h-2 w-2 rounded-full", {
                    "bg-gray-400": reminder.level === "low",
                    "bg-orange-400": reminder.level === "medium",
                    "bg-red-600": reminder.level === "high"
                  })}></span>{" "}
                {reminder.level}{" "}
                {reminder.isCompleted ? (
                  <CircleCheck className="me-2 ms-auto h-5 w-5 text-green-600" />
                ) : (
                  <CircleCheck className="me-2 ms-auto h-5 w-5 text-gray-400" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-3 pt-6">
              <div className="text-muted-foreground">{reminder.date}</div>
              <div>{reminder.note}</div>
              <Badge variant="outline">{reminder.type}</Badge>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
