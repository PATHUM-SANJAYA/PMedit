
import React from 'react';
import { Facebook, Mail, Send, MessageSquare } from 'lucide-react';

interface SocialLinksProps {
  size?: 'small' | 'medium' | 'large';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ size = 'medium' }) => {
  // Size classes
  const sizeClasses = {
    small: 'w-10 h-10',
    medium: 'w-12 h-12',
    large: 'w-14 h-14'
  };

  const iconSize = {
    small: 18,
    medium: 20,
    large: 24
  };

  // Social links data
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/PATHUMSANJAYA979/',
      icon: <Facebook size={iconSize[size]} />
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@pm_edit_973?is_from_webapp=1&sender_device=pc',
      icon: (
        <svg
          width={iconSize[size]}
          height={iconSize[size]}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      )
    },
    {
      name: 'Telegram',
      url: 'https://t.me/+94725510768',
      icon: <Send size={iconSize[size]} />
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/94725510768`,
      icon: <MessageSquare size={iconSize[size]} />
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/u/0/?fs=1&to=graphicdesigninglk@gmail.com&su=Design+Inquiry&body=Hello+Pathum,%0A%0AI+am+reaching+out+regarding+&tf=cm',
      icon: <Mail size={iconSize[size]} />
    }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon ${sizeClasses[size]} hover:scale-110 transition-all duration-300 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-brand-green hover:bg-brand-green/10 text-white/70 hover:text-brand-green`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
