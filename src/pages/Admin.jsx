import axios from "axios";
import React from "react";
import { useState } from "react";

function Admin() {
  const [name , setName] = useState("");
  const [imgurl , setimgurl] = useState("");
  const [title , setTitle] = useState("");
  const [giturl , setGiturl] = useState("");
  const [neturl , setNeturl] = useState("");
  const [see , setSee] = useState("");
    
     const handle = () => {
          axios.post("http://localhost:3000/Portfolio" , {
             name : name ,
             img : imgurl,
             title : title ,
             giturl : giturl,
             neturl : neturl ,
             see , see ,
          })
     }

  return (
    <div className="w-[910px]  p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        Admin
      </p>
       <div className="mt-10">
          <div>
              <p className="text-lg font-[Boldonse]">Settings portfolio</p>
              <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Text name :" className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4" type="text" />
              <input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Enter text :" className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4" type="text" />
              <input value={giturl} onChange={(e)=> setGiturl(e.target.value)} placeholder="Enter Github" className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4" type="text" />
              <input value={neturl} onChange={(e)=> setNeturl(e.target.value)} placeholder="Enter Netlify" className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4" type="text" />
              <input value={imgurl} onChange={(e)=> setimgurl(e.target.value)} placeholder="Enter img" className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4" type="text" />
              <input value={see} onChange={(e)=> setSee(e.target.value)} placeholder="Enter See" className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4" type="text" />
              <input onClick={handle} className="p-2.5 border-2 border-green-600 font-[Poppins] rounded-sm w-full mt-4 bg-green-600" type="button" value={"Sumbit"} />
          </div>
       </div>
       <div className="mt-10">
          <div>
              <p className="text-lg font-[Boldonse] ">Settings biography</p>
              <input className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4" type="text" />
              <input className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4" type="text" />
              <input className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4" type="text" />
              <input className="p-2.5 border-2 border-green-600 font-[Poppins] rounded-sm w-full mt-4 bg-green-600" type="button" value={"Sumbit"} />
          </div>
       </div>
    </div>
  );
}

export default Admin;
