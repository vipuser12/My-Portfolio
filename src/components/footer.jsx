import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter hover:text-indigo-500 transition-colors cursor-default">
              MOHAMED AHMED
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Building digital experiences with precision.
            </p>
          </div>

          <div className="flex space-x-6 text-2xl">
            <a href="https://github.com/vipuser12" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:-translate-y-1">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-ahmed1212/" className="text-gray-500 hover:text-[#0A66C2] transition-all transform hover:-translate-y-1">
              <FaLinkedin />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              &copy {currentYear} All Rights Reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Designed & Developed by <span className="text-indigo-400">Me</span>
            </p>
          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-gray-900 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-700">
            Powered by React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
