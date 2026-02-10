import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Design', path: '/design' },
    { title: 'Contact', path: '/contact' },
    { title: 'About Me', path: '/about' },
  ];

  // Site is now unified under Creative Dark theme
  const textColor = 'text-white';
  const textColorMuted = 'text-white/70';
  const logoTextColor = 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-1.5 md:py-2' : 'py-2 md:py-3'
        }`}
    >
      <nav
        className={`flex justify-between items-center px-4 md:px-6 py-2 md:py-2.5 transition-all duration-500 ${scrolled
          ? 'glass-morphism border-b border-white/10 shadow-lg'
          : 'bg-transparent border-transparent'
          }`}
      >
        {/* Logo */}
        <Link to="/" className="relative z-[110]" onClick={closeMenu}>
          <motion.div
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-7 h-7 rounded-lg bg-brand-green flex items-center justify-center shadow-[0_0_20px_rgba(57,229,53,0.3)] group-hover:shadow-[0_0_30px_rgba(57,229,53,0.5)] transition-all">
              <span className="text-black font-black text-sm">P</span>
            </div>
            <span className={`text-base font-black tracking-tighter ${logoTextColor}`}>
              PM <span className="text-brand-green">EDIT</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${textColorMuted} hover:${textColor} transition-colors group`}
            >
              {link.title}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-green shadow-[0_0_10px_rgba(57,229,53,0.5)]"
                />
              )}
              <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </Link>
          ))}

          <Link
            to="/contact"
            className="ml-3 px-4 py-1.5 bg-brand-green text-black rounded-full text-[11px] font-bold shadow-[0_0_20px_rgba(57,229,53,0.2)] hover:shadow-[0_0_30px_rgba(57,229,53,0.4)] hover:scale-105 transition-all"
          >
            HIRE ME
          </Link>
        </div>

        {/* Artisan Bracket Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-lg ${textColor} transition-all relative z-[110] flex items-center justify-center group`}
          aria-label="Toggle menu"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md group-hover:border-brand-green/30 transition-all">
            <span className="text-[10px] font-black tracking-widest text-white/20 group-hover:text-brand-green transition-colors">
              {isOpen ? 'CLOSE' : 'MENU'}
            </span>
            <div className="flex flex-col gap-1 items-end">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 3, width: 12 } : { rotate: 0, y: 0, width: 12 }}
                className="h-[1px] bg-white group-hover:bg-brand-green rounded-full transition-all"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -3, width: 12 } : { rotate: 0, y: 0, width: 8 }}
                className="h-[1px] bg-brand-green rounded-full transition-all"
              />
            </div>
          </div>
        </button>
      </nav>

      {/* Artisan Lens Mobile Overlay V6 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[104] md:hidden"
            />

            {/* Floating Glassmorphic Card */}
            <div className="fixed inset-0 flex items-center justify-center z-[105] pointer-events-none px-6 md:hidden">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-[320px] h-auto min-h-[480px] bg-black/60 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto overflow-hidden relative flex flex-col"
              >
                {/* Internal Glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-[60px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-[60px] rounded-full" />

                <div className="flex-1 flex flex-col p-8 items-center text-center">
                  <p className="text-white/20 text-[8px] font-black uppercase tracking-[0.8em] mb-12">Pathum Navigation</p>

                  <div className="relative flex flex-col gap-8 w-full items-center">
                    {/* The Logic Thread - Centered Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-white/0 via-brand-green/20 to-white/0" />

                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="relative z-10 w-full flex justify-center"
                      >
                        <Link
                          to={link.path}
                          onClick={closeMenu}
                          className="group flex flex-col items-center"
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-black border border-white/20 group-hover:border-brand-green group-hover:scale-125 transition-all duration-300 relative z-20 bg-white/[0.02] flex items-center justify-center">
                            <motion.div
                              className="w-1 h-1 rounded-full bg-brand-green"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                            />
                          </div>
                          <span className="text-xl font-bold text-white/50 group-hover:text-white transition-all duration-300 uppercase tracking-widest py-2">
                            {link.title}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 w-full pt-8 flex flex-col items-center gap-4 border-t border-white/5">
                    <div className="w-8 h-[1px] bg-white/10" />
                    <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] italic">
                      "Crafting Visual Legends"
                    </p>
                    <div className="pt-2">
                      <SocialLinks size="small" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </header >
  );
};

export default Navbar;
