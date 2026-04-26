"use client";
export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-50">
            <div className="w-full px-56 py-5 flex justify-between items-center">

                {/* LOGO */}
                <div className="flex flex-row gap-[20px] h-fit items-end bg-white shadow-sm rounded-4xl px-[25px] py-[10px]">
                    <img
                        className=" w-[30px] h-[30x]"
                        src="image/billa.png"
                        alt=""
                    />
                    <h1 className="font-medium text-xl text-gray-900">
                        Rafi Ahmad Alfarissi
                    </h1>
                </div>

                {/* MENU */}
                <ul className="flex gap-[40px] text-gray-600 font-medium bg-white shadow-sm rounded-4xl text-lg px-[30px] py-[10px]">
                    <li><a href="#profile" className="hover:text-black">Profile</a></li>
                    <li><a href="#skills" className="hover:text-black">Skills</a></li>
                    <li><a href="#projects" className="hover:text-black">Projects</a></li>
                    <li><a href="#contact" className="hover:text-black">Contact</a></li>
                </ul>


                {/* CONTACT */}
                <div className="flex gap-[7px] bg-white shadow-sm rounded-4xl px-[10px] py-[2px]">
                    <img
                        src="image/ig.png"
                        alt=""
                        className="w-[45px] h-[45px] rounded-4xl" />
                    <img
                        src="image/in.png"
                        alt=""
                        className="w-[45px] h-[45px] rounded-4xl" />
                    <img
                        src="image/gmail.png"
                        alt=""
                        className="w-[45px] h-[45px] rounded-4xl" />
                    <img
                        src="image/wa.png"
                        alt=""
                        className="w-[45px] h-[45px] rounded-4xl" />
                </div>

            </div>
        </nav>
    );
}