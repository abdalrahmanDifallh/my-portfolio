"use client";

import { motion } from "framer-motion";

// بيانات المشاريع والخبرات مصممة لتعكس قوتك في الأنظمة الموزعة
const projectsData = [
  {
    title: "Enterprise Microservices Architecture",
    role: "System Architecture & Development",
    description: "A robust microservices ecosystem built with ASP.NET Web API, utilizing advanced CI/CD pipelines via Azure DevOps and orchestrated on Azure Kubernetes Service (AKS) for maximum scalability.",
    tech: ["ASP.NET Web API", "AKS", "Azure DevOps", "Docker"],
    link: "#"
  },
  {
    title: "Pal4IT Backend Core",
    role: "Backend Developer",
    description: "Developing and maintaining high-performance backend systems, optimizing API integrations, and ensuring reliable data flow and security for enterprise-level applications.",
    tech: ["C#", ".NET", "RESTful APIs", "SQL"],
    link: "#"
  },
  {
    title: "Distributed E-Commerce Platform",
    role: "Full-Cycle Development",
    description: "Designed and implemented a scalable e-commerce application utilizing a distributed architecture to handle high user traffic, secure transactions, and seamless service communication.",
    tech: ["Spring Boot", "Spring Cloud", "Docker", "Microservices"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="w-full py-20 relative z-20 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-left text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Featured Projects & Experience
          </h3>
          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative bg-gray-900/40 border border-gray-800 rounded-3xl p-8 md:p-10 hover:bg-gray-800/40 transition-colors duration-500 overflow-hidden"
            >
              {/* تأثير إضاءة خفيف عند التمرير بالماوس */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <span className="text-blue-400 font-mono text-sm tracking-wider uppercase mb-2 block">
                  {project.role}
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h4>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-1.5 bg-gray-950/80 border border-gray-700 rounded-full text-sm text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}