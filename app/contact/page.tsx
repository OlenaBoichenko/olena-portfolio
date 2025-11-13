'use client'

import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { SiGithub, SiLinkedin} from 'react-icons/si'
import { useState } from 'react'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'ol.boichenko.dev@gmail.com',
    link: 'mailto:ol.boichenko.dev@gmail.com',
    color: '#00f0ff',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Victoria, BC, Canada',
    link: null,
    color: '#ff00ff',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+1 (819) 431-4036',
    link: 'tel:+18194314036',
    color: '#00ff88',
  },
]

const socialLinks = [
  {
    icon: SiGithub,
    name: 'GitHub',
    url: 'https://github.com/OlenaBoichenko',
    color: '#FFFFFF',
  },
  {
    icon: SiLinkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/olena-boichenko-dev',
    color: '#FFFFFF',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        alert('Thank you for your message! I will get back to you soon.')
      } else {
        setSubmitStatus('error')
        alert('Failed to send message. Please try again or contact me directly at ol.boichenko.dev@gmail.com')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
      alert('Failed to send message. Please try again or contact me directly at ol.boichenko.dev@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            <span className="text-gradient glow-text">Get In Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-200">
              Contact Information
            </h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center card-glow"
                    style={{
                      background: `${info.color}20`,
                      boxShadow: `0 0 20px ${info.color}30`,
                    }}
                  >
                    <info.icon
                      className="w-6 h-6"
                      style={{ color: info.color }}
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-200 font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-200 font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-200">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center card-glow bg-dark-light/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <social.icon
                      className="w-6 h-6"
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 relative h-64 hidden lg:block"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-48 h-48 border-2 border-primary/20 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute w-32 h-32 border-2 border-accent/20 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-glow bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-primary/20">
              <h2 className="text-2xl font-bold mb-6 text-gray-200">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-primary/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-primary/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark/50 border border-primary/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-dark border-glow transition-all ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
