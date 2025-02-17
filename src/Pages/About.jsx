import React from "react";
import Navbar from "../Components/Navbar";
import pic2 from "../assets/Pic/pic2.jpeg";
import Typewriter from "typewriter-effect";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function About() {
  const Nextpage = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="md:flex md:flex-cols-2 items-center m-10 md:m-20 justify-center">
        <div className="px-10 gap-6">
          <h1 className="text-2xl font-bold bg-gradient-to-br from-green-400 to-blue-600 h-auto">
            <Typewriter
              options={{
                strings: ["Hey there I'm Olusegun Stephen Ayooluwa"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <br />
          <h2>
            Welcome to my world of creativity and code, where ideas come to life
            and innovation meets design.
          </h2>
          <br />
          <h1 className="text-lg font-extrabold">WHO AM I?</h1>
          <p>
            I’m a multi-talented Software Developer and Graphics Designer with a
            flair for crafting solutions that inspire and engage. <br />
            With a deep appreciation for both functionality and aesthetics, I
            specialize in building user-first experiences that leave lasting
            impressions.
          </p>
        </div>
      </div>

      <div className="text-center flex flex-col items-center justify-center m-10">
        <h1>
          <span className="text-2xl font-semibold">Why Work With Me?</span>
          <br />
          <br />
          🎨 Creative problem-solving to breathe life into your ideas.
          <br />
          <br />
          ⚙️ A passion for building seamless, user-friendly digital solutions.
          <br />
          <br />
          🔥 Dedication to every project I undertake, ensuring exceptional
          results every time.
          <br />
          <br />
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
        <Link to="Projects">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-3"
          >
            MY PROJECTS
          </button>
        </Link>

        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-6 py-3"
        >
          MY DESIGNS
        </button>
      </div>

      <Outlet />

      {/* Next Page Button */}
      <div className="text-center flex justify-center mt-10">
        <button onClick={() => Nextpage("/skills")}>
          <IoIosArrowDropdownCircle className="text-4xl text-green-500 hover:text-green-700 transition-all" />
        </button>
      </div>
    </div>
  );
}
