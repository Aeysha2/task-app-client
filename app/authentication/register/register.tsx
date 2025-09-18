import { Input } from "../components/input";
import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { AuthInfo } from "../components/authInfo";
import { useNavigate } from "react-router";
export const Register = () => {
  const navigate = useNavigate()
  const handlerRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/")
    console.log("handlerRegister");
  };
  return (
    <Form>
      <FormTitle title="Inscription" />
      <Input label="Prénom" type="text" />
      <Input label="Nom" type="text" />
      <Input label="Email" type="email" />
      <Input label="Mot de passe" type="password" />
      <Input label="Confirmer le mot de passe" type="password" />
      <Button title="S'inscrire" onclick={handlerRegister} />
      
    <AuthInfo action="connectez-vous" answer="Vous avez deja un compte" url="/" />
  
    </Form>
  );
};
