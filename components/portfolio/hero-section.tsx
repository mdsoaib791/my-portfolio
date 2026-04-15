'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex items-center px-6 sm:px-8 lg:px-12 pt-20 lg:pt-32 pb-32"
    >
      <div className="max-w-2xl">
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-sm font-medium text-accent">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
        >
          Md Soaib Ansari
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl text-primary font-semibold mb-6"
        >
          Frontend Developer & UI/UX Enthusiast
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
        >
          Crafting scalable enterprise-level web and mobile applications with 4.4+ years of experience. Specializing in React.js, Next.js, and React Native with a passion for pixel-perfect UI and performance optimization.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity text-center"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-primary text-primary rounded font-medium hover:bg-primary hover:text-primary-foreground transition-all text-center"
          >
            View My Work
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-center justify-center"
          >
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
      />
    </motion.section>
  );
}
