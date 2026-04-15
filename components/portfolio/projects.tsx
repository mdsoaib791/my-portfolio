'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Transcription Certification Institute',
      description: 'A comprehensive platform for transcription courses, certifications, and student management. Built with modern React and Next.js architecture.',
      image: '🎓',
      tags: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      links: {
        demo: '#',
        github: '#',
      },
      highlights: ['User authentication', 'Course management', 'Progress tracking', 'Certificate generation'],
    },
    {
      title: 'GMR Transcription Platform',
      description: 'Audio transcription service platform connecting clients with professional transcribers. Features real-time updates and file management.',
      image: '🎙️',
      tags: ['React', 'Redux', 'Firebase', 'Material-UI', 'WebRTC'],
      links: {
        demo: '#',
        github: '#',
      },
      highlights: ['Real-time collaboration', 'File upload/download', 'Payment integration', 'User dashboard'],
    },
    {
      title: 'RepuGen - Reputation Management',
      description: 'Enterprise reputation management tool helping businesses monitor and manage their online presence across multiple platforms.',
      image: '⭐',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redux Toolkit'],
      links: {
        demo: '#',
        github: '#',
      },
      highlights: ['Analytics dashboard', 'Social monitoring', 'Report generation', 'API integrations'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <span className="text-primary font-semibold">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Here are some of my most recent and impactful projects that showcase my skills and expertise.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all h-full flex flex-col"
            >
              {/* Header with Icon */}
              <div className="p-6 pb-4 border-b border-border/50">
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col gap-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">Key Features</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/30 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Links */}
              <div className="px-6 pb-6 flex gap-3">
                <motion.a
                  href={project.links.demo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.links.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-border/50 hover:bg-border text-foreground rounded-lg transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
