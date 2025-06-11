import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Labs from './components/Labs';
import Journal from './components/Journal';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'labs', 'journal', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <Projects />
        <Labs />
        <Journal />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;