import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-[910px] h-[650px] flex items-center justify-center  p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
        <div>
            <p className="text-[190px] font-[Rubik] text-center">404</p>
            <p className="text-center text-4xl font-[Rubik] ">Page not found</p>
            <p className="text-center mt-3 font-[Poppins]">Duis dolor sit amet, consectetur adipiscing elitvestibulum in pharetra. </p>
            <div className="flex items-center justify-center mt-5">
            <Link to={'/'}>Back to homepage</Link>
            </div>
        </div>
    </div>
  );
}

export default NotFound;
