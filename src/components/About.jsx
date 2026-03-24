import { motion } from 'framer-motion'
import { FiUser, FiZap, FiAward, FiGlobe } from 'react-icons/fi'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: <FiZap className="text-yellow-400" /> },
    { label: 'Projects Completed', value: '15+', icon: <FiGlobe className="text-blue-400" /> },
    { label: 'Happy Clients', value: '10+', icon: <FiUser className="text-green-400" /> },
    { label: 'Certifications', value: '5+', icon: <FiAward className="text-purple-400" /> },
  ]

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-[#050505]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass border-white/10 p-2">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center animate-pulse">
                <FiUser className="text-9xl text-white/10" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-gray-400 mb-2 italic">A passionate developer crafting digital experiences</p>
                    <div className="flex justify-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-purple-500/30 rounded-br-3xl group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Creative full-stack developer based in India
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I specialize in building high-performance, responsive web applications using the MERN stack. 
              My journey in tech is driven by a curiosity to solve complex problems and a passion for 
              clean, intuitive UI/UX design. I thrive on turning ideas into interactive reality.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass p-4 rounded-xl border-white/5 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-1">
                    {stat.icon}
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
              Download CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
