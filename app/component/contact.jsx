import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { tools } from "./tools.jsx";
import ToolsFade from "./projectsimg.jsx";
import Entrance from "./entrance.jsx";
import Text from "./text.jsx";
import { FaCode } from "react-icons/fa6";

export default function Contact() {
    const codeTools = tools.find((t) => t.category === "code");
    const builderTools = tools.find((t) => t.category === "builder");
    const designTools = tools.find((t) => t.category === "design");

    return (
        <Entrance>
            <section id="contact" className="flex flex-row bg-[#f0faff]/70 py-30 pb-75 px-65 w-full justify-between gap-[40px] items-stretch">


                <div className="flex flex-col w-full justify-start gap-8 jakarta">
                    <div className="jakarta flex w-full flex-col items-start gap-6">
                        <div className="flex w-fit flex-row items-center gap-[12px] rounded-full bg-[white] shadow-lg shadow-black/3 px-4 py-[4px] pr-[24px]">
                            <img
                                src="/image/diamond.png"
                                alt="diamond"
                                className="h-[16px] w-[16px]"
                            />

                            <p className="jakarta text-[19px] font-medium text-[#3a3a3a]">
                                Tech Stack
                            </p>
                        </div>
                        <h1 className="jakarta text-left text-3xl font-semibold leading-tight text-[#3a3a3a] md:text-[44px]">
                            Interested In Working Together
                        </h1>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#939393] text-[16px]">Email</p>
                        <p className="text-[#1E1E1E] text-[18px] font-medium">rafiahmadalfarissi@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#939393] text-[16px]">Phone</p>
                        <p className="text-[#1E1E1E] text-[18px] font-medium">+62 8123-0784-741</p>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#939393] text-[16px]">Social Media</p>
                        <div className="flex flex-row gap-[10px]">
                            <a href="https://github.com/rapiiamad"><img src="image/git.png" className="w-[40px] h-[40px]" /></a>
                            <a href="https://www.linkedin.com/in/rafi-ahmad-alfarissi-721a97381/"><img src="image/in.png" className="w-[40px] h-[40px]" /></a>
                            <a href="https://mail.google.com/mail/?view=cm&to=rafiahmadalfarissi@gmail.com"><img src="image/gmail.png" className="w-[40px] h-[40px]" /></a>
                            <a href="https://wa.me/6281230784741"><img src="image/wa.png" className="w-[40px] h-[40px]" /></a>
                        </div>
                    </div>
                </div>


                <form className="flex flex-col w-[100%] pt-[40px] gap-[20px]">

                    <div className="flex flex-col gap-[10px]">
                        <input
                            placeholder="Your Name"
                            type="text"
                            className="bg-[white] p-5 shadow-md shadow-black/4 rounded-md focus:border-gray-600 outline-none text-[#363636] text-[16px]"
                        />
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <input
                            placeholder="Your Email"
                            type="email"
                            className="bg-[white] p-5 shadow-md shadow-black/4 rounded-md focus:border-gray-600 outline-none text-[#363636] text-[16px]"
                        />
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="bg-[white] p-5 shadow-md shadow-black/4 rounded-md focus:border-gray-600 outline-none text-[#363636] text-[16px]"
                        ></textarea>
                    </div>

                    <button className="bg-black text-white py-4 rounded-md text-[16px] font-medium mt-[10px]">
                        Send Message
                    </button>
                </form>
            </section>
        </Entrance>
    )
}