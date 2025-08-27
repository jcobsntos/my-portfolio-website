import React from 'react';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import SectionCodeAnimation from './SectionCodeAnimation';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "AWS S3", "Supabase"],
      gradient: "from-teal-500 to-blue-600"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "PWA", "Ionic", "Expo", "App Store"],
      gradient: "from-blue-600 to-purple-500"
    },
    {
      title: "DevOps & Tools",
      icon: Code2,
      skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Kubernetes"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Photoshop", "UI Design", "UX Research", "Prototyping"],
      gradient: "from-pink-500 to-cyan-400"
    }
  ];

  return (
    <section id="skills" className="relative py-16 sm:py-20 lg:py-24">
      {/* Code Animation */}
      <SectionCodeAnimation section="skills" position="left" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm text-gray-300 bg-gray-700/30 px-3 py-2 rounded-lg border border-gray-600/30 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200 text-center group-hover:bg-gray-700/50"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "JavaScript", "Python", "TypeScript", "Go", "Rust", "Java", "C++",
              "HTML5", "CSS3", "SASS", "WebGL", "Three.js", "D3.js", "Chart.js",
              "Jest", "Cypress", "Playwright", "Webpack", "Vite", "Rollup",
              "Stripe", "PayPal", "OAuth", "JWT", "WebRTC", "Socket.io", "Websockets"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600/30 rounded-full text-gray-400 text-sm hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-200 cursor-default hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;