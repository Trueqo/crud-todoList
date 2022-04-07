import React from "react";
import Card from "../components/Card/Card";
import GoToTask from "../components/GoToTask/GoToTask";

const Home = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex flex-row align-middle justify-center items-center h-full bg-slate-400"
    >
      <div className="w-full h-screen bg-gray-600 flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 h-screen bg-gray-600 flex justify-center items-center">
          <Card />
        </div>
        <div className="w-full md:w-1/2 h-screen flex justify-center items-center">
          <GoToTask />
        </div>
      </div>
    </div>
  );
};

export default Home;
