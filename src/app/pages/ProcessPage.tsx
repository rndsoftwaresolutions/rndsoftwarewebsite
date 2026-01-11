import { motion } from 'motion/react';
import { FileSearch, Palette, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';

export function ProcessPage() {
  const steps = [
    {
      icon: FileSearch,
      title: 'Requirement Analysis',
      description: 'We begin by thoroughly understanding your business needs, goals, and challenges. Our team conducts in-depth discovery sessions to gather all requirements.',
      features: ['Stakeholder interviews', 'Market research', 'Competitive analysis', 'Requirements documentation'],
    },
    {
      icon: Palette,
      title: 'Strategy & Planning',
      description: 'Based on the requirements, we create a comprehensive project roadmap with clear milestones, timelines, and deliverables.',
      features: ['Project timeline', 'Resource allocation', 'Risk assessment', 'Budget planning'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Our designers create intuitive and engaging user experiences. We focus on both aesthetics and functionality to deliver exceptional designs.',
      features: ['Wireframing', 'Visual design', 'Prototyping', 'User testing'],
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Our expert developers bring designs to life using the latest technologies and best practices. We follow agile methodology for flexibility and transparency.',
      features: ['Clean code', 'Version control', 'Code reviews', 'Agile sprints'],
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your product is bug-free and performs optimally. We test across multiple devices, browsers, and scenarios.',
      features: ['Functional testing', 'Performance testing', 'Security testing', 'User acceptance testing'],
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'We handle the entire deployment process, ensuring a smooth launch. Our team manages all technical aspects to make your product live.',
      features: ['Server setup', 'Database migration', 'Domain configuration', 'Launch monitoring'],
    },
    {
      icon: HeadphonesIcon,
      title: 'Support & Growth',
      description: 'Our commitment does not end at launch. We provide ongoing support, maintenance, and enhancements to ensure continued success.',
      features: ['24/7 support', 'Regular updates', 'Performance monitoring', 'Feature enhancements'],
    },
  ];

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
              Our Working Process
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology designed to deliver exceptional results, on time and within budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl font-bold text-blue-900/30">
                        {`0${index + 1}`}
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-3">
                        <step.icon className="w-full h-full" />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h2>
                    <p className="text-lg text-gray-300 mb-6">{step.description}</p>
                    <div className="space-y-2">
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                      <div className="relative aspect-square flex items-center justify-center">
                        <step.icon className="w-32 h-32 text-blue-400/20" />
                      </div>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}