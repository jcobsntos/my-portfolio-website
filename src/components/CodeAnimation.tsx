import React, { useState, useEffect, useRef } from 'react';

const CodeAnimation: React.FC = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const codeLines = [
    'const developer = {',
    '  name: "Jacob Santos",',
    '  skills: ["React", "TypeScript", "Node.js"],',
    '  passion: "Creating amazing tech experiences",',
    '  location: "Earth, Milky Way"',
    '  focus: "Full-stack development",',
    '  github: "https://github.com/jcobsntos"',
    '};',
    '',
    'function buildPortfolio() {',
    '  const techStack = [',
    '    "React", "TypeScript", "Node.js",',
    '    "Tailwind CSS", "PostgreSQL", "AWS"',
    '  ];',
    '  ',
    '  return (',
    '    <AwesomeWebsite',
    '      tech={techStack}',
    '      responsive={true}',
    '      accessible={true}',
    '    />',
    '  );',
    '}',
    '',
    'class Project {',
    '  constructor(name, tech, description) {',
    '    this.name = name;',
    '    this.tech = tech;',
    '    this.description = description;',
    '  }',
    '  ',
    '  deploy() {',
    '    console.log("🚀 Deploying to production!");',
    '  }',
    '}',
    '',
    '// Let\'s create something amazing together!',
    'developer.connect();',
    'await buildPortfolio();'
  ];

  useEffect(() => {
    const currentLine = codeLines[currentLineIndex];
    
    if (currentLineIndex < codeLines.length) {
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => [...prev, currentLine]);
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 200);
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
      }, 3000);
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

  return (
    <div className="absolute left-0 top-0 h-full flex items-center opacity-20 pointer-events-none">
      <div className="w-full max-w-lg px-4 sm:px-6">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-cyan-500/20">
          {/* Terminal header */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-cyan-400/60 text-sm font-mono ml-2">portfolio.js</span>
          </div>
          
          {/* Code content */}
          <div ref={scrollRef} className="font-mono text-sm sm:text-base text-cyan-400 max-h-96 overflow-y-auto">
            {displayedLines.map((line, index) => (
              <div key={index} className="mb-1">
                <span className="text-cyan-600/60 mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                <span className="glow-cyan">{line}</span>
              </div>
            ))}
            
            {currentLineIndex < codeLines.length && (
              <div className="mb-1">
                <span className="text-cyan-600/60 mr-2">{(currentLineIndex + 1).toString().padStart(2, '0')}</span>
                <span className="glow-cyan">
                  {codeLines[currentLineIndex].slice(0, currentCharIndex)}
                  <span 
                    className={`inline-block w-2 h-4 sm:h-5 bg-cyan-400 ml-1 transition-opacity duration-150 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.8), 0 0 16px rgba(34, 211, 238, 0.4)'
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

export default CodeAnimation;
