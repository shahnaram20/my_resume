import React from 'react';
import { Trophy, Target, Zap, Shield, Cloud, Code } from 'lucide-react';

const Labs: React.FC = () => {
  const platforms = [
    {
      name: 'TryHackMe',
      rank: 'Top 5%',
      completedRooms: 85,
      streakDays: 45,
      icon: Target,
      color: 'from-red-500 to-pink-500',
      achievements: ['Penetration Testing', 'Web Application Security', 'Network Security']
    },
    {
      name: 'HackTheBox',
      rank: 'Hacker',
      completedBoxes: 32,
      points: 1240,
      icon: Shield,
      color: 'from-green-400 to-emerald-500',
      achievements: ['Active Directory', 'OSCP Prep', 'Privilege Escalation']
    },
    {
      name: 'Azure Labs',
      rank: 'Expert',
      completedLabs: 28,
      hours: 120,
      icon: Cloud,
      color: 'from-blue-400 to-cyan-500',
      achievements: ['Security Center', 'Sentinel SIEM', 'Identity Protection']
    },
    {
      name: 'CyberDefenders',
      rank: 'Blue Team',
      completedChallenges: 15,
      points: 890,
      icon: Zap,
      color: 'from-purple-400 to-indigo-500',
      achievements: ['Digital Forensics', 'Malware Analysis', 'Incident Response']
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Azure Administrator (AZ-104)',
      status: 'Certified',
      date: '2024',
      level: 'Associate',
      color: 'green'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      status: 'In Progress',
      date: 'Expected 2024',
      level: 'Professional',
      color: 'yellow'
    },
    {
      name: 'Azure Security Engineer (AZ-500)',
      status: 'Preparing',
      date: 'Q2 2024',
      level: 'Associate',
      color: 'blue'
    },
    {
      name: 'CompTIA Security+',
      status: 'Planned',
      date: 'Q3 2024',
      level: 'Foundation',
      color: 'purple'
    }
  ];

  return (
    <section id="labs" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Labs & <span className="text-green-400">Platforms</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Continuous hands-on learning through practical cybersecurity challenges and cloud platform exercises.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 bg-gradient-to-r ${platform.color} rounded-lg`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center space-x-1 text-green-400">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold">{platform.rank}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{platform.name}</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {platform.completedRooms || platform.completedBoxes || platform.completedLabs || platform.completedChallenges}
                  </div>
                  <div className="text-sm text-slate-400">
                    {platform.completedRooms ? 'Rooms' : platform.completedBoxes ? 'Boxes' : platform.completedLabs ? 'Labs' : 'Challenges'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {platform.streakDays || platform.points || platform.hours}
                  </div>
                  <div className="text-sm text-slate-400">
                    {platform.streakDays ? 'Day Streak' : platform.points ? 'Points' : 'Hours'}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {platform.achievements.map((achievement, achievementIndex) => (
                  <div
                    key={achievementIndex}
                    className="flex items-center space-x-2 text-sm text-slate-300"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Certifications & <span className="text-green-400">Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-600 hover:border-green-400/50 transition-colors"
              >
                <div className={`w-4 h-4 rounded-full ${
                  cert.color === 'green' ? 'bg-green-400' :
                  cert.color === 'yellow' ? 'bg-yellow-400' :
                  cert.color === 'blue' ? 'bg-blue-400' :
                  'bg-purple-400'
                }`}></div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{cert.name}</h4>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <span>{cert.status}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                    <span>•</span>
                    <span>{cert.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Labs;