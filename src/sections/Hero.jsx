
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden">
      
      {/* 1. Background Spotlight Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 opacity-50" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        
        {/* 2. Modern Badge Entry */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-medium tracking-widest uppercase text-slate-300">Available for New Projects</span>
        </motion.div>

        {/* 3. High-Contrast Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6"
        >
          Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">RSK Digital</span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-slate-200 mb-8"
        >
          Engineering <span className="italic font-serif">performant</span> web experiences.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I bridge the gap between complex code and conversion-focused design to help brands dominate the digital landscape.
        </motion.p>

        {/* 4. Upgraded Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95"
          >
            Explore Projects
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all active:scale-95"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* 5. Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-1 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;