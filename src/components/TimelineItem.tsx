import React from 'react';
import { motion } from 'framer-motion';
interface TimelineItemProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}
export function TimelineItem({
  number,
  title,
  description,
  isLast = false,
  index
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay: index * 0.2
      }}
      className="flex gap-6 md:gap-10">

      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-forest-dark font-bold text-xl shadow-lg shadow-gold/20 z-10">
          {number}
        </div>
        {!isLast && <div className="w-0.5 flex-grow bg-white/10 my-2"></div>}
      </div>
      <div className="pb-12 pt-2">
        <h3 className="text-2xl font-serif font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed max-w-xl">{description}</p>
      </div>
    </motion.div>);

}