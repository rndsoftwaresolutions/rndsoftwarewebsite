import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Code2,
  Smartphone,
  Database,
  Search,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Target,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';


export function HomePage() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications with modern tech stack',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross platform mobile solutions',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamless CRM systems and automation',
      gradient: 'from-cyan-500 to-cyan-700',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your online visibility and rankings',
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: TrendingUp,
      title: 'Meta & Google Ads',
      description: 'Strategic digital marketing campaigns',
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      icon: Lightbulb,
      title: 'Custom Software',
      description: 'Tailored solutions for unique business needs',
      gradient: 'from-pink-500 to-pink-700',
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Team Members' },
    { value: '3+', label: 'Years Experience' },
  ];

  const testimonials = [
    {
      name: 'Priya Tanreja',
      role: 'CEO, Beautify Glow',
      image: '/images/c1.jpg',
      text: 'R&D Software Solutions transformed our digital presence. Their expertise and dedication are unmatched.',
    },
    {
      name: 'Kunal Agarwal',
      role: 'Founder, HappyByte',
      image: '/images/c3.jpg',
      text: 'Working with this team was a game changer. They delivered beyond our expectations on time and budget.',
    },
    {
      name: 'Eliza Dsouza (UK)',
      role: 'CTO, TrandsWear',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      text: 'Professional, reliable, and incredibly skilled. They turned our vision into reality flawlessly.',
    },
  ];

  const clients = [
    { name: 'TechCorp', logo: 'TechCorp' },
    { name: 'InnovateLabs', logo: 'InnovateLabs' },
    { name: 'CloudSync', logo: 'CloudSync' },
    { name: 'DataFlow', logo: 'DataFlow' },
    { name: 'SmartSystems', logo: 'SmartSystem' },
    { name: 'DigitalEdge', logo: 'DigitalEdge' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            >
              Building Smart Digital Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              for Growing Businesses
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              We transform ideas into powerful digital experiences with cutting edge technology and innovative solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-900/50 hover:shadow-blue-500/50 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-blue-500/50 hover:border-blue-500 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500/10"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 border border-blue-900/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
              <ImageWithFallback
                src="/images/banner.jpg"
                alt="Modern Software Development"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-950/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                     style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                     className={`bg-gradient-to-br ${service.gradient}`}></div>
                <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30 group-hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Link
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 hover:border-blue-500 rounded-lg font-semibold transition-all duration-300"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Working Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A streamlined approach to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Discovery & Planning', step: '01' },
              { icon: Code2, title: 'Design & Development', step: '02' },
              { icon: Award, title: 'Testing & Deployment', step: '03' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30"
              >
                <div className="text-6xl font-bold text-blue-900/30 mb-4">{item.step}</div>
                <item.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 hover:border-blue-500 rounded-lg font-semibold transition-all duration-300"
            >
              View Full Process <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center justify-center p-6 rounded-xl bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="text-2xl font-bold text-gray-600 group-hover:text-blue-400 transition-colors">
                  {client.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Real feedback from real businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 md:p-16"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's build something amazing together. Get in touch for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                >
                  Book a Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
