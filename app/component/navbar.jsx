"use client";

import { useEffect, useState } from "react";
import Foto from "./imgnavbar.jsx";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Profile", id: "profile" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-51 backdrop-blur-xs">

      <div className="w-full px-4 sm:px-10 lg:px-65 py-3 justify-between gap-20 flex flex-row items-center bg-[#f7fcff] shadow-lg shadow-black/2">

        {/* LOGO */}
      
        <button className="py-2 px-8 bg-[#3a3a3a] text-white rounded-full hover:bg-gray-800 transition shadow-md text-[14px] tracking-[3px] font-extrabold jakarta">
                Fii
              </button>

        {/* MENU */}
        <ul className="flex gap-[40px] text-[16px] px-[35px] py-[10px]">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition duration-300 ${
                  active === item.id
                    ? "text-gray-900 font-medium jakarta"
                    : "text-[#939393] hover:text-gray-900 jakarta"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CONTACT */}
        <a href="#contact"><button className="py-2 px-6 bg-[#3a3a3a] text-white rounded-md hover:bg-[#3c3c3c] hover:cursor-pointer transition shadow-md text-[14px] jakarta font-medium">
                Get Started
              </button></a>

      </div>
    </nav>
  );
}