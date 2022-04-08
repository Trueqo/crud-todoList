import React from "react";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Task = () => {
  const [title, SetTitle] = useState([]);

  useEffect(() => {
    const obtenerTitulos = async () => {
      const url = "https://todo-list-m-e-r-n.herokuapp.com/api/task";
      const result = await axios.get(url);

      SetTitle(result.data);
    };
    obtenerTitulos();
  }, []);

  return(<di>{title.map((dato)=>{return(
    
    <div className="w-full px-6 mt-6  md:px-12 md:mt-10 mb-5 ">
          <div className="flex flex-row justify-end align-baseline gap-2 mb-1">
            <span className="text-blue-600 text-2xl">
              <BiEdit />
            </span>
            <span className="text-red-500 text-xl">
              <FaTrashAlt />
            </span>
          </div>

          <div className="border-2 border-black md:w-full md:h-20 flex flex-row items-center  w-full h-20">
            <div className="w-8 h-8 border-2 border-red-900 ml-6 md:ml-10"></div>
            <div>
              <h1 className="ml-10">
                {dato.description}
              </h1>
            </div>
          </div>
        </div>
    
    
    )})}</di>)
}; 

  
export default Task;
