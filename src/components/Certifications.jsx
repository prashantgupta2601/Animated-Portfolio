import { motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi'

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Meta Front-End Developer Specialization",
      issuer: "Coursera / Meta",
      date: "2022",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "MongoDB Professional Services",
      issuer: "MongoDB Inc.",
      date: "2022",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    }
  ]

  return (
    <section id="certifications" className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Certifications</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass group rounded-2xl overflow-hidden border-white/5 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="h-40 relative">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <FiAward className="text-emerald-400 text-3xl" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-emerald-400 font-mono mb-2">{cert.date}</p>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-500" /> {cert.issuer}
                </p>
                <a 
                  href={cert.link}
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                >
                  View Credential <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
