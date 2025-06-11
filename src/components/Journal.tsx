import React from 'react';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

const Journal: React.FC = () => {
  const journalEntries = [
    {
      title: 'Azure Sentinel KQL Query Optimization',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'SIEM',
      preview: 'Deep dive into optimizing KQL queries for better performance in Azure Sentinel. Covering query structure, operators, and best practices for large datasets.',
      tags: ['Azure Sentinel', 'KQL', 'Performance', 'SIEM']
    },
    {
      title: 'Implementing Zero Trust Architecture',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Architecture',
      preview: 'Complete guide to implementing Zero Trust principles in modern cloud environments. From identity verification to network segmentation.',
      tags: ['Zero Trust', 'Cloud Security', 'Identity', 'Network']
    },
    {
      title: 'PowerShell Security Automation Scripts',
      date: '2024-01-05',
      readTime: '15 min read',
      category: 'Automation',
      preview: 'Collection of PowerShell scripts for automating security tasks in Azure environments. Including compliance checks and remediation workflows.',
      tags: ['PowerShell', 'Automation', 'Azure', 'Compliance']
    },
    {
      title: 'Incident Response Playbook Development',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Incident Response',
      preview: 'Creating comprehensive incident response playbooks for different types of security incidents. Templates, procedures, and lessons learned.',
      tags: ['Incident Response', 'Playbook', 'SOC', 'Security']
    },
    {
      title: 'Cloud Security Baseline Configuration',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'Cloud Security',
      preview: 'Essential security configurations for Azure environments. Covering identity, network, storage, and compute security baselines.',
      tags: ['Cloud Security', 'Azure', 'Baseline', 'Configuration']
    },
    {
      title: 'Threat Hunting with Azure Advanced Hunting',
      date: '2023-12-15',
      readTime: '11 min read',
      category: 'Threat Hunting',
      preview: 'Advanced threat hunting techniques using Microsoft 365 Defender. Query examples, methodologies, and detection strategies.',
      tags: ['Threat Hunting', 'M365 Defender', 'Detection', 'Analysis']
    }
  ];

  const categories = ['All', 'SIEM', 'Architecture', 'Automation', 'Incident Response', 'Cloud Security', 'Threat Hunting'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredEntries = selectedCategory === 'All' 
    ? journalEntries 
    : journalEntries.filter(entry => entry.category === selectedCategory);

  return (
    <section id="journal" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Learning <span className="text-green-400">Journal</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Documenting my cybersecurity learning journey, study notes, and practical insights from hands-on experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-400 text-slate-900'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-green-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Journal Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEntries.map((entry, index) => (
            <article
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-green-400/20 text-green-400 text-xs font-semibold rounded-full">
                  {entry.category}
                </span>
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(entry.date).toLocaleDateString()}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                {entry.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {entry.preview}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {entry.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{entry.readTime}</span>
                </div>
                <div className="flex items-center space-x-1 text-green-400 group-hover:text-green-300 transition-colors">
                  <span className="text-sm font-medium">Read more</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800 text-green-400 font-semibold rounded-lg border border-slate-700 hover:border-green-400 hover:bg-slate-700 transition-all duration-300">
            <BookOpen className="w-5 h-5" />
            <span>View Full Learning Journal</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Journal;