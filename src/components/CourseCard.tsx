import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
  students: string;
  delay?: number;
}
export function CourseCard({
  title,
  description,
  icon: Icon,
  duration,
  students,
  delay = 0
}: CourseCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5,
        delay
      }}
      whileHover={{
        y: -8
      }}
      className="glass-card rounded-2xl p-8 flex flex-col h-full group relative overflow-hidden">

      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors duration-500"></div>

      <div className="w-14 h-14 rounded-xl bg-forest-light/50 border border-white/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} />
      </div>

      <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">
        {title}
      </h3>

      <p className="text-white/70 mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <div className="flex items-center gap-4 text-sm text-white/50 mb-6 border-t border-white/10 pt-4">
        <div className="flex items-center gap-1.5">
          <Clock size={14} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users size={14} />
          <span>{students}</span>
        </div>
      </div>

      <Link
        to="/courses"
        className="inline-flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">

        View Details <ArrowRight size={16} />
      </Link>
    </motion.div>);

}