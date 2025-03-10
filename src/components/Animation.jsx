import React from "react";
import Marquee from "react-fast-marquee"
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div className="w-[910px] h-[550px] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        Professionality
      </p>
      <div>
        <div ref={ref} className=" text-white  space-y-6 mt-16">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <div className="relative w-[700px] h-15 bg-neutral-100 rounded-full overflow-hidden flex items-center">
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
       <div className="flex w-full mx-4 
       items-center gap-5 mt-8 ">
           <div className="w-[94%] flex flex-col ">
               <div className="flex space-y-2 flex-col text-center mb-14">
                  <Marquee>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-red-500
                        ">
                              Html
                        </div>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-sky-400
                        ">
                              Css
                        </div>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-pink-500
                        ">
                              Scss
                        </div>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]  m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-sky-400
                        ">
                              Talwind
                        </div>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-yellow-500
                        ">
                              Javascript
                        </div>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-sky-400
                        ">
                              Typescript
                        </div>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]  m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-sky-400
                        ">
                              React
                        </div>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]  m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-lime-600
                        ">
                              Figma
                        </div>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-sky-400
                        ">
                             Rramer mation
                        </div>
                        <div className="bg-neutral-950 inset-ring-2 rounded-[5px]   m-1 flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-fuchsia-700
                        ">
                             Redux
                        </div>
                        <div className="bg-neutral-950 inset-ring-2  m-1 rounded-[5px] flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-amber-700
                        ">
                             Github
                        </div>
                        <div className="bg-neutral-950 inset-ring-2  m-1 rounded-[5px] flex space-x-5 p-1.5 px-8
                         font-bold text-1xl cursor-pointer text-orange-600
                        ">
                             Gitlab
                        </div>
                  </Marquee>
               </div>
           </div>
       </div>
    </div>
  );
}

export default Animation;
