import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}
export function StatCounter({
  end,
  suffix = '',
  label,
  duration = 2
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        // Easing function for smooth counting
        const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
        setCount(Math.floor(easeOutQuart(progress) * end));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);
  return (
    <div ref={ref} className="text-center p-6 glass-card rounded-2xl">
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0
        }}
        animate={
        isInView ?
        {
          scale: 1,
          opacity: 1
        } :
        {}
        }
        transition={{
          duration: 0.5
        }}
        className="text-4xl md:text-5xl font-bold text-gold mb-2 font-serif">

        {count}
        {suffix}
      </motion.div>
      <div className="text-white/80 font-medium tracking-wide uppercase text-sm">
        {label}
      </div>
    </div>);

}