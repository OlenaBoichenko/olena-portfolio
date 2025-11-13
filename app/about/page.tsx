'use client'

import { motion } from 'framer-motion'
import { HiCode, HiLightningBolt, HiUsers, HiChip } from 'react-icons/hi'

const skills = [
  {
    category: 'Frontend Development',
    icon: HiCode,
    color: '#00f0ff',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend Development',
    icon: HiChip,
    color: '#ff00ff',
    items: ['Node.js', 'Python', 'RESTful APIs', 'MongoDB', 'SQL' ],
  },
  {
    category: 'Tools & Platforms',
    icon: HiLightningBolt,
    color: '#00ff88',
    items: ['Git', 'WordPress', 'CI/CD', 'Docker', 'AWS'],
  },
  {
    category: 'Soft Skills',
    icon: HiUsers,
    color: '#ffa500',
    items: ['Team Collaboration', 'Problem Solving', 'Communication', 'Adaptability', 'Time Management'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient glow-text">About Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="card-glow bg-dark-light/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hi! I'm <span className="text-primary font-semibold">Olena Boichenko</span>, a passionate Web Developer
                based in the beautiful city of <span className="text-accent font-semibold">Victoria, BC, Canada</span>.
                With a strong foundation in both frontend and backend technologies, I specialize in building modern,
                scalable web applications that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey in software development is guided by curiosity and a drive to create meaningful, 
                well-crafted solutions. I value teamwork, clear communication, and writing code that’s easy 
                to understand and maintain. I’m always looking for opportunities to grow and learn new technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring the neighborhood's natural beauty, 
                baking sourdough bread or learning a new language.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-200">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card-glow bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 transition-all duration-300 hover:border-primary/40"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${skill.color}20`,
                      boxShadow: `0 0 20px ${skill.color}30`,
                    }}
                  >
                    <skill.icon
                      className="w-6 h-6"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-200">
            What I Bring to the Table
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Modern Architecture',
                description: 'Building scalable applications with cutting-edge technologies and best practices',
                color: '#00f0ff',
              },
              {
                title: 'User-Centric Design',
                description: 'Creating intuitive interfaces that prioritize user experience and accessibility',
                color: '#ff00ff',
              },
              {
                title: 'Performance Optimization',
                description: 'Delivering fast, efficient solutions that exceed performance expectations',
                color: '#00ff88',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-glow bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-4"
                  style={{
                    background: item.color,
                    boxShadow: `0 0 20px ${item.color}`,
                  }}
                />
                <h3 className="text-xl font-semibold mb-3 text-gray-200">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
