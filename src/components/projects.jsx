import React from 'react';
import { projects } from '../data/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500 transition-all duration-500 flex flex-col h-full shadow-2xl backdrop-blur-sm bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <div className="p-8 grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gray-900 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                    {project.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-medium bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-gray-800/50 bg-black/20 flex justify-between items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  <FaGithub size={18} /> Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-bold shadow-lg shadow-indigo-600/20"
                >
                  Live Demo <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
