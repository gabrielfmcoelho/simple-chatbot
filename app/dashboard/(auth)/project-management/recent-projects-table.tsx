"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../../../../components/ui/table";

const projects = [
  {
    name: "New Website",
    client: {
      avatar: "/images/avatars/1.png",
      name: "Kevin Heal"
    },
    status: "In Progress",
    deadline: "2024-03-20"
  },
  {
    name: "Mobile App",
    client: {
      avatar: "/images/avatars/2.png",
      name: "Kevin Heal"
    },
    status: "Completed",
    deadline: "2024-03-15"
  },
  {
    name: "Dashboard Design",
    client: {
      avatar: "/images/avatars/3.png",
      name: "Kevin Heal"
    },
    status: "In Review",
    deadline: "2024-03-25"
  },
  {
    name: "Landing Page",
    client: {
      avatar: "/images/avatars/4.png",
      name: "Kevin Heal"
    },
    status: "Not Started",
    deadline: "2024-04-01"
  }
];

export function RecentProjectsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project Name</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Deadline</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.name}>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>
              <div className="flex items-center gap-x-4">
                <Avatar>
                  <AvatarImage src={project.client.avatar} alt={project.client.name} />
                  <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                </Avatar>
                {project.client.name}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-x-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-500"
                      : project.status === "In Progress"
                      ? "bg-yellow-500"
                      : project.status === "In Review"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  }`}
                />
                {project.status}
              </div>
            </TableCell>
            <TableCell>{project.deadline}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
