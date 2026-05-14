import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { tools } from "./tools.jsx";
import ToolsFade from "./projectsimg.jsx";
import Entrance from "./entrance.jsx";
import Text from "./text.jsx";
import { FaCode } from "react-icons/fa6";

export default function FooterSec() {
    const codeTools = tools.find((t) => t.category === "code");
    const builderTools = tools.find((t) => t.category === "builder");
    const designTools = tools.find((t) => t.category === "design");

    return (
        <Entrance>
            <section
                id="footer"
                className="w-full flex flex-col items-center gap-[50px] md:gap-[70px] bg-[#f7fcff] py-15 shadow-[0_-2px_25px_rgba(0,0,0,0.03)]"
            >
                <h1 className="text-[30px] md:text-[44px] font-semibold text-[#1E1E1E] [letter-spacing:-2px]">
                    Porto Rafi
                </h1>

                <div className="flex flex-col items-center gap-[40px]">
                    <Footer />
                    <h1 className="text-[10px] font-light text-[#7A7A7A]">
                        © 2026 Rafi Ahmad Alfarissi. All rights reserved.
                    </h1>
                </div>
            </section>
        </Entrance>
    )
}