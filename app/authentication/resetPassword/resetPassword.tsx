import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { Input } from "../components/input";

export const ResetPassword = () => {
  const handlerResetpassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handlerResetpassword");
  };
  return (
    <Form>
      <FormTitle title="Reinitialisation de mot de passe" />
      <Input label="Mot de passe" type="password" />
      <Input label="Confirmer le mot de passe" type="password" />
      <Button title="Reinitialiser" onclick={handlerResetpassword} />
    </Form>
  );
};
