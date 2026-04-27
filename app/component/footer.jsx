export default function Footer() {
    return (

        <ul className="flex gap-[60px] text-[#939393] font-light text-[18px]">
            <li><a href="#profile" className="hover:text-gray-900 transition duration-300 ease-in-out ">Profile</a></li>
            <li><a href="#skills" className="hover:text-gray-900 transition duration-300 ease-in-out ">Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-900 transition duration-300 ease-in-out ">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-900 transition duration-300 ease-in-out">Contact</a></li>
        </ul>

    );
}