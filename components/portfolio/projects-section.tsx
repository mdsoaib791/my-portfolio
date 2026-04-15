'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Transcription Certification Institute',
    description: 'Web application with student and admin dashboards for managing courses, modules, and certification quizzes.',
    details: [
      'Implemented centralized API handling using Inversify (Dependency Injection)',
      'Created reusable custom hooks for services',
      'Used Axios with TanStack Query for efficient data fetching and caching',
      'Integrated authentication using NextAuth',
      'Optimized performance using useMemo, useRef, and optimized data tables'
    ],
    tech: ['TypeScript', 'React.js', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Axios', 'Inversify', 'NextAuth', 'Tailwind CSS'],
  },
  {
    title: 'GMR Transcription',
    description: 'Mobile application for a professional transcription services company enabling users to manage orders and track progress.',
    details: [
      'Built responsive and user-friendly UI',
      'Implemented efficient API handling using Axios and TanStack Query',
      'Reduced API calls by 40% for smooth navigation and data handling across devices'
    ],
    tech: ['TypeScript', 'React Native', 'Expo', 'Redux Toolkit', 'TanStack Query', 'Axios', 'Tailwind CSS'],
  },
  {
    title: 'RepuGen',
    description: 'Scalable healthcare application enabling medical providers to manage patient reviews and strengthen their digital presence.',
    details: [
      'Developed cross-platform applications for Android, iOS, Web, and macOS',
      'Designed centralized API architecture using Inversify (Dependency Injection)',
      'Built reusable custom hooks for service abstraction',
      'Implemented real-time chat using SignalR for seamless communication',
      'Optimized performance using useMemo, useRef, lazy loading, and efficient state management'
    ],
    tech: ['TypeScript', 'React.js', 'Next.js', 'React Native', 'Expo', 'Vite', 'Electron', 'Redux Toolkit', 'TanStack Query', 'Axios', 'Inversify', 'SignalR', 'shadcn/ui', 'Tailwind CSS'],
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl"
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-bold text-foreground mb-12">
        Featured Projects
      </motion.h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            variants={itemVariants}
            className="p-8 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {project.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex gap-3 text-muted-foreground text-sm"
                  >
                    <span className="text-accent flex-shrink-0 mt-1">→</span>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-border text-center">
        <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity"
        >
          Visit GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}
