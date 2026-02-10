import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SocialLinks from './SocialLinks';

interface HeroProps {
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 py-10">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Text Content */}
          <div className="animate-fade-up order-2 md:order-1 flex flex-col items-start text-left pr-0 md:pr-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 -ml-1">
              creative
              <br />
              <span className="text-brand-green">designs.</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-[95%] md:max-w-md -ml-1">
              Crafting creative and impactful designs that bring your vision to life. Simple, clean, and effective.
            </p>
            <div className="flex flex-col items-start gap-4 -ml-1">
              <Link
                to="/design"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-brand-green transition-colors duration-300 hover:scale-105 transform text-xs md:text-sm font-medium"
              >
                View My Work <ArrowRight size={18} />
              </Link>

              <div className="flex justify-start w-full">
                <SocialLinks size="medium" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right order-1 md:order-2 relative md:pl-4">
            <img
              src={imageSrc}
              alt="Designer portrait"
              className="w-full max-w-[320px] md:max-w-[400px] mx-auto md:mx-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
