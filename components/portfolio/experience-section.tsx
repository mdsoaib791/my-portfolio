'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'First Bit Digital Technologies',
    period: 'Dec 2021 – Present',
    description: [
      'Developed and maintained scalable frontend applications using React.js, Next.js, and Redux in Agile team environments',
      'Built responsive web and mobile applications using React.js, Next.js, React Native, and Expo, converting Figma and Photoshop designs into pixel-perfect UI',
      'Developed reusable components and design systems using shadcn/ui and TailwindCSS, improving UI consistency and development efficiency',
      'Managed client-side state and API integration using Redux and TanStack Query with Axios, reducing redundant API calls and improving performance',
      'Improved UI performance and reduced load time by ~25%',
      'Collaborated with cross-functional teams including designers, QA, and backend developers to deliver production-ready features'
    ],
  },
];

export default function ExperienceSection() {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl"
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-bold text-foreground mb-12">
        Professional Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-8 border-l-2 border-primary"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
              <div className="w-2 h-2 bg-background rounded-full" />
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
              <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
            </div>

            <ul className="space-y-3">
              {exp.description.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  variants={itemVariants}
                  className="flex gap-3 text-muted-foreground leading-relaxed"
                >
                  <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-border">
        <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
        <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-accent">
          <div className="absolute left-[-17px] top-0 w-8 h-8 bg-accent rounded-full border-4 border-background flex items-center justify-center">
            <div className="w-2 h-2 bg-background rounded-full" />
          </div>
          <h4 className="text-xl font-bold text-foreground mb-2">Bachelor of Technology</h4>
          <p className="text-lg text-accent font-semibold mb-1">Jawaharlal Nehru Technological University</p>
          <p className="text-sm text-muted-foreground">Hyderabad • 2014 – 2018</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
