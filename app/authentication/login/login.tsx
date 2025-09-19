import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { Input } from "../components/input";
import {useNavigate  } from "react-router";
import { AuthInfo } from "../components/authInfo";

export const Login = () => {
  const navigate = useNavigate() 
  const handlerLogin =(event: React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();  
    navigate("dashboard")
    console.log("handlerLogin")}
  return (
    <Form >
      <FormTitle title="Connexion" />
      <Input label="Email" type="email" />
      <Input label="Mot de passe" type="password" />
      <Button title="Se connecter" onclick={handlerLogin} />
      
  <AuthInfo action="Inscrivez-vous" answer="Vous n’avez pas de compte" url="/register" />
  <AuthInfo action="reinitialiser le" answer="Mot de passe oublie" url="/forgotPassword" />
    </Form>
  );
};
