import React from "react";

const NewTask = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-600">
      <div className="">
        <div className="h-96 w-60 border-2 border-black rounded-md bg-white">
            <form>
                
            </form>
        </div>
        <div className="flex flex-row w-60 gap-4"> 
            <button className="flex border-1 border-black h-10 w-28 justify-center mt-5 bg-blue-600 rounded-md hover:bg-blue-300">
                Crear
            </button>
            <button className="flex border-1 border-black h-10 w-28 justify-center mt-5 bg-red-600 rounded-md hover:bg-red-300">
                Cancelar
            </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
