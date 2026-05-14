import { tools } from "./tools.jsx";
import ToolsFade from "./projectsimg.jsx";
import Entrance from "./entrance.jsx";
import { ImDiamonds } from "react-icons/im";

export default function Projects() {
    const codeTools = tools.find((t) => t.category === "code");
    const builderTools = tools.find((t) => t.category === "builder");
    const designTools = tools.find((t) => t.category === "design");

    const projects = [
        {
            title: "Portofolio",
            img: "image/p2.png",
            tools: codeTools,
            duration: "Done in 2 Weeks",
        },
        {
            title: "Ecommerce Website",
            img: "image/p1.png",
            tools: builderTools,
            duration: "Done in 2 Weeks",
        },
        {
            title: "Ecommerce Design",
            img: "image/p3.png",
            tools: designTools,
            duration: "Done in 2 Weeks",
        },
    ];

    return (
        <Entrance>
            <section
                id="projects"
                className="bg-[#f0faff]/70 px-6 md:px-16 lg:px-65 py-20 md:py-30 flex flex-col gap-12 md:gap-25"
            >
                <div className="jakarta flex w-full flex-col items-center gap-6">
                    <div className="flex w-fit flex-row items-center gap-[10px] md:gap-[12px] rounded-full bg-white shadow-lg shadow-black/4 px-3 md:px-4 py-1 md:py-[4px] pr-4 md:pr-[24px]">
                        <ImDiamonds className="text-[#3a3a3a]/80 h-[10px] w-[10px] md:h-[12px] md:w-[12px]" />

                        <p className="jakarta text-[14px] md:text-[19px] font-medium text-[#3a3a3a]">
                            Projects
                        </p>
                    </div>

                    <h1 className="jakarta text-center text-[28px] md:text-[44px] font-semibold leading-tight text-[#3a3a3a]">
                        Things I've Built
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-[70px] md:gap-x-[50px] w-full">
                    {projects.map((project, index) => (
                        <a href="#projects" key={index}>
                            <div className="relative group w-full h-[200px] sm:h-[300px] md:h-[345px] rounded-xl overflow-hidden shadow-lg shadow-blue-700/10 hover:scale-[1.03] transition duration-700">
                                
                                <img
                                    src={project.img}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                {/* LABEL */}
                                <div className="absolute top-0 left-0 px-4 md:px-[30px] pt-4 md:pt-[30px] z-50">
                                    <div className="flex flex-row pl-4 pr-5 py-[5px] gap-[10px] rounded-full bg-white shadow-sm items-center">
                                        <ToolsFade imgs={project.tools.imgs} />
                                        <h3 className="text-[#1E1E1E] text-[14px] md:text-[16px] font-semibold jakarta">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-700 flex flex-col justify-center px-4 md:px-[30px] py-6">
                                    <div className="flex flex-col group-hover:scale-[1.02] transition duration-700 gap-3 items-center">
                                        <div className="flex w-full justify-end">
                                            <p className="text-gray-900 jakarta text-[12px] md:text-[14px] font-medium px-4 py-[4px] rounded-full bg-white">
                                                {project.duration}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col h-full items-center justify-center">
                                        <p className="text-[10px] md:text-[12px] font-semibold text-white/70">
                                            Click To See More Detail
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </Entrance>
    );
}