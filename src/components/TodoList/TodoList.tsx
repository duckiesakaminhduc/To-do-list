import React, { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import "./TodoList.css";
import { Todo } from "../@types/todo.type";
export default function TodoList() {
  //dat danh sach task o cha de truyen xuong con
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (task_name: string) => {
    const todo: Todo = {
      name: task_name,
      done: false,
      id: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, todo]);
  };
  return (
    <div className="main">
      <TaskInput />
      <TaskList />
      <TaskList doneTaskList />
    </div>
  );
}
