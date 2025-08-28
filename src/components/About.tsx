import React from 'react';
import SectionCodeAnimation from './SectionCodeAnimation';

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24">
      {/* Code Animation */}
      <SectionCodeAnimation section="about" position="left" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start mt-2 sm:mt-4 lg:mt-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-teal-400">
                <img
                  src="/profile.jpg"
                  alt="Jacob Santos"
                  className="w-full h-full object-cover rounded-full transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify" style={{ fontFamily: 'Consolas, monospace' }}>
              <p>
              I am a Computer Engineering graduate with a strong passion for Artificial Intelligence and Machine Learning. With a solid foundation in both hardware and software systems.
              </p>
              
              <p>
              I specialize in developing embedded and intelligent solutions using Arduino, ESP32, and programming languages such as Python, Java, and C++. My academic journey includes hands-on experience in microcontroller programming, embedded systems, and the implementation of AI and ML models for real-world problem-solving. 
              </p>
              
              <p>
              I thrive in analytical and high-pressure environments, bringing attention to detail and a problem-solving mindset to every project. Through active participation in engineering research, competitions, and seminars, I continuously expand my technical expertise and stay aligned with the latest trends in intelligent systems. I am eager to collaborate with innovative teams to build smart, efficient technologies that make a tangible impact.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
                Creative
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
                Passionate
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
                Innovative
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LicensesAndCertifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Certified Web Developer",
      issuer: "FreeCodeCamp",
      date: "January 2025",
      image: "https://example.com/certified-web-developer.jpg",
      link: "https://www.freecodecamp.org/certification/jcobsntos/web-developer",
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2024",
      image: "https://example.com/aws-certified-solutions-architect.jpg",
      link: "https://aws.amazon.com/certification/certified-solutions-architect/",
    },
    {
      id: 3,
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "June 2023",
      image: "https://example.com/google-data-analytics.jpg",
      link: "https://www.coursera.org/professional-certificates/google-data-analytics",
    },
  ];

  return (
    <section id="licenses-certifications" className="relative py-16 sm:py-20 lg:py-24 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Licenses & Certifications
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            A showcase of my professional certifications and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((certification) => (
            <a
              key={certification.id}
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 p-6 transition-all duration-500 transform-gpu hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/30"
            >
              <div className="relative h-40 mb-4">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {certification.title}
              </h3>
              <p className="text-gray-300 text-sm mb-1">
                <strong>Issuer:</strong> {certification.issuer}
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Date:</strong> {certification.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;