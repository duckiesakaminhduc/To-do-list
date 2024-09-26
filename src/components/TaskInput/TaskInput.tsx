import React, { useState } from "react";
import "./TaskInput.css";
import { Todo } from "../@types/todo.type";

interface TaskInputProps {
  addTodo: (name: string) => void;
  currentTask: Todo | null;
  edit: (name: string) => void;
  doneEdit: () => void;
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTask, edit, doneEdit } = props;
  const [name, setName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentTask) {
      doneEdit();
    } else {
      addTodo(name);
      setName("");
    }
  };
  //dat input la value = cái gì thì muosn thay đỏi phải gọi hàm setState cái đó,
  //ví dụ name thì phải setName, value = currentTask thì phải gọi hàm state của currentTask
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTask) edit(event.target.value);
    else setName(event.target.value);
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
