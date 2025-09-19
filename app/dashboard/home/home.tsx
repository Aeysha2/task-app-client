import { useState } from "react";
import { AddTask } from "../components/addTask";
import { DisplayTask } from "../components/displayTasks";

export const Home = () => {
    const [tasksVisibility, setTasksVisibility ] = useState(true)

  const toggle = () => {
    setTasksVisibility(!tasksVisibility)
  }

  if(tasksVisibility) {
    
  }
  return (
    <>
      <div className="bg-blue-600 p-10 gap-40 flex  justify-center items-center">
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white flex  justify-center items-center rounded-full uppercase">YK</div>
            <small className="text-base uppercase">Yacou keita</small>
        </div>
        <h1 className="text-white text-3xl">Application de gestion de tâche</h1>
      </div>
      <nav className="bg-gray-100 p-10">
        <ul className="flex justify-center items-center gap-8">
            { tasksVisibility 
            ? <li onClick={toggle} className="text-base cursor-pointer uppercase hover:text-blue-600 hover:font-medium">ajouter</li>
            :<li onClick={toggle} className="text-base cursor-pointer uppercase hover:text-blue-600 hover:font-medium">afficher la liste des tâche</li>
            }
        </ul>
      </nav>
      {
      tasksVisibility 
      ? <DisplayTask/>
      : <AddTask/>
      }
    </>
  );
};
