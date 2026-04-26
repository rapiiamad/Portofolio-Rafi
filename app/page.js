
import Navbar from "./component/navbar.jsx";

export default function Home() {
  return (
    <>

      <Navbar />


      <main className="min-h-screen flex items-center bg-white flex-col">


        <section className="mx-auto px-56 w-full flex flex-col md:flex-col items-center justify-between gap-10 py-75">

          {/* TEXT */}
          <div className="w-full">
            <h1 className="text-3xl md:text-7xl font-bold leading-tight text-gray-900">
              I’m Rafi — a junior web developer <span className="text-[#939393]"> who turns
                complex problems into elegant, user-
                friendly solutions.
              </span></h1>
          </div>
        </section>


        <section id="profile" className="mx-auto w-full px-56 flex flex-col md:flex-row items-end gap-5 pt-100 pb-80">

          <div className="w-full flex flex-col items-end gap-2 pb-25">
            <p className="text-gray-600 mb-1">About Me</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 text-right">
              Rafi Ahmad Alfarissi</h1>
            <h1 className="text-2xl md:text-2xl font-light leading-tight text-white bg-gray-900 text-right px-3">
              - Junior Web Developer</h1>
            <h1 className="text-xl md:text-2xl font-light leading-tight text-gray-600 text-right my-10 w-[400px]">
              I’m a frontend developer focused on building
              clean, responsive</h1>
            <div className="flex flex-row mt-20 gap-[10px]">
              <button className="py-3 px-6 text-gray-800 rounded-sm text-lg">
                Download CV
              </button>
              <button className="py-3 px-6 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition shadow-md text-lg">
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
            <p className="text-gray-600 mb-1 text-lg">Experience</p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Billa Creative</h1>
            <h1 className="text-2xl md:text-2xl font-light leading-tight text-white bg-gray-900 text-right px-3">
              - Junior Web Developer</h1>
            <h1 className="text-gray-600 text-xl my-[40px]">6 Month</h1>
            <h1 className="text-md md:text-xl font-light leading-tight text-gray-600 w-[400px]">
              I’m a frontend developer focused on building
              clean, responsive</h1>
          </div>

          <div className="w-full flex flex-col items-start gap-2 pb-25">
            <p className="text-gray-600 mb-1 text-lg">Education</p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              SMK Telkom Malang</h1>
            <h1 className="text-2xl md:text-2xl font-light leading-tight text-white bg-gray-900 text-right px-3">
              - Software Engineering</h1>
            <h1 className="text-gray-600 text-xl my-[40px]"> 2023 - 2026 </h1>
            <h1 className="text-md md:text-xl font-light leading-tight text-gray-600 w-[400px]">
              I’m a frontend developer focused on building
              clean, responsive</h1>
          </div>

        </section>


        <section id="skills" className="w-full px-56 flex flex-col items-center py-75">

          <div className="w-full flex flex-col items-center gap-2 pb-25">
            <p className="text-gray-600 mb-1 text-lg">Skills</p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Tech Stack</h1>
            <h1 className="text-md md:text-xl font-light leading-tight text-center text-gray-600 mt-[20px]">
              I’m a frontend developer focused on building
              clean, responsive</h1>
          </div>

          <div className="gap-[80px] w-full flex flex-col">
            <div className="w-full flex flex-col items-start gap-[40px]">
              <h1 className="text-2xl md:text-2xl font-light leading-tight text-white bg-gray-900 text-right px-3">
                - Frontend</h1>

              <div className="w-full px-[20px] flex flex-row gap-[40px]">

                <div className=" w-full flex flex-col gap-[30px]">
                  <div className="w-full flex flex-row items-center gap-[20px]">
                    <div className="w-[150px] flex flex-col gap-[10px] items-center">
                      <img
                        src="image/html.png"
                        alt="html"
                        className="w-[55px] h-[55px]"
                      />
                      <h1 className="text-md">HTML</h1>
                    </div>
                    <div className="w-full h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm">
                    </div>
                  </div>
                  <div className="w-full flex flex-row items-center gap-[20px]">
                    <div className="w-[150px] flex flex-col gap-[10px] items-center">
                      <img
                        src="image/css.png"
                        alt="html"
                        className="w-[55px] h-[55px]"
                      />
                      <h1 className="text-md">CSS</h1>
                    </div>
                    <div className="w-full h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm">
                    </div>
                  </div>
                </div>

                <div className=" w-full flex flex-col gap-[30px]">
                  <div className="w-full flex flex-row items-center gap-[20px]">
                    <div className="w-[150px] flex flex-col gap-[10px] items-center">
                      <img
                        src="image/tailwind.png"
                        alt="html"
                        className="w-[55px] h-[55px]"
                      />
                      <h1 className="text-md">Tailwind</h1>
                    </div>
                    <div className="w-full h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm">
                    </div>
                  </div>
                  <div className="w-full flex flex-row items-center gap-[20px]">
                    <div className="w-[150px] flex flex-col gap-[10px] items-center">
                      <img
                        src="image/next.png"
                        alt="html"
                        className="w-[55px] h-[55px]"
                      />
                      <h1 className="text-md">Next.Js</h1>
                    </div>
                    <div className="w-full h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm">
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-[40px]">
              <h1 className="text-2xl md:text-2xl font-light leading-tight text-white bg-gray-900 text-right px-3">
                - Frontend</h1>

              <div className="w-full px-[20px] flex flex-row gap-[40px]">

                <div className=" w-full flex flex-col gap-[30px]">
                  <div className="w-full flex flex-row items-center gap-[20px]">
                    <div className="w-[150px] flex flex-col gap-[10px] items-center">
                      <img
                        src="image/wordpress.png"
                        alt="html"
                        className="w-[55px] h-[55px]"
                      />
                      <h1 className="text-md">Wordpress</h1>
                    </div>
                    <div className="w-full h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm">
                    </div>
                  </div>
  
                </div>

                <div className=" w-full flex flex-col gap-[30px]">
                  <div className="w-full flex flex-row items-center gap-[20px]">
                    <div className="w-[150px] flex flex-col gap-[10px] items-center">
                      <img
                        src="image/elementor.png"
                        alt="html"
                        className="w-[55px] h-[55px]"
                      />
                      <h1 className="text-md">Elementor</h1>
                    </div>
                    <div className="w-full h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm">
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-[40px]">
              <h1 className="text-2xl md:text-2xl font-light leading-tight text-white bg-gray-900 text-right px-3">
                - Frontend</h1>

              <div className="w-full px-[20px] flex flex-row gap-[40px]">

                <div className=" w-full flex flex-col gap-[30px]">
                  <div className="w-full flex flex-row items-center gap-[20px]">
                    <div className="w-[150px] flex flex-col gap-[10px] items-center">
                      <img
                        src="image/figma.png"
                        alt="html"
                        className="w-[55px] h-[55px]"
                      />
                      <h1 className="text-md">Figma</h1>
                    </div>
                    <div className="w-full h-[20px] bg-gradient-to-r from-[#76ABFC] to-[#ACEDEF] rounded-sm">
                    </div>
                  </div>
  
                </div>

                <div className=" w-full flex flex-col gap-[30px]">
                </div>

              </div>
            </div>

          </div>

        </section>
      </main>
    </>
  );
}