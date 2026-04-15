'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
      <motion.h2 variants={itemVariants} className="text-4xl font-bold text-foreground mb-8">
        About Me
      </motion.h2>

      <div className="space-y-6">
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          I&apos;m a Frontend Developer with 4.4+ years of experience building scalable enterprise-level web and mobile applications. My journey in tech has been driven by a passion for creating beautiful, performant, and accessible user interfaces that solve real problems.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          Currently at <span className="text-primary font-semibold">First Bit Digital Technologies</span>, I&apos;ve had the opportunity to work on diverse projects ranging from transcription management systems to healthcare applications. I specialize in converting complex designs into pixel-perfect, responsive UI while ensuring optimal performance and accessibility.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          What drives me is the intersection of design and development—I believe that understanding both disciplines leads to more thoughtful, maintainable solutions. I&apos;m particularly passionate about component-driven architecture, performance optimization, and creating reusable design systems that scale effortlessly.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          Beyond coding, I enjoy staying updated with the latest frontend technologies, participating in code reviews, and mentoring junior developers. I&apos;m always eager to collaborate with talented teams and contribute to projects that make a meaningful impact.
        </motion.p>
      </div>

      {/* Key Stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
      >
        {[
          { label: 'Years Experience', value: '4.4+' },
          { label: 'Projects Delivered', value: '15+' },
          { label: 'Companies', value: '1' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
