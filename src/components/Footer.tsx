import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Send, Mail, Heart, ArrowUpRight, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com/PATHUMSANJAYA979/', icon: <Facebook size={16} /> },
        {
            name: 'TikTok',
            url: 'https://www.tiktok.com/@pm_edit_973?is_from_webapp=1&sender_device=pc',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
            )
        },
        { name: 'Telegram', url: 'https://t.me/+94725510768', icon: <Send size={16} /> },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/94725510768',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
            )
        },
    ];

    const footerLinks = [
        {
            title: 'EXPLORE',
            links: [
                { name: 'Home', path: '/' },
                { name: 'Design', path: '/design' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
            ]
        },
        {
            title: 'SERVICES',
            links: [
                { name: 'Logo Design', path: '/design#logo-designs' },
                { name: 'Social Media', path: '/design#facebook-posts' },
                { name: 'Banners', path: '/design#banners' },
                { name: 'Design', path: '/design#content' },
            ]
        }
    ];

    return (
        <footer className="relative pt-1.5 md:pt-8 pb-1 md:pb-6 overflow-hidden bg-background border-t border-foreground/5">
            {/* Background elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[150px] md:h-[300px] bg-brand-green/5 blur-[100px] md:blur-[150px] -z-10 rounded-full" />

            <div className="px-4 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-x-2 gap-y-2 md:gap-8 mb-2 md:mb-8">
                    {/* Brand Section */}
                    <div className="col-span-2 md:col-span-4 space-y-1.5 md:space-y-6">
                        <Link to="/" className="inline-block group">
                            <span className="text-sm md:text-xl font-black text-foreground transition-colors">
                                PM EDIT<span className="text-brand-green">.</span>
                            </span>
                        </Link>
                        <p className="hidden md:block text-foreground/40 text-[10px] md:text-xs leading-relaxed max-w-xs font-medium uppercase tracking-[0.2em]">
                            Crafting Visual Legends<span className="text-brand-green">.</span>
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-4 h-4 md:w-8 md:h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:border-brand-green hover:text-brand-green transition-all"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    aria-label={social.name}
                                >
                                    {React.cloneElement(social.icon as React.ReactElement, { size: 10 })}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Links */}
                    {footerLinks.map((column, idx) => (
                        <div key={idx} className="col-span-1 md:col-span-2 space-y-1 md:space-y-6">
                            <h3 className="hidden md:block text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/30">{column.title}</h3>
                            <ul className="space-y-1.5 md:space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-foreground/60 hover:text-brand-green text-[7.5px] md:text-[11px] font-bold transition-colors flex items-center group gap-1"
                                        >
                                            {link.name}
                                            <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Section */}
                    <div className="col-span-2 md:col-span-4 space-y-1 md:space-y-6">
                        <h3 className="hidden md:block text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/30">GET IN TOUCH</h3>
                        <div className="flex flex-row flex-wrap gap-3 md:gap-12">
                            <a href="mailto:graphicdesigninglk@gmail.com" className="block group">
                                <p className="hidden md:block text-foreground/30 text-[9px] font-bold uppercase mb-1">Email</p>
                                <p className="text-foreground text-[7.5px] md:text-xs font-bold group-hover:text-brand-green transition-colors">graphicdesigninglk@gmail.com</p>
                            </a>
                            <div className="block">
                                <p className="hidden md:block text-foreground/30 text-[9px] font-bold uppercase mb-1">Based In</p>
                                <p className="text-foreground text-[7.5px] md:text-xs font-bold flex items-center gap-1">
                                    Sri Lanka <Globe size={12} className="text-brand-green" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
