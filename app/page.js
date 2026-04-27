
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import { tools } from "./component/tools.jsx";
import ToolsFade from "./component/projectsimg.jsx";
import Entrance from "./component/entrance.jsx";


export default function Home() {
  const codeTools = tools.find((t) => t.category === "code");
  const builderTools = tools.find((t) => t.category === "builder");
  const designTools = tools.find((t) => t.category === "design");

  return (
    <>

      <Navbar />


      <main className="min-h-screen flex items-center bg-[#FEFEFE] flex-col">

        <Entrance>
          <section id="heading" className="mx-auto px-56 w-full flex flex-col md:flex-col items-center justify-between gap-10 py-80">

            {/* TEXT */}
            <div className="w-full">
              <h1 className="text-[64px] md:text-[64px] font-extrabold leading-relaxed text-[#1E1E1E]">
                I’m Rafi — a junior web developer <span className="bg-gradient-to-r from-black/40 to-black/50 text-transparent bg-clip-text font-semibold"> who turns
                  complex problems into elegant, user-
                  friendly solutions.
                </span></h1>
            </div>
          </section>
        </Entrance>


          <section id="profile" className="mx-auto w-full px-56 flex flex-col md:flex-row items-end gap-5 pt-100 pb-80">

            <div className="w-full flex flex-col items-end gap-2 pb-25">
              <p className="text-[#939393] mb-[1px] text-[16px]">About Me</p>
              <h1 className="text-3xl md:text-[54px] font-semibold leading-tight text-[#1E1E1E] text-right">
                Rafi Ahmad Alfarissi</h1>
              <h1 className="text-2xl md:text-[20px] font-light leading-tight text-white bg-gray-900 text-right px-3">
                - Junior Web Developer</h1>
              <h1 className="text-xl md:text-[18px] font-light leading-tight text-[#939393] text-right my-10 w-[400px]">
                I’m a frontend developer focused on building
                clean, responsive</h1>
              <div className="flex flex-row mt-20 gap-[10px]">
                <button className="py-2 px-6 text-[#1E1E1E] rounded-sm text-[16px]">
                  Download CV
                </button>
                <button className="py-2 px-6 bg-[#1E1E1E] text-white rounded-sm hover:bg-gray-800 transition shadow-md text-[16px]">
                  See My Work
                </button>
              </div>
            </div>


            <div>
              <img
                src="image/Rectangle 16 pp (1).png"
                alt="Rafi"
                className="w-60 md:w-500 "
              />
            </div>


          </section>



          <section id="profile" className="mx-auto w-full px-56 pb-75 flex flex-col md:flex-row justify-between">

            <div className="w-full flex flex-col items-start gap-2 pb-25">
              <p className="text-[#939393] mb-1 text-[16px]">Experience</p>

              <h1 className="text-3xl md:text-[44px] font-bold leading-tight text-[#1E1E1E]">
                Billa Creative</h1>
              <h1 className="text-2xl md:text-[20px] font-light leading-tight text-white bg-gray-900 text-right px-3">
                - Junior Web Developer</h1>
              <h1 className="text-[#939393] text-[20px] my-[40px] font-medium">6 Month</h1>
              <h1 className="text-md md:text-[18px] font-light leading-tight text-[#939393] w-[400px]">
                I’m a frontend developer focused on building
                clean, responsive</h1>
            </div>

            <div className="w-full flex flex-col items-start gap-2 pb-25">
              <p className="text-[#939393] mb-1 text-[16px]">Education</p>

              <h1 className="text-3xl md:text-[44px] font-bold leading-tight text-[#1E1E1E]">
                SMK Telkom Malang</h1>
              <h1 className="text-2xl md:text-[20px] font-light leading-tight text-white bg-[#1E1E1E] text-right px-3">
                - Software Engineering</h1>
              <h1 className="text-[#1E1E1E] text-[20px] my-[40px] font-medium"> 2023 - 2026 </h1>
              <h1 className="text-md md:text-[18px] font-light leading-tight text-[#939393] w-[400px]">
                I’m a frontend developer focused on building
                clean, responsive</h1>
            </div>

          </section>



          <section id="skills" className="w-full px-56 flex flex-col items-center py-75">

            <div className="w-full flex flex-col items-center gap-2 pb-25">
              <p className="text-[#939393] mb-1 text-[16px]">Skills</p>

              <h1 className="text-3xl md:text-[44px] font-bold leading-tight text-[#1E1E1E]">
                Tech Stack</h1>
              <h1 className="text-md md:text-[18px] font-light leading-tight text-center text-[#939393] mt-[20px]">
                I’m a frontend developer focused on building
                clean, responsive</h1>
            </div>

            <div className="gap-[80px] w-full flex flex-col">
              <div className="w-full flex flex-col items-start gap-[60px]">
                <h1 className="text-2xl md:text-[20px] font-light leading-tight text-white bg-[#1E1E1E]text-right px-3">
                  - Frontend</h1>

                <div className="w-full px-[20px] flex flex-row gap-[40px]">

                  <div className=" w-full flex flex-col gap-[30px]">
                    <div className="w-full flex flex-row items-center gap-[20px]">
                      <div className="w-[150px] flex flex-col gap-[20px] items-center">
                        <img
                          src="image/html.png"
                          alt="html"
                          className="w-[55px] h-[55px]"
                        />
                        <h1 className="text-[16px] text-[#939393]">HTML</h1>
                      </div>
                      <div className="w-full h-[20px] bg-[#F0F0F0]"><div className="w-6/12 h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm shadow-md"></div></div>
                    </div>
                    <div className="w-full flex flex-row items-center gap-[20px]">
                      <div className="w-[150px] flex flex-col gap-[20px] items-center">
                        <img
                          src="image/css.png"
                          alt="html"
                          className="w-[55px] h-[55px]"
                        />
                        <h1 className="text-[16px] text-[#939393]">CSS</h1>
                      </div>
                      <div className="w-full h-[20px] bg-[#F0F0F0]"><div className="w-8/12 h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm shadow-md"></div></div>
                    </div>
                  </div>

                  <div className=" w-full flex flex-col gap-[30px]">
                    <div className="w-full flex flex-row items-center gap-[20px]">
                      <div className="w-[150px] flex flex-col gap-[20px] items-center">
                        <img
                          src="image/tailwind.png"
                          alt="html"
                          className="w-[55px] h-[55px]"
                        />
                        <h1 className="text-[16px] text-[#939393]">Tailwind</h1>
                      </div>
                      <div className="w-full h-[20px] bg-[#F0F0F0]"><div className="w-9/12 h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm shadow-md"></div></div>
                    </div>
                    <div className="w-full flex flex-row items-center gap-[20px]">
                      <div className="w-[150px] flex flex-col gap-[20px] items-center">
                        <img
                          src="image/next.png"
                          alt="html"
                          className="w-[55px] h-[55px]"
                        />
                        <h1 className="text-[16px] text-[#939393]">Next.Js</h1>
                      </div>
                      <div className="w-full h-[20px] bg-[#F0F0F0]"><div className="w-10/12 h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm shadow-md"></div></div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-[60px]">
                <h1 className="text-2xl md:text-[20px] font-light leading-tight text-white bg-[#1E1E1E] text-right px-3">
                  - Web Builder</h1>

                <div className="w-full px-[20px] flex flex-row gap-[40px]">

                  <div className=" w-full flex flex-col gap-[30px]">
                    <div className="w-full flex flex-row items-center gap-[20px]">
                      <div className="w-[150px] flex flex-col gap-[20px] items-center">
                        <img
                          src="image/wordpress.png"
                          alt="html"
                          className="w-[55px] h-[55px]"
                        />
                        <h1 className="text-[16px] text-[#939393]">Wordpress</h1>
                      </div>
                      <div className="w-full h-[20px] bg-[#F0F0F0]"><div className="w-9/12 h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm shadow-md"></div></div>
                    </div>

                  </div>

                  <div className=" w-full flex flex-col gap-[30px]">
                    <div className="w-full flex flex-row items-center gap-[20px]">
                      <div className="w-[150px] flex flex-col gap-[20px] items-center">
                        <img
                          src="image/elementor.png"
                          alt="html"
                          className="w-[55px] h-[55px]"
                        />
                        <h1 className="text-[16px] text-[#939393]">Elementor</h1>
                      </div>
                      <div className="w-full h-[20px] bg-[#F0F0F0]"><div className="w-10/12 h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm shadow-md"></div></div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-[60px]">
                <h1 className="text-2xl md:text-[20px] font-light leading-tight text-white bg-[#1E1E1E] text-right px-3">
                  - Design</h1>

                <div className="w-full px-[20px] flex flex-row gap-[40px]">

                  <div className=" w-full flex flex-col gap-[30px]">
                    <div className="w-full flex flex-row items-center gap-[20px]">
                      <div className="w-[150px] flex flex-col gap-[20px] items-center">
                        <img
                          src="image/figma.png"
                          alt="html"
                          className="w-[55px] h-[55px]"
                        />
                        <h1 className="text-[16px] text-[#939393]">Figma</h1>
                      </div>
                      <div className="w-full h-[20px] bg-[#F0F0F0]">
                        <div className="flex flex-col w-10/12 h-[20px] bg-gradient-to-l from-[#76ABFC] to-[#ACEDEF] rounded-sm shadow-md text-[13px] text-[#ffffff] font-light items-end px-[10px] justify-center">
                          Advanced
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className=" w-full flex flex-col gap-[30px]">
                  </div>

                </div>
              </div>

            </div>

          </section>



          <section id="projects" className="flex flex-col py-100 items-center">

            <h1 className="text-[54px] text-[#1E1E1E] font-semibold leading-tight">See My Work</h1>
            <h1 className="text-[54px] text-[#939393] font-light leading-tight blur-xs -mt-2">See My Work</h1>
            <h1 className="text-[54px] text-[#c2c2c2] font-light leading-tight blur-sm -mt-2">See My Work</h1>

          </section>



          <section id="projects" className="flex flex-col w-full px-56 pb-75 gap-[40px]">
            <div className="flex flex-col w-full items-start">
              <p className="text-[#939393] text-[16px]">My Projects</p>
              <h1 className="text-gray-900 font-semibold text-[44px]">Featured Projects</h1>
            </div>
            <div className="grid grid-cols-2 gap-y-[80px] gap-x-[50px] w-full">

              <a href="#projects">
                <div className="relative group w-full h-[400px] rounded-lg overflow-hidden shadow-md">
                  {/* GAMBAR / BACKGROUND */}
                  <img
                    src="image/tes.png"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-103"
                  />

                  <div className="flex flex-row absolute top-0 left-0 w-fit gap-[10px] px-[30px] pt-[30px] z-50">
                    <div className="flex flex-row pl-[8px] pr-[25px] py-[5px] gap-[15px] rounded-full bg-white group-hover:bg-white/70 transition duration-700 items-center">
                      <ToolsFade imgs={codeTools.imgs} />
                      <h3 className="text-[#1E1E1E] text-[18px] w-fit font-medium">
                        Portofolio
                      </h3>
                    </div>
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 
                  group-hover:opacity-100 
                  transition duration-700 
                  flex flex-col justify-start px-[30px] pt-[30px] pb-[20px]">

                    <div className="flex flex-col translate-y-4 group-hover:translate-y-0 transition duration-700 gap-[8px] items-center">

                      <div className="flex flex-row w-full justify-between items-center">
                        <h3 className="text-gray-900 text-[18px] font-medium opacity-0 px-[45px] py-[3px]">
                          Project Title
                        </h3>
                        <p className="text-gray-900 text-[16px] font-light px-[20px] py-[4px] rounded-full bg-white/70">Done in 2 Weeks</p>
                      </div>
                      <p className="text-gray-200 text-[14px] font-extralight w-120 px-[45px] pt-[130px] [letter-spacing:0.5px] text-center">Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js</p>

                    </div>

                    <div className="flex flex-col h-full items-center justify-end"><h1 className="text-[10px] font-semibold text-white/70">Click To See More Detail</h1></div>

                  </div>
                </div>
              </a>

              <a href="#projects">
                <div className="relative group w-full h-[400px] rounded-lg overflow-hidden shadow-md">
                  {/* GAMBAR / BACKGROUND */}
                  <img
                    src="image/tes.png"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-103"
                  />

                  <div className="flex flex-row absolute top-0 left-0 w-fit gap-[10px] px-[30px] pt-[30px] z-50">
                    <div className="flex flex-row pl-[8px] pr-[25px] py-[5px] gap-[15px] rounded-full bg-white shadow-md group-hover:bg-white/70 transition duration-700 items-center">
                      <ToolsFade imgs={builderTools.imgs} />
                      <h3 className="text-[#1E1E1E] text-[18px] w-fit font-medium">
                        Ecommerce Website
                      </h3>
                    </div>
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 
                  group-hover:opacity-100 
                  transition duration-700 
                  flex flex-col justify-start px-[30px] pt-[30px] pb-[20px]">

                    <div className="flex flex-col translate-y-4 group-hover:translate-y-0 transition duration-700 gap-[8px] items-center">

                      <div className="flex flex-row w-full justify-between items-center">
                        <h3 className="text-[#1E1E1E] text-[18px] font-medium opacity-0 px-[45px] py-[3px]">
                          Ecommerce Website
                        </h3>
                        <p className="text-[#1E1E1E] text-[16px] font-light px-[20px] py-[4px] rounded-full bg-white/70">Done in 2 Weeks</p>
                      </div>
                      <p className="text-gray-200 text-[14px] font-extralight w-120 px-[45px] pt-[130px] [letter-spacing:0.5px] text-center">Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js</p>

                    </div>

                    <div className="flex flex-col h-full items-center justify-end"><h1 className="text-[10px] font-semibold text-white/70">Click To See More Detail</h1></div>

                  </div>
                </div>
              </a>

              <a href="#projects">
                <div className="relative group w-full h-[400px] rounded-lg overflow-hidden shadow-md ">
                  {/* GAMBAR / BACKGROUND */}
                  <img
                    src="image/tes.png"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-103"
                  />

                  <div className="flex flex-row absolute top-0 left-0 w-fit gap-[10px] px-[30px] pt-[30px] z-50">
                    <div className="flex flex-row pl-[8px] pr-[25px] py-[5px] gap-[15px] rounded-full bg-white shadow-md group-hover:bg-white/70 transition duration-700 items-center">
                      <ToolsFade imgs={designTools.imgs} />
                      <h3 className="text-[#1E1E1E] text-[18px] w-fit font-medium">
                        Ecommerce Design
                      </h3>
                    </div>
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 
                  group-hover:opacity-100 
                  transition duration-700 
                  flex flex-col justify-start px-[30px] pt-[30px] pb-[20px]">

                    <div className="flex flex-col translate-y-4 group-hover:translate-y-0 transition duration-700 gap-[8px] items-center">

                      <div className="flex flex-row w-full justify-between items-center">
                        <h3 className="text-[#1E1E1E] text-[18px] font-medium opacity-0 px-[45px] py-[3px]">
                          Ecommerce Design
                        </h3>
                        <p className="text-[#1E1E1E] text-[16px] font-light px-[20px] py-[4px] rounded-full bg-white/70">Done in 2 Weeks</p>
                      </div>
                      <p className="text-gray-200 text-[14px] font-extralight w-120 px-[45px] pt-[130px] [letter-spacing:0.5px] text-center">Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js Built with Next.Js</p>

                    </div>

                    <div className="flex flex-col h-full items-center justify-end"><h1 className="text-[10px] font-semibold text-white/70">Click To See More Detail</h1></div>

                  </div>
                </div>
              </a>

            </div>
          </section>



          <section id="contact" className="flex flex-col py-100 items-center">

            <h1 className="text-[54px] text-[#1E1E1E] font-semibold leading-tight">Say Hi To Me</h1>
            <h1 className="text-[54px] text-[#939393] font-light leading-tight blur-xs -mt-2">Say Hi To Me</h1>
            <h1 className="text-[54px] text-[#c2c2c2] font-light leading-tight blur-sm -mt-2">Say Hi To Me</h1>

          </section>
 
          <section id="contact" className="flex flex-row pb-75 px-56 w-full justify-between gap-[40px] items-stretch">


            <div className="flex flex-col w-full justify-between">
              <div>
                <p className="text-[#939393] text-[16px]">Contact</p>
                <h1 className="text-[#1E1E1E] font-semibold text-[44px] w-[400px] leading-tight">Interested in working together?</h1>
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


            <form className="flex flex-col w-[660px] pt-[40px] gap-[10px]">

              <div className="w-[660px] flex flex-col gap-[10px]">
                <label className="text-[16px] font-medium text-[#1E1E1E]">
                  Name
                </label>
                <input
                  placeholder="Your Name"
                  type="text"
                  className="bg-[#F0F0F0] p-5 rounded-sm focus:border-gray-600 outline-none text-[#888888] text-[16px]"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="text-[15px] font-medium text-[#1E1E1E]">
                  Email
                </label>
                <input
                  placeholder="Your Email"
                  type="email"
                  className="bg-[#F0F0F0] p-5 rounded-sm focus:border-gray-600 outline-none text-[#888888] text-[16px]"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="text-[16px] font-medium text-[#1E1E1E]">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="bg-[#F0F0F0] p-5 rounded-sm focus:border-gray-600 outline-none text-[#888888] text-[16px]"
                ></textarea>
              </div>

              <button className="bg-black text-white py-4 rounded-sm text-[16px] font-medium mt-[10px]">
                Send Message
              </button>
            </form>
          </section>


        <section id="footer" className="w-full flex flex-col pb-[100px] pt-[130px] items-center gap-[60px]">
          <h1 className="text-[44px] font-semibold text-[#1E1E1E] [letter-spacing:-2px]">Porto Rafi</h1>
          <div className="flex flex-col gap-[40px] items-center">
            <Footer />
            <div className="flex flex-row gap-[30px]">
              <a href="https://github.com/rapiiamad"><img src="image/git.png" className="w-[45px] h-[45px]" /></a>
              <a href="https://www.linkedin.com/in/rafi-ahmad-alfarissi-721a97381/"><img src="image/in.png" className="w-[45px] h-[45px]" /></a>
              <a href="https://mail.google.com/mail/?view=cm&to=rafiahmadalfarissi@gmail.com"><img src="image/gmail.png" className="w-[45px] h-[45px]" /></a>
              <a href="https://wa.me/6281230784741"><img src="image/wa.png" className="w-[45px] h-[45px]" /></a>
            </div>
            <h1 className="text-[14px] font-light text-[#7A7A7A]">© 2026 Rafi Ahmad Alfarissi. All rights reserved.</h1>
          </div>
        </section>

      </main>
    </>
  );
}