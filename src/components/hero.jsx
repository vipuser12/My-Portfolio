import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Hero() {
  return (
    <div>
      <section id="home" className="bg-linear-to-b from-black via-black to-gray-800 w-full h-screen text-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 flex flex-col gap-6">HELLO WORLD,<span>I'M MOHAMED AHMED</span></h1>
          <p className="text-lg md:text-2xl mb-8">A passionate Frontend Developer.</p>
          <a href="#projects"
            className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            View My Projects
          </a>
        </div>
        <div className='absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-20'>
          <a href="https://github.com/vipuser12" target="_blank" rel="noopener noreferrer"
            className='text-gray-400 hover:text-indigo-500 hover:-translate-y-1 transition-all duration-300 text-2xl'>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-ahmed1212/" target="_blank" rel="noopener noreferrer"
            className='text-gray-400 hover:text-indigo-500 hover:-translate-y-1 transition-all duration-300 text-2xl'>
            <FaLinkedin />
          </a>
          <div className="w-px h-24 bg-gray-700 mt-2"></div>
        </div>
        <div className='hidden md:flex border-2 border-gray-200 rounded-full w-6 h-10 absolute bottom-12 items-center justify-center '>
          <span className='animate-mouse text-gray-400 text-5xl absolute bottom-5'>.</span>
        </div>
      </section>
    </div>
  )
}

export default Hero;
