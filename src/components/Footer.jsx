

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  return (
    <footer className="relative mt-20 pb-12 overflow-hidden">
      {/* Decorative Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-600/10 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              RSK<span className="text-blue-500 font-extrabold italic">Digital</span>
            </a>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Crafting premium digital experiences with modern tech stacks and intuitive design.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-items-end">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Platform</h4>
              <ul className="flex flex-col gap-2">
                <li><a href="#about" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">About</a></li>
                <li><a href="#projects" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">Projects</a></li>
                <li><a href="#skills" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">Skills</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Social</h4>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-2">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} RSK Digital. Built with precision.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;