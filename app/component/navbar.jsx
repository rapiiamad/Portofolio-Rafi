"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

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
    <nav className="w-full fixed top-0 left-0 z-51 backdrop-blur-md">
      <div className="w-full px-6 md:px-10 lg:px-65 py-3 flex justify-between items-center bg-[#f7fcff]/90 shadow-lg shadow-black/2">

        {/* LOGO */}
        <button className="py-2 px-6 md:px-8 bg-[#3a3a3a] text-white rounded-full hover:bg-gray-800 transition shadow-md text-[14px] tracking-[3px] font-extrabold jakarta">
          Fii
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-[40px] text-[16px] px-[35px] py-[10px]">
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

        {/* DESKTOP BUTTON */}
        <a href="#contact" className="hidden md:block">
          <button className="py-2 px-6 bg-[#3a3a3a] text-white rounded-md hover:bg-[#3c3c3c] transition shadow-md text-[14px] jakarta font-medium">
            Get Started
          </button>
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#3a3a3a]"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 flex flex-col gap-5">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`text-[16px] jakarta ${
                active === item.id
                  ? "text-gray-900 font-medium"
                  : "text-[#939393]"
              }`}
            >
              {item.name}
            </a>
          ))}

          <a href="#contact" onClick={() => setOpen(false)}>
            <button className="w-full py-3 bg-[#3a3a3a] text-white rounded-md jakarta font-medium">
              Get Started
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}