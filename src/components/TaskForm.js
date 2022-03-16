import React from "react";
import { useState } from "react";
import { saveTask } from "../firebase";
import Alert from "./Alert";

function TaskForm() {
  const [user, setUser] = useState({
    title: "",
    text: "",
  });
  const [error, setError] = useState();
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (user.text === "" || user.title === "") {
      setError("Por favor introduce los datos completos");
      return;
    }
    saveTask(user.title, user.text, );
    user.title = "";
    user.text = "";
    e.target.reset();
  };
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={handleTaskSubmit}
      className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4  "
    >
      {error && <Alert message={error} />}
      <div className="flex flex-row">
        <div className="flex flex-col pr-5">
          <label className="border-b-4 border-blueUniversity" htmlFor="title">
            Aula
          </label>
          <input
            className="bg-slate-200"
            type="text"
            name="title"
            placeholder="Aula 28"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col pr-5">
          <label className="border-b-4 border-blueUniversity" htmlFor="text">
            Rango de horario
          </label>
          <input
            className="bg-slate-200 "
            type="text"
            name="text"
            placeholder="9am-10am"
            onChange={handleChange}
          />
        </div>
        <button className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4">
          Guardar
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
