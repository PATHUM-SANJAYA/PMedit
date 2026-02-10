import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PortfolioItem } from '../types/portfolio';

interface ImageModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 md:p-6 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl bg-[#0a0a0a]/90 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[95vh] border border-white/10 backdrop-blur-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button - PREMIUM */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/40 hover:bg-brand-green/20 text-white/50 hover:text-brand-green transition-all border border-white/10 backdrop-blur-xl group"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
          </button>

          {/* Left: Image Viewer (Immersive) */}
          <div className="md:w-3/5 relative bg-black/40 flex items-center justify-center p-4 md:p-8 min-h-[300px] md:min-h-0 border-b md:border-b-0 md:border-r border-white/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center pointer-events-none sm:pointer-events-auto"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-contain max-h-[40vh] md:max-h-[75vh] rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right: Design Details & Logic */}
          <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center overflow-y-auto custom-scrollbar">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Project Title */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20">
                    Project Case
                  </span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-4">
                  {item.title}
                </h3>
                <div className="flex gap-6 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  <div>Client: <span className="text-white/60 ml-1">{item.client || "Confidential"}</span></div>
                  <div>Year: <span className="text-white/60 ml-1">{item.year || "2024"}</span></div>
                </div>
              </div>

              {/* Design Logic Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-white uppercase tracking-tighter">Design by Pathum</span>
                  <div className="h-[1px] flex-grow bg-brand-green/20" />
                </div>
                <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium">
                  {item.logic || "A strategic visual approach focusing on performance and aesthetic clarity."}
                </p>
              </div>

              {/* Tags/Categories */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 pt-4">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 text-white/40 text-[9px] font-black uppercase
                               rounded-full border border-white/10 hover:border-brand-green/30 hover:text-brand-green transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Micro-CTA */}
              <div className="pt-8">
                <button
                  onClick={onClose}
                  className="w-full py-4 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-green hover:shadow-[0_10px_30px_rgba(57,229,53,0.3)] transition-all duration-300"
                >
                  Close Case
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal; 