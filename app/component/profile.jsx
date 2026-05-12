import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { tools } from "./tools.jsx";
import ToolsFade from "./projectsimg.jsx";
import Entrance from "./entrance.jsx";
import Text from "./text.jsx";
import { FaCode } from "react-icons/fa6";

export default function Profile() {
    const codeTools = tools.find((t) => t.category === "code");
    const builderTools = tools.find((t) => t.category === "builder");
    const designTools = tools.find((t) => t.category === "design");

    return (
        <>
            <Entrance>
                <section className="bg-[#f0faff]/70 px-65 py-30 flex flex-col gap-50">
                    <section
                        id="profile"
                        className="mx-auto flex w-full flex-col items-center justify-center"
                    >
                        <div className="jakarta flex w-full flex-col items-center gap-6">
                            {/* LABEL */}
                            <div className="flex w-fit flex-row items-center gap-[12px] rounded-full bg-[white] shadow-lg shadow-black/4 px-4 py-[4px] pr-[24px]">
                                <img
                                    src="/image/diamond.png"
                                    alt="diamond"
                                    className="h-[16px] w-[16px]"
                                />

                                <p className="jakarta text-[19px] font-medium text-[#3a3a3a]">
                                    Focus Areas
                                </p>
                            </div>

                            {/* TITLE */}
                            <h1 className="jakarta text-center text-3xl font-semibold leading-tight text-[#3a3a3a] md:text-[44px]">
                                Focus Areas That Define My Work
                            </h1>

                            {/* CARDS */}
                            <div className="jakarta my-20 flex w-full flex-row justify-center gap-[60px]">
                                {/* CARD 1 */}
                                <div className="flex h-[290px] w-[350px] flex-col items-start justify-start gap-[17px] rounded-xl bg-[white] px-10 py-10 shadow-lg shadow-blue-300/5">
                                    <FaCode className="h-[40px] w-[40px] text-[#3a3a3a]" />

                                    <h1 className="text-2xl font-bold leading-tight text-[#3a3a3a] md:text-[24px]">
                                        Front End
                                    </h1>

                                    <p className="text-[16px] font-light leading-relaxed text-[#3a3a3a]/60">
                                        Building clean, responsive, and interactive websites with modern
                                        frontend technologies and smooth user experiences.
                                    </p>
                                </div>

                                {/* CARD 2 */}
                                <div className="flex h-[290px] w-[350px] flex-col items-start justify-start gap-[17px] rounded-xl bg-white px-10 py-10 shadow-lg shadow-blue-300/5">
                                    <FaCode className="h-[40px] w-[40px] text-[#3a3a3a]" />

                                    <h1 className="text-2xl font-bold leading-tight text-[#3a3a3a] md:text-[24px]">
                                        UI / UX
                                    </h1>

                                    <p className="text-[16px] font-light leading-relaxed text-[#3a3a3a]/60">
                                        Building clean, responsive, and interactive websites with modern
                                        frontend technologies and smooth user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* EXPERIENCE */}
                    <section
                        id="profile"
                        className="mx-auto flex w-full flex-col justify-between md:flex-col gap-50"
                    >
                        {/* EXPERIENCE */}
                        <div className="flex flex-row gap-35 items-start">
                            <div className="flex w-[35%] flex-col gap-6 items-start h-fit">
                                <div className="flex w-fit flex-row items-center gap-[12px] rounded-full bg-[white] shadow-lg shadow-blue-300/4 px-4 py-[4px] pr-[24px]">
                                    <img
                                        src="/image/diamond.png"
                                        alt="diamond"
                                        className="h-[16px] w-[16px]"
                                    />

                                    <p className="jakarta text-[19px] font-medium text-[#3a3a3a]">
                                        Experience
                                    </p>
                                </div>

                                <h1 className="jakarta text-3xl font-bold leading-tight text-[#3a3a3a] md:text-[42px]">
                                    Billa Creative
                                </h1>

                                <p className="jakarta text-[16px] font-medium text-[#76ABFC] rounded-full px-4 py-[1px] bg-[#76ABFC]/20">
                                    Web Develeoper
                                </p>

                                <p className="my-[20px] text-[20px] font-medium text-[#3a3a3a]">
                                    6 Months Internship
                                </p>

                                <p className="w-[400px] text-[18px] font-light leading-relaxed text-[#939393]">
                                    Worked on responsive website development, UI implementation, and frontend
                                    customization using modern web technologies.
                                </p>
                            </div>
                            <div className="h-full w-[65%] bg-white p-[18px] rounded-3xl shadow-lg shadow-black/5">
                                <img
                                    src="/image/magang.png"
                                    className="h-full w-full object-cover rounded-xl shadow-sm"

                                />

                            </div>
                        </div>

                        <div className="flex flex-row gap-35">
                            <div className="h-full w-[65%] bg-white p-[15px] rounded-2xl shadow-lg shadow-black/5">
                                <img
                                    src="/image/gengcy.png"
                                    className="h-full w-full object-cover rounded-xl shadow-sm"

                                />

                            </div>
                            <div className="flex w-[35%] flex-col gap-6 items-end h-fit">
                                <div className="flex w-fit flex-row items-center gap-[12px] rounded-full bg-[white] shadow-lg shadow-blue-300/4 px-4 py-[4px] pr-[24px]">
                                    <img
                                        src="/image/diamond.png"
                                        alt="diamond"
                                        className="h-[16px] w-[16px]"
                                    />

                                    <p className="jakarta text-[19px] font-medium text-[#3a3a3a]">
                                        Education
                                    </p>
                                </div>

                                <h1 className="jakarta font-semibold leading-tight text-right text-[#3a3a3a] md:text-[42px] w-fit">
                                    SMK Telkom Malang
                                </h1>

                                <p className="jakarta text-[16px] font-medium text-[#C6005C] rounded-full px-4 py-[1px] bg-[#C6005C]/20">
                                    Web Develeoper
                                </p>

                                <p className="my-[20px] text-[20px] font-medium text-[#3a3a3a]">
                                    6 Months Internship
                                </p>

                                <p className="w-[400px] text-[18px] font-light leading-relaxed text-right text-[#939393]">
                                    Worked on responsive website development, UI implementation, and frontend
                                    customization using modern web technologies.
                                </p>
                            </div>
                        </div>
                    </section>
                </section>
            </Entrance >
        </>

    )
}