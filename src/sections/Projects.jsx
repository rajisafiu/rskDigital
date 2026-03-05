
import React from "react";
import projects from "../data/projects";
import useReveal from "../hooks/useReveal";
// 1. Importing the icon for the Live Demo
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" ref={ref} className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">
              Selected Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured <span className="italic font-serif text-slate-400">Projects</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-xs text-sm leading-relaxed border-l border-white/10 pl-6">
            A collection of high-performance interfaces designed to convert and scale.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 gap-10 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                <img 
                  src={project.image || "/api/placeholder/600/400"} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Tech Tags */}
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>

                {/* Single Button - Live Demo Only */}
                <div className="mt-auto">
                  <a
                    href={project.live}
                    target="_blank"           // Opens in new tab
                    rel="noopener noreferrer" // Security best practice
                    className="group/btn w-full flex items-center justify-center gap-3 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl"
                  >
                    <span className="text-base">View Live Project</span>
                    <ExternalLink 
                      size={18} 
                      className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" 
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;