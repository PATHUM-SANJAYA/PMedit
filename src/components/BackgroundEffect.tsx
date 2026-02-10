import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020202]">
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] noise-overlay" />

            {/* Ambient Glows */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="mesh-gradient-blob w-[600px] h-[600px] bg-brand-green/20 top-[-10%] left-[-10%]"
            />

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 120, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="mesh-gradient-blob w-[500px] h-[500px] bg-emerald-500/10 bottom-[10%] right-[-5%]"
            />

            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="mesh-gradient-blob w-[400px] h-[400px] bg-blue-500/10 top-[40%] right-[20%]"
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
    );
};

export default BackgroundEffect;
