import React from 'react';
import { motion } from 'framer-motion';
export function IslamicPattern({
  className = '',
  opacity = 0.05



}: {className?: string;opacity?: number;}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        zIndex: 0
      }}>

      <motion.div
        className="absolute inset-0"
        initial={{
          rotate: 0
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 150,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          opacity
        }}>

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="islamic-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse">

              <path
                d="M50 0 L100 50 L50 100 L0 50 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gold" />

              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-white" />

              <path
                d="M0 0 L100 100 M100 0 L0 100"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-white" />

            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </motion.div>

      {/* Gradient Overlay to fade edges */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-forest/50 to-forest"></div>
    </div>);

}