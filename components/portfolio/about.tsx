'use client';

import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '4.4+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Happy Clients', value: '10+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <span className="text-primary font-semibold">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Passionate About Building Digital Experiences
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate frontend developer from Patna, Bihar with a strong foundation in building 
              modern, responsive web applications. My journey in web development started with a curiosity 
              about how things work on the web, and it has evolved into a career dedicated to crafting 
              beautiful digital experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Specializing in React.js, Next.js, and React Native, I focus on creating not just functional 
              applications but ones that delight users with smooth interactions and intuitive interfaces. 
              I believe in the importance of clean code, best practices, and continuous learning.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, 
              or sharing my knowledge through technical writing and mentoring fellow developers.
            </motion.p>

            {/* Skills Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-8">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
