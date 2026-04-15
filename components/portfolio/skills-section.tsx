'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Core',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend Frameworks',
    skills: ['React.js', 'Next.js', 'React Native', 'Expo'],
  },
  {
    title: 'State Management & Data',
    skills: ['Redux', 'Redux Toolkit', 'Context API', 'TanStack Query', 'REST API', 'Axios'],
  },
  {
    title: 'Styling & Design',
    skills: ['Tailwind CSS', 'shadcn/ui', 'Flexbox', 'CSS Grid', 'Responsive Design', 'Mobile-First'],
  },
  {
    title: 'Architecture & Patterns',
    skills: ['Component-Driven Development', 'Modular Architecture', 'Dependency Injection (Inversify)', 'Design Systems'],
  },
  {
    title: 'Performance & Testing',
    skills: ['Lazy Loading', 'Code Splitting', 'Memoization', 'Core Web Vitals', 'Jest', 'React Testing Library'],
  },
  {
    title: 'Real-time Communication',
    skills: ['Socket.io', 'SignalR', 'WebSocket'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git & GitHub', 'npm & pnpm', 'Chrome DevTools', 'Babel', 'JWT', 'Photoshop', 'Figma'],
  },
  {
    title: 'Best Practices',
    skills: ['Clean Code', 'Reusable Components', 'Agile Methodologies', 'Code Reviews', 'Accessibility (WCAG)', 'Performance Optimization'],
  },
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl"
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-bold text-foreground mb-12">
        Technical Skills
      </motion.h2>

      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  variants={skillVariants}
                  className="px-4 py-2 bg-card border border-primary/30 text-foreground rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 12px rgba(59, 130, 246, 0.2)',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Proficiency Levels */}
      <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-border">
        <h3 className="text-2xl font-bold text-foreground mb-8">Expertise Level</h3>
        
        <div className="space-y-6">
          {[
            { label: 'React.js & Next.js', level: 'Expert' },
            { label: 'TypeScript & JavaScript', level: 'Expert' },
            { label: 'State Management (Redux)', level: 'Advanced' },
            { label: 'Mobile Development (React Native)', level: 'Advanced' },
            { label: 'UI/UX & Design Systems', level: 'Advanced' },
            { label: 'Performance Optimization', level: 'Advanced' },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground font-medium">{item.label}</span>
                <span className="text-xs font-semibold text-accent">{item.level}</span>
              </div>
              <motion.div
                className="h-2 bg-card rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: item.level === 'Expert' ? '95%' : '80%' }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
