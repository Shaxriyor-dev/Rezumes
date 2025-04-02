import React, { useState } from "react";

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

function Plans() {
  const [hide, setHide] = useState(true);

  const handleclick = () => {
    setHide(!hide);
  };

  return (
    <div className="w-full  p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
          My fun facts
      </p>
      <div>
        <p className="font-[poppins] text-neutral-300 text-lg py-7">
          Hello! I am a Front-end and Back-end enthusiast with a deep passion
          for coding and creating innovative solutions. I love diving into
          complex challenges and turning ideas into reality. Here are some
          interesting facts about me:
        </p>
        <div className=" gap-4 flex flex-wrap items-center">
          {plans.map((plan) => (
            <div className="flex items-center">
              {hide && (
                <div className="bg-neutral-950 flex items-center text-neutral-300 rounded-sm p-3 px-5 hover:text-blue-600">
                  <p className=" text-[17px] font-[Poppins]">{plan}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
