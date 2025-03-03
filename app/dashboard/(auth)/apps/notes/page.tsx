import { generateMeta } from "@/lib/utils";
import NotesApp from "@/app/dashboard/(auth)/apps/notes/note-app";

export async function generateMetadata() {
  return generateMeta({
    title: "Note App",
    description:
      "A note template built with Next.js and Tailwind CSS. Quickly organize your notes and easily manage your projects with its flexible structure.",
    canonical: "/apps/notes"
  });
}

export default function Page() {
  return (
    <div className="h-[calc(100vh-6rem)]">
      <NotesApp />
    </div>
  );
}
