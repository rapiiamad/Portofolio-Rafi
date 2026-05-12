import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { tools } from "./tools.jsx";
import ToolsFade from "./projectsimg.jsx";
import Entrance from "./entrance.jsx";
import Text from "./text.jsx";
import { FaCode } from "react-icons/fa6";

export default function Heading() {
    const codeTools = tools.find((t) => t.category === "code");
    const builderTools = tools.find((t) => t.category === "builder");
    const designTools = tools.find((t) => t.category === "design");

    return (
        <Entrance>
            <section
                id="heading"
                className="mx-auto px-65 w-full h-screen flex flex-col items-center justify-between gap-10 pt-70 pb-90"
            >
                {/* TEXT */}
                <div className="w-full flex justify-center text-center">
                    <Text />
                </div>
            </section>
        </Entrance>
    )
}