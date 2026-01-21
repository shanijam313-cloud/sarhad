import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin } from
'lucide-react';

const logoUrl =
  '/WhatsApp%20Image%202026-01-21%20at%2012.51.05%20AM.jpeg';
export function Footer() {
  return (
    <footer className="bg-forest-dark border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-forest-dark overflow-hidden">
                <img
                  src={logoUrl}
                  alt="Sarhad Institute of IT logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none text-white">
                  SARHAD
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold font-medium">
                  Institute of IT
                </span>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering the next generation of technology leaders with
              world-class education and ethical values.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-forest-dark transition-all duration-300">

                  <Icon size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
              {
                name: 'About Us',
                path: '/about'
              },
              {
                name: 'Our Courses',
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
                name: 'Faculty',
                path: '/about'
              },
              {
                name: 'Contact',
                path: '/contact'
              }].
              map((link) =>
              <li key={link.name}>
                  <Link
                  to={link.path}
                  className="text-white/70 hover:text-gold transition-colors flex items-center gap-2">

                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6">
              Featured Programs
            </h3>
            <ul className="space-y-3">
              {[
              'Computer Science',
              'Software Engineering',
              'Data Science',
              'Cyber Security',
              'Artificial Intelligence'].
              map((course) =>
              <li key={course}>
                  <Link
                  to="/courses"
                  className="text-white/70 hover:text-gold transition-colors flex items-center gap-2">

                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                    {course}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="shrink-0 text-gold mt-1" size={18} />
                <span>
                  University Road, Peshawar,
                  <br />
                  Khyber Pakhtunkhwa, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="shrink-0 text-gold" size={18} />
                <span>+92 91 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="shrink-0 text-gold" size={18} />
                <span>admissions@sarhad-it.edu.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Sarhad Institute of Information
            Technology. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}
