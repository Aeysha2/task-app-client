import { Input } from "../components/input";
import { Button } from "../components/button";
export const Register = ()=> {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Inscription</h2>

        <Input label="Prénom" type="text" /> 
        <Input label="Nom" type="text" /> 
        <Input label="Email" type="email" /> 
        <Input label="Mot de passe" type="password" />
        <Button title="S'inscrire"/>
      </form>
    </div>
  );
}