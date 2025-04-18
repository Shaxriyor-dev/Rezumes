import { Route , Routes } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import Home from "./pages/Home.jsx"
import Login from '../src/pages/Login.jsx'
import SetAbout from "./pages/SetAbout.jsx";
import Mouse from "../src/components/Mouse.jsx";
import Preject from "./components/Preject.jsx";
import Admin from "./pages/Admin.jsx";
import Logins from "../src/components/Login.jsx";
import Section from '../src/components/Home/Section.jsx';
import About from '../src/components/Home/About.jsx';
import Portfolio from "./components/Porfoliyo.jsx"
import Portfolioadd from "./components/Portfoliadd.jsx"
import Notfound from '../src/components/Home/NotFound.jsx';

function App() {
 
  return (
    <div className=" bg-[#151515] relative h-screen text-white  duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/4 h-full bg-[#3452FF] clip-custom animate-slide-left"></div>
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#070707]  clip-custom-right animate-slide-right"></div>
      <Mouse/>
      <div className="relative flex  items-center p-12 justify-evenly w-full h-screen">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-[32%] h-full bg-[#121212] text-white rounded-l-xl overflow-y-scroll  p-6 px-10"
      >
        <About/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-[65%] h-full  text-white overflow-y-scroll  rounded-r-xl"
      >

         <Routes>
               <Route path="/" element={<Home/>}></Route> 
               <Route path="/contend" element={<Login/>}></Route> 
               <Route path="/section" element={<Section/>}></Route> 
               <Route path="/admins" element={<Admin/>}></Route> 
               <Route path="/aboutme" element={<SetAbout/>}></Route> 
               <Route path="/portfolio" element={<Portfolio/>}></Route> 
               <Route path="/portfolio/:id" element={<Portfolioadd/>}></Route> 
               <Route path="/dashboard/login" element={<Logins/>}></Route> 
               <Route path="/getabout" element={<Preject/>}></Route> 
               <Route path="*" element={<Notfound/>}></Route> 
         </Routes>
      </motion.div>
    </div>
    </div>
  );
}

export default App;
