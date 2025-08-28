import React, { useRef } from 'react';

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
    {
      id: 4,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "April 2023",
      image: "https://example.com/microsoft-azure-fundamentals.jpg",
      link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    },
    {
      id: 5,
      title: "Certified Kubernetes Administrator",
      issuer: "CNCF",
      date: "May 2023",
      image: "https://example.com/certified-kubernetes-administrator.jpg",
      link: "https://www.cncf.io/certification/cka/",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging = true;
    startX = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft = scrollContainerRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust scroll speed
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

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

        <div
          className="flex space-x-6 overflow-hidden cursor-grab"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {certifications.map((certification) => (
            <a
              key={certification.id}
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-80 bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 p-6 transition-all duration-500 transform-gpu hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/30"
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

export default LicensesAndCertifications;
