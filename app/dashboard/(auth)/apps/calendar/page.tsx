import { generateMeta } from "@/lib/utils";
import CalendarApp from "@/app/dashboard/(auth)/apps/calendar/calendar-app";
import CalendarSidebar from "@/app/dashboard/(auth)/apps/calendar/calendar-sidebar";
import EventSheet from "@/app/dashboard/(auth)/apps/calendar/event-sheet";
import React from "react";

export async function generateMetadata() {
  return generateMeta({
    title: "Calendar",
    description:
      "Plan your events and tasks in an organized way with the calendar template. Easily track the timing of your projects thanks to its flexible and customizable structure.",
    canonical: "/apps/calendar"
  });
}

export default function Page() {
  return (
    <div className="flex lg:space-x-5">
      <CalendarSidebar />
      <div className="grow">
        <CalendarApp />
      </div>
      <EventSheet />
    </div>
  );
}
