import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { IslamicPattern } from '../components/IslamicPattern';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export function Contact() {
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

            Get in Touch
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

            Have questions? We're here to help. Visit our campus or send us a
            message.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.3
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="glass-card p-6 rounded-xl">
                <MapPin className="text-gold mb-4" size={32} />
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Visit Us
                </h3>
                <p className="text-white/70">
                  Near Zain Gym Club Habib Market,
                  <br />
                  Bypass Road Zaida (Swabi)
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Phone className="text-gold mb-4" size={32} />
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Call Us
                </h3>
                <p className="text-white/70">
                  0315-9688750
                  <br />
                  0341-3388750
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Mail className="text-gold mb-4" size={32} />
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Email Us
                </h3>
                <p className="text-white/70">
                  ismailswabi94@gmail.com
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Clock className="text-gold mb-4" size={32} />
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Office Hours
                </h3>
                <p className="text-white/70">
                  Mon - Fri: 8:00 AM - 4:00 PM
                  <br />
                  Sat: 9:00 AM - 1:00 PM
                </p>
              </div>
            </motion.div>

            {/* Map Placeholder */}
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
              className="h-64 md:h-80 rounded-2xl overflow-hidden glass-panel border-0">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.696390779264!2d71.4858!3d34.0085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917296e0d36b7%3A0x4a0767106060e760!2sUniversity%20Rd%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1645564859123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{
                  border: 0
                }}
                allowFullScreen
                loading="lazy"
                title="Campus Location"
                className="opacity-80 hover:opacity-100 transition-opacity duration-500">
              </iframe>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.3
            }}
            className="glass-panel p-8 md:p-10 rounded-2xl">

            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>);

}
