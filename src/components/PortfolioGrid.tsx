import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '../types/portfolio';
import ImageModal from './ImageModal';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Preload all images immediately
  useEffect(() => {
    // Reset states when items change
    setLoadedImages({});
    setImageErrors({});

    // Preload all images at once
    items.forEach(item => {
      const img = new Image();
      img.src = item.imageUrl;

      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [item.id]: true }));
      };

      img.onerror = () => {
        setImageErrors(prev => ({ ...prev, [item.id]: true }));
      };
    });
  }, [items]);

  // Memoize the grid items
  const gridItems = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className={`group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/5 cursor-pointer shadow-2xl transition-all duration-500 hover:border-brand-green/30 hover:shadow-[0_0_40px_rgba(57,229,53,0.1)] ${index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-[3/4] md:mt-12' : 'aspect-[4/5]'
            }`}
          onClick={() => setSelectedItem(item)}
        >
          {/* Loading Placeholder */}
          {!loadedImages[item.id] && !imageErrors[item.id] && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-8 h-8 border-2 border-brand-green/20 border-t-brand-green rounded-full animate-spin" />
            </div>
          )}

          {/* Image */}
          <img
            src={item.imageUrl}
            alt={item.title}
            className={`h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 ${!loadedImages[item.id] ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            onError={() => setImageErrors(prev => ({ ...prev, [item.id]: true }))}
            onLoad={() => setLoadedImages(prev => ({ ...prev, [item.id]: true }))}
            loading="lazy"
            decoding="async"
          />

          {/* Overlay - Modern Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-6 md:p-8 backdrop-blur-[3px]">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-green bg-brand-green/20 px-3 py-1 rounded-full border border-brand-green/30">
                  {item.year || '2024'}
                </span>
                <span className="w-8 h-[1px] bg-white/20" />
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tighter uppercase leading-none">{item.title}</h3>

              {item.tags && (
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-white/60">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Hover Glow Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
  ), [items, loadedImages, imageErrors, setSelectedItem]);

  return (
    <>
      {gridItems}
      <ImageModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
};

export default PortfolioGrid; 