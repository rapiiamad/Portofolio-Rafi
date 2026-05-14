import { CgFigma } from "react-icons/cg";
import { RiNextjsFill, RiTailwindCssFill, RiHtml5Fill } from "react-icons/ri";
import { FaElementor, FaWordpress } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";

export const tools = [
  {
    imgs: [
      <RiTailwindCssFill />,
      <FaCss3Alt />,
      <RiNextjsFill />,
      <RiHtml5Fill />,
      <CgFigma />,
    ],
    category: "code",
  },
  {
    imgs: [
      <FaElementor />,
      <FaWordpress />,
      <CgFigma />,
    ],
    category: "builder",
  },
  {
    imgs: [
      <CgFigma />,
    ],
    category: "design",
  },
];