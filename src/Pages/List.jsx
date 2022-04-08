import React from "react";
import Task from "../components/Task/Task";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const List = () => {
  return (
    <div className="h-screen w-full px-6 flex justify-center items-center flex-col bg-slate-400">
      <div className="flex flex-row justify-between w-full md:w-3/4 pb-5">
        <h1 className=" text-white font-bold md:w-3/4 text-4xl  w-full">
          Lista de tareas
        </h1>
        <Link to="/">
          <span className="text-black text-5xl">
            <IoMdArrowRoundBack />
          </span>
        </Link>
      </div>

      <div className="bg-white flex flex-col w-full border-2 border-black h-3/4 md:w-3/4 overflow-auto">
        <Task />
        
      </div>
    </div>
  );
};

export default List;
