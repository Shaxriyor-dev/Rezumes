import axios from "axios";
import { FaRegTimesCircle } from "react-icons/fa";
import React, { useEffect } from "react";
import { useState } from "react";
import Datas from "../utils/About.json";

function Admin() {
  const [name, setName] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [title, setTitle] = useState("");
  const [giturl, setGiturl] = useState("");
  const [neturl, setNeturl] = useState("");
  const [see, setSee] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [err, setErr] = useState("");
  const [color , setColor] = useState("color");
  const [colors , setColors] = useState("color");
  const [Lart , setLert] = useState("");

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Datas);
  }, []);

  if (!data) return <h1>Loading ...</h1>;
  

  const handleDelete = async () => {
    if (!deleteId) {
      setErr("Malumotingizni id ni kiriting");
      setColor("red")
      return;
    }

    try {
      const response = await axios({
        method: "delete",
        url: `https://67e68f026530dbd311107b6d.mockapi.io/Data-json/${deleteId}`,
      });
      setColor("lime")
      setErr(`Sizning id : ${deleteId} malumotingiz ochib keldi`);
      setDeleteId("");
    } catch (error) {
      setErr("Sizning kiritgan ID mavjud emas!");
      setColor("red")
    }
  };

  const handle = () => {
    axios.post("https://67e68f026530dbd311107b6d.mockapi.io/Data-json", {
      name: name,
      img: imgurl,
      title: title,
      giturl: giturl,
      neturl: neturl,
      see: see,
    });
    setColors("lime")
      setLert("Sizning ma'lumotlaringiz portfolio joylandi");
  };

  return (
    <div className="w-[910px]  p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        Admin
      </p>
      <div className="mt-10">
        <div>
          <p className="text-lg font-[Boldonse]">Settings portfolio</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Text name :"
            className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4"
            type="text"
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter text :"
            className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4"
            type="text"
          />
          <input
            value={giturl}
            onChange={(e) => setGiturl(e.target.value)}
            placeholder="Enter Github"
            className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4"
            type="text"
          />
          <input
            value={neturl}
            onChange={(e) => setNeturl(e.target.value)}
            placeholder="Enter Netlify"
            className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4"
            type="text"
          />
          <input
            value={imgurl}
            onChange={(e) => setimgurl(e.target.value)}
            placeholder="Enter img"
            className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4"
            type="text"
          />
          <input
            value={see}
            onChange={(e) => setSee(e.target.value)}
            placeholder="Enter See"
            className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4"
            type="text"
          />
           {
              Lart && <p style={{color : colors}} className="text-sm py-2 font-[Poppins]">{Lart}</p>
            }
          <input
            onClick={handle}
            className="p-2.5 border-2 border-green-600 font-[Poppins] rounded-sm w-full mt-4 bg-green-600"
            type="button"
            value={"Sumbit"}
          />
        </div>
      </div>
      <div className="mt-10">
        <div>
          <p className="text-lg font-[Boldonse] ">Settings dalete</p>
          <input  style={{border :`solid 1px ${color} `}}
             placeholder="Portfolio delate id :"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4"
            type="text"
          />
          {err && <p style={{color : color}} className="py-2 font-[Poppins] text-sm">{err}</p>}
          <input
            onClick={handleDelete}
            className="p-2.5 border-2 border-green-600 font-[Poppins] rounded-sm w-full mt-4 bg-green-600"
            type="button"
            value={"Sumbit"}
          />
        </div>
      </div>
      <div className="mt-10">
      <p className="text-lg font-[Boldonse] ">Biography dalete</p>
        <div>
        {data.map((malumot) => (
          <div className="flex gap-3 item-center mt-9 flex-wrap" key={malumot.id}>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className=" font-[Poppins] text-sm text-neutral-300 hover:text-blue-600 ">{malumot.Name}</p>
               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className="bg-neutral-950 font-[Poppins] text-sm p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Age}</p>
               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className="bg-neutral-950 font-[Poppins] text-sm p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Telegram}</p>
               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className="bg-neutral-950 font-[Poppins] text-sm p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Email}</p>
               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className="bg-neutral-950 font-[Poppins] text-sm p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Birthday}</p>
               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className="bg-neutral-950 font-[Poppins] text-sm p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Nationality}</p>

               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className="bg-neutral-950 font-[Poppins] text-sm p-2.5 text-neutral-300 hover:text-blue-600">{malumot.Languages}</p>
               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className="bg-neutral-950 font-[Poppins] text-sm p-2.5 text-neutral-300 hover:text-blue-600">{malumot.Adress}</p>
               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className="bg-neutral-950 font-[Poppins] text-sm p-2.5 text-neutral-300 hover:text-blue-600">{malumot.phone}</p>
               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
            <div className="flex items-center gap-5 bg-neutral-950 px-3 border rounded-sm">
            <p className="bg-neutral-950 font-[Poppins] text-sm p-2.5 text-neutral-300 hover:text-blue-600">{malumot.Skype}</p>
               <button  className="text-[18px] text-red-600"><FaRegTimesCircle /></button>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="mt-10">
      <p className="text-lg font-[Boldonse] ">Settings biography</p>
        <div>
        <input
            placeholder="Enter Name : "
            className="p-2.5 border-2 rounded-sm w-full font-[Poppins] mt-4"
            type="text"
          />
            <input
            value={"Sumbit"}
            className="p-2.5 border-2 border-green-600 font-[Poppins] rounded-sm w-full mt-4 bg-green-600"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;
