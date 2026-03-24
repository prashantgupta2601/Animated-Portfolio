import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi'

const Projects = () => {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Web App', 'E-commerce', 'Full Stack', 'UI/UX']

  const projects = [
    {
      title: "ShopVibe – AI-Powered E-Commerce",
      description: "A full-stack AI-powered e-commerce platform with smart search, product recommendations, and a chatbot using OpenAI API. Includes secure Stripe checkout and comprehensive admin dashboard.",
      category: "Full Stack",
      tags: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Stripe", "Socket.io"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
      links: { github: "https://github.com/prashantgupta2601/ShopVibe-MernStack", live: "#" }
    },
    {
      title: "IP Management System",
      description: "A comprehensive management system for IP Facilitation Centres, handling patents, trademarks, and industrial designs. Features role-based access and automated tracking.",
      category: "Full Stack",
      tags: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
      links: { github: "https://github.com/prashantgupta2601/Intellectual-property-Facilitation-Centre-management", live: "#" }
    },
    {
      title: "SportNova – Talent Assessment",
      description: "Sports talent assessment platform enabling athletes to upload performance videos and receive structured evaluations. Features role-based access and optimized backend APIs.",
      category: "Full Stack",
      tags: ["React", "Node.js", "Express", "Tailwind CSS", "MySQL", "Video Upload"],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
      links: { github: "https://github.com/prashantgupta2601/sportNova", live: "#" }
    },
    {
      title: "Inventory Management System",
      description: "A lightweight PHP-based web application for managing inventory with JSON storage, session-based authentication, and a clean dashboard interface.",
      category: "Web App",
      tags: ["PHP", "JSON", "HTML", "CSS", "Auth"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
      links: { github: "https://github.com/prashantgupta2601/Inventory-Management-System", live: "#" }
    },
    {
      title: "AI Price Comparison Bot",
      description: "A Python-based bot that compares product prices across multiple platforms like Amazon, eBay, and Walmart. Features budget filtering and automated web scraping.",
      category: "Web App",
      tags: ["Python", "Web Scraping", "ScraperAPI", "BeautifulSoup"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop",
      links: { github: "https://github.com/prashantgupta2601/AI-Chatbot", live: "#" }
    }
  ]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            A selection of my recent works across different technologies.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent text-white' 
                    : 'border-white/10 text-gray-400 hover:border-purple-500/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden glass border-white/5"
              >
                {/* Project Image */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
                    <a href={project.links.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
                      <FiGithub size={20} />
                    </a>
                    <a href={project.links.live} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-purple-400 text-xs font-semibold mb-2 uppercase tracking-widest">
                    <FiFolder />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 text-[10px] text-gray-300 rounded-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
