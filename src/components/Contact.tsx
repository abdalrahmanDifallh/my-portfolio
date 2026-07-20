"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="w-full py-20 relative z-20">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
             &Let's Build Something Great
          </h3>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have a complex architectural challenge or need a robust backend solution, I'm always open to discussing new opportunities and technical challenges.
          </p>
        </motion.div>

        {/* نموذج التواصل (Form) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        >
          {/* إضاءة خلفية خفيفة للنموذج */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-950/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                  placeholder="Ahmad Sy" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-950/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                  placeholder="Ahmad@example.com" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                rows={5} 
                className="w-full bg-gray-950/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" 
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>
            
            <button 
              type="button" 
              className="w-full py-4 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        
        {/* تذييل بسيط (Footer) */}
        <div className="mt-20 text-center text-gray-500 text-sm border-t border-gray-800/50 pt-8">
          <p>© {new Date().getFullYear()} Abd ulRahman Daifallah. All rights reserved.</p>
        </div>

      </div>
    </section>
  );
}