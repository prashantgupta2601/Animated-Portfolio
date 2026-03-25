import { motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi'

const Certifications = () => {
  const certifications = [
    {
      title: "Foundations of Coding Full-Stack",
      issuer: "Microsoft (Coursera)",
      date: "2024",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      link: "https://drive.google.com/file/d/1fKmpAzTnMoqMsAqORFjO72ZfdKOdGeJ0/view"
    },
    {
      title: "Master Generative AI & Tools",
      issuer: "Infosys Springboard",
      date: "2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      link: "https://drive.google.com/file/d/1RtKZUC7Pmp2hsvrJzEfAgmrVyIlPfevZ/view"
    },
    {
      title: "Query Optimization and CRUD",
      issuer: "MongoDB",
      date: "2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      link: "https://drive.google.com/file/d/1dEEgrXHNmB8LAJChfJeeMG9ZQLDK0MKj/view"
    },
    {
      title: "Social Networks",
      issuer: "NPTEL",
      date: "2023",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
      link: "https://drive.google.com/file/d/1BggJgpbbBmiYapZ0DxEdbfv67zYLB06a/view"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Neo Colab",
      date: "2023",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2070&auto=format&fit=crop",
      link: "https://drive.google.com/file/d/1PmmCm884ic568VAnAGQs81yIbNreqKyJ/view"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2072&auto=format&fit=crop",
      link: "https://drive.google.com/file/d/1RAWNyiek3b8yiiKpBRB3w6q9Fcxa3v40/view"
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
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Certifications</span>
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
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-500 shrink-0" /> {cert.issuer}
                </p>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
