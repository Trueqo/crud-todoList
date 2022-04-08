import React from "react";
import Card from "../components/Card/Card";
import GoToTask from "../components/GoToTask/GoToTask";

const Home = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex flex-row align-middle  h-full"
    >
      <div className="w-full h-screen bg-gray-600 flex flex-col md:flex-row">
        <div className="flex flex-row w-full justify-center  md:flex-col md:w-1/2">
          <Card />
        </div>
        <div className="flex flex-row w-full justify-center md:flex-col md:w-1/2">
          <GoToTask />
        </div>
      </div>
    </div>
  );
};

export default Home;
