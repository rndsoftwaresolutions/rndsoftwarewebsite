import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Quote } from 'lucide-react';

export function ClientsPage() {
  const clients = [
    { name: 'TechCorp', logo: 'Tech Corp', industry: 'Technology' },
    { name: 'InnovateLabs', logo: 'InnovateLabs', industry: 'Research' },
    { name: 'CloudSync', logo: 'Cloud ync', industry: 'Cloud Services' },
    { name: 'DataFlow', logo: 'Data Flow', industry: 'Analytics' },
    { name: 'SmartSystems', logo: 'SmartSystem', industry: 'IoT' },
    { name: 'DigitalEdge', logo: 'Digital Edge', industry: 'Marketing' },
    { name: 'NextGen', logo: 'Next Gen', industry: 'Software' },
    { name: 'BizSolutions', logo: 'Biz Solutions', industry: 'Consulting' },
  ];

  const testimonials = [
    {
      name: 'Priya Tanreja',
      role: 'CEO, Beautify Glow',
      image: '/images/c1.jpg',
      text: 'R&D Software Solutions transformed our digital presence. Their expertise and dedication are unmatched. The team went above and beyond to ensure our project exceeded expectations.',
      rating: 5,
    },
    {
      name: 'Kunal Agarwal',
      role: 'Founder, HappyByte',
      image: '/images/c3.jpg',
      text: 'Working with this team was a game-changer. They delivered beyond our expectations on time and budget. Their professionalism and technical skills are outstanding.',
      rating: 5,
    },
    {
      name: 'Eliza Dsouza (UK)',
      role: 'CTO, TrandsWear',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      text: 'Professional, reliable, and incredibly skilled. They turned our vision into reality flawlessly. I highly recommend them for any software development project.',
      rating: 5,
    },
    {
      name: 'David Rodriguez (US)',
      role: 'Product Manager, CloudFlow',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      text: 'The attention to detail and quality of work is exceptional. Our app has received fantastic feedback from users. The team truly understands modern development.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson (US)',
      role: 'Director, SmartBiz Solutions',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
      text: 'From concept to deployment, the entire process was smooth and transparent. They provided valuable insights that improved our final product significantly.',
      rating: 5,
    },
    {
      name: 'Pradeep Mohentey',
      role: 'CEO, FutureTech',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      text: 'Best development partner we\'ve ever worked with. Their commitment to our success was evident in every interaction. Results speak for themselves.',
      rating: 5,
    },
  ];

  const industries = ['Technology', 'Healthcare', 'E-commerce', 'Finance', 'Education', 'Real Estate'];

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
              Our Clients
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading businesses across multiple industries worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30 group-hover:border-blue-500/50 transition-all text-center">
                  <div className="text-4xl font-bold text-gray-600 group-hover:text-blue-400 transition-colors mb-3">
                    {client.logo}
                  </div>
                  <div className="text-sm text-gray-400">{client.industry}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-400">Real feedback from real businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/50 transition-all relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-900/30" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30"
                    />
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-8 py-4 rounded-full bg-blue-900/20 border border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-900/30 transition-all cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
