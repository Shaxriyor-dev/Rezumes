import React from "react";
import Marquee from "react-fast-marquee";
import { useEffect, useState, useRef } from "react";

const skills = [
  { name: "React  Javascript Typescript   ", percentage: 95 },
  { name: "HTML5 & CSS3  Tailwind Bootstrap Scss", percentage: 98 },
  { name: "Adobe Photoshop Figma Canva", percentage: 90 },
  { name: "Github  Gitlab Netlify", percentage: 97 },
];
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
    <div className="w-[910px] h-[600px] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        Professionality
      </p>
      <div>
        <div ref={ref} className=" text-white  space-y-6 mt-16">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4 ">
              <div className="relative w-[800px] h-15 bg-neutral-100 rounded-full overflow-hidden flex items-center">
                <div
                  className="h-full bg-neutral-950 transition-all duration-[2000ms] ease-out flex items-center pl-4 text-blue-600 text-lg font-semibold"
                  style={{ width: visible ? `${skill.percentage}%` : "0%" }}
                >
                  {visible ? `${skill.name} ${skill.percentage}%` : ""}
                </div>
              </div>
            </div>
          ))}
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
