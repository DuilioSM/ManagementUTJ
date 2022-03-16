import React from "react";
// import { useState, useEffect } from "react";
import { deleteTask } from "../firebase";

function TaskContainer({ task }) {
  const handleTaskDelete = async () => {
    try {
      await deleteTask(task.id);
    } catch (error) {
      console.error(error);
    }
  };
  const handleTaskEdit = () =>{
    console.log(task)
  }
  return (
    <div
      className="flex items-center justify-between bg-slate-100 rounded shadow-md p-8 mb-8"
      key={task.id}
    >
      <div>
        <h1>{task.title}</h1>
        <h2>{task.description}</h2>
      </div>
      <div>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleTaskDelete}
        >
          Borrar
        </button>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 ml-4 text-black"
          onClick={handleTaskEdit}
        >
          Editar
        </button>
      </div>
    </div>
  );
}

export default TaskContainer;
