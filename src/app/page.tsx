"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialBar from "@/components/SocialBar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col justify-center p-8 relative overflow-hidden perspective-1000">
      
      {/* 1. صورتك الشخصية كخلفية مدمجة */}
      <div className="absolute inset-0 z-0">
        {/* طبقة التدرج اللوني لدمج الصورة مع الخلفية الداكنة وجعل النص مقروءاً */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950 z-10" />
        
        {/* استدعاء الصورة من مجلد public */}
        <Image
          src="./ff.png" /* تأكد من أن اسم الصورة ومسارها صحيحان */
          alt="Abd ulRahman Daifallah"
          fill
          className="object-cover object-left opacity-40 md:opacity-60"
          priority
        />
      </div>

      {/* 2. القسم الرئيسي للنصوص (سيكون فوق الصورة بفضل z-10) */}
      <div className="max-w-3xl space-y-6 z-10 relative mt-20 lg:mt-0">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-100 drop-shadow-lg"
        >
          Abd ulRahman Daifallah
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl text-gray-300 font-medium drop-shadow-md"
        >
          Software Engineer | ASP.NET Web API & Microservices
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg text-gray-400 leading-relaxed max-w-xl mt-6 font-medium"
        >
          Transforming complex architectural challenges into scalable, high-performance systems. 
          Currently building robust backend solutions at Pal4IT, combining a strong foundation 
          in Informatics Engineering from Damascus University with modern containerization and DevOps practices.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 pt-8"
        >

          <Link 
          href="/projects" 
          className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg text-center"
        >
          View Projects
        </Link>
        

          <button className="px-8 py-3 border border-gray-500 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg backdrop-blur-sm">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* 3. محاكاة C++ والهولوغرام على اليمين */}
      <div className="hidden lg:flex absolute right-16 top-1/4 w-96 h-96 items-center justify-center perspective-1000 z-10">
        
        {/* التوهج الخلفي العام */}
        <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full" />

        {/* الحلقة المدارية الأولى */}
        <motion.div
          animate={{ rotateX: [0, 360], rotateY: [0, 180], rotateZ: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full border-[1px] border-cyan-500/30 rounded-full border-dashed flex items-center justify-center transform-style-3d"
        >
          <span className="absolute top-0 text-[8px] text-cyan-300/60 font-mono tracking-widest">
            {`docker run -p 8080:80 api-service`}
          </span>
        </motion.div>

        {/* الحلقة المدارية الثانية */}
        <motion.div
          animate={{ rotateX: [360, 0], rotateY: [180, 0], rotateZ: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[80%] h-[80%] border-[2px] border-cyan-400/20 rounded-full flex items-center justify-center transform-style-3d"
        >
          <span className="absolute bottom-0 text-[8px] text-cyan-300/50 font-mono">
            {`services.AddControllers();`}
          </span>
        </motion.div>

        {/* النواة المركزية المضيئة */}
        <motion.div
          animate={{ rotateY: [0, -360], rotateX: [0, 180] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="relative w-32 h-32 bg-cyan-950/80 backdrop-blur-md border border-cyan-400/60 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.4)] transform-style-3d"
        >
          <div className="absolute inset-0 bg-cyan-400/20 blur-xl" />
          
          <div className="text-center z-10">
            <span className="text-5xl font-bold text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
              C++
            </span>
          </div>
        </motion.div>
      </div>
    <Skills />
    <Projects />
    <Contact />
    <SocialBar />
    </main>
  );
}