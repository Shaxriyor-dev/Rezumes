import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Commet } from "react-loading-indicators";
import { FaRegEye } from "react-icons/fa";

function Portfoliadd() {
  const [port, setPort] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://67e68f026530dbd311107b6d.mockapi.io/Data-json/${id}`)
      .then((response) => response.json())
      .then((data) => setPort(data))
      .catch((error) => console.error("Fetch error:", error));
  }, [id]);

  if (!port || port.length == 0) {
    return (
      <div className="h-[500px] flex items-center rounded-lg w-full  bg-[#121212] justify-center">
        <Commet color="#00dcff" size="large" text="" textColor="#630505" />
      </div>
    );
  }
  const { name, img, title, see } = port;
  return (
    <div className="w-full  p-6 inset-ring-1 inset-ring-neutral-900 rounded-lg bg-[#121212]">
      <img className="w-full h-[370px] rounded-sm" src={img} alt="" />
      <hr className="mt-6" />
      <p className="text-3xl py-3">{name}</p>
      <p className="text-lg leading-9 ">
        {title} These sites were created by Turgunboyov Shahriyor. I created
        these projects to make people's work easier and prevent important
        problems. I am trying to help people and businesses improve their work.
        Here you can find some of the projects I have worked on. Each one
        reflects my passion for coding and web development. From school websites
        to interactive apps, I always try to build something useful, creative,
        and user-friendly.
      </p>
      <p className="text-3xl font-[Parisienne] p-5">By Turg'unov shakhriyor </p>
      <div className="mt-6">
        <a
          className="p-3 px-13 bg-[#3452FF] w-[200px] flex items-center justify-center gap-4 rounded-sm text-lg"
          href={see}
        >
          See <FaRegEye className="text-xl" />
        </a>
      </div>
    </div>
  );
}

export default Portfoliadd;
