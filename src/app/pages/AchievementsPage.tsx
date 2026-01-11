import { motion } from 'motion/react';
import { Trophy, Users, Briefcase, Award, Target, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
        {count}+
      </div>
      <div className="text-gray-400 text-lg">{label}</div>
    </div>
  );
}

export function AchievementsPage() {
  const stats = [
    { icon: Briefcase, value: 50, label: 'Projects Completed' },
    { icon: Users, value: 50, label: 'Happy Clients' },
    { icon: Trophy, value: 5, label: 'Industry Awards' },
    { icon: Target, value: 3, label: 'Years Experience' },
  ];

  const achievements = [
    {
      year: '2024',
      title: 'College Startup Award',
      description: 'Recognized as one of the top software development companies. ',
      icon: Trophy,
    },
    {
      year: '2025',
      title: 'Official Public Launch ',
      description: 'Official Public Launch Marking the Beginning of Our Startup Journey',
      icon: Award,
    },
    {
      year: '2025',
      title: '50+ Projects Successfully Delivered',
      description: 'Successfully delivered our 50th project, marking a decade of excellence',
      icon: Users,
    },
    {
      year: '2026',
      title: '10+ Members Teams',
      description: 'R&D Teams Recognized for the innovative solutions in digital transformation',
      icon: Briefcase,
    },
    {
      year: '2027',
      title: 'Achievements Coming Sooon...',
      description: 'Every meaningful achievement is built step by step never by shortcuts.',
      icon: TrendingUp,
    },
  ];

  const industries = [
    { name: 'Healthcare', projects: 4 },
    { name: 'E-commerce', projects: 12 },
    { name: 'Finance', projects: 5 },
    { name: 'Education', projects: 7 },
    { name: 'Real Estate', projects: 20 },
    { name: 'Technology', projects: 9 },
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
              Our Achievements
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A decade of excellence, innovation, and client success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30 group-hover:border-blue-500/50 transition-all">
                  <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <AnimatedCounter target={stat.value} label={stat.label} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-400">Celebrating our milestones and achievements</p>
          </motion.div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start gap-8 p-8 rounded-2xl bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/50 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-4">
                      <achievement.icon className="w-full h-full" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-blue-400 mb-2">{achievement.year}</div>
                    <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries Served</h2>
            <p className="text-xl text-gray-400">Diverse experience across multiple sectors</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/50 transition-all text-center group"
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{industry.name}</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {industry.projects}
                </div>
                <div className="text-sm text-gray-400">Projects</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
