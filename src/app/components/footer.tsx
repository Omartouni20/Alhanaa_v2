import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">About ALHANAA</h3>
            <p className="text-muted-foreground">
              Al Hanaa is a trusted grower and exporter of premium fruits, producing with
              sustainability and traceability at the core, delivering with integrity and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Certificates', path: '/certificates' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <motion.div key={link.path} whileHover={{ x: 5 }}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Info</h3>
            <div className="flex flex-col gap-3">
              <motion.a
                href="tel:+201093395073"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>+201093395073</span>
              </motion.a>

              <motion.a
                href="https://wa.me/201093395073"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>WhatsApp Chat</span>
              </motion.a>

              <motion.a
                href="mailto:Info@alhanaaagri.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>Info@alhanaaagri.com</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span>Minya, Egypt</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>© Copyright-2025 ALHANAA. All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  );
}
