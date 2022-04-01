import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col relative w-auto h-auto m-0">
      <div className="w-full h-1/2 bg-yellow-500">1</div>

      <div className="w-5 h-5 rounded-full bg-violet-600 absolute top-1/3 left-1/2">3</div>

      <div className="w-full h-1/2 bg-green-500">2</div>
    </div>
  );
};

export default Card;
