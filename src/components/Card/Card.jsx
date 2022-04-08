import React,{} from "react";
import img1 from "../../assets/img/sanRafa.jpg";
import me from "../../utils/Me";

const Card = () => {



  return (
    <div className="flex flex-col items-center mt-12 mb-5 ">
      <div className="md:h-36 md:w-96  w-60 h-36   rounded-t-lg" >
        <img className="object-cover h-36 w-96 rounded-t-lg" src={me.imgProfile2} alt="" />
      </div>

      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full absolute mt-20 ">
        <img className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full" src={me.imgProfile} alt="" />
      </div>

      <div className="w-60 h-46 md:h-56 md:w-96 pb-4 bg-white rounded-b-lg flex flex-col justify-center items-center ">
        <p className="text-xl font-bold pt-10">{me.nombre}</p>
        <p className="mx-4">{me.description}</p>
      </div>
    </div>
  );
};

export default Card;
