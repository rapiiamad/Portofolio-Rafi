import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { tools } from "./tools.jsx";
import ToolsFade from "./projectsimg.jsx";
import Entrance from "./entrance.jsx";
import Text from "./text.jsx";
import { FaCode } from "react-icons/fa6";

export default function Skills() {
    const codeTools = tools.find((t) => t.category === "code");
    const builderTools = tools.find((t) => t.category === "builder");
    const designTools = tools.find((t) => t.category === "design");

    return (
        <Entrance>
            <section className="bg-[#f0faff]/70 px-65 py-50 flex flex-col gap-50">
                <section
                    id="skills"
                    className="mx-auto flex w-full flex-col items-center justify-center gap-25">
                    <div className="jakarta flex w-full flex-col items-center gap-6">
                        <div className="flex w-fit flex-row items-center gap-[12px] rounded-full bg-[white] shadow-lg shadow-black/4 px-4 py-[4px] pr-[24px]">
                            <img
                                src="/image/diamond.png"
                                alt="diamond"
                                className="h-[16px] w-[16px]"
                            />

                            <p className="jakarta text-[19px] font-medium text-[#3a3a3a]">
                                Tech Stack
                            </p>
                        </div>
                        <h1 className="jakarta text-center text-3xl font-semibold leading-tight text-[#3a3a3a] md:text-[44px]">
                            Ini Skill Skill Aku
                        </h1>
                        <p className="jakarta text-[16px] text-black/50 font-light text-center -m-1">
                        Building clean, responsive, and interactive websites with modern frontend 
                        technologies and smooth user experiences.
                    </p>
                    </div>
                    <div className="w-full gap-10 flex flex-col">
                        <div className="w-full flex flex-row justify-center gap-7">
                            {[
                                { name: "Next.js", img: "/image/next.png" },
                                { name: "React.js", img: "/image/figma.png" },
                                { name: "Tailwind CSS", img: "/image/tailwind.png" },
                                { name: "JavaScript", img: "/image/elementor.png" },
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-start w-[260px] gap-6 rounded-full bg-white px-8 py-4 shadow-md shadow-black/5"
                                >
                                    <img
                                        src={skill.img}
                                        alt={skill.name}
                                        className="h-10 w-10 object-contain"
                                    />
                                    <p className="jakarta text-[18px] font-semibold text-[#3a3a3a]">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex flex-row justify-center gap-7">
                            {[
                                { name: "HTML", img: "/image/html.png" },
                                { name: "CSS", img: "/image/css.png" },
                                { name: "WordPress", img: "/image/wordpress.png" },
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-start w-[260px] gap-6 rounded-full bg-white px-8 py-4 shadow-md shadow-black/5"
                                >
                                    <img
                                        src={skill.img}
                                        alt={skill.name}
                                        className="h-10 w-10 object-contain"
                                    />
                                    <p className="jakarta text-[18px] font-semibold text-[#3a3a3a]">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>
            </section>
        </Entrance>
    )
}