import React, { useState } from "react";
import "./TaskInput.css";
import { Todo } from "../@types/todo.type";

interface TaskInputProps {
  addTodo: (name: string) => void;
  currentTask: Todo | null;
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTask } = props;
  const [name, setName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(name);
    setName("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div className="">
      <div className="title">Title</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTask ? currentTask.name : name}
          placeholder="caption goes here"
          onChange={handleChange}
        />
        <button type="submit">{currentTask ? "✔️" : "➕"}</button>
      </form>
    </div>
  );
}
