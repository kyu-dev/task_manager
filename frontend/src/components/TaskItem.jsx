import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const TaskItem = ({ task, onCheck }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg mb-2 bg-background w-full">
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onCheck(task.id)}
      />
      <div className="flex-1 flex items-center gap-4 overflow-hidden">
        <p
          className={`text-sm flex-1 truncate ${
            task.completed ? "line-through" : ""
          }`}
          title={task.title}
        >
          {task.title}
        </p>
        <Badge variant={task.status === "done" ? "default" : "secondary"}>
          {task.status}
        </Badge>
        <Avatar className="h-6 w-6">
          <AvatarImage src={task.assignedTo?.avatar} />
          <AvatarFallback>{task.assignedTo?.name[0]}</AvatarFallback>
        </Avatar>
        <span className="text-sm text-muted-foreground">
          {task.dueDate.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
      <Button variant="ghost" size="sm">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TaskItem;
