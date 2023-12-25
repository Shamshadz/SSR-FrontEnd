import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-[100%] bg-slate-950  h-full">
      <Header></Header>
      <div className="  bg-slate-950 lg:w-[60%] md:w-[75%] w-[80%] mx-auto ">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
