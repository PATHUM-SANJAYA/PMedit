import React from 'react';
import { Facebook } from 'lucide-react';

interface SocialSidebarProps {
    theme?: 'light' | 'dark';
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({ theme = 'dark' }) => {
    const iconColor = theme === 'light' ? 'text-gray-800' : 'text-white';
    const hoverColor = theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-white/10';

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
            <a
                href="https://www.facebook.com/PATHUMSANJAYA979/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center ${hoverColor} transition-all hover:scale-110`}
                aria-label="Facebook"
            >
                <Facebook size={20} className="text-white" />
            </a>

            <a
                href="https://www.tiktok.com/@pm_edit_973?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center ${hoverColor} transition-all hover:scale-110`}
                aria-label="TikTok"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
            </a>


            <a
                href="https://wa.me/94725510768"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center ${hoverColor} transition-all hover:scale-110`}
                aria-label="WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
            </a>
        </div>
    );
};

export default SocialSidebar;
