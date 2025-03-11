import React from "react";
import Marquee from "react-fast-marquee";
import { useEffect, useState, useRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { PiFramerLogoFill } from "react-icons/pi";
import { TbBrandTypescript } from "react-icons/tb";




function Animation() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div className="w-[910px] h-[100%] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        Professionality
      </p>
      <div className="mt-9 flex item-center flex-wrap w-[380px] gap-6">
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
          <FaHtml5 />
          <p className="text-2xl">Html</p>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <IoLogoCss3 />
          <p className="text-2xl">Css</p>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <IoLogoJavascript />
          <p className="text-2xl">Javascript</p>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <TbBrandTypescript />
          <p className="text-2xl">Typescript</p>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <FaReact />
          <p className="text-2xl">React</p>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <SiTailwindcss />
          <p className="text-2xl">Tailwind</p>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <SiRedux />
          <p className="text-2xl">Redux</p>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <FaGithub />
          <p className="text-2xl">Github</p>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <PiFramerLogoFill />
          <p className="text-2xl">Framer motion</p>
        </div>
      </div>
      <div
        className="flex w-full mx-2 
       items-center gap-5 mt-8 "
      >
        <div className="w-[98%] flex flex-col ">
          <div className="flex space-y-3 flex-col text-center">
            <Marquee>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600    m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Html
              </div>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600    m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Css
              </div>
              <div
                className=" bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Scss
              </div>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600  m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Talwind
              </div>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600  m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Javascript
              </div>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Typescript
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      <div
        className="flex w-full  
       items-center gap-5 mx-2 "
      >
        <div className="w-[98%] flex flex-col  ">
          <div className="flex space-y-2 flex-col  text-center">
            <Marquee direction="right" speed={50}>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                React
              </div>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Framer motion
              </div>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Gitlab
              </div>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Github
              </div>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600    m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Redux
              </div>
              <div
                className="bg-neutral-950 font-[Poppins] text-[19px] text-neutral-300 hover:text-blue-600    m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer
                        "
              >
                Figma
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animation;
