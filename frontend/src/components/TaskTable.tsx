import React from "react";
import TaskItem from "./TaskItem";

const TaskTable = ({ tasks, onTaskUpdate }) => {
  const handleCheck = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    onTaskUpdate(updatedTasks);
  };

  return (
    <div className="flex-1 space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onCheck={handleCheck} />
      ))}
    </div>
  );
};

export default TaskTable;
