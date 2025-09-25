import { useEffect, useState } from "react";
import { Button } from "~/authentication/components/button";
import { Form } from "~/authentication/components/form";
import { FormTitle } from "~/authentication/components/formTitle";
import { Input } from "~/authentication/components/input";
import { baseUrl } from "~/utils/constante";

export const AddTask = () => {
  const [description, setdescription] = useState("")
  const [title, setTitle] = useState("")

  const addTask = (event:any) => {
    event.preventDefault()
     fetch(`${baseUrl}/tasks`,{method:"POST", 
      headers :{"Content-Type": "application/json"},
      body:JSON.stringify({description:"Devoir", title:"a faire"})})
      .then(response => response.json())
      .then(task => console.log(task))
      .catch((error) => {
    console.error("Erreur lors de la création de la tâche :", error);
  })
    console.log(description,title)
  };
    
  return (
    <Form position="start">
      <FormTitle title="Nouvelle tâche" />
      <Input label="Titre" type="text" onChange={setTitle} />
      <Input label="desciption" type="text" onChange={setdescription} />
      <Button title="Ajouter" onclick={addTask } />
    </Form>
  );
};
