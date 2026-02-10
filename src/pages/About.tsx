import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowRight, CheckCircle, Mail, Sparkles, User, Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailClick = async () => {
    try {
      setIsLoading(true);
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=graphicdesigninglk@gmail.com&su=Design%20Inquiry%20|%20Pathum%20Sanjaya', '_blank');
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Failed to open email client:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const skills = [
    "Logo Design",
    "Brand Identity",
    "Print Design",
    "Social Media Design",
    "Typography",
    "Adobe Creative Suite",
    "Motion Graphics",
    "Digital Illustration",
    "Art Direction",
    "Visual Storytelling"
  ];

  const processSteps = [
    { title: "Discovery", desc: "Deep diving into your brand's DNA, goals, and target audience to build a solid strategic foundation." },
    { title: "Concept", desc: "Translating insights into bold visual directions and exploring diverse design territories." },
    { title: "Refinement", desc: "Polishing the chosen vision through iterative feedback until every detail is perfect." },
    { title: "Delivery", desc: "Providing high-performance assets and ongoing support to ensure your brand's success." }
  ];

  return (
    <Layout>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-10 pb-6 md:pb-8 overflow-hidden">
        {/* Dynamic mesh blob */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[10%] -right-[5%] w-[30%] h-[30%] bg-brand-green/5 blur-[100px] rounded-full -z-10"
        />

        <div className="absolute top-0 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-green/5 blur-[100px] md:blur-[150px] -z-10 rounded-full" />
        <div className="container-custom px-4 md:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-morphism border-foreground/5 mb-4 md:mb-6"
            >
              <User size={12} className="text-brand-green md:w-3 md:h-3" />
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">Behind the pixels</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tighter leading-[0.9] md:leading-[0.8] mb-4 md:mb-8"
            >
              CURIOSITY <br /> <span className="text-brand-gradient uppercase">& VISION</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-8 md:py-10 relative overflow-hidden">
        {/* Background "VISION" text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[18vw] font-black text-foreground/[0.02] pointer-events-none select-none z-0 tracking-tighter uppercase">
          Vision
        </div>

        <div className="container-custom px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              {/* Creative Photo Frame */}
              <div className="relative max-w-sm mx-auto group">
                {/* Secondary background circle */}
                <div className="absolute -inset-4 border border-brand-green/10 rounded-full -z-10 scale-90 group-hover:scale-100 transition-transform duration-1000" />

                {/* stylized circular frame */}
                <div className="relative aspect-square rounded-full border-[3px] border-foreground/90 p-2 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover:border-foreground transition-all duration-700">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-green/30 relative">
                    <img
                      src="/about-portrait.jpg.png"
                      alt="Pathum Sanjaya"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating Stat or Label */}
                <div className="absolute -bottom-4 -right-4 glass-morphism p-4 md:p-6 rounded-[1.5rem] border border-brand-green/20 hidden md:block group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="text-2xl md:text-3xl font-black text-foreground mb-1">04+</p>
                  <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-brand-green">Years of Excellence</p>
                </div>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3 md:space-y-4 relative z-10"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-tighter uppercase">I Am Pathum Sanjaya</h2>

              <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-medium">
                A multidisciplinary creative director based in Sri Lanka, dedicated to redefining brands through bold aesthetics and strategic thinking.
              </p>
              <p className="text-foreground/40 text-sm md:text-base leading-relaxed">
                Over the past 4 years, I've collaborated with visionaries and businesses to craft visual identities that don't just look good—they perform. My work is a blend of artistic intuition and pixel-perfect precision.
              </p>
              <div className="space-y-2 md:space-y-3 pt-2">
                <div className="flex items-center gap-3 text-foreground hover:text-brand-green transition-colors font-bold uppercase tracking-widest text-xs cursor-default">
                  <Award size={14} className="text-brand-green" /> Excellence in Visual Systems
                </div>
                <div className="flex items-center gap-3 text-foreground hover:text-brand-green transition-colors font-bold uppercase tracking-widest text-xs cursor-default">
                  <Briefcase size={14} className="text-brand-green" /> Full-Service Design Solutions
                </div>
              </div>
              <div className="pt-4 md:pt-6">
                <Link
                  to="/design"
                  className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-full font-black text-xs md:text-sm hover:bg-brand-green hover:text-black transition-all w-full sm:w-auto justify-center"
                >
                  EXPLORE MY WORK
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION (BENTO STYLE) */}
      <section className="py-10 md:py-16 bg-background/50 dark:bg-[#050505]">
        <div className="container-custom px-4 md:px-0">
          <div className="flex flex-col items-center text-center mb-10 md:mb-12">
            <span className="text-brand-green text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-3">My Arsenal</span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-black text-foreground tracking-tighter uppercase">SKILLS & EXPERTISE</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl glass-morphism border-foreground/5 text-center flex flex-col items-center justify-center gap-2 hover:bg-foreground/[0.05] hover:border-foreground/20 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Sparkles size={14} />
                </div>
                <span className="text-foreground font-bold text-[10px] uppercase tracking-widest">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: VISUAL STORYTELLING (SECOND IMAGE) SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden border border-foreground/10 group">
                <img
                  src="/pathum-lifestyle.jpg"
                  alt="Pathum Sanjaya"
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

                {/* Overlay Quote */}
                <div className="absolute bottom-12 left-12 max-w-sm">
                  <p className="text-foreground font-black italic text-xl md:text-2xl leading-tight uppercase tracking-tighter">
                    "Every pixel tells a story, every color carries an emotion."
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-green/20 rounded-tr-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-green/20 rounded-bl-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.4em]">Visual Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-[0.85]">
                BEYOND THE <br /> <span className="text-brand-gradient">CANVAS</span>
              </h2>
              <p className="text-foreground/40 text-sm md:text-base leading-relaxed font-medium">
                My approach to design is a dialogue between functionality and raw artistic expression. I don't just create graphics; I build visual ecosystems that elevate the brand's presence in a crowded digital world.
              </p>
              <div className="pt-4">
                <div className="inline-flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-foreground/20 uppercase tracking-[0.3em]">Design Credo:</span>
                  <div className="h-[2px] w-12 bg-brand-green" />
                  <p className="text-foreground font-black text-sm uppercase tracking-widest">LEGENDARY. BOLD. AUTHENTIC.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-10 md:py-16">
        <div className="container-custom px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 pr-4">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.3em] mb-4 block">How I Work</span>
              <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight leading-none mb-6">THE <br /> CREATIVE <br /> FLOW</h2>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[2rem] glass-morphism border-foreground/5 relative overflow-hidden group"
                >
                  <span className="text-brand-green font-black text-3xl opacity-10 absolute top-6 right-6 group-hover:opacity-30 transition-opacity">0{idx + 1}</span>
                  <div className="relative z-10">
                    <h3 className="text-lg font-black text-foreground mb-3 uppercase tracking-widest">{step.title}</h3>
                    <p className="text-foreground/40 leading-relaxed font-medium text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-green opacity-[0.02] -z-10" />
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter">LEAVE A <span className="text-brand-gradient">MARK</span></h2>
            <p className="text-foreground/40 text-sm md:text-base max-w-2xl mx-auto font-medium">Ready to start a project that stands the test of time? Let's talk.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button
                onClick={handleEmailClick}
                disabled={isLoading}
                className="px-8 py-3 md:px-10 md:py-4 bg-brand-green text-black rounded-full font-black text-xs md:text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(57,229,53,0.3)] disabled:opacity-50"
              >
                {isLoading ? "SENDING..." : "CONTACT@PATHUMSANJAYA.COM"}
              </button>
              <Link to="/contact" className="text-foreground hover:text-brand-green font-black text-sm md:text-base flex items-center gap-3 transition-colors group">
                GET IN TOUCH <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
