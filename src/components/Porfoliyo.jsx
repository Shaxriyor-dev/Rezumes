import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import { useEffect } from "react";
import { FaEye } from "react-icons/fa";

function Porfoliyo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://67e68f026530dbd311107b6d.mockapi.io/Data-json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-[910px]  p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        Portfolio
      </p>
      {data.map((item) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="your-div-class"
          >
            <div className="mt-10 p-8 rounded-lg bg-neutral-950 inset-shadow-sm inset-shadow-indigo-500  flex justify-center items-center gap-10">
              <div className="relative h-[180px] w-[350px] rounded-xl  ">
                <img
                  className=" rounded-xl w-full h-full object-cover transition duration-300 ease-in-out  "
                  src={item.img}
                  alt=""
                />
                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-5 flex items-center justify-center opacity-0 hover:opacity-85 transition-opacity border-2 text-blue-500">
                  <a href={item.see} className="text-blue-500 text-3xl font-bold"><FaEye /></a>
                </div>
              </div>
              <div>
                <p className="text-lg font-[Poppins] p-1.5">{item.name}</p>
                <p className="w-[500px] text-[14px] font-[Poppins] p-1.5">
                  {item.title}
                </p>
                <div className="mt-5 m-1.5 flex items-center gap-1">
                  <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
                    <a className=" text-xl  text-white " href={item.girurl}>
                      <SiGithub />
                    </a>
                  </div>
                  <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
                    <a className=" text-xl  text-white " href={item.neturl}>
                      <SiNetlify />
                    </a>
                  </div>
                  <div className="bg-[#000] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
                    <a
                      className=" text-xl  text-white "
                      onToggle={true}
                      href={item.see}
                    >
                      <FaRegEye />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Porfoliyo;
