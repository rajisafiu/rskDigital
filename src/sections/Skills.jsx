import useReveal from "../hooks/useReveal";

const Skills = () => {
  const [ref, visible] = useReveal();

  const techStack = [
    { name: "React", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "JavaScript", level: "Core" },
    { name: "Bootstrap", level: "Legacy" },
    { name: "HTML/CSS", level: "Expert" },
  ];

  const strategyStack = [
    { name: "SEO Optimization", type: "Organic" },
    { name: "FB/Google Ads", type: "Paid" },
    { name: "TikTok Ads", type: "Viral" },
    { name: "Email Strategy", type: "Retention" },
  ];

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My Digital <span className="italic font-serif text-slate-400">Toolkit</span>
          </h3>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          
          {/* Frontend Engineering Card */}
          <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[#0F172A] rounded-[2.4rem] p-8 md:p-10 h-full transition-all group-hover:bg-[#0F172A]/80">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h4 className="text-2xl font-bold text-white">Frontend Engineering</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {techStack.map((skill) => (
                  <div key={skill.name} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group/item">
                    <p className="text-white font-medium mb-1">{skill.name}</p>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                       <div className={`h-full bg-blue-500 transition-all duration-1000 ${visible ? 'w-full' : 'w-0'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Digital Strategy Card */}
          <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[#0F172A] rounded-[2.4rem] p-8 md:p-10 h-full transition-all group-hover:bg-[#0F172A]/80">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h4 className="text-2xl font-bold text-white">Digital Strategy</h4>
              </div>

              <div className="space-y-4">
                {strategyStack.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                    <span className="text-white font-medium">{item.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;