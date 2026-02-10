import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2.5 rounded-full glass-morphism border-white/5 hover:border-brand-green/30 transition-all duration-300 group overflow-hidden"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                        <motion.div
                            key="sun"
                            initial={{ y: 20, opacity: 0, rotate: 45 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: -45 }}
                            transition={{ duration: 0.3, ease: "backOut" }}
                        >
                            <Sun size={20} className="text-brand-green group-hover:drop-shadow-[0_0_8px_rgba(57,229,53,0.5)]" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ y: 20, opacity: 0, rotate: 45 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: -45 }}
                            transition={{ duration: 0.3, ease: "backOut" }}
                        >
                            <Moon size={20} className="text-zinc-600 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Hover Background Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.button>
    );
};
