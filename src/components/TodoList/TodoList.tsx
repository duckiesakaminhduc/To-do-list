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
    console.log(id);
  };

  const edit = (name: string) => {
    setCurrentTask((prev) => {
      if (prev) return { ...prev, name };
      return null;
    });
  };

  //phai set lai todos moi' sau khi chinh sua chu ko pphai return
  const doneEdit = () => {
    if (currentTask) {
      const newTodos = todos.map((item) => {
        if (item.id === currentTask.id) {
          return currentTask;
        }
        return item;
      });
      setTodos(newTodos);
      setCurrentTask(null);
    }
  };

  const deleteTask = (id: string) => {
    // const index = todos.findIndex((todo) => {
    //   todo.id === id;
    // });
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <TaskInput
        addTodo={addTodo}
        currentTask={currentTask}
        edit={edit}
        doneEdit={doneEdit}
      />
      <TaskList
        todos={notDoneTodos}
        startEdit={startEdit}
        deleteTask={deleteTask}
      />
      <TaskList
        doneTaskList
        todos={doneTodos}
        startEdit={startEdit}
        deleteTask={deleteTask}
      />
    </div>
  );
}
