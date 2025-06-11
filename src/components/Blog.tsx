import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Eye } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Evolution of Cloud Security in 2024',
      excerpt: 'Exploring the latest trends in cloud security, from Zero Trust architectures to AI-powered threat detection. How organizations are adapting to new challenges.',
      date: '2024-01-18',
      readTime: '12 min read',
      views: '2.4k',
      category: 'Cloud Security',
      featured: true,
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Building a Career in Cybersecurity: From Zero to Hero',
      excerpt: 'A comprehensive guide for aspiring cybersecurity professionals. Covering certifications, skills development, and career paths in the industry.',
      date: '2024-01-12',
      readTime: '15 min read',
      views: '3.1k',
      category: 'Career',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Azure Sentinel vs Splunk: A Comprehensive Comparison',
      excerpt: 'In-depth analysis of two leading SIEM platforms. Comparing features, pricing, deployment options, and use cases for modern security operations.',
      date: '2024-01-08',
      readTime: '10 min read',
      views: '1.8k',
      category: 'SIEM',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Automating Security with PowerShell: Best Practices',
      excerpt: 'Learn how to leverage PowerShell for security automation in Azure environments. Scripts, modules, and techniques for efficient security operations.',
      date: '2024-01-02',
      readTime: '8 min read',
      views: '1.5k',
      category: 'Automation',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const stats = [
    { label: 'Total Posts', value: '24', icon: TrendingUp },
    { label: 'Total Views', value: '18.7k', icon: Eye },
    { label: 'Avg. Read Time', value: '9 min', icon: Clock }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Latest <span className="text-green-400">Blog Posts</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on cybersecurity, cloud computing, and the evolving threat landscape.
          </p>
        </div>

        {/* Blog Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center"
            >
              <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <div className="mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-green-400/50 transition-all duration-300 group cursor-pointer">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-green-400 text-slate-900 text-sm font-semibold rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-slate-700 text-green-400 text-sm rounded-full">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-slate-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{blogPosts[0].views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-green-400 group-hover:text-green-300 transition-colors">
                      <span className="font-medium">Read more</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-800/80 text-green-400 text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-slate-400 text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-green-400 text-slate-900 font-semibold rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105">
            <span>View All Blog Posts</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;