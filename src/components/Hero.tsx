import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-forest z-0">
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest/90 to-transparent z-10"></div>

        {/* Animated geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] border border-white/5 rounded-full z-0" />

        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-40 right-40 w-[300px] h-[300px] border border-gold/10 rounded-full z-0" />

      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20 md:pt-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="mb-8 flex items-center gap-4">

            <div className="h-1 w-12 bg-gold"></div>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm md:text-base">
              Premium Education in Swabi
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">

            Sarhad Institute of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold relative inline-block">
              Information Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: 'easeOut'
            }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light">

            Empowering the next generation of tech leaders with world-class
            education, practical skills, and international certifications in the
            heart of KPK.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: 'easeOut'
            }}
            className="flex flex-col sm:flex-row items-start gap-6">

            <Link
              to="/courses"
              className="px-8 py-4 bg-gold text-forest-dark font-bold rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-gold/20 flex items-center gap-3 group">

              Explore Our Courses
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform" />

            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">

              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2,
          duration: 1
        }}
        className="absolute bottom-10 right-10 text-white/30 hidden md:flex flex-col items-center gap-2">

        <span className="text-[10px] uppercase tracking-widest rotate-90 origin-right translate-x-2 mb-8">
          Scroll Down
        </span>
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </motion.div>
    </section>);

}
