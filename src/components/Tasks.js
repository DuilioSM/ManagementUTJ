import React from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import TaskContainer from "./TaskContainer";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const getTask = async () =>
     onSnapshot(
      collection(db, "tasks"),
      (querySnapshot) => {
        setTasks(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      },
      (err) => {
        console.error(err);
      }
    );

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="h-full bg-white rounded shadow-md px-8 pt-6 pb-8">
      {tasks.map((task) => (
        <TaskContainer key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Tasks;
