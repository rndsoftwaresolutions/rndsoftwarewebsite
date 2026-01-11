import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'crm', 'custom'];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A modern e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800',
      technologies: ['React', 'Node.js', 'MongoDB'],
      result: '300% increase in online sales',
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      description: 'Patient management and telemedicine mobile application',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      technologies: ['React Native', 'Firebase'],
      result: '50K+ active users',
    },
    {
      id: 3,
      title: 'CRM Dashboard',
      category: 'crm',
      description: 'Comprehensive CRM system with analytics and reporting',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
      result: '40% boost in team productivity',
    },
    {
      id: 4,
      title: 'Real Estate Portal',
      category: 'web',
      description: 'Property listing platform with virtual tours',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      technologies: ['Next.js', 'Tailwind CSS'],
      result: '2M+ monthly visitors',
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Personal fitness and nutrition tracking application',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800',
      technologies: ['Flutter', 'AWS'],
      result: '100K+ downloads',
    },
    {
      id: 6,
      title: 'Custom ERP System',
      category: 'custom',
      description: 'Enterprise resource planning solution for manufacturing',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      technologies: ['Angular', 'Java', 'Oracle'],
      result: '60% reduction in operational costs',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our best work and successful projects across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all capitalize ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                    : 'bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/50 text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative rounded-2xl bg-slate-900/50 border border-blue-900/30 group-hover:border-blue-500/50 transition-all overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm mb-3 capitalize">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-slate-800 text-gray-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-blue-900/30">
                      <div className="text-sm text-blue-400 font-semibold">
                        {project.result}
                      </div>
                      <button className="p-2 rounded-lg bg-blue-900/20 hover:bg-blue-900/40 transition-colors">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
