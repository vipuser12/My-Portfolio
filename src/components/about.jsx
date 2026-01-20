import { About as aboutData } from '../data/data.jsx';

function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-24 border-t border-gray-800">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 border border-gray-800 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl mb-16">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center italic">
              "{aboutData[0].description}"
            </p>

            <div className="flex flex-wrap gap-6 justify-center mt-12">
              <a
                href='#contact'
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-indigo-600/20 transform hover:scale-105 active:scale-95"
              >
                Hire Me
              </a>
              <a
                href="/public/My CV (1).pdf"
                download="Mohamed_Ahmed_CV.pdf"
                className="inline-flex items-center justify-center border-2 border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-12 text-indigo-400 tracking-wide">
              Tech Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {aboutData[0].skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group transition-all duration-300"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-black/40 border border-gray-800 rounded-2xl mb-4 group-hover:border-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-gray-500 group-hover:text-indigo-400 transition-colors uppercase tracking-tighter">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
