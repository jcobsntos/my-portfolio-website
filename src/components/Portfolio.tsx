import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionCodeAnimation from './SectionCodeAnimation';

type ProjectCategory = 'Frontend' | 'Full Stack' | 'Backend' | 'AI/ML' | 'Microcontrollers';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string;
    tags: string[];
    category: ProjectCategory;
  }> = [
    {
      id: 1,
      title: "Expense Tracker",
      description: "A full-stack MERN (MongoDB, Express, React, Node.js) based Expense Tracker that helps users manage income, expenses, and budgets with an intuitive dashboard.",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg",
      github: "https://github.com/jcobsntos/expense-tracker-web-app",
      demo: "https://expense-tracker-vio.vercel.app",
      tags: ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Express", "Mongoose"],
      category: 'Full Stack'
    },
    {
      id: 2,
      title: "Object Detection System",
      description: "A real-time object detection system that can identify and track objects in both static images and live video streams using TensorFlow, OpenCV, and COCO API.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKis9ECId8eIwn_p0SVMBt3a1vfvKOcOZXy6zK0fWoyzXnzQTguKc2CV__6oI1Pwg22NjWsErpDKqjwQdzjilvmqwWkXPj2ncglphh6mAhpoZ_QXQiDwxnwo-GjKEP0fEOb3uBlNlh9sc/s1600/tensorflow2objectdetection.png",
      github: "https://github.com/jcobsntos/tensorflow-object-detection",
      demo: "https://drive.google.com/file/d/1vBUIjv5vtACw-fuPCQkIH2WTwHPziWDN/view",
      tags: ["Python", "TensorFlow", "OpenCV", "COCO API", "Pytorch", "YOLO"],
      category: 'AI/ML'
    },
    {
      id: 3,
      title: "Microcontroller-Based Automated Hand Sanitation Dispenser with IoT Monitoring",
      description: "This project presents a microcontroller-based, contactless alcohol dispenser enhanced with a real-time IoT monitoring system to track alcohol levels, send email alerts, and log usage history. It’s designed for public safety and operational efficiency in educational institutions",
      image: "https://media.istockphoto.com/id/1266361566/photo/macro-detail-of-wireless-wifi-programmable-microcontroller-module-electronic-small-computer.jpg?b=1&s=612x612&w=0&k=20&c=IfbrV8iDRGZa8ycEM_LwlaitxCG8NQ4CKnbwRSMuG1g=",
      github: "https://github.com/jcobsntos/arduino-iot-cloud-sanitizer",
      demo: "https://drive.google.com/file/d/1HUfIjYYRyNzzaHKBdwOETTL9Pfh8wwKH/view?usp=sharing",
      tags: ["ESP32", "Arduino IDE","Arduino Cloud", "IoT", "Microcontroller", "Ultrasonic Sensor", "TFT LCD", "Water Pump", "IR Sensor", "Active Buzzer", "RGB LED", "C++"],
      category: "Microcontrollers"
    },
    {
      id: 4,
      title: "Melody Player",
      description: "A modern desktop music player with YouTube Music-inspired design built with Electron and React. Features local music file playback, metadata extraction, search functionality, and a beautiful dark theme interface.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/jcobsntos/melody-player",
      demo: "https://github.com/jcobsntos/melody-player/releases",
      tags: ["Electron", "React", "Node.js", "JavaScript", "CSS3", "GitHub Actions", "Desktop App", "Audio Processing"],
      category: 'Frontend'
    },
    {
      id: 5,
      title: "AI Resume Analyzer",
      description: "An AI-powered Applicant Tracking System (ATS) that helps both job seekers and recruiters with intelligent resume analysis, job matching, and candidate evaluation. Features real-time AI feedback, ATS compatibility scoring, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/jcobsntos/ai-resume-analyzer",
      demo: "https://resume-ai-analyzer-web-app.vercel.app",
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI API", "Tailwind CSS", "JWT", "Framer Motion", "Prisma"],
      category: 'Full Stack'
    },
    
  ];

  const categories: { key: ProjectCategory; label: string; description: string }[] = [
    { key: 'Frontend', label: 'Frontend', description: 'UI-first builds focused on interaction and visuals' },
    { key: 'Full Stack', label: 'Full Stack', description: 'End-to-end apps spanning frontend and backend' },
    { key: 'Backend', label: 'Backend', description: 'APIs, services, and data processing' },
    { key: 'AI/ML', label: 'AI / ML', description: 'Intelligent systems and applied machine learning' },
    { key: 'Microcontrollers', label: 'Microcontrollers', description: 'Embedded and hardware-integrated projects' },
  ];

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 lg:py-24 bg-gray-800/30">
      {/* Code Animation */}
      <SectionCodeAnimation section="portfolio" position="right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            A collection of my recent work showcasing various technologies and creative solutions
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map(({ key, label, description }) => {
            const items = projects.filter((p) => p.category === key);
            if (items.length === 0) return null;
            return (
              <div key={key}>
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                      {label}
                    </span>
                  </h3>
                  <p className="text-gray-400 mt-2">{description}</p>
                </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {items.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className={`relative bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 transform-gpu ${
                  hoveredCard === project.id 
                    ? 'scale-105 rotate-1 shadow-2xl shadow-cyan-500/20 border-cyan-400/30' 
                    : 'hover:border-gray-600/50'
                }`}
                style={{
                  transform: hoveredCard === project.id 
                    ? 'perspective(1000px) rotateX(10deg) rotateY(-5deg) scale(1.05)' 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  
                  {/* Overlay with links */}
                  <div 
                    className={`absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                      hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800/80 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-200 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800/80 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-200 hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl blur opacity-0 transition-opacity duration-300 -z-10 ${
                    hoveredCard === project.id ? 'opacity-20' : ''
                  }`}
                ></div>
              </div>
            </div>
          ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;