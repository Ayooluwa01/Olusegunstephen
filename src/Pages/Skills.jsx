import React from "react";
import Typewriter from "typewriter-effect";
import Image from "../assets/Pic/pass.jpg";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import Navbar from "../Components/Navbar";

export default function Skills() {
  const Nextpage = useNavigate("");
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center  ">
        {/* Skills Section */}

        <div className="text-left my-4 py-8">
          <span className="h-20 flex flex-row py-4 justify-center">
            <img
              src={Image}
              alt="Profile"
              className="h-12 rounded-full py-0 hover:scale-x-150 transition-all transition-delay-200"
            />
            &nbsp;&nbsp;
            <h1 className="text-4xl font-extrabold   ">My Skills </h1>
          </span>
          <p className="max-w-xl mx-auto py-5">
            I am a skilled software developer with a strong foundation in
            JavaScript and extensive experience with technologies like Node.js,
            PHP, Tailwind CSS, SQL, MongoDB, Bootstrap, React, and more. <br />{" "}
            <br />I am a quick learner who collaborates closely with clients to
            build efficient, scalable, and user-friendly solutions that address
            real-world challenges. Let’s work together to bring your ideas to
            life!
          </p>
        </div>

        {/* Card Section */}

        <h1 className="text-2xl font-bold text-slate-300">
          <Typewriter
            options={{
              strings: ["Front-End Skills"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="relative grid grid-cols md:flex md:flex-row my-6 shrink-0 shadow-sm border overflow-hidden  border-slate-200 rounded-lg sm:w-96 ">
          <div className="relative  m-2.5  text-white rounded-md">
            <img
              src="https://www.svgrepo.com/show/373669/html.svg"
              alt="card-image"
              className="shrink-0 hover:bg-white hover:-translate-y-1/4 "
            />
          </div>

          {/*  */}
          <div className="relative  m-2.5  text-white rounded-md ">
            <img
              src="https://www.svgrepo.com/show/303481/css-3-logo.svg"
              alt="card-image"
              className=" hover:bg-white hover:-translate-y-1/4"
            />
          </div>

          {/*  */}

          <div className="relative  m-2.5  text-white rounded-md">
            <img
              src="https://www.svgrepo.com/show/303206/javascript-logo.svg"
              alt="card-image"
              className="shrink-0 hover:bg-white hover:-translate-y-1/4"
            />
          </div>

          <div className="relative  m-2.5  text-white rounded-md">
            <img
              src="https://www.svgrepo.com/show/431886/react.svg"
              alt="card-image"
              className="shrink-0 hover:bg-white hover:-translate-y-1/4"
            />
          </div>

          <div className="relative  m-2.5  text-white rounded-md">
            <img
              src="https://www.svgrepo.com/show/353498/bootstrap.svg"
              alt="card-image"
              className="shrink-0 hover:bg-white hover:-translate-y-1/4"
            />
          </div>

          <div className="relative  m-2.5  text-white rounded-md">
            <img
              src="https://www.svgrepo.com/show/374118/tailwind.svg"
              alt="card-image"
              className="shrink-0 hover:bg-white hover:-translate-y-1/4"
            />
          </div>
        </div>

        {/* Bakend skills */}

        <h1 className="text-2xl font-bold text-slate-300">
          <Typewriter
            options={{
              strings: ["Back-End Skills"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="relative grid grid-cols md:flex md:flex-row my-6 shrink-0 shadow-sm border overflow-hidden  border-slate-200 rounded-lg sm:w-96 ">
          <div className="relative  m-2.5  text-white rounded-md">
            <img
              src="https://www.svgrepo.com/show/452088/php.svg"
              alt="card-image"
              className="shrink-0 hover:bg-white hover:-translate-y-1/4 "
            />
            <p className="text-center  opacity-0 hover:opacity-100 transition-opacity duration-300 font-bold">
              PHP
            </p>
          </div>

          {/*  */}
          <div className="relative  m-2.5  text-white rounded-md ">
            <img
              src="https://www.svgrepo.com/show/376337/node-js.svg"
              alt="card-image"
              className=" hover:bg-white hover:-translate-y-1/4"
            />
            <p className="text-center  opacity-0 hover:opacity-100 transition-opacity duration-300 font-bold">
              NODE JS
            </p>
          </div>

          {/*  */}

          <div className="relative  m-2.5  text-white rounded-md">
            <img
              src="https://www.svgrepo.com/show/330398/express.svg"
              alt="card-image"
              className="shrink-0 hover:bg-white hover:-translate-y-1/4"
            />

            <p className="text-center  opacity-0 hover:opacity-100 transition-opacity duration-300 font-bold">
              EXPRESS JS
            </p>
          </div>

          {/* <div className="relative  m-2.5  text-white rounded-md">
    <img
      src="https://www.svgrepo.com/show/521297/node-16.svg"
      alt="card-image"
      className='shrink-0 hover:bg-white hover:-translate-y-1/4'

/>
  </div>


  <div className="relative  m-2.5  text-white rounded-md">
    <img
      src="https://www.svgrepo.com/show/521297/node-16.svg"
      alt="card-image"
      className='shrink-0 hover:bg-white hover:-translate-y-1/4'

/>
  </div>



  <div className="relative  m-2.5  text-white rounded-md">
    <img
      src="https://www.svgrepo.com/show/521297/node-16.svg"
      alt="card-image"
      className='shrink-0 hover:bg-white hover:-translate-y-1/4'

/>
  </div> */}
        </div>

        {/* Database skills */}

        <h1 className="text-2xl font-bold text-slate-300">
          <Typewriter
            options={{
              strings: ["DATABASE SKILLS"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="relative grid grid-cols md:flex md:flex-row my-6 shrink-0 shadow-sm border overflow-hidden  border-slate-200 rounded-lg sm:w-96 ">
          <div className="relative  m-2.5  text-white rounded-md">
            <img
              src="https://www.svgrepo.com/show/373845/mongo.svg"
              alt="card-image"
              className="shrink-0 hover:bg-white hover:-translate-y-1/4"
            />
            <p className="text-center  opacity-0 hover:opacity-100 transition-opacity duration-300 font-bold">
              MONGO DATABASE
            </p>
          </div>

          {/*  */}
          <div className="relative  m-2.5  text-white rounded-md ">
            <img
              src="https://www.svgrepo.com/show/331760/sql-database-generic.svg"
              alt="card-image"
              className=" hover:bg-white hover:-translate-y-1/4"
            />
            <p className="text-center  opacity-0 hover:opacity-100 transition-opacity duration-300 font-bold">
              SQL DATABASE
            </p>
          </div>

          {/*  */}

          {/* <div className="relative  m-2.5  text-white rounded-md">
    <img
      src="https://www.svgrepo.com/show/521297/node-16.svg"
      alt="card-image"
      className='shrink-0 hover:bg-white hover:-translate-y-1/4'

/>
  </div>


  <div className="relative  m-2.5  text-white rounded-md">
    <img
      src="https://www.svgrepo.com/show/521297/node-16.svg"
      alt="card-image"
      className='shrink-0 hover:bg-white hover:-translate-y-1/4'

/>
  </div>


  <div className="relative  m-2.5  text-white rounded-md">
    <img
      src="https://www.svgrepo.com/show/521297/node-16.svg"
      alt="card-image"
      className='shrink-0 hover:bg-white hover:-translate-y-1/4'

/>
  </div>



  <div className="relative  m-2.5  text-white rounded-md">
    <img
      src="https://www.svgrepo.com/show/521297/node-16.svg"
      alt="card-image"
      className='shrink-0 hover:bg-white hover:-translate-y-1/4'

/>
  </div>
 */}
        </div>
      </div>

      <div className="text-center flex justify-center  ">
        <button onClick={() => Nextpage("/contact")}>
          <IoIosArrowDropdownCircle className="text-2xl font-extrabold" />
        </button>
      </div>
    </div>
  );
}
