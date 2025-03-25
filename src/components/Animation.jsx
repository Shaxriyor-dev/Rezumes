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
          <a href="https://i.ytimg.com/vi/x_BiMRP2au8/maxresdefault.jpg" className="text-2xl">Html</a>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <IoLogoCss3 />
          <a href="https://e7.pngegg.com/pngimages/589/943/png-clipart-web-development-responsive-web-design-cascading-style-sheets-web-design-angle-web-design.png" className="text-2xl">Css</a>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <IoLogoJavascript />
          <a href="https://avatars.mds.yandex.net/i?id=0813b7d6abb885a0c18e4c0f0b26d4c3_l-5251249-images-thumbs&n=13" className="text-2xl">Javascript</a>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <TbBrandTypescript />
          <a href="https://habrastorage.org/getpro/habr/upload_files/cea/e08/dc8/ceae08dc86d56ed7be9ac82ee281267f.png" className="text-2xl">Typescript</a>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <FaReact />
          <a href="https://avatars.mds.yandex.net/i?id=0a198d85d96fafb8ae1042245d7f23e5_l-9843912-images-thumbs&n=13" className="text-2xl">React</a>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <SiTailwindcss />
          <a href="https://i.ytimg.com/vi/PnOeJ0SKax8/maxresdefault.jpg" className="text-2xl">Tailwind</a>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <SiRedux />
          <a href="https://miro.medium.com/v2/resize:fit:1200/1*I41ajuzUNAVtZGa7wExkNA.png" className="text-2xl">Redux</a>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <FaGithub />
          <a href="https://avatars.mds.yandex.net/i?id=bb399f4a1279de25b21eb1f0b68a75b7f8f81916-5221602-images-thumbs&n=13" className="text-2xl">Github</a>
        </div>
        <div className="flex items-center gap-2 text-3xl hover:text-sky-500">
        <PiFramerLogoFill />
          <a href="https://miro.medium.com/v2/resize:fit:1200/1*vt36Re3GDIxL8HeXKoQDxQ.png" className="text-2xl">Framer motion</a>
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
