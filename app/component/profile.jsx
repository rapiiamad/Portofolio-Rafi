import Entrance from "./entrance.jsx";
import { FaCode } from "react-icons/fa6";
import { ImDiamonds } from "react-icons/im";

export default function Profile() {
    return (
        <Entrance>
            <section className="bg-[#f0faff]/70 px-6 md:px-16 lg:px-65 py-20 md:py-30 flex flex-col gap-25 md:gap-50 shadow-[0_-3px_20px_rgba(0,0,0,0.03)]">
                
                {/* HERO / FOCUS AREA */}
                <section
                    id="profile"
                    className="mx-auto flex w-full flex-col items-center justify-center"
                >
                    <div className="jakarta flex w-full flex-col items-center gap-6">
                        <div className="flex w-fit flex-row items-center gap-[10px] md:gap-[12px] rounded-full bg-white shadow-lg shadow-black/4 px-3 md:px-4 py-1 md:py-[4px] pr-4 md:pr-[24px]">
                            <ImDiamonds className="text-[#3a3a3a]/80 h-[12px] w-[12px]" />
                            <p className="jakarta text-[14px] md:text-[19px] font-medium text-[#3a3a3a]">
                                Focus Areas
                            </p>
                        </div>

                        <h1 className="jakarta text-center text-[28px] md:text-[44px] font-semibold leading-tight text-[#3a3a3a] max-w-3xl">
                            Focus Areas That Define My Work
                        </h1>

                        {/* Cards */}
                        <div className="jakarta my-10 md:my-20 flex w-full flex-col md:flex-row justify-center items-center gap-10 md:gap-[60px]">
                            
                            <div className="flex min-h-[280px] w-full max-w-[360px] flex-col items-center md:items-start gap-6 md:gap-[17px] rounded-2xl bg-white px-8 md:px-10 py-6 md:py-10 shadow-md shadow-blue-700/5 hover:scale-104 transition duration-500">
                                <FaCode className="h-[40px] w-[40px] text-[#3a3a3a]" />
                                <h1 className="text-xl md:text-[24px] font-bold leading-tight text-[#3a3a3a]">
                                    Front End
                                </h1>
                                <p className="text-[16px] md:text-[18px] text-center md:text-start font-light leading-relaxed text-[#3a3a3a]/60">
                                    Building clean, responsive, and interactive websites with modern
                                    frontend technologies and smooth user experiences.
                                </p>
                            </div>

                            <div className="flex min-h-[280px] w-full max-w-[360px] flex-col items-center md:items-start gap-[17px] rounded-2xl bg-white px-8 md:px-10 py-8 md:py-10 shadow-md shadow-blue-700/5 hover:scale-104 transition duration-500">
                                <FaCode className="h-[40px] w-[40px] text-[#3a3a3a]" />
                                <h1 className="text-xl md:text-[24px] font-bold leading-tight text-[#3a3a3a]">
                                    UI / UX
                                </h1>
                                <p className="text-[16px] md:text-[18px] font-light text-center md:text-start leading-relaxed text-[#3a3a3a]/60">
                                    Building clean, responsive, and interactive websites with modern
                                    frontend technologies and smooth user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section id="profile" className="mx-auto flex w-full flex-col gap-30 md:gap-50">

                    <div className="flex flex-col w-full lg:flex-row gap-10 lg:justify-between items-start">
                        <div className="flex w-full lg:w-[40%] flex-col gap-6 items-start px-2 md:px-0">
                            <div className="flex w-fit flex-row items-center gap-[10px] md:gap-[12px] rounded-full bg-white shadow-lg shadow-black/4 px-3 md:px-4 py-1 md:py-[4px] pr-4 md:pr-[24px]">
                                <ImDiamonds className="text-[#3a3a3a]/80 h-[12px] w-[12px]" />
                                <p className="jakarta text-[14px] md:text-[19px] font-medium text-[#3a3a3a]">
                                    Experience
                                </p>
                            </div>

                            <h1 className="jakarta text-3xl md:text-[42px] font-semibold text-[#3a3a3a]">
                                Billa Creative
                            </h1>

                            <p className="jakarta text-[14px] md:text-[16px] font-medium text-[#76ABFC] rounded-full px-4 py-[1px] bg-[#76ABFC]/20">
                                Web Developer
                            </p>

                            <p className="text-[18px] md:text-[20px] font-medium text-[#3a3a3a]">
                                6 Months Internship
                            </p>

                            <p className="w-full text-[16px] md:text-[18px] font-light leading-relaxed text-[#939393]">
                                Worked on responsive website development, UI implementation, and frontend customization using modern web technologies.
                            </p>
                        </div>

                        <div className="w-full lg:w-[50%] bg-white p-[12px] md:p-[15px] rounded-3xl shadow-lg shadow-blue-700/5 hover:scale-101 transition duration-600">
                            <img
                                src="/image/magang.png"
                                className="w-full rounded-xl object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:justify-between items-start w-full">
                        <div className="w-full lg:w-[50%] bg-white p-[10px] md:p-[15px] px-2 rounded-3xl shadow-lg shadow-blue-700/5 hover:scale-101 transition duration-600">
                            <img
                                src="/image/gengcy.png"
                                className="w-full rounded-xl object-cover shadow-sm"
                            />
                        </div>

                        <div className="flex w-full lg:w-[40%] flex-col gap-6 items-end lg:items-end">
                            <div className="flex w-fit flex-row items-center gap-[10px] md:gap-[12px] rounded-full bg-white shadow-lg shadow-black/4 px-3 md:px-4 py-1 md:py-[4px] pr-4 md:pr-[24px]">
                                <ImDiamonds className="text-[#3a3a3a]/80 h-[12px] w-[12px]" />
                                <p className="jakarta text-[14px] md:text-[19px] font-medium text-[#3a3a3a]">
                                    Education
                                </p>
                            </div>

                            <h1 className="jakarta font-semibold text-[#3a3a3a] text-3xl md:text-[42px]">
                                SMK Telkom Malang
                            </h1>

                            <p className="jakarta text-[14px] md:text-[16px] font-medium text-[#C6005C] rounded-full px-4 py-[1px] bg-[#C6005C]/20">
                                Software Engineering
                            </p>

                            <p className="text-[18px] md:text-[20px] font-medium text-[#3a3a3a]">
                                2021 - 2024
                            </p>

                            <p className="w-full text-[16px] md:text-[18px] font-light leading-relaxed text-right lg:text-right text-[#939393]">
                                Studied software development fundamentals, web technologies, and collaborated on technology projects during school activities.
                            </p>
                        </div>
                    </div>

                </section>
            </section>
        </Entrance>
    );
}