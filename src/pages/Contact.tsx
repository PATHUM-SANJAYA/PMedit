import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, Sparkles, Loader2, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // WhatsApp Redirect Logic
    try {
      const formattedMessage = encodeURIComponent(
        `*New Website Inquiry*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Subject:* ${formData.subject}\n\n` +
        `*Message:* ${formData.message}`
      );

      const whatsappUrl = `https://wa.me/94725510768?text=${formattedMessage}`;

      // Simulate brief delay for UX feel
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      toast.success("Redirecting to WhatsApp...");

      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="relative pt-8 pb-4 overflow-hidden">
        {/* Background "CONTACT" text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-black text-foreground/[0.02] pointer-events-none select-none z-0">
          CONTACT
        </div>

        {/* Dynamic mesh blob */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-green/10 blur-[120px] rounded-full -z-10"
        />

        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-green/5 blur-[150px] -z-10 rounded-full" />

        <div className="container-custom px-4 md:px-0">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-4 md:mb-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-morphism border-foreground/5 mb-3"
              >
                <Mail size={12} className="text-brand-green" />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/50">Get in touch</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl md:text-3xl font-black text-foreground tracking-tighter mb-3"
              >
                LET'S BUILD <span className="text-brand-gradient">LEGENDS</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-foreground/40 text-xs md:text-sm max-w-lg mx-auto font-medium"
              >
                Ready to take your brand to the next level? I'm just a message away.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-8">
              {/* Contact Info Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 space-y-2 md:space-y-3"
              >
                <div className="p-4 md:p-5 rounded-[1.25rem] glass-morphism border-brand-green/20 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-black text-foreground mb-4">CONTACT DETAILS</h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Email Me</p>
                          <a href="mailto:graphicdesigninglk@gmail.com" className="text-foreground font-bold hover:text-brand-green transition-colors text-sm md:text-base block truncate max-w-[200px] md:max-w-full">
                            graphicdesigninglk@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Call Me</p>
                          <a href="tel:+94725510768" className="text-foreground font-bold hover:text-brand-green transition-colors text-sm md:text-base">
                            +94 72 551 0768
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Location</p>
                          <p className="text-foreground font-bold text-sm md:text-base">
                            Mathugama, <br /> Sri Lanka
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                          <Clock size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Availability</p>
                          <p className="text-foreground font-bold text-sm md:text-base">
                            Saturday & Sunday <br /> <span className="text-brand-green text-[10px]">Only</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-foreground/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">Social Media</p>
                    <div className="flex gap-3">
                      <SocialLinks size="small" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-3 h-full flex flex-col"
              >
                <div className="p-4 md:p-5 rounded-[1.25rem] glass-morphism border-brand-green/20 relative overflow-hidden h-full flex flex-col">
                  <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3 relative z-10 h-full flex flex-col pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/60 ml-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-background/40 border border-foreground/10 rounded-xl px-3 py-1.5 md:py-2 text-foreground placeholder:text-foreground/20 focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all outline-none text-xs md:text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/60 ml-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-background/40 border border-foreground/10 rounded-xl px-3 py-1.5 md:py-2 text-foreground placeholder:text-foreground/20 focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all outline-none text-xs md:text-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/60 ml-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/40 border border-foreground/10 rounded-xl px-3 py-1.5 md:py-2 text-foreground placeholder:text-foreground/20 focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all outline-none text-xs md:text-sm"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/60 ml-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-background/40 border border-foreground/10 rounded-xl px-3 py-1.5 md:py-2 text-foreground placeholder:text-foreground/20 focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all outline-none resize-none text-xs md:text-sm"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-foreground text-background font-black py-2.5 md:py-3 rounded-xl hover:bg-brand-green hover:text-black transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-auto text-xs md:text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={16} /> SENDING...
                        </>
                      ) : (
                        <>
                          SEND MESSAGE <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
