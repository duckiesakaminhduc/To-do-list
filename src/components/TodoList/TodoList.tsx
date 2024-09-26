import React, { useEffect, useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import "./TodoList.css";
import { Todo } from "../@types/todo.type";

type HandleLocalStorage = (todos: Todo[]) => Todo[];
export default function TodoList() {
  //dat danh sach task o cha de truyen xuong con
  const [todos, setTodos] = useState<Todo[]>([]);
  const doneTodos = todos.filter((todo) => todo.done);
  const notDoneTodos = todos.filter((todo) => !todo.done);
  const [currentTask, setCurrentTask] = useState<Todo | null>(null);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    const todosString: Todo[] = JSON.parse(todos || "[]");
    setTodos(todosString);
  }, []);

  //ham syncLocal nhan vao 1 ham co dang: function() hoac co dang ()=>{}
  //callback nay nhan vao tham so la 1 array Todo[],xu li mang do roi tra ve 1 mang roi luu vao localstorage
  const syncLocal = (handleLocalStorage: HandleLocalStorage) => {
    const localTodos = localStorage.getItem("todos");
    const localTodosString = JSON.parse(localTodos || "[]");
    const newLocalTodosString = handleLocalStorage(localTodosString);
    localStorage.setItem("todos", JSON.stringify(newLocalTodosString));
  };

  const addTodo = (task_name: string) => {
    const todo: Todo = {
      name: task_name,
      done: false,
      id: new Date().toISOString(),
    };
    setTodos((prev) => [todo, ...prev]);
    syncLocal((todolists) => [todo, ...todolists]);
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
      syncLocal(() => newTodos);
    }
  };

  const deleteTask = (id: string) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    syncLocal(() => newTodos);
  };

  const tickTask = (id: string) => {
    console.log(id);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
    syncLocal(() => newTodos);
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
        tickTask={tickTask}
      />
      <TaskList
        doneTaskList
        todos={doneTodos}
        startEdit={startEdit}
        deleteTask={deleteTask}
        tickTask={tickTask}
      />
    </div>
  );
}
