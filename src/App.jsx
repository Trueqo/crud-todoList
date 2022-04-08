import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Home from "../src/Pages/Home";
import List from "./Pages/List";
import NewTask from "./Pages/NewTask";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/newtask" element={<NewTask/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
