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
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "March 2025",
      image: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25AICFAV1.png",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4BBE769AD7ECE27F98F07BD5095CFD3522FE09FB3596CE8D81E82903B37ACE53",
    },
    {
      id: 2,
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      date: "March 2025",
      image: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25FNDCFAV1.png",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=113172CDF2AF1FAAE8A07119AB1A6C91AB327055928D2835CBAA5BF17F036AE9",
    },
    {
      id: 3,
      title: "Oracle Fusion Cloud Applications CX Process Essentials Certified - Rel 1",
      issuer: "Oracle",
      date: "March 2025",
      image: "https://brm-workforce.oracle.com/pdf/certview/images/OMBPCXCFA1.png",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DEB26F48F97B6A67EC037BB43853C248B050904A199F85CD9D2A13076D6BB194",
    },
    {
      id: 4,
      title: "AWS for Games: Cloud Game Development",
      issuer: "Amazon Web Services",
      date: "March 2025",
      image: "https://images.credly.com/size/340x340/images/1e1e332c-cbe5-4358-9491-748cc5c5d15f/image.png",
      link: "https://www.credly.com/badges/d24ab2de-df4b-4686-a2dc-5113e29dd5c0/public_url",
    },
    {
      id: 5,
      title: "Cybersecurity Fundamentals",
      issuer: "IBM",
      date: "March 2025",
      image: "https://images.credly.com/size/340x340/images/50b96632-6cbb-40b7-ac0e-b83f49ff7f94/image.png",
      link: "https://www.credly.com/badges/9aa912a5-3609-43bb-9f36-7fc29f66784e/public_url",
    },
    {
      id: 6,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "March 2025",
      image: "https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      link: "https://www.credly.com/badges/13ec294c-2d8c-47ce-908c-a9f0f692511b/public_url",
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
