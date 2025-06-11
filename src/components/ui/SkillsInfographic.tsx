import React from 'react';
import { Shield, Cloud, Code, Lock, Database, Monitor } from 'lucide-react';

const SkillsInfographic: React.FC = () => {
  const skills = [
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Azure Security Center, AWS Security Hub, Cloud Architecture',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Threat Analysis',
      description: 'SIEM, SOC Operations, Incident Response',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Identity & Access',
      description: 'Azure AD, Multi-Factor Authentication, Zero Trust',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Code,
      title: 'Security Automation',
      description: 'PowerShell, Bicep, Infrastructure as Code',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Encryption, DLP, Compliance & Governance',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Logging',
      description: 'Azure Monitor, Log Analytics, KQL Queries',
      color: 'from-teal-400 to-green-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          
          <div className={`relative w-16 h-16 bg-gradient-to-r ${skill.color} rounded-lg p-0.5 mb-4`}>
            <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
              <skill.icon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
            {skill.title}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed">
            {skill.description}
          </p>
          
          <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default SkillsInfographic;