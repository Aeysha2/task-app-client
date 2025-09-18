import type { AuthInfoParams } from "~/types"

export const AuthInfo = ({action,answer,url}:AuthInfoParams)=> {
    return  (<p className="mt-4 text-sm text-gray-600">
    {answer}?{" "}
    <a href={url} className="text-blue-500 hover:underline">
    {action}
    </a>
  </p>)
}