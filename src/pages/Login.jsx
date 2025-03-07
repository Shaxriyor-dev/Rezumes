import React from "react";

function Login() {
  return (
    <div className="w-[910px]  p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        Contact Me
      </p>
      <div className="mt-13">
        <div className="flex items-center justify-center flex-wrap gap-3 font-[Poppins]">
        <input className="bg-neutral-950 h-[70px] w-[420px] p-3 rounded-[5px] outline-none" type="text" placeholder="Name *" />
        <input className="bg-neutral-950 h-[70px] w-[420px] p-3 rounded-[5px] outline-none" type="email" placeholder="Email *" />
        <input className="bg-neutral-950 h-[70px] w-[855px] p-3 rounded-[5px] outline-none mt-5" type="password" placeholder="Password *" />
        <textarea className="bg-neutral-950 h-[260px] w-[855px] p-3 rounded-[5px] outline-none mt-5 " placeholder="Massage"></textarea>
         <button className="bg-neutral-950 h-[70px] w-[855px] rounded-2xl mt-10 hover:text-blue-600 hover:border-2 ">Send Massage</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
