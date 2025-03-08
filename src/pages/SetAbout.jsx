import React from "react";
import { motion } from "framer-motion";

function SetAbout() {
  return (
    <div className="w-[910px] h-[100%]  p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        About Me
      </p>
      <motion.p
        className="mt-10 text-base/8 font-[Poppins]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        Hello! My name is Turg’unboyov Shahriyor, a passionate and dedicated
        programmerfrom Andijan, Uzbekistan. At 14 years old, I am deeply
        invested in the world of technology, constantly exploring new ideas and
        developing innovative projects. My journey in programming began with a
        curiosity to create and improve digital experiences, and today, I am
        proficient in both front-end and backend development.
      </motion.p>
      <motion.p
        className="mt-5 text-base/8 font-[Poppins]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        I specialize in front-end development, working with technologies like
        HTML, CSS, Scss , Bootstrap, JavaScript,Typescript , React, and Vue.js
        Github , Gitlab Node js. I am also expanding my expertise in back-end
        technologies to build full-fledged applications. Beyond programming, I
        have a strong interest in cybersecurity and networking, always eager to
        learn about the latest advancements in the field.
      </motion.p>
      <motion.p
         className="mt-5 text-base/8 font-[Poppins]"
         initial={{ opacity: 0, x: -30 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.2, delay: 0.5 }}
      >
      Coding is not just a skill for me; it’s a passion that fuels my creativity and problem-solving mindset. I love bringing ideas to life through
software and developing solutions that can make a real impact. In the future, I aspire to become a top-tier software developer,
creating innovative applications that improve people’s lives and contribute to the tech industry.
      </motion.p>
      <p></p>
    </div>
  );
}

export default SetAbout;
