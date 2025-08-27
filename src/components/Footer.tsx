import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gray-800/50 backdrop-blur-lg border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Jacob Santos
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-sm mx-auto md:mx-0">
              Full-stack developer passionate about creating innovative digital experiences 
              and building the future of web technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-1 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">jacob@jacob.dev</p>
              <p className="text-gray-400 text-sm">Available worldwide</p>
              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium hover:from-blue-600/30 hover:to-teal-500/30 hover:border-cyan-400/50 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center text-gray-400 text-sm mb-4 sm:mb-0">
            <span>© 2024 Jacob Santos. Made with</span>
            <Heart className="w-4 h-4 text-red-400 mx-1" />
            <span>and lots of coffee</span>
          </div>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-200 text-sm"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-400/5 to-teal-400/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-400/5 to-purple-400/5 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
};

export default Footer;