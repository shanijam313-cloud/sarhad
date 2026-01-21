import React from 'react';
import { Hero } from '../components/Hero';
import { StatCounter } from '../components/StatCounter';
import { CourseCard } from '../components/CourseCard';
import { IslamicPattern } from '../components/IslamicPattern';
import { Code, Database, Shield, Cpu, Globe, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function Home() {
  const stats = [
  {
    label: 'Students Enrolled',
    end: 1500,
    suffix: '+'
  },
  {
    label: 'Expert Faculty',
    end: 50,
    suffix: '+'
  },
  {
    label: 'Courses Offered',
    end: 25,
    suffix: ''
  },
  {
    label: 'Years of Excellence',
    end: 12,
    suffix: '+'
  }];

  const featuredCourses = [
  {
    title: 'Computer Science',
    description:
    'Master the fundamentals of computing, algorithms, and software development with our comprehensive BSCS program.',
    icon: Code,
    duration: '4 Years',
    students: '450+ Students'
  },
  {
    title: 'Data Science',
    description:
    'Learn to analyze complex data sets and derive actionable insights using statistical methods and machine learning.',
    icon: Database,
    duration: '4 Years',
    students: '200+ Students'
  },
  {
    title: 'Cyber Security',
    description:
    'Protect digital assets and networks with advanced training in ethical hacking, cryptography, and security protocols.',
    icon: Shield,
    duration: '4 Years',
    students: '150+ Students'
  }];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) =>
            <StatCounter key={index} {...stat} />
            )}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 relative overflow-hidden">
        <IslamicPattern className="opacity-[0.03]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
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
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">

              Featured Programs
            </motion.h2>
            <motion.p
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
                delay: 0.2
              }}
              className="text-white/70 max-w-2xl mx-auto">

              Discover our most popular degree programs designed to launch your
              career in the technology sector.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) =>
            <CourseCard key={index} {...course} delay={index * 0.2} />
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-block px-8 py-3 border border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-forest-dark transition-all duration-300">

              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gold/5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-panel rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto border-gold/20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join a community of innovators and future leaders at Sarhad
              Institute. Admissions are now open for the Fall 2026 session.
            </p>
            <Link
              to="/admissions"
              className="px-10 py-4 bg-gold text-forest-dark font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-gold/20">

              Apply Online
            </Link>
          </div>
        </div>
      </section>
    </div>);

}