import { motion } from 'framer-motion'
import { FiTarget, FiZap, FiCpu, FiMessageSquare } from 'react-icons/fi'

const WhyHireMe = () => {
    const reasons = [
        {
            icon: <FiTarget className="text-blue-400" />,
            title: "Problem Solver",
            description: "I don't just write code; I build solutions that address real business challenges and user needs."
        },
        {
            icon: <FiZap className="text-yellow-400" />,
            title: "Fast Learner",
            description: "The tech world moves fast. I pride myself on my ability to pick up new frameworks and tools over a weekend."
        },
        {
            icon: <FiCpu className="text-purple-400" />,
            title: "Performance Driven",
            description: "Zero-latency mindset. I optimize every line to ensure the fastest possible loading times and smooth interactions."
        },
        {
            icon: <FiMessageSquare className="text-green-400" />,
            title: "Team Player",
            description: "Great software is built by great teams. I value clear communication and collaborative environments."
        }
    ]

    return (
        <section className="py-24 px-6 relative bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Me?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-xl">
                            I bring a unique blend of technical expertise, creative thinking, and a relentless focus on delivering high-quality results. Here's what I bring to the table:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="p-6 rounded-2xl glass border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="text-2xl mb-4">{reason.icon}</div>
                                    <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                                    <p className="text-sm text-gray-500">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="w-full aspect-square glass rounded-3xl border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                            {/* Animated circle decoration */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-[80%] h-[80%] border-2 border-dashed border-blue-500/20 rounded-full"
                                />
                                <motion.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="w-[60%] h-[60%] border-2 border-dashed border-purple-500/20 rounded-full absolute"
                                />
                            </div>
                            
                            <div className="text-center z-10">
                                <p className="text-7xl font-bold text-white mb-2 tracking-tighter">100%</p>
                                <p className="text-gray-400 uppercase tracking-[0.3em] font-mono">Commitment</p>
                            </div>

                            {/* Floating icons */}
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-10 p-4 rounded-xl glass border-white/10 text-blue-400"><FiZap size={30} /></motion.div>
                            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 left-10 p-4 rounded-xl glass border-white/10 text-purple-400"><FiCpu size={30} /></motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* GitHub Stats Section embedded here */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-10">GitHub Contributions</h3>
                    <div className="glass p-8 rounded-3xl border-white/5 overflow-x-auto">
                        <img 
                            src="https://github-readme-stats.vercel.app/api?username=prashantgupta2601&show_icons=true&theme=transparent&title_color=3b82f6&text_color=9ca3af&icon_color=3b82f6&border_color=ffffff10" 
                            alt="GitHub Stats" 
                            className="mx-auto h-48 md:h-52"
                        />
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=prashantgupta2601&layout=compact&theme=transparent&text_color=9ca3af&title_color=3b82f6&border_color=ffffff10" alt="Top Languages" className="h-40" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyHireMe
