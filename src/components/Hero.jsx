import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-neonBlue font-semibold tracking-wider uppercase text-sm md:text-base">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm <span className="neon-text">Prashant Gupta</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 h-[40px]"
          >
            I am a{' '}
            <span className="text-neonPurple">
              <Typewriter
                words={['Full Stack Developer', 'MERN Developer', 'Problem Solver']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full md:w-auto"
          >
            <a
              href="/Specialized_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Prashant_Gupta_CV.pdf"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <FiDownload /> Download Resume
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 rounded-full border border-white/20 glass text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              View Projects <FiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com/prashantgupta2601" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-white hover:text-neonBlue hover:scale-110 transition-all duration-300">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prashant-gupta-6577a8371/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-white hover:text-neonBlue hover:scale-110 transition-all duration-300">
              <FiLinkedin size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1.5 h-3 bg-neonBlue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
