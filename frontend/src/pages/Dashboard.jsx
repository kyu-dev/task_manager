import React from "react";
import { Calendar } from "@/components/ui/calendar";
import TaskTable from "../components/TaskTable";

const Dashboard = () => {
  const [date, setDate] = React.useState(new Date());
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      title: "Faire le design",
      status: "pending",
      completed: false,
      dueDate: new Date(),
      assignedTo: {
        name: "John Doe",
        avatar: "/avatars/john.jpg",
      },
    },
    {
      id: 2,
      title: "Développer le composant TaskTable",
      status: "in progress",
      completed: false,
      dueDate: new Date(),
      assignedTo: {
        name: "Jane Smith",
        avatar: "/avatars/jane.jpg",
      },
    },
    {
      id: 3,
      title: "Tester l'application",
      status: "done",
      completed: true,
      dueDate: new Date(),
      assignedTo: {
        name: "Bob Johnson",
        avatar: "/avatars/bob.jpg",
      },
    },
  ]);

  const handleTaskUpdate = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div className="p-10 flex gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <TaskTable tasks={tasks} onTaskUpdate={handleTaskUpdate} />
    </div>
  );
};

export default Dashboard;
