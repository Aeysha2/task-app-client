import type { ButtonParams } from "~/types"

export const Button = (params : ButtonParams) => {
    return (
        <button
        onClick={params.onclick}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {params.title}
        </button >
    )
}

