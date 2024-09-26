import React, { useState } from "react";

interface Props {}
interface Task {
  label: string;
}
export default function ListScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState<string>("");

  const handleNewTaskLabelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTaskLabel(event?.currentTarget.value);
  };
  console.log(newTaskLabel);
  return (
    <div>
      <input
        type="text"
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
      />
    </div>
  );
}
