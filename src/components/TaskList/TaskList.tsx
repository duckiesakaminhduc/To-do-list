import React from "react";
import "./TaskList.css";

interface TaskListProps {
  doneTaskList?: boolean;
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList } = props;
  console.log(doneTaskList)
  return (
    <div>
      <h2 className="">
        {doneTaskList? "Chưa hoàn thành" : "Hoàn thành"}
      </h2>
      <div className="task">
        <div className="task__bar">
          <input type="checkbox" />
          <span className={`taskName ${doneTaskList ? "taskDone" : ""} `}>
            Task name here
          </span>
        </div>
        <div className="task__action">
          <button className="taskBtn">🖋️</button>
          <button className="taskBtn">🗑️</button>
        </div>
      </div>
    </div>
  );
}
