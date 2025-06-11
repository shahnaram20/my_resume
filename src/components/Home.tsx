import React from 'react';
import { Download, ExternalLink, FileText, FolderOpen } from 'lucide-react';
import SkillsInfographic from './ui/SkillsInfographic';
import AnimatedBackground from './ui/AnimatedBackground';

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-44 h-44 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Cyber Security
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Engineer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
            Aspiring Cloud & Security Engineer | AZ-104 Certified | Preparing for CEH & AZ-500
          </p>

          <p className="text-lg text-green-400 mb-12 font-medium">
            Actively seeking cloud/security roles | Open to internships & freelance work
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-slate-900 font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25"
            >
              <FolderOpen className="inline-block w-5 h-5 mr-2" />
              View My Projects
            </button>
            
            <button
              onClick={() => scrollToSection('blog')}
              className="group px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="inline-block w-5 h-5 mr-2" />
              Read My Blog
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="inline-block w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
        </div>

        <SkillsInfographic />
      </div>
    </section>
  );
};

export default Home;