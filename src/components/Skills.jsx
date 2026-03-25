import { motion } from 'framer-motion'
import { VscVscode } from 'react-icons/vsc'
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiMongodb, 
  SiFigma, SiGit, SiNextdotjs, SiTypescript, SiPython,
  SiPhp, SiMysql, SiLaravel, SiVercel,
  SiOpenai, SiFramer, SiGithub
} from 'react-icons/si'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" />, level: "90%" },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: "85%" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" />, level: "95%" },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: "80%" },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: "95%" },
        { name: "HTML5/CSS3", icon: <div className="flex gap-1"><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6]" /></div>, level: "98%" },
      ]
    },
    {
      title: "Backend & database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: "85%" },
        { name: "PHP", icon: <SiPhp className="text-[#777BB4]" />, level: "82%" },
        { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" />, level: "80%" },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, level: "85%" },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: "82%" },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" />, level: "75%" },
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" />, level: "100%" },
        { name: "GitHub", icon: <SiGithub className="text-white" />, level: "95%" },
        { name: "Vercel", icon: <SiVercel className="text-white" />, level: "90%" },
        { name: "OpenAI API", icon: <SiOpenai className="text-[#412991]" />, level: "85%" },
        { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" />, level: "90%" },
        { name: "Git", icon: <SiGit className="text-[#F05032]" />, level: "90%" },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section id="skills" className="py-24 px-6 relative bg-[#0a0a0k8] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and toolset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-blue-500/20 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400 uppercase tracking-wider">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div key={skillIdx} variants={itemVariants} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">{skill.level}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
