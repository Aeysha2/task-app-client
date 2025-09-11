import { Button } from "../components/button"
import { Input } from "../components/input"

export const Login = ()=> {
    return (<div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Connexion</h2>
    
            <Input label="Email" type="email" /> 
            <Input label="Mot de passe" type="password" />
            <Button title="Se connecter"/>
          </form>
        </div>)
}