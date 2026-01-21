import React from 'react';
import { motion } from 'framer-motion';
import { IslamicPattern } from '../components/IslamicPattern';
export function Gallery() {
  const galleryImages = [
  '/WhatsApp%20Image%202026-01-21%20at%206.31.14%20AM.jpeg',
  '/WhatsApp%20Image%202026-01-21%20at%206.31.15%20AM.jpeg',
  '/WhatsApp%20Image%202026-01-21%20at%206.31.16%20AM.jpeg',
  '/WhatsApp%20Image%202026-01-21%20at%206.31.17%20AM.jpeg',
  '/WhatsApp%20Image%202026-01-21%20at%206.31.18%20AM.jpeg',
  '/WhatsApp%20Image%202026-01-21%20at%206.31.19%20AM.jpeg',
  '/WhatsApp%20Image%202026-01-21%20at%206.31.20%20AM.jpeg',
  '/WhatsApp%20Image%202026-01-21%20at%206.31.21%20AM.jpeg',
  '/WhatsApp%20Image%202026-01-21%20at%206.31.22%20AM.jpeg'];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 26,
      scale: 0.96
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      <IslamicPattern className="opacity-[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((src, index) =>
          <motion.div
            key={src}
            variants={itemVariants}
            whileHover={{
              y: -8,
              rotateZ: -0.6
            }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 18
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 glass-card">

              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)]"></div>

              <div className="relative aspect-[4/3] w-full">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>);

}
