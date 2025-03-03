import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Note } from "@/app/dashboard/(auth)/apps/notes/types";
import { noteLabels } from "@/app/dashboard/(auth)/apps/notes/data";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export default function NoteListItem({ note }: { note: Note }) {
  return (
    <Card className="mb-4 block break-inside-avoid overflow-hidden rounded-md transition-shadow hover:shadow-lg group-data-[view-mode=list]:md:flex">
      {note.type === "image" && note.image && (
        <figure>
          <img
            src={note.image}
            alt=""
            className="aspect-square h-full w-full object-cover group-data-[view-mode=list]:md:w-40"
          />
        </figure>
      )}
      <CardContent className="pt-6">
        <div className="space-y-4">
          <h3 className="text-xl font-medium lg:text-2xl">{note.title}</h3>
          <p className="text-sm text-muted-foreground">{note.content}</p>
          {note.type === "checklist" && note.items && (
            <ul className="peer space-y-4">
              {note.items.map((item, key) => (
                <li
                  key={key}
                  className={cn("flex items-center space-x-2", {
                    "text-gray-400 line-through": item.checked
                  })}>
                  <Checkbox
                    className="peer"
                    id={`checklist_${key}`}
                    defaultChecked={item.checked}
                  />
                  <label
                    htmlFor={`checklist_${key}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 aria-[checked=true]:line-through">
                    {item.text}
                  </label>
                </li>
              ))}
            </ul>
          )}
          {note.type === "text" && note.content && (
            <p className="whitespace-pre-line text-gray-600">{note.content}</p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {note.labels.map((id, key) => {
              const label = noteLabels.find((e) => e.id === id);
              if (label)
                return (
                  <Badge key={key} variant="outline">
                    <span
                      className={cn(
                        "me-1.5 size-3 flex-shrink-0 rounded-full",
                        label.color
                      )}></span>
                    {label.title}
                  </Badge>
                );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
