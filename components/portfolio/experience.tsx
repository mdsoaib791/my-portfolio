'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Transcription Certification Institute',
      period: 'Jan 2022 - Present',
      description: 'Lead frontend development for web and mobile applications. Architected and implemented scalable React applications with modern state management.',
      achievements: [
        'Built responsive web applications serving 1000+ users',
        'Implemented advanced UI components and animations',
        'Mentored junior developers on React best practices',
        'Optimized application performance achieving 40% improvement',
      ],
      skills: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Node.js'],
    },
    {
      title: 'Frontend Developer',
      company: 'GMR Transcription',
      period: 'Jun 2021 - Dec 2021',
      description: 'Developed and maintained customer-facing web applications. Collaborated with designers to implement pixel-perfect UI designs.',
      achievements: [
        'Created reusable component library reducing development time by 30%',
        'Implemented responsive design for mobile and desktop',
        'Fixed critical bugs improving user experience',
      ],
      skills: ['React', 'CSS3', 'JavaScript', 'REST APIs', 'HTML5'],
    },
    {
      title: 'Junior Frontend Developer',
      company: 'RepuGen',
      period: 'Jul 2020 - May 2021',
      description: 'Started career as Junior Developer, building static and dynamic web pages. Gained solid foundation in web development fundamentals.',
      achievements: [
        'Developed 20+ web pages with pixel-perfect designs',
        'Implemented CSS animations and transitions',
        'Collaborated with backend team on API integration',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <span className="text-primary font-semibold">Professional Journey</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors last:pb-0 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform" />

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-muted-foreground">
                    <span className="font-semibold text-primary">{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
