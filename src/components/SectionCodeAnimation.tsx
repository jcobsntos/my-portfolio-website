import React, { useState, useEffect, useRef } from 'react';

interface SectionCodeAnimationProps {
  section: 'about' | 'portfolio' | 'skills' | 'contact';
  position?: 'left' | 'right';
}

const SectionCodeAnimation: React.FC<SectionCodeAnimationProps> = ({ section, position = 'right' }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const getCodeLines = (section: string) => {
    switch (section) {
      case 'about':
        return [
          'class AboutMe {',
          '  constructor() {',
          '    this.name = "Jacob Santos";',
          '    this.role = "Full-Stack Developer";',
          '    this.location = "United States";',
          '  }',
          '  ',
          '  getBackground() {',
          '    return {',
          '      education: "Computer Science",',
          '      experience: "5+ years",',
          '      passion: "Building web apps"',
          '    };',
          '  }',
          '  ',
          '  getInterests() {',
          '    return [',
          '      "Web Development",',
          '      "UI/UX Design",',
          '      "Open Source"',
          '    ];',
          '  }',
          '}',
          '',
          'const about = new AboutMe();',
          'console.log(about.getBackground());'
        ];
      case 'portfolio':
        return [
          'const projects = [',
          '  {',
          '    name: "E-Commerce Platform",',
          '    tech: ["React", "Node.js", "MongoDB"],',
          '    description: "Full-stack e-commerce solution"',
          '  },',
          '  {',
          '    name: "Task Management App",',
          '    tech: ["TypeScript", "Express", "PostgreSQL"],',
          '    description: "Team collaboration tool"',
          '  },',
          '  {',
          '    name: "Portfolio Website",',
          '    tech: ["React", "Tailwind", "Vite"],',
          '    description: "This very website!"',
          '  }',
          '];',
          '',
          'projects.forEach(project => {',
          '  console.log(`🚀 ${project.name}`);',
          '  console.log(`   Tech: ${project.tech.join(", ")}`);',
          '});'
        ];
      case 'skills':
        return [
          'const skillSet = {',
          '  frontend: {',
          '    languages: ["JavaScript", "TypeScript"],',
          '    frameworks: ["React", "Vue", "Angular"],',
          '    styling: ["CSS3", "Tailwind", "Sass"]',
          '  },',
          '  backend: {',
          '    languages: ["Node.js", "Python", "Java"],',
          '    databases: ["PostgreSQL", "MongoDB", "Redis"],',
          '    cloud: ["AWS", "Azure", "GCP"]',
          '  },',
          '  tools: ["Git", "Docker", "Jenkins"],',
          '  softSkills: ["Communication", "Leadership", "Problem Solving"]',
          '};',
          '',
          'function getSkillLevel(skill) {',
          '  return Math.floor(Math.random() * 100) + 1;',
          '}',
          '',
          'Object.entries(skillSet).forEach(([category, skills]) => {',
          '  console.log(`📚 ${category}:`, skills);',
          '});'
        ];
      case 'contact':
        return [
          'const contactInfo = {',
          '  email: "jacob@example.com",',
          '  phone: "+1 (555) 123-4567",',
          '  linkedin: "linkedin.com/in/jacobsantos",',
          '  github: "github.com/jacobsantos"',
          '};',
          '  ',
          'class ContactForm {',
          '  constructor() {',
          '    this.fields = ["name", "email", "message"];',
          '    this.required = true;',
          '  }',
          '  ',
          '  validate(data) {',
          '    return this.fields.every(field => data[field]);',
          '  }',
          '  ',
          '  async send(data) {',
          '    if (this.validate(data)) {',
          '      console.log("📧 Sending message...");',
          '      return await fetch("/api/contact", {',
          '        method: "POST",',
          '        body: JSON.stringify(data)',
          '      });',
          '    }',
          '  }',
          '}',
          '',
          'const form = new ContactForm();',
          'form.send(contactInfo);'
        ];
      default:
        return [];
    }
  };

  const codeLines = getCodeLines(section);

  useEffect(() => {
    const currentLine = codeLines[currentLineIndex];
    
    if (currentLineIndex < codeLines.length) {
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => [...prev, currentLine]);
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, codeLines]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [displayedLines, currentCharIndex]);

  const positionClasses = position === 'left' 
    ? 'absolute left-0 top-0 h-full flex items-center' 
    : 'absolute right-0 top-0 h-full flex items-center';

  return (
    <div className={`${positionClasses} opacity-15 pointer-events-none`}>
      <div className="w-full max-w-sm px-4">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/15">
          {/* Terminal header */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-cyan-400/50 text-xs font-mono ml-2">{section}.js</span>
          </div>
          
          {/* Code content */}
          <div ref={scrollRef} className="font-mono text-xs text-cyan-400 max-h-64 overflow-y-auto">
            {displayedLines.map((line, index) => (
              <div key={index} className="mb-1">
                <span className="text-cyan-600/40 mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                <span className="glow-cyan">{line}</span>
              </div>
            ))}
            
            {/* Current typing line */}
            {currentLineIndex < codeLines.length && (
              <div className="mb-1">
                <span className="text-cyan-600/40 mr-2">{(currentLineIndex + 1).toString().padStart(2, '0')}</span>
                <span className="glow-cyan">
                  {codeLines[currentLineIndex].slice(0, currentCharIndex)}
                  <span 
                    className={`inline-block w-1 h-3 bg-cyan-400 ml-1 transition-opacity duration-150 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      boxShadow: '0 0 6px rgba(34, 211, 238, 0.6), 0 0 12px rgba(34, 211, 238, 0.3)'
                    }}
                  ></span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCodeAnimation;
