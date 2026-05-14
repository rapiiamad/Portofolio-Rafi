import Entrance from "./entrance.jsx";
import { ImDiamonds } from "react-icons/im";
import { CgFigma } from "react-icons/cg";
import { RiNextjsFill, RiTailwindCssFill, RiHtml5Fill } from "react-icons/ri";
import { FaElementor, FaWordpress } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";

export default function Skills() {
    const skills = [
        { name: "Next.js", icon: <RiNextjsFill className="h-8 w-8 md:h-10 md:w-10 text-[#3a3a3a]" />, level: 90 },
        { name: "Figma", icon: <CgFigma className="h-8 w-8 md:h-10 md:w-10 text-[#3a3a3a]" />, level: 85 },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className="h-8 w-8 md:h-10 md:w-10 text-[#3a3a3a]" />, level: 92 },
        { name: "HTML", icon: <RiHtml5Fill className="h-8 w-8 md:h-10 md:w-10 text-[#3a3a3a]" />, level: 95 },
        { name: "Elementor", icon: <FaElementor className="h-8 w-8 md:h-10 md:w-10 text-[#3a3a3a]" />, level: 88 },
        { name: "CSS", icon: <FaCss3Alt className="h-8 w-8 md:h-10 md:w-10 text-[#3a3a3a]" />, level: 90 },
        { name: "WordPress", icon: <FaWordpress className="h-8 w-8 md:h-10 md:w-10 text-[#3a3a3a]" />, level: 82 },
    ];

    return (
        <Entrance>
            <section className="bg-[#f0faff]/70 px-6 md:px-16 lg:px-65 py-20 md:py-30 flex flex-col gap-20 md:gap-50">
                <section
                    id="skills"
                    className="mx-auto flex w-full flex-col items-center justify-center gap-12 md:gap-25"
                >
                    <div className="jakarta flex w-full flex-col items-center gap-6">
                        <div className="flex w-fit flex-row items-center gap-[10px] md:gap-[12px] rounded-full bg-white shadow-lg shadow-black/4 px-3 md:px-4 py-1 md:py-[4px] pr-4 md:pr-[24px]">
                            <ImDiamonds className="text-[#3a3a3a]/80 h-[10px] w-[10px] md:h-[12px] md:w-[12px]" />
                            <p className="jakarta text-[14px] md:text-[17px] font-semibold text-[#3a3a3a]">
                                Tech Stack
                            </p>
                        </div>

                        <h1 className="jakarta text-center text-[28px] md:text-[44px] font-semibold leading-tight text-[#3a3a3a]">
                            My Development Stack
                        </h1>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-10 w-full">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-white p-5 md:p-6 shadow-lg shadow-blue-700/3 border border-gray-100 hover:scale-[1.02] transition duration-400"
                            >
                                <div className="flex flex-row items-center gap-3 mb-8 md:mb-12">
                                    <div className="w-fit h-fit p-2 bg-white shadow-lg shadow-blue-700/8 rounded-lg">
                                        {skill.icon}
                                    </div>

                                    <p className="jakarta text-[16px] md:text-[18px] font-bold text-[#3a3a3a]">
                                        {skill.name}
                                    </p>
                                </div>

                                <div className="flex justify-between jakarta font-medium text-xs md:text-sm text-gray-500 mb-2">
                                    <span>Proficiency</span>
                                    <span>{skill.level}%</span>
                                </div>

                                <div className="w-full h-3 md:h-4 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="bg-gradient-to-l from-[#76ABFC] to-[#ACEDEF] h-full rounded-full transition-all duration-700"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </Entrance>
    );
}