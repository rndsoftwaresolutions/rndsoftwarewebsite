import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code2, Smartphone, Database, Search, TrendingUp, Lightbulb, ArrowLeft, CheckCircle } from 'lucide-react';

export function ServiceDetailPage() {
  const { serviceId } = useParams();

  const servicesData: Record<string, any> = {
    'web-development': {
      icon: Code2,
      title: 'Web Development',
      overview: 'Transform your digital presence with cutting-edge web solutions. We build responsive, high-performance websites and web applications that drive results and engage users.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      benefits: [
        'Responsive design that works on all devices',
        'Fast loading times for better user experience',
        'SEO-optimized structure for better rankings',
        'Scalable architecture for future growth',
        'Secure and reliable infrastructure',
      ],
      process: [
        { title: 'Discovery', description: 'Understanding your business goals and requirements' },
        { title: 'Design', description: 'Creating wireframes and visual designs' },
        { title: 'Development', description: 'Building with latest technologies and best practices' },
        { title: 'Testing', description: 'Rigorous testing across devices and browsers' },
        { title: 'Deployment', description: 'Launching your website to production' },
        { title: 'Support', description: 'Ongoing maintenance and updates' },
      ],
    },
    'mobile-app-development': {
      icon: Smartphone,
      title: 'Mobile App Development',
      overview: 'Create stunning mobile experiences that users love. Our expert team develops native and cross-platform apps for iOS and Android that drive engagement and business growth.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      benefits: [
        'Native performance and user experience',
        'Cross-platform development for cost efficiency',
        'Intuitive and engaging user interfaces',
        'Seamless integration with device features',
        'Regular updates and maintenance',
      ],
      process: [
        { title: 'Ideation', description: 'Refining your app concept and features' },
        { title: 'UI/UX Design', description: 'Designing user-friendly interfaces' },
        { title: 'Development', description: 'Building robust and scalable apps' },
        { title: 'Testing', description: 'Quality assurance on multiple devices' },
        { title: 'Launch', description: 'Publishing to App Store and Play Store' },
        { title: 'Growth', description: 'Analytics, updates, and improvements' },
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
