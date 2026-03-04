

import useReveal from "../hooks/useReveal";

const About = () => {
  const [ref, visible] = useReveal();

  const expertise = [
    { label: "Visuals", value: "Creative UI" },
    { label: "Performance", value: "Core Web Vitals" },
    { label: "Strategy", value: "Conversion UX" },
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">
              The Frontend Specialist
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              I build interfaces that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-serif italic px-2">move the needle.</span>
            </h3>
          </div>
          
          <div className="flex gap-8 border-l border-white/10 pl-8">
            {expertise.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-slate-500 text-[10px] uppercase tracking-widest">{item.label}</span>
                <span className="text-white font-mono text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Bio Card */}
          <div className="md:col-span-8 p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              I specialize in crafting high-conversion <span className="text-white font-semibold">Frontend experiences</span>. 
              To me, code is more than logic—it’s a marketing tool. By optimizing for 
              <span className="text-blue-400"> lightning-fast performance</span> and pixel-perfect responsiveness, 
              I ensure your brand's first impression is a lasting one.
            </p>
          </div>

          {/* Marketing Hybrid Card */}
          <div className="md:col-span-4 p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border border-white/10 flex flex-col justify-between">
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">Frontend + Marketing</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                I bridge the gap between "it looks good" and "it makes sales." Every component I build is designed to guide user behavior.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;