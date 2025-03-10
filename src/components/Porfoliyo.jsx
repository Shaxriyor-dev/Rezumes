import React from "react";
import { motion } from 'framer-motion';
import Koffe from "../assets/imgs/koffe.png";
import trol from "../assets/imgs/tra.png";
import uzmu from "../assets/imgs/uzmu.png"
import { SiGithub } from "react-icons/si";  
import love from "../assets/imgs/love.png";
import { SiNetlify } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";




function Porfoliyo() {
  return (
    <div className="w-[910px] h-[100%] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        Portfolio
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        viewport={{ once: true }}
        className="your-div-class"
      >
           <div className="mt-10 p-8 rounded-lg bg-neutral-950 inset-shadow-sm inset-shadow-indigo-500  flex justify-center items-center gap-10">
        <div>
          <img
            className=" rounded-md shadow-lg shadow-blue-500/50 "
            src={love}
            alt=""
          />
        </div>
        <div>
          <p className="text-lg font-[Poppins] p-1.5">Foot Over the word</p>
          <p className="w-[500px] text-[14px] font-[Poppins] p-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim
            aperiam, quae velit aut repellendus. Eius nulla a laboriosam dicta.
          </p>
          <div className="mt-5 m-1.5 flex items-center gap-1">
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " href="https://github.com/Shaxriyor-dev/eatly">
                <SiGithub />
              </a>
            </div>
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " href="https://app.netlify.com/sites/eating-foods/overview">
              <SiNetlify />
              </a>
            </div>
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " onToggle={true} href="https://eating-foods.netlify.app">
              <FaRegEye />
              </a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}  // O'rtacha tezlikda animatsiya
        viewport={{ once: true }}
        className="your-div-class"
      >
        <div className="mt-10 p-8 rounded-lg bg-neutral-950 inset-shadow-sm inset-shadow-indigo-500  flex justify-center items-center gap-10">
        <div>
          <img
            className=" h-[160px] w-full  rounded-md shadow-lg shadow-blue-500/50 "
            src={uzmu}
            alt=""
          />
        </div>
        <div>
          <p className="text-lg font-[Poppins] p-1.5">Uzum Market uz</p>
          <p className="w-[500px] text-[14px] font-[Poppins] p-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim
            aperiam, quae velit aut repellendus. Eius nulla a laboriosam dicta.
          </p>
          <div className="mt-5 m-1.5 flex items-center gap-1">
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " href="https://github.com/Shaxriyor-dev/Uzum-market">
                <SiGithub />
              </a>
            </div>
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " href="https://eating-foods.netlify.app">
              <SiNetlify />
              </a>
            </div>
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " onToggle={true} href="https://uzumteskor.netlify.app">
              <FaRegEye />
              </a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}  // Sekinroq animatsiya
        viewport={{ once: true }}
        className="your-div-class"
      >
          <div className="mt-10 p-8 rounded-lg bg-neutral-950 inset-shadow-sm inset-shadow-indigo-500  flex justify-center items-center gap-10">
        <div>
          <img
            className=" h-[160px] w-full rounded-md shadow-lg shadow-blue-500/50 "
            src={trol}
            alt=""
          />
        </div>
        <div>
          <p className="text-lg font-[Poppins] p-1.5">Happiness is Travelling</p>
          <p className="w-[500px] text-[14px] font-[Poppins] p-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim
            aperiam, quae velit aut repellendus. Eius nulla a laboriosam dicta.
          </p>
          <div className="mt-5 m-1.5 flex items-center gap-1">
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " href="https://github.com/Shaxriyor-dev/eatly">
                <SiGithub />
              </a>
            </div>
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " href="https://www2008.netlify.app/">
              <SiNetlify />
              </a>
            </div>
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " onToggle={true} href="https://www2008.netlify.app">
              <FaRegEye />
              </a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}  
        viewport={{ once: true }}
        className="your-div-class"
      >
         <div className="mt-10 p-8 rounded-lg bg-neutral-950 inset-shadow-sm inset-shadow-indigo-500  flex justify-center items-center gap-10">
        <div>
          <img
            className=" h-[160px] w-full rounded-md shadow-lg shadow-blue-500/50 "
            src={Koffe}
            alt=""
          />
        </div>
        <div>
          <p className="text-lg font-[Poppins] p-1.5">Shopping is Coffee</p>
          <p className="w-[500px] text-[14px] font-[Poppins] p-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim
            aperiam, quae velit aut repellendus. Eius nulla a laboriosam dicta.
          </p>
          <div className="mt-5 m-1.5 flex items-center gap-1">
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " href="https://github.com/Shaxriyor-dev/eatly">
                <SiGithub />
              </a>
            </div>
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " href="https://coffee-0008.netlify.app">
              <SiNetlify />
              </a>
            </div>
            <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
              <a className=" text-xl  text-white " onToggle={true} href="https://coffee-0008.netlify.app">
              <FaRegEye />
              </a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

export default Porfoliyo;
