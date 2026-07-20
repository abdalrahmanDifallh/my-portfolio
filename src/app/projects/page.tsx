import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
  // مصفوفة تحتوي على بيانات جميع مشاريعك
  const myProjects = [
    {
      title: "Modern Landing Page",
      description: "A fully responsive, high-performance landing page deployed live. Designed with smooth animations and an optimized structure ready for seamless backend integration.",
      imageUrl: "/landing-page-mockup.png", // تأكد من وجود الصورة
      liveUrl: "https://6a5e1716aa800f47efcdc624--rainbow-cajeta-3df6ef.netlify.app/",
      githubUrl: "#",
      techStack: ["Next.js", "Tailwind CSS", "Vercel"]
    },
    {
    title: "IglooMart_Web E-Commerce",
    description: "A full-stack e-commerce platform built with ASP.NET Web API and MVC architecture. Features a robust SQL database backend with a custom, responsive HTML, CSS, and JavaScript frontend.",
    imageUrl: "/igloomart-mockup.png", // ضع هنا مسار صورة متجر إيغلو مارت
    liveUrl: "https://igloomart.com/", // استبدل هذا برابط الموقع المباشر
    githubUrl: "#", // رابط المستودع
    techStack: ["ASP.NET API", "MVC", "SQL", "HTML/CSS/JS", "Full-Stack"]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-6xl mx-auto pt-8">
        
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors mb-12 inline-block">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-100">
          My Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* حلقة التكرار التي ترسم البطاقات تلقائياً */}
          {myProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              techStack={project.techStack}
            />
          ))}
        </div>

      </div>
    </main>
  );
}