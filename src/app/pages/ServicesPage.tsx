import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code2, Smartphone, Database, Search, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 'web-development',
      icon: Code2,
      title: 'Web Development',
      shortDesc: 'Custom web applications with modern tech stack',
      description: 'Build powerful, scalable web applications using the latest technologies. From responsive websites to complex enterprise solutions, we deliver excellence.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'Content Management Systems'],
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      id: 'mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDesc: 'Native and cross-platform mobile solutions',
      description: 'Create stunning mobile experiences for iOS and Android. Our team builds native and cross-platform apps that users love.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Development'],
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      id: 'crm-integration',
      icon: Database,
      title: 'CRM Integration & Automation',
      shortDesc: 'Seamless CRM systems and automation',
      description: 'Streamline your business processes with custom CRM solutions and automation. Integrate existing systems or build from scratch.',
      features: ['Salesforce Integration', 'Custom CRM Development', 'Workflow Automation', 'Data Migration'],
      gradient: 'from-cyan-500 to-cyan-700',
    },
    {
      id: 'seo-optimization',
      icon: Search,
      title: 'SEO Optimization',
      shortDesc: 'Boost your online visibility and rankings',
      description: 'Improve your search engine rankings and drive organic traffic. Our SEO experts use proven strategies to boost your online presence.',
      features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO'],
      gradient: 'from-green-500 to-green-700',
    },
    {
      id: 'meta-ads-google-ads',
      icon: TrendingUp,
      title: 'Meta Ads & Google Ads',
      shortDesc: 'Strategic digital marketing campaigns',
      description: 'Maximize your ROI with targeted advertising campaigns. We create and manage high-performing ad campaigns across Meta and Google platforms.',
      features: ['Campaign Strategy', 'Ad Creation', 'A/B Testing', 'Performance Analytics'],
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      id: 'custom-software-solutions',
      icon: Lightbulb,
      title: 'Custom Software Solutions',
      shortDesc: 'Tailored solutions for unique business needs',
      description: 'Get bespoke software solutions designed specifically for your business. We turn your unique requirements into powerful software tools.',
      features: ['Requirements Analysis', 'Custom Development', 'Legacy System Modernization', 'API Development'],
      gradient: 'from-pink-500 to-pink-700',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to accelerate your business growth and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                     style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                     className={`bg-gradient-to-br ${service.gradient}`}></div>
                <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30 group-hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <service.icon className="w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.shortDesc}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-blue-400 hover:gap-3 transition-all font-semibold"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We offer custom solutions tailored to your specific needs. Let's discuss your project!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
