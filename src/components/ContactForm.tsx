import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
export function ContactForm() {
  const [formState, setFormState] = useState<
    'idle' | 'submitting' | 'success' | 'error'>(
    'idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            placeholder="John Doe" />

        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            placeholder="john@example.com" />

        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-white/80">
          Subject
        </label>
        <select
          id="subject"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all [&>option]:bg-forest-dark">

          <option value="admissions">Admissions Inquiry</option>
          <option value="courses">Course Information</option>
          <option value="general">General Inquiry</option>
          <option value="support">Student Support</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-white/80">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
          placeholder="How can we help you?">
        </textarea>
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting' || formState === 'success'}
        className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${formState === 'success' ? 'bg-green-500 text-white' : 'bg-gold text-forest-dark hover:bg-white'}`}>

        {formState === 'idle' &&
        <>
            Send Message <Send size={20} />
          </>
        }
        {formState === 'submitting' &&
        <div className="w-6 h-6 border-2 border-forest-dark border-t-transparent rounded-full animate-spin"></div>
        }
        {formState === 'success' &&
        <>
            Message Sent <CheckCircle size={20} />
          </>
        }
      </button>
    </form>);

}