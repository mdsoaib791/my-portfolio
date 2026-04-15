'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 80 },
      ],
    },
    {
      category: 'Mobile',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 80 },
        { name: 'Native Modules', level: 75 },
      ],
    },
    {
      category: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      category: 'Design & Other',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'REST APIs', level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <span className="text-primary font-semibold">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Technical Skills
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div key={catIndex} variants={itemVariants} className="space-y-6">
              {/* Category Header */}
              <div className="pb-4 border-b border-border/50">
                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-card rounded-full overflow-hidden border border-border/50">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 p-8 bg-card border border-border rounded-xl"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Other Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Responsive Design',
              'Performance Optimization',
              'Web Accessibility (A11y)',
              'SEO Optimization',
              'State Management',
              'API Integration',
              'Testing (Jest, RTL)',
              'DevTools & Debugging',
              'Agile Methodology',
            ].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-background border border-border/50 rounded-lg text-center text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
