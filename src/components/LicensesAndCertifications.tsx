import React, { useRef, useState, useEffect } from 'react';

type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
};

type LicensesAndCertificationsProps = {
  certifications?: Certification[];
  speed?: number; // Speed of the movement (default: 1)
};

const LicensesAndCertifications: React.FC<LicensesAndCertificationsProps> = ({
  certifications = [
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
  ],
  speed = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    let animationFrame: number;

    const moveItems = () => {
      if (!isPaused && !isDragging && containerRef.current) {
        containerRef.current.scrollLeft += speed;
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
          containerRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(moveItems);
    };

    animationFrame = requestAnimationFrame(moveItems);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, isDragging, speed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust drag sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent, link: string) => {
    if (isDragging) {
      e.preventDefault(); // Prevent click if dragging
    } else {
      window.open(link, '_blank'); // Open link in a new tab
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
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {certifications.concat(certifications).map((certification, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 p-6 transition-all duration-500 transform-gpu hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/30"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onClick={(e) => handleClick(e, certification.link)}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicensesAndCertifications;
