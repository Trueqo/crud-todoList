import React,{} from "react";
import img1 from "../../assets/img/sanRafa.jpg";
import me from "../../utils/Me";

const Card = () => {

  


  return (
    <div className="flex flex-col items-center">
      <div className="h-36 w-96 bg-yellow-500 rounded-t-lg" >
        <img className="object-cover h-36 w-96 rounded-t-lg" src={me.imgProfile2} alt="" />
      </div>

      <div className="w-32 h-32 rounded-full bg-violet-600 absolute m-14 ">
        <img className="w-32 h-32 object-cover rounded-full" src={me.imgProfile} alt="" />
      </div>

      <div className="h-44 w-96 bg-white rounded-b-lg flex flex-col justify-center items-center ">
        <p className="text-xl font-bold pt-10">{me.nombre}</p>
        <p className="mx-4">{me.description}</p>
      </div>
    </div>
  );
};

export default Card;
