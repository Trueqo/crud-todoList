import React from "react";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

const Task = () => {
  return (
    <div className="w-full px-6 mt-6  md:px-12 md:mt-5 mb-5">
      <div className="flex flex-row justify-end align-baseline gap-2 mb-1">
        <span className="text-blue-600 text-2xl">
          <BiEdit />
        </span>
        <span className="text-red-500 text-xl">
          <FaTrashAlt />
        </span>
      </div>

      <div className="border-2 border-black md:w-full md:h-20   flex flex-row items-center w-full  h-20">
        <div className="w-8 h-8 border-2 border-black ml-6 md:ml-10"></div>
      </div>
    </div>
  );
};

export default Task;
