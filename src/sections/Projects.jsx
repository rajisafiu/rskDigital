

import projects from "../data/projects";
import useReveal from "../hooks/useReveal";

const Projects = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">Selected Work</h2>
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
              {/* Image Container - The "Visual Hook" */}
              <div className="relative aspect-video overflow-hidden bg-slate-800">
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* Placeholder for project image */}
                <img 
                  src={project.image || "/api/placeholder/600/400"} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Tech Tags Floating on Image */}
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>

                {/* Buttons with Glassmorphism */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="flex-1 text-center py-3 bg-white text-black font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 text-center py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                  >
                    Source Code
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