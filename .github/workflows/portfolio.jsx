import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Dassault Systèmes",
      subtitle: "Digital Adoption Optimization",
      description: "Analyzed user behavior via Google Analytics, identified engagement bottleneck, and implemented solution delivering +25% performance boost.",
      metrics: ["+25% engagement", "Google Analytics", "UX Optimization"],
      tags: ["Analytics", "Product", "User Behavior"]
    },
    {
      title: "ZEcamping",
      subtitle: "Multi-Channel Growth Strategy",
      description: "Designed and executed multi-channel marketing automation strategy using CRM SPLIO, increasing direct sales by 500%.",
      metrics: ["+500% sales growth", "5x email campaigns", "OTA coordination"],
      tags: ["Marketing Automation", "E-commerce", "Growth"]
    },
    {
      title: "Miior",
      subtitle: "E-Commerce Market Adaptation",
      description: "Audited existing business model and strategically developed e-commerce platform with localized GTM approach for Polish market.",
      metrics: ["Full platform build", "Market research", "Local GTM"],
      tags: ["E-commerce", "Strategic Planning", "Markets"]
    }
  ];

  const skills = [
    {
      category: "Marketing & Strategy",
      items: ["Marketing Digitale", "Go-To-Market", "Product Management", "Growth Strategies", "Market Analysis"]
    },
    {
      category: "Data & Analytics",
      items: ["Google Analytics", "Looker Studio", "Excel Advanced", "Netvibes", "Data Analysis", "KPI Measurement"]
    },
    {
      category: "Tools & Technology",
      items: ["CMS: Drupal, Shopify", "CRM: SPLIO", "HTML/CSS", "Python", "RPA: UIPath", "Microsoft Azure"]
    },
    {
      category: "Core Competencies",
      items: ["Digital Strategy", "Customer Experience", "Marketing Automation", "Data-Driven Decision Making", "Cross-functional Leadership"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AH</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['About', 'Work', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-4 space-y-4">
              {['About', 'Work', 'Skills', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-slate-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium">Digital Marketing Professional</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Transform data into <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">growth stories</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            I combine strategic thinking with creative execution to drive digital transformation. Marketing strategist, product thinker, and growth enthusiast based in Île-de-France.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <a href="#work" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-600 rounded-lg font-semibold hover:border-slate-400 transition-all duration-300">
              Let's Talk
            </a>
          </div>

          <div className="inline-block animate-bounce">
            <ChevronDown size={24} className="text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm Alexandre Hébert, a digital marketing professional passionate about creating meaningful customer experiences through data-driven strategies.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently completing my Master's in Digital Marketing at IESEG, I've had the privilege of working across diverse sectors—from enterprise software at Dassault Systèmes to innovative startups like ZEcamping and Miior.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                My superpower? Bridging the gap between data analytics and creative storytelling to solve real business problems. I believe the best marketing is invisible—it works so well that customers don't realize they've been convinced.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 h-fit backdrop-blur-sm">
              <h3 className="font-semibold mb-6 text-blue-400">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <span className="text-slate-400">Currently</span>
                  <span className="font-semibold">Master's Graduate</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <span className="text-slate-400">Based</span>
                  <span className="font-semibold">Île-de-France, FR</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <span className="text-slate-400">Expertise</span>
                  <span className="font-semibold">Digital GTM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Languages</span>
                  <span className="font-semibold">FR • EN • ES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group bg-slate-900/30 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:bg-slate-900/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">{project.subtitle}</p>
                  </div>
                  {hoveredProject === idx && (
                    <ExternalLink size={20} className="text-blue-400" />
                  )}
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                      <span className="text-slate-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-900/30 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-6 text-blue-400">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-2 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg text-sm text-slate-300 transition-all duration-200 hover:border-blue-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Whether you're looking for a marketing strategist, product thinker, or growth partner, I'd love to explore how we can work together.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a href="mailto:alexandre.hebert78@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://linkedin.com/in/alexandrehebert" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold transition-all duration-300">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-sm text-slate-400 mb-4">Quick Contact Info</p>
            <p className="text-lg font-semibold mb-2">+33 6 62 24 41 73</p>
            <p className="text-slate-300">alexandre.hebert78@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 py-8 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-slate-500 text-sm">© 2026 Alexandre Hébert. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }

        h1, h2, h3 {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.8);
        }

        /* Selection color */
        ::selection {
          background-color: rgba(59, 130, 246, 0.3);
          color: white;
        }
      `}</style>
    </div>
  );
}