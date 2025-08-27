import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import SectionCodeAnimation from './SectionCodeAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/jacobsantos',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/jacobsantos',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:jacob@jacob.dev',
      gradient: 'from-cyan-600 to-teal-600'
    }
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 bg-gray-800/20">
      {/* Code Animation */}
      <SectionCodeAnimation section="contact" position="right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 bg-gray-800/50 backdrop-blur-lg border border-gray-600/50 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Your Name"
                />
                <label className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-cyan-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400">
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 bg-gray-800/50 backdrop-blur-lg border border-gray-600/50 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Your Email"
                />
                <label className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-cyan-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400">
                  Your Email
                </label>
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 bg-gray-800/50 backdrop-blur-lg border border-gray-600/50 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Subject"
                />
                <label className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-cyan-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400">
                  Subject
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="peer w-full px-4 py-4 bg-gray-800/50 backdrop-blur-lg border border-gray-600/50 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                />
                <label className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-cyan-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400">
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <div className="w-5 h-5 mr-3 text-green-400">✓</div>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </>
                )}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-teal-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Get in Touch */}
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-8 h-8 text-cyan-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span>jacob@jacob.dev</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 flex items-center justify-center">
                    🌍
                  </div>
                  <span>Available for remote work worldwide</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center sm:justify-start lg:justify-center xl:justify-start p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <link.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200 sm:mr-3 lg:mr-0 xl:mr-3" />
                    <span className="hidden sm:block lg:hidden xl:block text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                      {link.name}
                    </span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;