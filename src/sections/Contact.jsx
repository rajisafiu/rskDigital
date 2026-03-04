

import useReveal from "../hooks/useReveal";

const Contact = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div 
        className={`max-w-5xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-transparent border border-white/10 p-12 md:p-24 text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        {/* Abstract Background Glows */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />

        <div className="relative z-10">
          <h2 className="text-sm uppercase tracking-[0.4em] text-blue-400 font-bold mb-6">
            Ready to scale?
          </h2>
          
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Let’s build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-slate-400">
              extraordinary together.
            </span>
          </h3>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Whether you have a fully-baked idea or just a spark of inspiration, 
            I’m here to help you turn it into a high-performance reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:yourmail@example.com"
              className="group relative px-10 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative">Start a Project</span>
            </a>

            <a
              href="#projects"
              className="text-slate-300 font-medium hover:text-white transition-colors border-b border-white/10 hover:border-blue-500 pb-1"
            >
              View my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;