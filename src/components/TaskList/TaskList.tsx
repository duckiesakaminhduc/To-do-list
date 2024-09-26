import React from "react";
import "./TaskList.css";
import { Todo } from "../@types/todo.type";

interface TaskListProps {
  doneTaskList?: boolean;
  todos: Todo[];
  startEdit: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, startEdit, deleteTask } = props;
  return (
    <div className="tasklist">
      <h2 className="">{doneTaskList ? "Hoàn thành" : "Chưa hoàn thành"}</h2>
      {todos.map((todo) => (
        <div className="task" key={todo.id}>
          <div className="task__bar">
            <input
              type="checkbox"
              // checked={todo.done}
            />
            {/* <span className={`taskName ${doneTaskList ? "taskDone" : ""} `}> */}
            <span className={`taskName ${todo.done ? "taskDone" : ""} `}>
              {todo.name}
            </span>
          </div>
          <div className="task__action">
            <button className="taskBtn" onClick={() => startEdit(todo.id)}>
              🖋️
            </button>
            <button className="taskBtn" onClick={() => deleteTask(todo.id)}>
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
