'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiExternalLink } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

const projects = [
  {
    id: 1,
    title: 'Demo E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payment processing with Stripe, and an intuitive admin dashboard. Includes advanced filtering, wishlist functionality, and order tracking.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://ecommerce-shop-demo.netlify.app',
    githubUrl: 'https://github.com/OlenaBoichenko/ecommerce-demo',
    inDevelopment: false,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates using WebSockets. Features include drag-and-drop task boards, team collaboration, file attachments, and automated notifications. Built with React and Node.js.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example-taskmanager.com',
    githubUrl: 'https://github.com/example/taskmanager',
    inDevelopment: true,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'SaaS platform leveraging OpenAI API to generate marketing content, blog posts, and social media captions. Includes template library, content history, and export functionality. Built with modern web technologies.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Prisma'],
    liveUrl: 'https://generatorcontent.netlify.app/',
    githubUrl: 'https://github.com/OlenaBoichenko/ai-content-generator',
    inDevelopment: false,
  },
  {
    id: 4,
    title: 'Sidney Bakery',
    description: 'Website for a home bakery featuring a product catalog, online ordering system, and responsive design. Includes a product gallery, order form, delivery information, and contact details.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    liveUrl: 'https://sidney-bakery.netlify.app/',
    githubUrl: 'https://github.com/OlenaBoichenko/sidney-bakery',
    inDevelopment: false,
  },
  {
    id: 5,
    title: 'Fitness Tracking Dashboard',
    description: 'Personal fitness app with workout logging, progress tracking, and nutrition planning. Includes interactive charts, goal setting, and integration with popular fitness APIs. Mobile-responsive design.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
    liveUrl: 'https://example-fitness.com',
    githubUrl: 'https://github.com/example/fitness',
    inDevelopment: true,
  },
  {
    id: 6,
    title: 'Corporate WordPress Site',
    description: 'Custom WordPress theme and plugins for a corporate client. Features include custom post types, advanced ACF integration, multilingual support, and performance optimization. Fully responsive with modern design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
    liveUrl: 'https://example-corporate.com',
    githubUrl: 'https://github.com/example/corporate',
    inDevelopment: true,
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient glow-text">My Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique
            challenge and an opportunity to create something meaningful.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: project.inDevelopment ? 0 : -10 }}
              className="group"
            >
              <div className={`card-glow bg-dark-light/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/20 transition-all duration-300 hover:border-primary/40 h-full flex flex-col relative ${
                project.inDevelopment ? 'opacity-60' : ''
              }`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      project.inDevelopment ? '' : 'group-hover:scale-110'
                    }`}
                  />

                  {/* In Development Badge */}
                  {project.inDevelopment && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <div className="bg-dark/90 backdrop-blur-sm border-2 border-accent px-6 py-3 rounded-lg">
                        <p className="text-accent font-bold text-lg">In Development</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className={`text-xl font-bold text-gray-200 mb-3 transition-colors ${
                    project.inDevelopment ? '' : 'group-hover:text-primary'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {!project.inDevelopment && (
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-dark flex items-center justify-center gap-2 text-sm"
                        >
                          <HiExternalLink />
                          Live Demo
                        </motion.button>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary/10 transition-colors flex items-center gap-2 text-sm"
                        >
                          <SiGithub />
                          Code
                        </motion.button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
