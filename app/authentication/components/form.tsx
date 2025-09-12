import type React from "react";

export const Form = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md"> 
        {children}
      </form>
    </div>
  );
};
