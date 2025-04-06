import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const plans = [
  "I like summer more than winter.",
  "I often bike with my friends",
  "I like pizza and pilaf.",
  "I dream of making changes to revolutionary software.",
  "I am still in school",
  "I can spend hours coding without noticing the time",
  "My favorite movie is The Green Mile",
  "I really like working with a team.",
  "My favorite sports are volleyball and football",
];

const texts = ["</>", "@", "##", "?", "%", "&&", "$$", "!!!", "(*)", "(+)"];

function Plans() {
  const [hide, setHide] = useState(true);

  const containerRefs = useRef([]);
  const glowRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const rect = containerRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (glowRefs.current[index]) {
      glowRefs.current[index].style.left = `${x - 64}px`;
      glowRefs.current[index].style.top = `${y - 64}px`;
    }
  };

  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let interval;
    if (hovering) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % texts.length);
      }, 400);
    } else {
      setIndex(0);
    }
    return () => clearInterval(interval);
  }, [hovering]);

  return (
    <div className="w-full p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px]  font-[Poppins]">
        My fun facts
      </p>
      <div>
        <p className="font-[Poppins] text-neutral-300 text-lg py-7">
          Hello! I am a Front-end and Back-end enthusiast with a deep passion
          for coding and creating innovative solutions. I love diving into
          complex challenges and turning ideas into reality. Here are some
          interesting facts about me:
        </p>
        <div className="gap-4 flex flex-wrap items-center">
          {plans.map((plan, index) => (
            <div className="flex items-center" key={index}>
              {hide && (
                <div
                  ref={(el) => (containerRefs.current[index] = el)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  className="relative group inline-flex items-center justify-center rounded-sm  p-2.5 bg-neutral-950 overflow-hidden  border-neutral-600"
                >
                  <span className="relative z-10 text-lg  font-[Poppins] text-neutral-400 hover:text-white">
                    {plan}
                  </span>
                  <span className="pointer-events-none absolute inset-0 rounded-full">
                    <span
                      ref={(el) => (glowRefs.current[index] = el)}
                      className="absolute w-32 h-32 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    ></span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <motion.button 
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="relative flex items-center mt-10 gap-4 overflow-hidden p-3 px-6 bg-neutral-950 text-neutral-300  rounded-lg text-lg font-[Poppins] shadow-l"
        >          <span className=" text-lg text-[Poppins]">More complete</span>

          <div className="relative ">
            <motion.span
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center text-yellow-400 justify-start"
            >
              {texts[index]}
            </motion.span>
            <span className="invisible ">{texts[0]}</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}

export default Plans;
