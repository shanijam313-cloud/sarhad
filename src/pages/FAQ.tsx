import React from 'react';
import { motion } from 'framer-motion';
import { AccordionItem } from '../components/AccordionItem';
import { IslamicPattern } from '../components/IslamicPattern';
export function FAQ() {
  const faqs = [
  {
    question: 'What is the fee structure for BS Computer Science?',
    answer:
    'The fee for BS Computer Science is PKR 85,000 per semester. This includes tuition, lab charges, and library fees. There is a one-time admission fee of PKR 20,000 payable at the time of enrollment.'
  },
  {
    question: 'Do you offer scholarships?',
    answer:
    'Yes, Sarhad Institute offers merit-based scholarships for students with exceptional academic records (80% and above in Intermediate). We also have need-based financial aid for deserving students.'
  },
  {
    question: 'Is the institute recognized by HEC?',
    answer:
    'Yes, Sarhad Institute of Information Technology is fully recognized by the Higher Education Commission (HEC) of Pakistan and affiliated with the University of Peshawar.'
  },
  {
    question: 'What are the class timings?',
    answer:
    'Regular classes are held from Monday to Friday, 8:00 AM to 2:00 PM. We also offer evening programs for certain short courses from 4:00 PM to 7:00 PM.'
  },
  {
    question: 'Is transport facility available?',
    answer:
    'Yes, the institute provides transport facilities covering major routes in Peshawar, Charsadda, and Nowshera. Transport charges are separate from tuition fees.'
  },
  {
    question: 'How can I apply for admission?',
    answer:
    'You can apply online through our website or visit the campus admission office to collect the prospectus and form. See the Admissions page for detailed steps.'
  },
  {
    question: 'Do you have hostel facilities?',
    answer:
    'We have separate hostel facilities for male and female students located near the campus with 24/7 security, mess, and internet facilities.'
  }];

  return (
    <div className="pt-32 pb-20 min-h-screen relative">
      <IslamicPattern className="opacity-[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
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

            Frequently Asked Questions
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

            Find answers to common questions about admissions, academics, and
            campus life.
          </motion.p>
        </div>

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
            delay: 0.3
          }}
          className="max-w-3xl mx-auto glass-panel rounded-2xl p-8 md:p-12">

          {faqs.map((faq, index) =>
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer} />

          )}
        </motion.div>
      </div>
    </div>);

}