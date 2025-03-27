import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import TaskTable from "@/components/TaskTable";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([
    // date fictive
    {
      id: 1,
      title: "Faire le design",
      status: "pending",
      completed: false,
      dueDate: new Date(2025, 2, 27), // 27 mars 2025
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
      dueDate: new Date(2025, 2, 27), // 27 mars 2025
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
      dueDate: new Date(2025, 2, 28), // 27 mars 2025
      assignedTo: {
        name: "Bob Johnson",
        avatar: "/avatars/bob.jpg",
      },
    },
  ]);

  const handleTaskUpdate = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  // Filtrer les tâches pour la date sélectionnée
  const filteredTasks = tasks.filter((task) => {
    return (
      task.dueDate.getFullYear() === date.getFullYear() &&
      task.dueDate.getMonth() === date.getMonth() &&
      task.dueDate.getDate() === date.getDate()
    );
  });

  return (
    <div className="p-10 flex gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <TaskTable tasks={filteredTasks} onTaskUpdate={handleTaskUpdate} />
    </div>
  );
};

export default Dashboard;
