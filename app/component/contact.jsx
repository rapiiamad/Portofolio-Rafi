import Entrance from "./entrance.jsx";
import { ImDiamonds } from "react-icons/im";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

export default function Contact() {
    return (
        <Entrance>
            <section
                id="contact"
                className="flex flex-col lg:flex-row bg-[#f0faff]/70 py-20 md:py-24 lg:py-30 pb-24 lg:pb-75 px-6 md:px-16 lg:px-65 w-full justify-between gap-14 lg:gap-[40px] items-stretch"
            >
                {/* LEFT */}
                <div className="flex flex-col w-full h-full justify-between gap-8 jakarta">
                    <div className="jakarta flex w-full flex-col items-start gap-6 mb-4">
                        <div className="flex w-fit flex-row items-center gap-[10px] md:gap-[12px] rounded-full bg-white shadow-lg shadow-black/4 px-3 md:px-4 py-1 md:py-[4px] pr-4 md:pr-[24px]">
                            <ImDiamonds className="text-[#3a3a3a]/80 h-[10px] w-[10px] md:h-[12px] md:w-[12px]" />

                            <p className="jakarta text-[14px] md:text-[19px] font-medium text-[#3a3a3a]">
                                Contact
                            </p>
                        </div>

                        <h1 className="jakarta text-left text-[28px] md:text-[44px] font-semibold leading-tight text-[#3a3a3a]">
                            Interested In Working Together?
                        </h1>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#939393] text-[15px] md:text-[16px]">Email</p>
                        <p className="text-[#1E1E1E] text-[16px] md:text-[18px] font-medium break-all">
                            rafiahmadalfarissi@gmail.com
                        </p>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#939393] text-[15px] md:text-[16px]">Phone</p>
                        <p className="text-[#1E1E1E] text-[16px] md:text-[18px] font-medium">
                            +62 8123-0784-741
                        </p>
                    </div>

                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[#939393] text-[15px] md:text-[16px]">Social Media</p>

                        <div className="flex flex-row gap-[15px] flex-wrap">
                            <a href="https://instagram.com/" target="_blank">
                                <RiInstagramFill className="w-[24px] h-[24px] md:w-[25px] md:h-[25px] text-[#3a3a3a] hover:scale-110 transition" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/rafi-ahmad-alfarissi-721a97381/"
                                target="_blank"
                            >
                                <IoLogoLinkedin className="w-[24px] h-[24px] md:w-[25px] md:h-[25px] text-[#3a3a3a] hover:scale-110 transition" />
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&to=rafiahmadalfarissi@gmail.com"
                                target="_blank"
                            >
                                <BiLogoGmail className="w-[24px] h-[24px] md:w-[25px] md:h-[25px] text-[#3a3a3a] hover:scale-110 transition" />
                            </a>

                            <a href="https://wa.me/6281230784741" target="_blank">
                                <RiWhatsappFill className="w-[24px] h-[24px] md:w-[25px] md:h-[25px] text-[#3a3a3a] hover:scale-110 transition" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <form className="flex flex-col w-full lg:w-[100%] pt-0 lg:pt-[55px] gap-[20px]">
                    <input
                        placeholder="Your Name"
                        type="text"
                        className="bg-white p-4 md:p-5 shadow-md shadow-black/4 rounded-md outline-none text-[#363636] text-[15px] md:text-[16px]"
                    />

                    <input
                        placeholder="Your Email"
                        type="email"
                        className="bg-white p-4 md:p-5 shadow-md shadow-black/4 rounded-md outline-none text-[#363636] text-[15px] md:text-[16px]"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="bg-white p-4 md:p-5 shadow-md shadow-black/4 rounded-md outline-none text-[#363636] text-[15px] md:text-[16px]"
                    ></textarea>

                    <button className="bg-[#1E1E1E] text-white py-4 rounded-md text-[15px] md:text-[16px] font-medium mt-[10px] hover:bg-[#222] transition">
                        Send Message
                    </button>
                </form>
            </section>
        </Entrance>
    );
}