import React, { useEffect, useState, Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const logoUrl =
  '/WhatsApp%20Image%202026-01-21%20at%2012.51.05%20AM.jpeg';
export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Courses',
    path: '/courses'
  },
  {
    name: 'Admissions',
    path: '/admissions'
  },
  {
    name: 'Gallery',
    path: '/gallery'
  },
  {
    name: 'FAQ',
    path: '/faq'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 bottom-0 w-[280px] bg-forest-dark z-50 flex-col border-r border-white/10 shadow-2xl overflow-hidden">
        {/* Logo Area */}
        <div className="p-8 pb-12 flex flex-col items-center text-center border-b border-white/5 bg-gradient-to-b from-forest-dark to-forest-dark/95">
          <div className="w-24 h-24 rounded-full bg-white/90 shadow-xl mb-4 ring-4 ring-white/10 overflow-hidden">
            <img
              src={logoUrl}
              alt="Sarhad Institute of IT logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-serif text-xl font-bold leading-tight text-white tracking-wide mb-1">
            SARHAD
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium opacity-90">
            Institute of IT
          </p>
        </div>

        {/* 3D Ribbon Navigation Items */}
        <div className="flex-1 py-8 px-4 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
          {navLinks.map((link) =>
          <RibbonLink
            key={link.path}
            to={link.path}
            isActive={location.pathname === link.path}>

              {link.name}
            </RibbonLink>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="p-6 border-t border-white/5 bg-forest-dark/50">
          <Link
            to="/admissions"
            className="block w-full py-3 px-4 bg-gradient-to-r from-gold to-yellow-500 text-forest-dark font-bold text-center rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-1">

            Apply Now
          </Link>
          <div className="mt-4 text-center text-xs text-white/30">
            &copy; 2026 SIIT Swabi
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-forest-dark border-b border-white/10 px-4 py-3 flex items-center justify-between shadow-lg">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-forest-dark overflow-hidden">
            <img
              src={logoUrl}
              alt="Sarhad Institute of IT logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-serif font-bold text-white">SIIT</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">

          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            x: '-100%'
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: '-100%'
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200
          }}
          className="fixed inset-0 z-40 bg-forest-dark pt-20 px-6 md:hidden overflow-y-auto">

            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) =>
            <motion.div
              key={link.path}
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: index * 0.05
              }}>

                  <Link
                to={link.path}
                className={`block py-4 text-xl font-serif border-b border-white/5 ${location.pathname === link.path ? 'text-gold' : 'text-white'}`}>

                    {link.name}
                  </Link>
                </motion.div>
            )}
              <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.4
              }}
              className="mt-8">

                <Link
                to="/admissions"
                className="block w-full py-4 bg-gold text-forest-dark font-bold text-center rounded-lg text-lg">

                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}
// 3D Ribbon Link Component
function RibbonLink({
  to,
  children,
  isActive




}: {to: string;children: React.ReactNode;isActive: boolean;}) {
  return (
    <Link to={to} className="relative group perspective-1000 block">
      <motion.div
        className={`relative z-10 py-3 px-6 flex items-center justify-between transition-all duration-500 transform-style-3d ${isActive ? 'bg-gradient-to-r from-gold via-yellow-400 to-gold text-forest-dark font-bold shadow-lg translate-x-2' : 'bg-white/5 text-white hover:bg-white/10 hover:translate-x-1'}`}
        style={{
          clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)',
          borderRadius: '4px 0 0 4px'
        }}
        whileHover={{
          scale: 1.02,
          rotateY: 5,
          x: 10
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17
        }}>

        <span className="flex items-center gap-3">
          {isActive &&
          <motion.span
            layoutId="active-dot"
            className="w-1.5 h-1.5 rounded-full bg-forest-dark" />

          }
          {children}
        </span>

        {isActive && <ChevronRight size={16} className="text-forest-dark/70" />}
      </motion.div>

      {/* 3D Fold Effect (Ribbon Tail) */}
      <div
        className={`absolute top-1 left-0 w-full h-full -z-10 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-1 translate-y-1' : 'opacity-0'}`}>

        <div
          className="w-full h-full bg-yellow-700/50 rounded-l-sm"
          style={{
            clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)'
          }} />

      </div>
    </Link>);

}
