import {  useState } from "react";
import { Button } from "~/authentication/components/button";
import { Form } from "~/authentication/components/form";
import { FormTitle } from "~/authentication/components/formTitle";
import { Input } from "~/authentication/components/input";
import type { UserLogged } from "~/types";
import { baseUrl } from "~/utils/constante";

export const AddTask = ({user}:{user?:UserLogged|null}) => {
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")

  const addTask = (event:any) => {
    event.preventDefault()
     fetch(`${baseUrl}/tasks`,{method:"POST", 
      headers :{"Content-Type": "application/json"},
      body:JSON.stringify({description, title, userID:user?.id})})
      .then(response => response.json())
      .then(task => {
       
      })
      .catch((error) => {
    console.error("Erreur lors de la création de la tâche :", error);
        setDescription("")
        setTitle("")
  })
  };
    
  return (
    <Form position="start">
      <FormTitle title="Nouvelle tâche" />
      <Input label="Titre" type="text" onChange={setTitle} />
      <Input label="desciption" type="text" onChange={setDescription} />
      <Button title="Ajouter" onclick={addTask } />
    </Form>
  );
};
