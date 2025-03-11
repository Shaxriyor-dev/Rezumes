import React from "react";
import logo from "../Home/Logo/logos.jpg";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { MdFileDownload } from "react-icons/md";
import { FcAbout } from "react-icons/fc";





function About() {

    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/sodapdf-converted.pdf";
      link.download = "sodapdf-converted.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

  return (
    <div>
      <div>
        <img className="h-[180px] w-[180px] rounded-[50%]" src={logo} alt="" />
        <p className="font-bold font-[Ubuntu] text-4xl mt-5">
          <span className="text-blue-600">Shakhriyor</span> Turg'unov
        </p>
      </div>
      <div className="bg-[#0d0d0e] flex items-center rounded-r-lg mt-7">
        <div className="h-[119px] w-3 bg-blue-600"></div>
        <p className="text-lg  h-[120px] p-4 text-neutral-400 font-[Ubuntu]">
          I'm a passionate front-end web developer who perfect web interfaces.
          I’m available for a freelance job. <Link className="underline hover:text-lime-500" to={'/contend'} >Hire me</Link>
        </p>
      </div>
      <div className="mt-6">
        <div className="flex gap-5 pt-2">
          <div className="bg-[#0d0d0e] h-[45px] flex items-center justify-center w-[50px] rounded-[5px] text-xl text-blue-600">
            <IoLocation />
          </div>
          <div className="bg-[#0d0d0e] h-[45px] w-[320px] rounded-[5px] flex items-center p-4">
            <a
              href="https://maps.app.goo.gl/F651z3dyPCTomW1Z8"
              className="font-[Ubuntu] text-lg text-gray-200"
            >
              Uzbekistan ,  Andijon 45
            </a>
          </div>
        </div>
        <div className="flex gap-5 pt-2">
          <div className="bg-[#0d0d0e] h-[45px] flex items-center justify-center w-[50px] rounded-[5px] text-xl text-blue-600">
            <FaPhoneAlt />
          </div>
          <div className="bg-[#0d0d0e] h-[45px] w-[320px] rounded-[5px] flex items-center p-4">
            <a
              className="font-[Ubuntu] text-lg text-gray-200"
              href="https://t.me/+998937981208"
            >
              +998 (93) 798 12 08
            </a>
          </div>
        </div>
        <div className="flex gap-5 pt-2">
          <div className="bg-[#0d0d0e] h-[45px] flex items-center justify-center w-[50px] rounded-[5px] text-xl text-blue-600">
            <MdLocalPostOffice />
          </div>
          <div className="bg-[#0d0d0e] h-[45px] w-[320px] rounded-[5px] flex items-center p-4">
            <a
              href="mailto:https://mail.google.com/shahkweb2008@gmail.com/"
              className="font-[Ubuntu] text-lg text-gray-200"
            >
              shahkweb2008@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[10px] mt-10">
        <div className="bg-[#0d0d0e] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
          <a className=" text-xl  text-white " href="https://twitter.com/login?lang=ru/">
            <FaTwitter />
          </a>
        </div>
        <div className="bg-[#0d0d0e] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
          <a className=" text-xl  text-white " href="https://www.facebook.com/profile.php?id=61573956718462/">
          <FaFacebookF />
          </a>
        </div>
        <div className="bg-[#0d0d0e] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
          <Link className=" text-xl  text-white ">
          <BsInstagram />
          </Link>
        </div>
        <div className="bg-[#0d0d0e] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
          <a className=" text-xl  text-white " href="https://github.com/Shaxriyor-dev">
          <SiGithub />
          </a>
        </div>
        <div className="bg-[#0d0d0e] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
          <a className=" text-xl  text-white " href="https://www.youtube.com/channel/UC1mN2hmQrDbOWJFJz3H7tXw/">
          <IoLogoYoutube />
          </a>
        </div>
        <div className="bg-[#0d0d0e] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
          <a   onClick={handleDownload} className=" text-xl  text-white " href="#">
          <MdFileDownload />
          </a>
        </div>
        <div className="bg-[#0d0d0e] h-[45px] w-[45px] flex items-center justify-center rounded-[5px] hover:bg-blue-500 ">
          <Link to={'/aboutme'} className=" text-xl  text-white ">
             <FcAbout />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
