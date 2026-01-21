import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../components/TimelineItem';
import { IslamicPattern } from '../components/IslamicPattern';
import { CheckCircle, Download } from 'lucide-react';
export function Admissions() {
  const steps = [
  {
    number: '01',
    title: 'Online Application',
    description:
    'Fill out the online admission form with your personal details and academic history. Ensure all information is accurate to avoid delays.'
  },
  {
    number: '02',
    title: 'Document Submission',
    description:
    'Upload scanned copies of your academic transcripts, CNIC/B-Form, and recent passport-sized photographs.'
  },
  {
    number: '03',
    title: 'Entrance Test',
    description:
    "Appear for the institute's entrance test on the scheduled date. The test covers Mathematics, English, and General Knowledge."
  },
  {
    number: '04',
    title: 'Interview',
    description:
    'Shortlisted candidates will be called for a personal interview with the faculty panel to assess aptitude and motivation.'
  },
  {
    number: '05',
    title: 'Fee Submission',
    description:
    'Upon selection, collect the fee challan and deposit the admission fee at the designated bank branch to confirm your seat.'
  }];

  const requirements = [
  'Minimum 50% marks in Intermediate (Pre-Engineering/ICS)',
  'Valid CNIC or B-Form',
  'Domicile Certificate',
  'Character Certificate from last attended institution',
  '4 Passport size photographs'];

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

            Admissions Process
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

            Your journey to excellence begins here. Follow our simple
            step-by-step admission process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-10">
              How to Apply
            </h2>
            <div className="space-y-2">
              {steps.map((step, index) =>
              <TimelineItem
                key={index}
                {...step}
                index={index}
                isLast={index === steps.length - 1} />

              )}
            </div>
          </div>

          {/* Requirements & Downloads */}
          <div className="space-y-8">
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="glass-panel p-8 rounded-2xl">

              <h2 className="text-2xl font-serif font-bold text-white mb-6">
                Eligibility Criteria
              </h2>
              <ul className="space-y-4">
                {requirements.map((req, index) =>
                <li
                  key={index}
                  className="flex items-start gap-3 text-white/80">

                    <CheckCircle
                    className="text-gold shrink-0 mt-1"
                    size={20} />

                    <span>{req}</span>
                  </li>
                )}
              </ul>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}
              className="glass-panel p-8 rounded-2xl bg-gold/10 border-gold/20">

              <h2 className="text-2xl font-serif font-bold text-white mb-6">
                Downloads
              </h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors group">
                  <span className="font-medium">Admission Form 2026</span>
                  <Download
                    className="text-gold group-hover:scale-110 transition-transform"
                    size={20} />

                </button>
                <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors group">
                  <span className="font-medium">Fee Structure</span>
                  <Download
                    className="text-gold group-hover:scale-110 transition-transform"
                    size={20} />

                </button>
                <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors group">
                  <span className="font-medium">Prospectus</span>
                  <Download
                    className="text-gold group-hover:scale-110 transition-transform"
                    size={20} />

                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>);

}