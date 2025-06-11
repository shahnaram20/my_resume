import React from 'react';
import { Github, ExternalLink, Award, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Cloud Security Automation Hub',
      description: 'Automated security baseline deployment for Azure environments using Bicep templates and PowerShell scripts.',
      skills: ['Azure', 'PowerShell', 'Bicep', 'ARM Templates', 'Security Center'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      title: 'SIEM Log Analysis Dashboard',
      description: 'Real-time security monitoring dashboard with KQL queries and automated threat detection algorithms.',
      skills: ['Azure Sentinel', 'KQL', 'Logic Apps', 'Power BI', 'JSON'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Multi-Cloud Security Scanner',
      description: 'Cross-platform security assessment tool for AWS, Azure, and GCP environments with compliance reporting.',
      skills: ['Python', 'AWS SDK', 'Azure CLI', 'Docker', 'CI/CD'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Zero Trust Network Implementation',
      description: 'Complete Zero Trust architecture implementation with conditional access policies and device compliance.',
      skills: ['Azure AD', 'Conditional Access', 'Intune', 'MFA', 'Identity Protection'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      image: 'https://images.pexels.com/photos/60594/pexels-photo-60594.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Hands-on cybersecurity projects showcasing practical skills in cloud security, automation, and threat detection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-green-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    <Award className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-700 text-green-400 text-sm rounded-full border border-slate-600 hover:border-green-400/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-green-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-green-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;