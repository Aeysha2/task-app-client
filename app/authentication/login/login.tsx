import { Button } from "../components/button"; 
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { Input } from "../components/input";
import { useNavigate } from "react-router";
import { AuthInfo } from "../components/authInfo";
import { useState } from "react";
import { baseUrl, userLoggedKey } from "~/utils/constante";
import type { UserLogged } from "~/types";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())   
      .then(({user}) => {
        localStorage.setItem(userLoggedKey, JSON.stringify (user ) )
       navigate("/dashboard");  
      })
      .catch((error) => {
        console.error("Échec de la connexion:", error);
      });
  };

  return (
    <Form>
      <FormTitle title="Connexion" />
      <Input label="Email" type="email" onChange={setEmail} />
      <Input label="Mot de passe" type="password" onChange={setPassword} />
      <Button title="Se connecter" onclick={handlerLogin} />

      <AuthInfo
        action="Inscrivez-vous"
        answer="Vous n’avez pas de compte"
        url="/register"
      />
      <AuthInfo
        action="Réinitialiser le"
        answer="Mot de passe oublié"
        url="/forgotPassword"
      />
    </Form>
  );
};
