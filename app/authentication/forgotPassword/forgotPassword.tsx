import { AuthInfo } from "../components/authInfo";
import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { Input } from "../components/input";

export const ForgotPassword = () => {
  const handlerPasseword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handlerPasseword");
  };
  return (
    <Form>
      <FormTitle title="Mot de passe oublié" />
      <Input label="Email" type="email" />
      <Button title="Verifier l'email" onclick={handlerPasseword} />
        <AuthInfo action="connectez-vous" answer="Vous vous souvenez de votre mot de passe" url="/" />
      
    </Form>
  );
};
