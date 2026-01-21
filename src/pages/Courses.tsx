import React from 'react';
import { motion } from 'framer-motion';
import { IslamicPattern } from '../components/IslamicPattern';
import {
  Anchor,
  Award,
  BadgeCheck,
  Building2,
  Calculator,
  ChartLine,
  ClipboardCheck,
  Cog,
  Cpu,
  DraftingCompass,
  Eye,
  FileCode2,
  FileSpreadsheet,
  Flame,
  Fuel,
  Globe,
  HardHat,
  Hotel,
  Keyboard,
  Languages,
  Leaf,
  Lightbulb,
  Megaphone,
  Monitor,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  Sun,
  TriangleAlert,
  Utensils,
  Wrench,
  Zap } from
'lucide-react';
export function Courses() {
  const courseCategories = [
  {
    title: 'Information Technology Courses',
    courses: [
    {
      title: 'MS Office',
      icon: FileSpreadsheet
    },
    {
      title: 'D.I.T',
      icon: Monitor
    },
    {
      title: 'AutoCAD (2D, 3D)',
      icon: DraftingCompass
    },
    {
      title: 'Hardware',
      icon: Cpu
    },
    {
      title: 'Web Designing',
      icon: Globe
    },
    {
      title: 'C.I.T',
      icon: Monitor
    },
    {
      title: 'Computer Accounting',
      icon: Calculator
    },
    {
      title: 'Typing & Short Hand Course',
      icon: Keyboard
    },
    {
      title: 'Digital Marketing',
      icon: Megaphone
    },
    {
      title: 'Amazon',
      icon: ShoppingCart
    },
    {
      title: 'VB & C++',
      icon: FileCode2
    },
    {
      title: 'English Language',
      icon: Languages
    }]
  },
  {
    title: 'UK/USA International Certification Courses',
    courses: [
    {
      title: 'Nebosh',
      icon: HardHat
    },
    {
      title: 'OSHA',
      icon: HardHat
    },
    {
      title: 'IOSH',
      icon: HardHat
    },
    {
      title: 'Safety Supervisor',
      icon: ShieldCheck
    },
    {
      title: 'Environmental Safety',
      icon: Leaf
    },
    {
      title: 'Food Safety',
      icon: Utensils
    },
    {
      title: 'Disaster Management',
      icon: TriangleAlert
    },
    {
      title: 'ISO All Certification',
      icon: BadgeCheck
    },
    {
      title: 'OTHM',
      icon: Award
    },
    {
      title: 'NVQ',
      icon: Award
    },
    {
      title: 'Rigger Level (I, II, III)',
      icon: Anchor
    },
    {
      title: 'Fire Safety',
      icon: Flame
    }]
  },
  {
    title: 'Technical & Professional Courses',
    courses: [
    {
      title: 'Quantity Survey',
      icon: Ruler
    },
    {
      title: 'DAE Mechanical',
      icon: Cog
    },
    {
      title: 'DAE Electrical',
      icon: Zap
    },
    {
      title: 'DAE Civil',
      icon: Building2
    },
    {
      title: 'Project Management',
      icon: ClipboardCheck
    },
    {
      title: 'Solar System Diploma',
      icon: Sun
    },
    {
      title: 'Plumber Diploma',
      icon: Wrench
    },
    {
      title: 'Electrician Diploma',
      icon: Lightbulb
    },
    {
      title: 'Optical Engineering',
      icon: Eye
    },
    {
      title: 'Oil & Gas Engineering',
      icon: Fuel
    },
    {
      title: 'Hotel Management',
      icon: Hotel
    },
    {
      title: 'Business Administration',
      icon: ChartLine
    }]
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

            Courses & Certifications
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

            Explore all programs by category and find the right path for your
            career goals.
          </motion.p>
        </div>

        <div className="space-y-16">
          {courseCategories.map((category, categoryIndex) =>
          <section key={category.title}>
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
                delay: categoryIndex * 0.1
              }}
              className="mb-8">

                <div className="flex items-center gap-4 text-gold/80 text-xs uppercase tracking-[0.35em] mb-3">
                  <span className="h-[1px] w-12 bg-gold/50"></span>
                  Category {String(categoryIndex + 1).padStart(2, '0')}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                  {category.title}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.courses.map((course, courseIndex) =>
                <CourseItemCard
                  key={course.title}
                  title={course.title}
                  icon={course.icon}
                  delay={courseIndex * 0.05 + categoryIndex * 0.1} />

                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>);

}

interface CourseItemCardProps {
  title: string;
  icon: React.ElementType;
  delay?: number;
}

function CourseItemCard({
  title,
  icon: Icon,
  delay = 0
}: CourseItemCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24
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
        y: -6
      }}
      className="glass-card relative rounded-2xl p-6 flex items-center gap-5 border border-white/10 overflow-hidden group">

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative" style={{ perspective: '900px' }}>
        <motion.div
          animate={{
            y: [0, -4, 0],
            rotateZ: [6, -2, 6]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay
          }}
          className="relative w-14 h-14">

          <div className="absolute inset-0 rounded-2xl bg-black/40 blur-xl translate-y-3"></div>
          <div
            className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gold via-yellow-300 to-yellow-600 shadow-[0_18px_40px_rgba(212,175,55,0.35)] border border-white/20 flex items-center justify-center text-forest-dark"
            style={{
              transform: 'rotateX(16deg) rotateY(-18deg) rotateZ(6deg)',
              transformStyle: 'preserve-3d'
            }}>

            <div className="absolute inset-1 rounded-xl bg-forest-dark/20"></div>
            <Icon size={22} className="relative" />
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
          {title}
        </h3>
        <div className="mt-1 text-xs uppercase tracking-[0.3em] text-white/40">
          Course
        </div>
      </div>
    </motion.div>);
}
