import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import PortfolioGrid from '../components/PortfolioGrid';
import { PortfolioItem, categories } from '../types/portfolio';
import { portfolioItems } from '../data/portfolio';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Design: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('logo-designs');
  const [items, setItems] = useState<PortfolioItem[]>([]);

  // Memoize filtered items
  const filteredItems = useMemo(() => {
    return portfolioItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Handle hash changes for category selection
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && categories.some(cat => cat.slug === hash)) {
        setSelectedCategory(hash);
        // Smooth scroll to items
        const element = document.getElementById('portfolio-grid');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update items immediately
  useEffect(() => {
    setItems(filteredItems);
  }, [filteredItems]);

  const currentCategory = categories.find(c => c.slug === selectedCategory);

  return (
    <Layout>
      <div className="relative pt-16 pb-8 overflow-hidden">
        {/* Background "CREATIVE" text */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[15vw] md:text-[20vw] font-black text-foreground/[0.02] pointer-events-none select-none z-0 tracking-tighter uppercase">
          Creative
        </div>

        {/* Dynamic mesh blobs */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[10%] -left-[5%] w-[35%] h-[35%] bg-brand-green/5 blur-[120px] rounded-full -z-10"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-[20%] -right-[5%] w-[30%] h-[30%] bg-brand-green/5 blur-[100px] rounded-full -z-10"
        />

        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-morphism border-foreground/5 mb-4"
            >
              <Sparkles size={12} className="text-brand-green" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/50">Showcasing Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-black text-foreground tracking-tighter mb-3"
            >
              CREATIVE <span className="text-brand-gradient">ARCHIVE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-foreground/40 text-xs md:text-sm max-w-lg mx-auto font-medium"
            >
              A deeper look into my design methodology and the results I've delivered for clients globally.
            </motion.p>
          </div>

          {/* Category Navigation - PREMIUM */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 relative z-10">
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedCategory(category.slug)}
                className={`relative px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group ${selectedCategory === category.slug
                  ? 'text-background'
                  : 'text-foreground/40 hover:text-foreground'
                  }`}
              >
                {/* Active Background */}
                <AnimatePresence>
                  {selectedCategory === category.slug && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-foreground shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_rgba(255,255,255,0.2)] z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>

                {/* Hover Background - Subtle */}
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-[-1]" />

                <span className="relative z-10">{category.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Category Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto text-center mb-16 relative z-10"
            >
              <h2 className="text-foreground text-xl md:text-2xl font-black mb-4 flex items-center justify-center gap-4 uppercase tracking-tighter">
                <span className="w-6 md:w-12 h-[2px] bg-brand-green/30" />
                {currentCategory?.title}
                <span className="w-6 md:w-12 h-[2px] bg-brand-green/30" />
              </h2>
              <p className="text-foreground/40 text-xs md:text-base leading-relaxed font-medium">
                {currentCategory?.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Portfolio Grid */}
          <div id="portfolio-grid" className="min-h-[400px]">
            <PortfolioGrid items={items} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Design;
