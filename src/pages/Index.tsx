import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';

const Index = () => {
  return (
    <Layout>

      {/* Hero Section - UNIFIED CREATIVE DARK THEME */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0">
        {/* Background "PATHUM" text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-black text-white/[0.02] pointer-events-none select-none z-0 tracking-tighter uppercase">
          Pathum
        </div>

        {/* Dynamic mesh blobs for Index */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[10%] -left-[5%] w-[30%] h-[30%] bg-brand-green/10 blur-[100px] rounded-full -z-10"
        />

        {/* Desktop Layout - Matching Reference Design */}
        <div className="hidden lg:block w-full h-screen relative">

          {/* Premium Glass Circle - Lunar Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute left-[30%] top-[18%] -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] xl:w-[750px] xl:h-[750px] bg-white/[0.03] rounded-full border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.05)]"
            style={{ zIndex: 1 }}
          />

          {/* Portrait Photo - REFINED HEIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-[30%] top-[18%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[680px] xl:w-[650px] xl:h-[780px]"
            style={{ zIndex: 2 }}
          >
            <img
              src="/pathum-portrait.jpg"
              alt="Pathum Sanjaya"
              className="w-full h-full object-contain object-center"
            />
          </motion.div>

          {/* Typography - "less is more." on RIGHT, overlapping circle edge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-[15%] top-1/2 -translate-y-1/2"
            style={{ zIndex: 3 }}
          >
            <h1 className="text-[120px] xl:text-[150px] font-black text-white leading-[0.85] tracking-tight">
              less is<br />
              <span className="font-black text-brand-gradient uppercase">more.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-12 bottom-16 text-xs xl:text-sm font-black uppercase tracking-[0.4em] text-white/40"
            style={{ zIndex: 3 }}
          >
            Crafting Visual Legends
          </motion.p>

          {/* Social Icons - Bottom Left Corner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute left-12 bottom-16 flex gap-4"
            style={{ zIndex: 3 }}
          >
            <a
              href="https://www.facebook.com/PATHUMSANJAYA979/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green/20 hover:border-brand-green hover:text-brand-green transition-all"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@pm_edit_973?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green/20 hover:border-brand-green hover:text-brand-green transition-all"
              aria-label="TikTok"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a
              href="https://t.me/+94725510768"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green/20 hover:border-brand-green hover:text-brand-green transition-all"
              aria-label="Telegram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.51 4.35-1.77 4.84-1.78.11 0 .35.03.51.16.14.12.18.28.19.45.01.07.01.12 0 .19z" />
              </svg>
            </a>
            <a
              href="https://wa.me/94725510768"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green/20 hover:border-brand-green hover:text-brand-green transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </motion.div>
        </div>

        {/* --- MOBILE / TABLET LAYOUT - ARTISTIC REDESIGN --- */}
        <div className="lg:hidden w-full relative z-10 pt-20 pb-12 overflow-hidden flex flex-col items-center">
          {/* Nebula Glows for Mobile */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] -left-[10%] w-[80%] h-[60%] bg-brand-green/20 blur-[120px] rounded-full"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.05, 0.15, 0.05],
                rotate: [0, -45, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[20%] -right-[10%] w-[70%] h-[50%] bg-white/10 blur-[100px] rounded-full"
            />

            {/* Glass Pillar Effect */}
            <motion.div
              animate={{ x: [-100, 100, -100], opacity: [0, 0.1, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-[40vw] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 blur-[80px]"
            />
          </div>

          {/* Photo & Glow Container */}
          <div className="relative mb-[-120px] z-10 perspective-1000">
            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 z-30"
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
                <div className="w-1 h-1 rounded-full bg-brand-green animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/40">Design by Pathum</span>
              </div>
            </motion.div>

            {/* Lens-Style Portrait Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                y: [0, -15, 0]
              }}
              transition={{
                duration: 1.2,
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative p-3 group"
            >
              {/* Outer Lens Glow */}
              <div className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-full overflow-hidden border-[1px] border-white/20 p-1.5 shadow-2xl">
                <div className="relative rounded-full overflow-hidden border-[1px] border-white/5 bg-black/40 backdrop-blur-md">
                  <img
                    src="/pathum-portrait.jpg"
                    alt="Pathum Sanjaya"
                    className="w-[280px] h-[340px] md:w-[420px] md:h-[500px] object-contain object-bottom scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Accent Lighting Reflection */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-green/10 blur-[40px] rounded-full pointer-events-none" />
            </motion.div>
          </div>

          {/* Luxury Typography Overlay */}
          <div className="relative z-20 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative group py-8 px-4"
            >
              {/* Subtle Glass Background for Text */}
              <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[2px] rounded-[3rem] border border-white/[0.03] scale-110 pointer-events-none" />

              <div className="relative space-y-3">
                <h1 className="text-[68px] md:text-[96px] font-black leading-[0.75] tracking-tighter uppercase flex flex-col items-center">
                  <span className="text-[28px] md:text-[40px] font-light lowercase italic text-white/30 tracking-widest mb-2 font-serif">less is</span>
                  <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">more.</span>
                </h1>

                <div className="flex flex-col items-center gap-5 pt-8">
                  <motion.div
                    animate={{ width: [0, 48] }}
                    className="h-[2px] bg-brand-gradient"
                  />
                  <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-white/30">
                    Crafting Visual Legends
                  </p>

                  {/* Mobile Social Buttons */}
                  <div className="lg:hidden pt-4">
                    <SocialLinks size="small" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Featured Works Section - NEW */}
      <section className="py-24 relative z-10 bg-[#050505]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Selected Works</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
                CRAFTING <span className="text-brand-gradient">LEGENDARY</span> VISUALS
              </h2>
            </div>
            <Link to="/design" className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors font-black text-xs uppercase tracking-widest bg-white/5 px-6 py-3 rounded-full border border-white/10">
              VIEW ALL PROJECTS <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Item 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10"
            >
              <img src="/portfolio/banners/banner-1.jpg" alt="Featured Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-10 left-10">
                <p className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-2">Banners & Layouts</p>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Strategic Billboard Design</h3>
              </div>
            </motion.div>

            {/* Featured Item 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10"
            >
              <img src="/portfolio/logo-designs/logo-1.jpg" alt="Featured Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-10 left-10">
                <p className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-2">Logo Design</p>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Modern Brand Identity</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section - NEW */}
      <section className="py-24 relative z-10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">My <span className="text-brand-gradient">Expertise</span></h2>
            <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto mt-4 font-medium uppercase tracking-widest italic">Specialized solutions for global visionaries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Brand Identity", desc: "Creating timeless logos and comprehensive brand systems that command attention.", icon: <Sparkles size={24} /> },
              { title: "Social Media", desc: "High-impact visual content tailored for engagement across all digital platforms.", icon: <MessageCircle size={24} /> },
              { title: "Motion Graphics", desc: "Dynamic animations that bring your brand's story to life with fluidity and style.", icon: <ArrowUpRight size={24} /> }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
                className="p-10 rounded-[2rem] border border-white/5 glass-morphism space-y-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(57,229,53,0.1)]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-widest">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
