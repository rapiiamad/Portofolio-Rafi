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

      <div className="w-full px-4 sm:px-10 lg:px-56 pt-5 flex justify-between items-center">

        {/* LOGO */}
        <a href="#heading">
          <div className="flex flex-row gap-[20px] items-end bg-white shadow-sm rounded-4xl px-[25px] py-[10px]">
            <Foto />
            <h1 className="font-medium text-[20px] text-gray-900">
              Rafi Ahmad Alfarissi
            </h1>
          </div>
        </a>

        {/* MENU */}
        <ul className="flex gap-[40px] text-[18px] px-[35px] py-[10px] bg-white shadow-sm rounded-4xl">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition duration-300 ${
                  active === item.id
                    ? "text-gray-900 font-medium"
                    : "text-[#939393] hover:text-gray-900"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CONTACT */}
        <div className="flex gap-[7px] bg-white shadow-sm rounded-4xl px-[7px] py-[2px]">
          <a href="https://github.com/rapiiamad">
            <img src="image/git.png" className="w-[45px] h-[45px] rounded-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/rafi-ahmad-alfarissi-721a97381/">
            <img src="image/in.png" className="w-[45px] h-[45px] rounded-4xl" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=rafiahmadalfarissi@gmail.com">
            <img src="image/gmail.png" className="w-[45px] h-[45px] rounded-4xl" />
          </a>
          <a href="https://wa.me/6281230784741">
            <img src="image/wa.png" className="w-[45px] h-[45px] rounded-4xl" />
          </a>
        </div>

      </div>
    </nav>
  );
}