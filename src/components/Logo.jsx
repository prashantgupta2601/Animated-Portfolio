import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      whileHover={{ scale: 1.1 }}
      className="relative group cursor-pointer"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Circle Container */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors" />
        
        {/* Initials */}
        <span className="relative z-10 text-lg font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          PG
        </span>

        {/* Shine Effect */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-white/10 skew-x-[45deg] group-hover:left-[100%] transition-all duration-700 ease-in-out" />
      </div>

      {/* Hover Tooltip */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/5">
        Prashant Gupta
      </div>
    </motion.div>
  );
};

export default Logo;
