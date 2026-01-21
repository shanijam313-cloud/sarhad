import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
interface AccordionItemProps {
  question: string;
  answer: string;
}
export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group">

        <span
          className={`text-lg font-medium transition-colors ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold/80'}`}>

          {question}
        </span>
        <span
          className={`p-2 rounded-full border border-white/10 transition-colors ${isOpen ? 'bg-gold text-forest-dark border-gold' : 'text-white/50'}`}>

          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="overflow-hidden">

            <div className="pb-6 text-white/70 leading-relaxed">{answer}</div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}