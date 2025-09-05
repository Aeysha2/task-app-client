import { Input } from "../components/input";
export const Register = ()=> {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Inscription</h2>

        <Input />
        

        <div className="mb-4">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}