import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honesty and transparency guide all our business relationships',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting edge solutions',
    },
  ];

  const milestones = [
    { year: '2025', event: 'Company Founded' },
    { year: '2025', event: 'Reached 50 Clients' },
    { year: '2026', event: 'Expanded to 10 Team Members' },
    { year: '2026', event: 'Opened New Office' },
    { year: '2026', event: '100+ Projects Milestone' },
    { year: '2027', event: 'ON THE WAY TO MUCH MORE' },
  ];

  const whyChooseUs = [
    'Proven track record with 50+ successful projects',
    'Expert team with years of combined experience',
    'Agile methodology for faster delivery',
    '24/7 support and maintenance',
    'Transparent communication throughout the project',
    'Competitive pricing without compromising quality',
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
              About R&D Software Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 border border-blue-900/30">
                <ImageWithFallback
                  src="/images/about.png"
                  alt="Our Team"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
              <p className="text-lg text-gray-300">
                Founded in 2025, R&D Software Solutions has grown from a small startup to a leading software development company. We specialize in creating custom digital solutions that drive business growth and innovation.
              </p>
              <p className="text-lg text-gray-300">
                Our team of experienced developers, designers, and strategists work collaboratively to deliver exceptional results. We pride ourselves on our ability to understand our clients' unique challenges and craft tailored solutions that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-blue-900/20 border border-blue-900/30">
                  <div className="text-3xl font-bold text-blue-400 mb-1">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="p-4 rounded-xl bg-blue-900/20 border border-blue-900/30">
                  <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30"
            >
              <Target className="w-12 h-12 text-blue-400 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300">
                To empower businesses with innovative digital solutions that drive growth, efficiency, and success. We are committed to delivering excellence in every project while building lasting partnerships with our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30"
            >
              <Eye className="w-12 h-12 text-blue-400 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-gray-300">
                To be the global leader in digital transformation, recognized for our innovation, quality, and client centric approach. We envision a future where technology seamlessly enhances every aspect of business operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-4 mx-auto mb-4">
                  <value.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Founder</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-blue-500/30">
                    <ImageWithFallback
                      src="/images/Rakesh.png"
                      alt="Rakesh Kumar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-2xl font-bold">Rakesh Kumar</h3>
                    <p className="text-blue-400">Founder & CEO</p>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-lg text-gray-300">
                    "At R&D Software Solutions, we believe in the transformative power of technology. Our mission has always been to help businesses leverage cutting edge solutions to achieve their goals and stay ahead in the digital age."
                  </p>
                  <p className="text-lg text-gray-300">
                    "With over a decade of experience in software development and a passion for innovation, I founded this company to bridge the gap between business needs and technological possibilities. Every project we undertake is a testament to our commitment to excellence and client success."
                  </p>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Award className="w-5 h-5" />
                    <span className="text-sm">3+ Years Industry Leadership</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose R&D Software Solutions</h2>
            <p className="text-xl text-gray-400">What sets us apart from the competition</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-6 rounded-xl bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">Milestones that shaped our growth</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-6 rounded-2xl bg-slate-900/50 border border-blue-900/30">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <div className="text-lg text-gray-300">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 relative z-10"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
