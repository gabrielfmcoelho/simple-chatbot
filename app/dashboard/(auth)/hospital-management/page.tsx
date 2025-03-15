import { generateMeta } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarDateRangePicker from "@/components/date-range-picker";

import { PatientVisitsChart } from "./patient-visits-chart";
import { PatientsByDepartmentChart } from "./patients-by-department-chart";
import { UpcomingAppointments } from "./upcoming-appointments";
import { PatientsWithLastProcedure } from "./patients-with-last-procedure";
import HospitalReports from "./reports";
import { PlannedCalendar } from "./planned-calendar";
import { Notes } from "./notes";
import SummaryCards from "@/app/dashboard/(auth)/hospital-management/summary-cards";

export async function generateMetadata() {
  return generateMeta({
    title: "Hospital Management",
    description:
      "The hospital admin dashboard is a template for managing and analyzing hospital data and monitoring operational processes.",
    canonical: "/hospital-management"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col justify-between space-y-6 lg:flex-row lg:items-center lg:space-y-2">
        <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Hospital Management</h2>
        <CalendarDateRangePicker />
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <SummaryCards />
          <div className="gap-4 space-y-4 md:grid-cols-2 lg:grid lg:grid-cols-7 lg:space-y-0">
            <PatientVisitsChart />
            <PatientsByDepartmentChart />
          </div>
          <div className="gap-4 space-y-4 md:grid-cols-2 lg:grid lg:grid-cols-7 lg:space-y-0">
            <UpcomingAppointments />
            <PatientsWithLastProcedure />
          </div>
          <div className="gap-4 space-y-4 md:grid-cols-2 lg:grid lg:grid-cols-2 lg:space-y-0">
            <PlannedCalendar />
            <Notes />
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <HospitalReports />
        </TabsContent>
      </Tabs>
    </>
  );
}
