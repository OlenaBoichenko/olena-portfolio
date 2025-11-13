'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiWordpress
} from 'react-icons/si'
import { HiArrowRight } from 'react-icons/hi'

const technologies = [
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', delay: 0 },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', delay: 0.1 },
  { icon: SiReact, name: 'React', color: '#61DAFB', delay: 0.2 },
  { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF', delay: 0.3 },
  { icon: SiRedux, name: 'Redux', color: '#764ABC', delay: 0.4 },
  { icon: SiPython, name: 'Python', color: '#d2bf81ff', delay: 0.5 },
  { icon: SiNodedotjs, name: 'Node.js', color: '#8dc78dff', delay: 0.6 },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4', delay: 0.7 },
  { icon: SiWordpress, name: 'WordPress', color: '#21759B', delay: 0.8 },
]

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{ top: `${i * 5}%`, width: '100%' }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-primary text-lg font-mono">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="text-gradient glow-text">Olena Boichenko</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-4xl text-gray-300 mb-8"
            >
              Full Stack Developer
            </motion.h2>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-400 mb-12"
            >
              📍 Victoria, BC, Canada
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-dark flex items-center gap-2 border-glow"
                >
                  View My Work
                  <HiArrowRight />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary/10 transition-colors"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Tech Stack - Floating 3D Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-32"
          >
            <h3 className="text-center text-2xl font-semibold mb-12 text-gray-300">
              Technologies I Work With
            </h3>
            <div className="relative max-w-5xl mx-auto h-96 mb-40">
              {technologies.map((tech, index) => {
                const angle = (index / technologies.length) * Math.PI * 2
                const radius = 250
                const x = Math.cos(angle) * radius
                const z = Math.sin(angle) * radius

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute left-1/2 top-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: x,
                      y: z * 0.5,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: tech.delay + 1,
                    }}
                    whileHover={{
                      scale: 1.3,
                      zIndex: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 2 + index * 0.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative group"
                    >
                      <div
                        className="w-20 h-20 rounded-xl flex items-center justify-center card-glow bg-dark-light/50 backdrop-blur-sm border border-primary/20 transition-all duration-300 group-hover:border-primary/60"
                        style={{
                          boxShadow: `0 0 30px ${tech.color}20`,
                        }}
                      >
                        <tech.icon
                          className="w-10 h-10 transition-colors duration-300"
                          style={{ color: tech.color }}
                        />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        <span className="text-xs font-medium text-gray-300 bg-dark/90 px-2 py-1 rounded">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div> */}
      </section>
    </div>
  )
}
