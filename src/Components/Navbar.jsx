import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscErrorSmall } from "react-icons/vsc";
import { ImCancelCircle } from "react-icons/im";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const Opennav = () => {
    setToggle(!toggle); // Toggle between true and false
  };

  return (
    <>
      <nav className="flex  font-bold p-4 flex-row justify-evenly   w-full shadow-lg sticky bg-zinc-900">
        <div className="py-3">
          <h3 style={{ color: "rgb(81,208,224)" }}>AYOOLUWA</h3>
        </div>

        <div className="icon py-3 font-bold md:hidden ">
          {!toggle ? (
            <button className="md:hidden visible" onClick={Opennav}>
              
              <GiHamburgerMenu />
            </button>
          ) : (
            <button onClick={Opennav}>
              <ImCancelCircle />
            </button>
          )}
        </div>

        <div className="hidden md:flex md:flex-row md:space-x-1 md:gap-10 lg:gap-20 py-3 font-normal ">
          <NavLink to="/" className="hover:text-greenish hover:font-extrabold">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-greenish hover:font-extrabold"
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className="hover:text-greenish hover:font-extrabold"
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-greenish hover:font-extrabold"
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {toggle && (
        <div className="grid grid-cols-1 gap-10 text-center  bg- p-4 shadow-lg md:hidden relative font-bold transition translate-y-4 duration-1000 ease-in-out">
          <NavLink to="/" className="hover:text-greenish hover:font-extrabold">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-greenish hover:font-extrabold"
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className="hover:text-greenish hover:font-extrabold"
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-greenish hover:font-extrabold"
          >
            Contact
          </NavLink>
        </div>
      )}
    </>
  );
}
