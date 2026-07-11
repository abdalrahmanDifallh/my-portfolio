"use client";

import { motion } from "framer-motion";

// البيانات مقسمة بشكل احترافي لتعكس تخصصك
const skillCategories = [
  {
    title: "Backend & Architecture",
    skills: ["ASP.NET Web API", "C#", "Microservices", "RESTful APIs"],
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.1)]",
    border: "border-cyan-500/30 hover:border-cyan-400/60"
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes (AKS)", "Azure DevOps", "CI/CD Pipelines"],
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.1)]",
    border: "border-blue-500/30 hover:border-blue-400/60"
  },
  {
    title: "Frontend & Tooling",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.1)]",
    border: "border-emerald-500/30 hover:border-emerald-400/60"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // تأخير بسيط بين ظهور كل بطاقة والأخرى
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Skills() {
  return (
    <section className="w-full py-20 relative z-20">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Technical Expertise
          </h3>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        {/* شبكة البطاقات */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
                
              className={`bg-gray-900/50 backdrop-blur-sm border ${category.border} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${category.glow}`}
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-gray-500 mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}   