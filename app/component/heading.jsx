import Entrance from "./entrance.jsx";
import Text from "./text.jsx";
import { FaDownload } from "react-icons/fa6";

export default function Heading() {
    return (
        <Entrance>
            <section
                id="heading"
                className="mx-auto px-7 md:px-16 lg:px-65 w-full max-h-screen h-screen flex flex-col items-center justify-center md:justify-center gap-10 md:pt-50 lg:pt-70 md:pb-40 lg:pb-90"
            >
                <div className="w-full flex flex-col gap-30 md:gap-25 justify-center mt-50">
                    <Text />
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-fit">
                        <button className="py-2 px-8 border-[#3a3a3a] border-[1.5] text-[#3c3c3c] rounded-md hover:bg-[#3c3c3c]/10 transition shadow-md text-[14px] jakarta font-bold">
                            Get Started
                        </button>
                        <a href="/cvraf.pdf" download>
                            <div className="flex flex-row items-center gap-[10px] justify-center">
                                <FaDownload className="text-[#3a3a3a] w-[14px] h-[14px]" />
                                <button className="py-2 md:pr-8 text-[#3a3a3a] rounded-full text-[14px] jakarta font-bold">
                                    Download CV
                                </button>
                            </div>
                        </a>

                    </div>
                </div>
            </section>
        </Entrance>
    );
}