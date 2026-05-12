import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { tools } from "./tools.jsx";
import ToolsFade from "./projectsimg.jsx";
import Entrance from "./entrance.jsx";
import Text from "./text.jsx";
import { FaCode } from "react-icons/fa6";

export default function Projects() {
    const codeTools = tools.find((t) => t.category === "code");
    const builderTools = tools.find((t) => t.category === "builder");
    const designTools = tools.find((t) => t.category === "design");

    return (
        <Entrance>
            <section id="projects" className="bg-[#f0faff]/70 px-65 py-50 flex flex-col gap-25">
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
                        Ini Projects Projecst Aku
                    </h1>
                    <p className="jakarta text-[16px] text-black/50 font-light text-center -m-1">
                        Building clean, responsive, and interactive websites with modern frontend 
                        technologies and smooth user experiences.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-y-[80px] gap-x-[50px] w-full">

                    <a href="#projects">
                        <div className="relative group w-full h-[350px] rounded-lg overflow-hidden shadow-md">
                            {/* GAMBAR / BACKGROUND */}
                            <img
                                src="image/tes.png"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-103"
                            />

                            <div className="flex flex-row absolute top-0 left-0 w-fit gap-[10px] px-[30px] pt-[30px] z-50">
                                <div className="flex flex-row pl-[8px] pr-[25px] py-[5px] gap-[15px] rounded-full bg-white group-hover:bg-white/70 transition duration-700 items-center">
                                    <ToolsFade imgs={codeTools.imgs} />
                                    <h3 className="text-[#1E1E1E] text-[18px] w-fit font-medium">
                                        Portofolio
                                    </h3>
                                </div>
                            </div>

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/70 opacity-0 
                  group-hover:opacity-100 
                  transition duration-700 
                  flex flex-col justify-start px-[30px] pt-[30px] pb-[20px]">

                                <div className="flex flex-col translate-y-4 group-hover:translate-y-0 transition duration-700 gap-[8px] items-center">

                                    <div className="flex flex-row w-full justify-between items-center">
                                        <h3 className="text-gray-900 text-[18px] font-medium opacity-0 px-[45px] py-[3px]">
                                            Project Title
                                        </h3>
                                        <p className="text-gray-900 text-[16px] font-light px-[20px] py-[4px] rounded-full bg-white/70">Done in 2 Weeks</p>
                                    </div>
                                    <p className="text-gray-200 text-[14px] font-extralight w-120 px-[45px] pt-[130px] [letter-spacing:0.5px] text-center">Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js</p>

                                </div>

                                <div className="flex flex-col h-full items-center justify-end"><h1 className="text-[10px] font-semibold text-white/70">Click To See More Detail</h1></div>

                            </div>
                        </div>
                    </a>

                    <a href="#projects">
                        <div className="relative group w-full h-[350px] rounded-lg overflow-hidden shadow-md">
                            {/* GAMBAR / BACKGROUND */}
                            <img
                                src="image/tes.png"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-103"
                            />

                            <div className="flex flex-row absolute top-0 left-0 w-fit gap-[10px] px-[30px] pt-[30px] z-50">
                                <div className="flex flex-row pl-[8px] pr-[25px] py-[5px] gap-[15px] rounded-full bg-white shadow-md group-hover:bg-white/70 transition duration-700 items-center">
                                    <ToolsFade imgs={builderTools.imgs} />
                                    <h3 className="text-[#1E1E1E] text-[18px] w-fit font-medium">
                                        Ecommerce Website
                                    </h3>
                                </div>
                            </div>

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/70 opacity-0 
                  group-hover:opacity-100 
                  transition duration-700 
                  flex flex-col justify-start px-[30px] pt-[30px] pb-[20px]">

                                <div className="flex flex-col translate-y-4 group-hover:translate-y-0 transition duration-700 gap-[8px] items-center">

                                    <div className="flex flex-row w-full justify-between items-center">
                                        <h3 className="text-[#1E1E1E] text-[18px] font-medium opacity-0 px-[45px] py-[3px]">
                                            Ecommerce Website
                                        </h3>
                                        <p className="text-[#1E1E1E] text-[16px] font-light px-[20px] py-[4px] rounded-full bg-white/70">Done in 2 Weeks</p>
                                    </div>
                                    <p className="text-gray-200 text-[14px] font-extralight w-120 px-[45px] pt-[130px] [letter-spacing:0.5px] text-center">Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js</p>

                                </div>

                                <div className="flex flex-col h-full items-center justify-end"><h1 className="text-[10px] font-semibold text-white/70">Click To See More Detail</h1></div>

                            </div>
                        </div>
                    </a>

                    <a href="#projects">
                        <div className="relative group w-full h-[350px] rounded-lg overflow-hidden shadow-md ">
                            {/* GAMBAR / BACKGROUND */}
                            <img
                                src="image/tes.png"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-103"
                            />

                            <div className="flex flex-row absolute top-0 left-0 w-fit gap-[10px] px-[30px] pt-[30px] z-50">
                                <div className="flex flex-row pl-[8px] pr-[25px] py-[5px] gap-[15px] rounded-full bg-white shadow-md group-hover:bg-white/70 transition duration-700 items-center">
                                    <ToolsFade imgs={designTools.imgs} />
                                    <h3 className="text-[#1E1E1E] text-[18px] w-fit font-medium">
                                        Ecommerce Design
                                    </h3>
                                </div>
                            </div>

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/70 opacity-0 
                  group-hover:opacity-100 
                  transition duration-700 
                  flex flex-col justify-start px-[30px] pt-[30px] pb-[20px]">

                                <div className="flex flex-col translate-y-4 group-hover:translate-y-0 transition duration-700 gap-[8px] items-center">

                                    <div className="flex flex-row w-full justify-between items-center">
                                        <h3 className="text-[#1E1E1E] text-[18px] font-medium opacity-0 px-[45px] py-[3px]">
                                            Ecommerce Design
                                        </h3>
                                        <p className="text-[#1E1E1E] text-[16px] font-light px-[20px] py-[4px] rounded-full bg-white/70">Done in 2 Weeks</p>
                                    </div>
                                    <p className="text-gray-200 text-[14px] font-extralight w-120 px-[45px] pt-[130px] [letter-spacing:0.5px] text-center">Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js</p>

                                </div>

                                <div className="flex flex-col h-full items-center justify-end"><h1 className="text-[10px] font-semibold text-white/70">Click To See More Detail</h1></div>

                            </div>
                        </div>
                    </a>

                </div>
            </section>
        </Entrance>
    )
}