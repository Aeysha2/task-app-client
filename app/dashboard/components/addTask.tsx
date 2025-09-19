import { Button } from "~/authentication/components/button";
import { Form } from "~/authentication/components/form";
import { FormTitle } from "~/authentication/components/formTitle";
import { Input } from "~/authentication/components/input";

export const AddTask = () => {
  const addTask = () => {};
  return (
    <Form position="start">
      <FormTitle title="Nouvelle tâche" />
      <Input label="Titre" type="text" />
      <Input label="desciption" type="text" />
      <Button title="Ajouter" onclick={addTask} />
    </Form>
  );
};
