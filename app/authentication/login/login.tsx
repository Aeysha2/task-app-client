import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { Input } from "../components/input";

export const Login = () => {
  const handlerLogin =(event: React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();  
    console.log("handlerLogin")}
  return (
    <Form>
      <FormTitle title="Connexion" />
      <Input label="Email" type="email" />
      <Input label="Mot de passe" type="password" />
      <Button title="Se connecter" onclick={handlerLogin} />
    </Form>
  );
};
