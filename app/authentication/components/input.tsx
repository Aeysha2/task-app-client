export const Input = () => {
    return (
<div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
            Prénom
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
    );
}