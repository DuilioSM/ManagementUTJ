import React from "react";
import { useAuth } from "../context/authContext";
import TaskForm from "../components/TaskForm";
import Tasks from "../components/Tasks";
import Bitacora from "../assets/Bitacora.png";

function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>loading</h1>;
  return (
    <div className="flex flex-col md:flex-row min-h-screen max-h-fit w-full bg-blueUniversity	p-5 text-black md:p-10">
      <div className="h-fit bg-white rounded shadow-md p-8 mb-5  flex flex-col md:flex-row md:mb-0 md:mr-10 md:block">
        <img
          className="w-full md:h-auto md:w-72"
          alt="Bitácora universitaria"
          src={Bitacora}
        />
        <div className="flex flex-col">
          <h1 className="text-xl mb-4 text-center md:text-left">
            Bienvenido {user.displayName || user.email}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          >
            Salir
          </button>
        </div>
      </div>
      <div className="h-fit w-full">
        <TaskForm />
        <Tasks />
      </div>
    </div>
  );
}

export default Home;
