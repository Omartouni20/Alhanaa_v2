import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { ScrollReveal } from '@/app/components/scroll-reveal';

const farmImage = "https://images.unsplash.com/photo-1694093817187-0c913bc4ad87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBmaWVsZHxlbnwxfHx8fDE3Njg0MTQzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header with Video Background */}
      <section className="relative bg-gradient-to-r from-primary to-[#275e33] py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${farmImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                  >
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                  >
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                  >
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                  >
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-[#275e33] transition-all flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>

            {/* Company Info */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Alhanaa Farms</h2>
                <div className="space-y-6">
                  <motion.a
                    href="tel:+201093395073"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all"
                  >
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground hover:text-primary transition-colors">
                        +201093395073
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/201093395073"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all"
                  >
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">WhatsApp</h3>
                      <p className="text-muted-foreground hover:text-primary transition-colors">
                        WhatsApp Chat
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:Info@alhanaaagri.com"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all"
                  >
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground hover:text-primary transition-colors">
                        Info@alhanaaagri.com
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all"
                  >
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        132 Km Western Assuit Desert Road - Minya
                      </p>
                    </div>
                  </motion.div>

                  {/* Map Preview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 bg-muted rounded-lg p-8 text-center"
                  >
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">View our location on the map</p>
                    <motion.a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-[#275e33] transition-all hover:shadow-lg"
                    >
                      <MapPin className="h-5 w-5" />
                      Open GPS
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
