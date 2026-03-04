import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const lastUpdated = "March 4, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you contact us via email or WhatsApp. This may include your name, email address, and any other information you choose to provide."
    },
    {
      title: "2. How We Use Information",
      content: "We use the information we collect to respond to your inquiries, provide technical services, and improve our website's performance and conversion optimization."
    },
    {
      title: "3. Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure."
    },
    {
      title: "4. Third-Party Links",
      content: "Our website may contain links to third-party sites (like GitHub or LinkedIn). These sites have separate and independent privacy policies. We have no responsibility or liability for their content."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="text-blue-500 italic font-serif">Policy</span>
          </h1>
          <p className="text-slate-400">Last Updated: {lastUpdated}</p>
        </motion.div>

        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 space-y-12"
        >
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                {section.title}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          <div className="pt-8 border-t border-white/5">
            <p className="text-slate-500 text-sm">
              If you have any questions regarding this privacy policy, you may contact us using the information on our 
              <a href="#contact" className="text-blue-400 hover:underline ml-1">contact page</a>.
            </p>
          </div>
        </motion.div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link 
          to="/home"
            
            className="text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;