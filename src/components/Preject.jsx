import React from "react";
import love from "./Home/Logo/logos.jpg";

function Preject() {
  return (
    <div className="w-[910px] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        About portfolio
      </p>
      <div>
        <div className="flex mt-10 items-center gap-8 justify-center">
          <img className="h-[180px] w-[250px] rounded-sm" src={love} alt="Detailed" />
          <div>
          <h1>Foot Over the word</h1>
          <p className="font-[Poppins w-[550px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptates porro sint natus culpa sit, ut odio quidem nostrum
            reiciendis eaque. Nesciunt sit numquam porro sunt dolor quos? Ipsam,
            earum?
          </p>
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Preject;
