"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa"; 

// 1. تعريف المتغيرات التي ستحتاجها كل بطاقة
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string; // جعلناه اختيارياً بوضع علامة ?
  techStack: string[];
}

export default function ProjectCard({ title, description, imageUrl, liveUrl, githubUrl, techStack }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300"
    >
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="relative h-64 w-full overflow-hidden bg-gray-800 block cursor-pointer">
        <Image
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-6 py-2 bg-cyan-500 text-gray-950 font-bold rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <FaGlobe /> View Live Site
          </span>
        </div>
      </a>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Source Code">
              <FaGithub size={24} />
            </a>
          )}
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}