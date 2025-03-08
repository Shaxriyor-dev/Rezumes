import React from "react";
import { motion } from "framer-motion";
import Home from "./pages/Home.jsx"
import Login from '../src/pages/Login.jsx'
import Section from '../src/components/Home/Section.jsx';
import { Route , Routes } from "react-router-dom";
import About from '../src/components/Home/About.jsx';
import Notfound from '../src/components/Home/NotFound.jsx';
import SetAbout from "./pages/SetAbout.jsx";


function App() {
  return (
    <div className=" bg-[#151515] relative h-screen text-white  duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/4 h-full bg-[#3452FF] clip-custom animate-slide-left"></div>
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#070707]  clip-custom-right animate-slide-right"></div>
      <div className="relative flex items-center justify-evenly h-full">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-[460px] h-[650px] bg-[#121212] text-white rounded-l-xl overflow-y-scroll  p-6 px-10"
      >
        <About/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-[920px] h-[650px]  text-white overflow-y-scroll  rounded-r-xl"
      >
         
         <Routes>
               <Route path="/" element={<Home/>}></Route> 
               <Route path="/login" element={<Login/>}></Route> 
               <Route path="/section" element={<Section/>}></Route> 
               <Route path="/setabout" element={<SetAbout/>}></Route> 
               <Route path="*" element={<Notfound/>}></Route> 
         </Routes>
      </motion.div>
    </div>
    </div>
  );
}

export default App;
