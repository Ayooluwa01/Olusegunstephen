import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Image from "../assets/Pic/pass.jpg";
import Typewriter from "typewriter-effect";
import PreloaderImage from "../assets/Preloader/Hourglass.gif";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import "../Css/Homepage.css";
import "../App.css";
export default function Home() {
  const Nextpage = useNavigate();

  return (
    <div>
      <Navbar />
      <div
        className="md:flex md:flex-cols-2 items-center m-10 md:m-20 justify-center"
        id="homepage"
      >
        {/* Mobile Image */}
        <div className="relative justify-center items-center h-80 px-9 visible w-full flex md:hidden hover:translate-y-4 transition ease-in-out delay-150 hover:scale-110">
          <img
            src={Image}
            alt="Profile"
            className="h-full object-cover rounded-lg hover:h-90 backdrop-sepia bg-white/30"
          />
        </div>
        {/* Text Section */}
        <div className="text-left">
          <h1 className="text-lg from-neutral-300 sm:py-4">Hey there, I'm</h1>
          <br />
          <h2 className="text-4xl font-bold md:text-6xl">
            Olusegun{" "}
            <span className="text-greenish">
              <Typewriter
                options={{
                  strings: ["Stephen", "Ayooluwa"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
          <br />
          <h3 className="text-xl py-4">
            <span className="font-bold">A Software Developer,</span> and{" "}
            <span className="text-greenish">a Graphics Designer</span>{" "}
            passionate about crafting innovative user-first experiences and
            solutions.
          </h3>
          <br />
          🔎 Seeking full-time opportunities to kickstart my career
          <br />
          🚀 Currently upskilling in React and other technologies
          <br />
          <br />
          <Button />
        </div>
        {/* Desktop Image */}
        <div className="relative justify-center items-center h-80 px-9 hidden md:visible md:flex hover:translate-y-4 transition-all">
          <img
            src={Image}
            alt="Profile"
            className="h-full object-cover rounded-lg hover:h-90"
          />
        </div>
      </div>

      {/* Arrow Button */}
      <div className="text-center flex justify-center">
        <button onClick={() => Nextpage("about")}>
          <IoIosArrowDropdownCircle className="text-2xl font-extrabold" />
        </button>
      </div>
    </div>
  );
}
