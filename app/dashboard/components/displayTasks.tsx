import type { TaskParams, UserLogged } from "~/types";
import { TaskItem } from "./taskItem";
import { useEffect, useState } from "react";
import { baseUrl } from "~/utils/constante";


export const DisplayTask = ({user}:{user?:UserLogged|null}) => {
  const [getTasks, setTask] = useState <TaskParams[]>([])
  useEffect (()=>{
    console.log("Moustapha",user)
    fetch(`${baseUrl}/tasks/users/${user?.id}`)
    .then(response => response.json())
    .then(tasks => setTask(tasks))

  } , [user]) 
  return (
    <div className="bg-gray-100 p-10 h-full">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <h1 className="text-xl my-10 text-center uppercase">liste des taches </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {getTasks.map(({description,id,status,title}) => <TaskItem key={id} description={description} id={id} status={status} title={title} />)}
        </div>
      </div>
    </div>
  );
};
