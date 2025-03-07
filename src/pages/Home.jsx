import React from "react";
import Contend from '../components/Contend.jsx'
import { useState, useEffect } from "react";
import logos from "../components/Home/Logo/logos.jpg";

function Home() {
  const texts = ["Developer", "Designer", "Freelancer", "Creator", "Innovator"];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentText = texts[index];
    let i = 0;
    let newText = "";

    const typingInterval = setInterval(() => {
      if (i < currentText.length) {
        newText += currentText[i];
        setDisplayText(newText);
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText("");
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <div>
      <div className="flex items-center   gap-20  bg-[#121212] w-[910px] px-19 rounded-b-lg   h-[650px] ">
        <div className="flex items-center justify-center h-[280px] w-[280px] rounded-[50%] bg-blue-600">
          <div className="flex items-center justify-center h-[260px] w-[260px] rounded-[50%] bg-orange-300 mt-8 mr-7">
            <img
              className="h-[245px] w-[245px] rounded-[50%] mb-8 ml-10"
              src={logos}
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="text-5xl font-[Ubuntu] text-neutral-400 py-5">
            Hello! I'm a
          </p>
          <span className="relative after:content-['|'] after:animate-blink font-bold font-[Ubuntu] text-7xl py-5 ">
            {displayText}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <Contend/>
      </div>
    </div>
  );
}

export default Home;
