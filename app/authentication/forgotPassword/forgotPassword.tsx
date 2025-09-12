import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { Input } from "../components/input";

export const ForgotPassword = () => {
  return (
    <Form>
      <FormTitle title="Mot de passe oublié" />
      <Input label="Email" type="email" />
      <Button title="Verifier l'email" />
    </Form>
  );
};
