import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code2, Smartphone, Database, Search, TrendingUp, Lightbulb, ArrowLeft, CheckCircle, Layers, BarChart3 } from 'lucide-react';

export function ServiceDetailPage() {
  const { serviceId } = useParams();

  const servicesData: Record<string, any> = {
    'web-development': {
      icon: Code2,
      title: 'Web Development',
      overview:
        'Transform your digital presence with cutting-edge web solutions. We build responsive, high-performance websites and web applications that drive results and engage users.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      benefits: [
        'Responsive design for all devices',
        'Fast loading and optimized performance',
        'SEO-friendly architecture',
        'Scalable and future-ready solutions',
        'Secure and reliable infrastructure',
      ],
      process: [
        { title: 'Discovery', description: 'Understanding business goals and requirements' },
        { title: 'Design', description: 'Wireframes and UI/UX design' },
        { title: 'Development', description: 'Modern tech stack implementation' },
        { title: 'Testing', description: 'Cross-browser and device testing' },
        { title: 'Deployment', description: 'Production launch' },
        { title: 'Support', description: 'Maintenance and updates' },
      ],
    },

    'mobile-app-development': {
      icon: Smartphone,
      title: 'Mobile App Development',
      overview:
        'Build powerful and engaging mobile applications for Android and iOS using modern frameworks and native technologies.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      benefits: [
        'Native-like performance',
        'Cross-platform cost efficiency',
        'Intuitive user experience',
        'Secure backend integration',
        'Ongoing updates and support',
      ],
      process: [
        { title: 'Ideation', description: 'Feature planning and strategy' },
        { title: 'UI/UX Design', description: 'Mobile-first user experience design' },
        { title: 'Development', description: 'Scalable app development' },
        { title: 'Testing', description: 'Multi-device QA testing' },
        { title: 'Launch', description: 'App Store & Play Store deployment' },
        { title: 'Optimization', description: 'Performance and feature improvements' },
      ],
    },

    'crm-integration': {
      icon: Database,
      title: 'CRM Integration & Development',
      overview:
        'Streamline your sales and customer management with custom CRM solutions and seamless third-party CRM integrations.',
      technologies: ['Node.js', 'React', 'Salesforce API', 'HubSpot API', 'PostgreSQL', 'AWS'],
      benefits: [
        'Centralized customer data',
        'Automated sales workflows',
        'Improved customer engagement',
        'Custom dashboards and reports',
        'Secure data handling',
      ],
      process: [
        { title: 'Requirement Analysis', description: 'Understanding CRM needs' },
        { title: 'System Design', description: 'Architecture and data flow planning' },
        { title: 'Integration', description: 'CRM and third-party tool integration' },
        { title: 'Customization', description: 'Tailored workflows and dashboards' },
        { title: 'Testing', description: 'Data accuracy and security checks' },
        { title: 'Deployment', description: 'Go-live and monitoring' },
      ],
    },

    'seo-optimization': {
      icon: TrendingUp,
      title: 'SEO Optimization',
      overview:
        'Boost your online visibility and search rankings with data-driven SEO strategies tailored to your business.',
      technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush', 'Lighthouse'],
      benefits: [
        'Higher search engine rankings',
        'Increased organic traffic',
        'Better page performance',
        'Improved user experience',
        'Long-term growth results',
      ],
      process: [
        { title: 'SEO Audit', description: 'Website and competitor analysis' },
        { title: 'Keyword Research', description: 'Targeting high-value keywords' },
        { title: 'On-Page SEO', description: 'Content and technical optimization' },
        { title: 'Off-Page SEO', description: 'Backlinks and authority building' },
        { title: 'Monitoring', description: 'Ranking and traffic tracking' },
        { title: 'Optimization', description: 'Continuous improvements' },
      ],
    },

    'meta-ads-google-ads': {
      icon: BarChart3,
      title: 'Meta & Google Ads Management',
      overview:
        'Drive targeted traffic and conversions with expertly managed Meta (Facebook & Instagram) and Google ad campaigns.',
      technologies: ['Google Ads', 'Meta Ads Manager', 'Google Analytics', 'Tag Manager'],
      benefits: [
        'Highly targeted campaigns',
        'Better ROI on ad spend',
        'Conversion-focused strategy',
        'Real-time performance tracking',
        'Scalable ad growth',
      ],
      process: [
        { title: 'Strategy', description: 'Audience and budget planning' },
        { title: 'Ad Creation', description: 'High-converting creatives and copy' },
        { title: 'Campaign Setup', description: 'Pixel and tracking configuration' },
        { title: 'Optimization', description: 'A/B testing and performance tuning' },
        { title: 'Scaling', description: 'Increasing profitable campaigns' },
        { title: 'Reporting', description: 'Detailed analytics and insights' },
      ],
    },

    'custom-software-solutions': {
      icon: Layers,
      title: 'Custom Software Solutions',
      overview:
        'Tailor-made software solutions designed specifically to solve your unique business challenges.',
      technologies: ['Node.js', 'React', 'Next.js', 'Python', 'PostgreSQL', 'AWS'],
      benefits: [
        'Fully customized solutions',
        'Scalable system architecture',
        'High security standards',
        'Business-specific automation',
        'Long-term flexibility',
      ],
      process: [
        { title: 'Consultation', description: 'Understanding business problems' },
        { title: 'Planning', description: 'Solution architecture and roadmap' },
        { title: 'Development', description: 'Agile software development' },
        { title: 'Testing', description: 'Performance and security testing' },
        { title: 'Deployment', description: 'Production release' },
        { title: 'Support', description: 'Enhancements and maintenance' },
      ],
    },
  };


  const service = servicesData[serviceId || 'web-development'] || servicesData['web-development'];
  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-400 hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={20} /> Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-4">
              <ServiceIcon className="w-full h-full" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl"
          >
            {service.overview}
          </motion.p>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech: string, index: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-blue-900/20 border border-blue-500/30 hover:border-blue-500/50 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/50 border border-blue-900/30"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step: any, index: number) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/50 transition-all"
              >
                <div className="text-5xl font-bold text-blue-900/30 mb-4">{`0${index + 1}`}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help bring your vision to life
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
