import { Input } from "../components/input";
import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { AuthInfo } from "../components/authInfo";
import { useNavigate } from "react-router";
import { useState } from "react";
import { baseUrl } from "~/utils/constante";
export const Register = () => {
  const navigate = useNavigate()
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPasseword] = useState("")

  const handlerRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch (`${baseUrl}/users`, {method: "POST",
      headers : {"Content-type": "application/json"},
      body:JSON.stringify({firstname,lastname,email,password})})
    .then(response=> response.json)
    .then(user =>{
      console.log(user)
      //navigate("/") 
      })
    .catch((error)=>{
      console.error("Erreur lors de l'ajout de l'utilisateur:", error) })
    }
  return (
    <Form>
      <FormTitle title="Inscription" />
      <Input label="Prénom" type="text" onChange={setFirstname} />
      <Input label="Nom" type="text" onChange={setLastname}/>
      <Input label="Email" type="email" onChange={setEmail}/>
      <Input label="Mot de passe" type="password" onChange={setPasseword} />
      <Input label="Confirmer le mot de passe" type="password" onChange={setPasseword}/>
      <Button title="S'inscrire" onclick={handlerRegister} />
      
    <AuthInfo action="connectez-vous" answer="Vous avez deja un compte" url="/" />
  
    </Form>
  );
  };

