import React, { useEffect, useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import "./TodoList.css";
import { Todo } from "../@types/todo.type";
export default function TodoList() {
  //dat danh sach task o cha de truyen xuong con
  const [todos, setTodos] = useState<Todo[]>([]);
  const doneTodos = todos.filter((todo) => todo.done);
  const notDoneTodos = todos.filter((todo) => !todo.done);
  const [currentTask, setCurrentTask] = useState<Todo | null>(null);
  const addTodo = (task_name: string) => {
    const todo: Todo = {
      name: task_name,
      done: false,
      id: new Date().toISOString(),
    };
    setTodos((prev) => [todo, ...prev]);
  };

  const startEdit = (id: string) => {
    let curTask = todos.find((task) => task.id === id);
    if (curTask) setCurrentTask(curTask);
  };

  const edit = (name: string) => {
    setCurrentTask((prev) => {
      if (prev) return { ...prev, name };
      return null;
    });
  };

  const doneEdit = () => {};

  return (
    <div className="main">
      <TaskInput addTodo={addTodo} currentTask={currentTask} />
      <TaskList todos={notDoneTodos} startEdit={startEdit} />
      <TaskList doneTaskList todos={doneTodos} startEdit={startEdit} />
    </div>
  );
}
