import React from 'react';
import { motion } from 'framer-motion';
import { IslamicPattern } from '../components/IslamicPattern';
import { Target, Eye, Award } from 'lucide-react';
export function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      <IslamicPattern className="opacity-[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">

            About Sarhad Institute
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="text-xl text-white/70 max-w-3xl mx-auto">

            A premier institution dedicated to excellence in information
            technology education and research since 2012.
          </motion.p>
        </div>

        {/* Principal's Message */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative">

            <div className="absolute inset-0 bg-gold/20 translate-x-4 translate-y-4 rounded-2xl"></div>
            <img
              src="/WhatsApp%20Image%202026-01-21%20at%206.24.45%20AM.jpeg"
              alt="Principal"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]" />

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="space-y-6">

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Principal's Message
            </h2>
            <div className="w-20 h-1 bg-gold"></div>
            <p className="text-white/80 leading-relaxed text-lg">
              "At Sarhad Institute, we believe that education is not just about
              acquiring knowledge, but about shaping character and fostering
              innovation. Our curriculum is designed to challenge students and
              prepare them for the rapidly evolving technological landscape."
            </p>
            <p className="text-white/80 leading-relaxed text-lg">
              "We take pride in our state-of-the-art facilities and our
              dedicated faculty who are committed to nurturing the next
              generation of IT leaders. Join us in our mission to transform
              society through technology."
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-gold">
                Dr. Muhammad Ahmed
              </h4>
              <p className="text-white/60">PhD Computer Science, Principal</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
          {
            icon: Target,
            title: 'Our Mission',
            text: 'To provide high-quality education in information technology that empowers students with technical skills, ethical values, and a spirit of innovation.'
          },
          {
            icon: Eye,
            title: 'Our Vision',
            text: 'To be a leading institute in the region, recognized for academic excellence, research contributions, and producing industry-ready professionals.'
          },
          {
            icon: Award,
            title: 'Our Values',
            text: 'We are guided by integrity, excellence, innovation, and social responsibility in all our academic and administrative endeavors.'
          }].
          map((item, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2
            }}
            className="glass-card p-8 rounded-2xl text-center">

              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center text-gold mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{item.text}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}
