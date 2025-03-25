import React from "react";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { PiFramerLogoFill } from "react-icons/pi";
import { TbBrandTypescript } from "react-icons/tb";
import logos from "../components/Home/Logo/logos.jpg";
import Footer from "./Footer";

function SetAbout() {
  return (
    <div>
      <div className="w-[910px]   p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg  bg-[#121212]">
        <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
          About Me
        </p>
        <div>
          <div className="flex items-center justify-center gap-8 mt-10">
            <div>
              <img className="h-[280px] rounded-full" src={logos} alt="" />
            </div>
            <div>
              <p className="font-bold font-[Boldonse] text-4xl mt-5">
                <span className="text-blue-600">S</span>hakhriyor <span className="text-blue-600">T</span>urg'unov
              </p>
              <p className="font-[Ubuntu] text-lg w-[500px] py-3 p-1 ">
                Hello My name is Shakhriyor Turg'unov . l am professional
                Front-end Developer &{" "}
                <span className="text-blue-600"> Front-end Engineer</span>{" "}
              </p>
              <p className="text-2xl p-1 py-2 font-bold font-[Boldonse]   ">
                <span className="text-blue-600">S</span>kills
              </p>
              <div className="flex items-center p-1 gap-2">
                <a className="text-[30px] hover:text-blue-600" href="#">
                  <FaHtml5 />
                </a>
                <a className="text-[30px] hover:text-blue-600" href="#">
                  <IoLogoCss3 />
                </a>
                <a className="text-[30px] hover:text-blue-600" href="#">
                  <FaReact />
                </a>
                <a className="text-[30px] hover:text-blue-600" href="#">
                  <SiTailwindcss />
                </a>
                <a className="text-[30px] hover:text-blue-600" href="#">
                  <IoLogoJavascript />
                </a>
                <a className="text-[30px] hover:text-blue-600" href="#">
                  <SiRedux />
                </a>
                <a className="text-[30px] hover:text-blue-600" href="#">
                  <FaGithub />
                </a>
                <a className="text-[30px] hover:text-blue-600" href="#">
                  <PiFramerLogoFill />
                </a>
                <a className="text-[30px] hover:text-blue-600" href="#">
                  <TbBrandTypescript />
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.p
          className="mt-10 text-center text-base/8 font-[Poppins]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
        <span className="text-blue-600 font-bold"> H</span>ello!  My name is Turg’unboyov Shahriyor, a passionate and dedicated
          programmerfrom Andijan, Uzbekistan. At 14 years old, I am deeply
          invested in the world of technology, constantly exploring new ideas
          and developing innovative projects. My journey in programming began
          with a curiosity to create and improve digital experiences, and today,
          I am proficient in both front-end and backend development.
        </motion.p>
        <motion.p
          className="mt-5 text-center text-base/8 font-[Poppins]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
         <span className="text-blue-600  font-bold">I</span>  specialize in front-end development, working with technologies like
          HTML, CSS, Scss , Bootstrap, JavaScript,Typescript , React, and Vue.js
          Github , Gitlab Node js. I am also expanding my expertise in back-end
          technologies to build full-fledged applications. Beyond programming, I
          have a strong interest in cybersecurity and networking, always eager
          to learn about the latest advancements in the field.
        </motion.p>
        <motion.p
          className="mt-5 text-base/8 text-center font-[Ubuntu]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
         <span className="text-blue-600  font-bold">C</span>oding is not just a skill for me; it’s a passion that fuels my
          creativity and problem-solving mindset. I love bringing ideas to life
          through software and developing solutions that can make a real impact.
          In the future, I aspire to become a top-tier software developer,
          creating innovative applications that improve people’s lives and
          contribute to the tech industry.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
}

export default SetAbout;
