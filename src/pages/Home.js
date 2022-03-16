import React from "react";
import { useAuth } from "../context/authContext";
import TaskForm from "../components/TaskForm";
import Tasks from "../components/Tasks";
import Bitacora from '../assets/Bitacora.png'

function Home() {

  const { user, logout, loading } = useAuth();
  
  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>loading</h1>;
  return (
    <div className="flex min-h-screen max-h-fit w-full bg-blueUniversity	 p-10 text-black">
      <div className="h-fit bg-white rounded shadow-md p-8 mr-10">
        <img className="w-72" alt="Bitácora universitaria" src={Bitacora}/>
        <h1 className="text-xl mb-4 ">
          Bienvenido {user.displayName || user.email}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
        >
          Salir
        </button>
      </div>
      <div className="h-fit w-full">
        <TaskForm />
        <Tasks />
      </div>
    </div>
  );
}

export default Home;
 