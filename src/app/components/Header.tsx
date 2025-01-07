"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#043873]">
      <nav className="max-w-[1440px] mx-auto text-white h-24 py-2 px-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2">
          <Image src={"/images/Logo main.png"} alt="logo" height={50} width={200} />
        </div>


        <div className="flex gap-10 items-center">
        {/* Full Nav Links for Large Screens */}
        <div className="hidden xl:flex justify-between gap-7 items-center">
          <ul className="flex space-x-12">
            {["Solutions", "Products", "Pricing", "Resources"].map((item, index) => (
              <li key={index} className="flex items-center">
                <a href="#!" className="hover:text-[#FFE492]">
                  {item} &nbsp;
                </a>
                <IoIosArrowDown />
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons (Always Visible Until 480px) */}
        <div className="md:flex gap-3 hidden">
          <button className="text-black w-[125px] h-[60px] rounded-lg bg-[#FFE492] p-4 hover:text-black">
            Login
          </button>
          <button className="text-white w-[225px] h-[60px] rounded-lg bg-blue-600 p-4 hover:text-black">
            Try Whitepace free ➔
          </button>
        </div>

        

        {/* Hamburger Menu for Small Screens */}
        <div className="xl:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu className="text-white text-5xl" />
          </button>
        </div>

        </div>  
      </nav>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="bg-[#043873] text-white xl:hidden p-4">
          {/* Nav Links */}
          <ul className="flex flex-col space-y-4">
            {["Solutions", "Products", "Pricing", "Resources"].map((item, index) => (
              <li key={index} className="flex items-center">
                <a href="#!" className="hover:text-[#FFE492]">
                  {item} &nbsp;
                </a>
                <IoIosArrowDown />
              </li>
            ))}
          </ul>

          {/* Buttons Inside Dropdown for Screens <480px */}
          <div className="flex flex-col gap-3 mt-4 md:hidden ">
            <button className="text-black w-full h-[50px] rounded-lg bg-[#FFE492] p-2 hover:text-black">
              Login
            </button>
            <button className="text-white w-full h-[50px] rounded-lg bg-blue-600 p-2 hover:text-black">
              Try Whitepace free ➔
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
