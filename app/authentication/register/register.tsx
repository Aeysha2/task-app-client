import { Input } from "../components/input";
import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
export const Register = () => {
  return (
    <Form>
      <FormTitle title="Inscription" />
      <Input label="Prénom" type="text" />
      <Input label="Nom" type="text" />
      <Input label="Email" type="email" />
      <Input label="Mot de passe" type="password" />
      <Button title="S'inscrire" />
    </Form>
  );
};
