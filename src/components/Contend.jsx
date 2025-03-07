import React, { useEffect, useState } from "react";
import About from "../utils/About.json";

function Contend() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(About);
  }, []);

  if (!data) return <h1>Loading ...</h1>;

  console.log(data);
  return (
    <div className="w-[910px] h-[500px] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-poppins">
        Biography
      </p>
      <p className="mt-10 text-[19px] font-ubuntu text-base/8 text-neutral-400">
        I'm a Freelancer Front-end Developer with over 2 years of experience.
        I'm from Uzbekistan. I code and create web elements for amazing people
        around the world. I like working with new people. New people are new
        experiences.
      </p>

      <div>
        {data.map((malumot) => (
          <div className="flex gap-3 item-center mt-9 flex-wrap" key={malumot.id}>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Name}</p>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Age}</p>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Telegram}</p>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Email}</p>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Birthday}</p>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Nationality}</p>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Languages}</p>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Adress}</p>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.phone}</p>
            <p className="bg-neutral-950 font-[Poppins] text-[19px] p-2.5 text-neutral-300 hover:text-blue-600 rounded-[5px]">{malumot.Skype}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contend;
