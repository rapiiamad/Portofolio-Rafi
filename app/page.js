
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import { tools } from "./component/tools.jsx";
import ToolsFade from "./component/projectsimg.jsx";
import Entrance from "./component/entrance.jsx";
import Text from "./component/text.jsx";
import { FaCode } from "react-icons/fa6";
import Heading from "./component/heading.jsx";
import Profile from "./component/profile.jsx";
import Skills from "./component/skills.jsx";
import Projects from "./component/projects.jsx";
import Contact from "./component/contact.jsx"
import FooterSec from "./component/footersection.jsx"



export default function Home() {
  const codeTools = tools.find((t) => t.category === "code");
  const builderTools = tools.find((t) => t.category === "builder");
  const designTools = tools.find((t) => t.category === "design");

  return (
    <>

      <Navbar />
      <main className="min-h-screen flex items-center bg-[#f7fcff] flex-col">
        <Heading />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
        <FooterSec />
      </main>
    </>
  );
}