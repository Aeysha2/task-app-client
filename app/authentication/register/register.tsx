import { Input } from "../components/input";
import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
export const Register = () => {
  const handlerRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
    </Form>
  );
};
