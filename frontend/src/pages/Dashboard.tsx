import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import TaskTable from "@/components/TaskTable";
import { motion } from "motion/react";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([
    // tache fictive pour tester l'ui
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
    <motion.div
      className="p-10 flex gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full"
      >
        <TaskTable tasks={filteredTasks} onTaskUpdate={handleTaskUpdate} />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
