import { motion } from 'framer-motion'
import { FiTarget, FiZap, FiCpu, FiMessageSquare, FiBookOpen, FiStar, FiCalendar, FiMapPin } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { MdOutlineSchool } from 'react-icons/md'

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

                {/* Education Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 max-w-5xl mx-auto"
                >
                    <div className="relative flex flex-col md:flex-row gap-8 items-start glass p-8 md:p-12 rounded-[2rem] border-white/5 bg-[#0a0a0b]/80 backdrop-blur-xl group hover:border-blue-500/20 transition-all duration-500">
                        {/* Decorative background glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
                        
                        {/* Left Side: Icon & Vertical Line */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                                <FiBookOpen className="text-3xl text-white" />
                            </div>
                            <div className="w-0.5 h-32 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full" />
                        </div>

                        {/* Right Side: Content */}
                        <div className="flex-1 w-full">
                            {/* Badges */}
                            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Pursuing</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                                    <FiStar className="text-purple-400" />
                                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">CGPA: 6.8 / 10</span>
                                </div>
                            </div>

                            {/* Degree & Info */}
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                B.Tech in Computer Science & Engineering
                            </h3>
                            
                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <FiMapPin className="text-blue-400" />
                                    <span className="font-medium">Lovely Professional University</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <FiCalendar className="text-indigo-400" />
                                    <span className="font-medium">2023 – 2027</span>
                                </div>
                            </div>

                            {/* Grid Points */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Core CS fundamentals: DSA, DBMS, OS, CN",
                                    "Web development & full-stack projects",
                                    "Collaborative project-based learning",
                                    "Active in coding communities & hackathons"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        <p className="text-gray-400 text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyHireMe
