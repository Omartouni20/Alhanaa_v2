import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import { ArrowRight, Users, Calendar, Package, Target, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { AnimatedCounter } from '@/app/components/animated-counter';
import { VideoHero } from '@/app/components/video-hero';
import { ScrollReveal } from '@/app/components/scroll-reveal';

const farmImage1 = "https://images.unsplash.com/photo-1694093817187-0c913bc4ad87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBmaWVsZHxlbnwxfHx8fDE3Njg0MTQzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const fruitsImage = "https://images.unsplash.com/photo-1760113724916-a87ffecd8e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMGhhcnZlc3R8ZW58MXx8fHwxNzY4NTEwODE2fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function HomePage() {
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
    pauseOnHover: false,
  };

  const productsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    { name: 'Pineapple Orange', color: '#ff8c42' },
    { name: 'Fremont Mandarin', color: '#ffa500' },
    { name: 'Grapefruit', color: '#ff6b6b' },
    { name: 'Early Sweet Grapes', color: '#95d5b2' },
    { name: 'Flame Grapes', color: '#9d4edd' },
    { name: 'Thomson Grapes', color: '#74c69d' },
    { name: 'Medjool Dates', color: '#8b4513' },
    { name: 'Barhi Dates', color: '#d4a574' },
    { name: 'Prickly Pear', color: '#e63946' },
    { name: 'Olive', color: '#52796f' },
  ];

  const stats = [
    { icon: Users, label: 'Working Employees', value: 150 },
    { icon: Calendar, label: 'Years of Experience', value: 15 },
    { icon: Package, label: 'Tons of Exported Fresh Products', value: 250000 },
    { icon: Target, label: 'Clients', value: 50 },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative">
        <Slider {...heroSliderSettings}>
          {/* Slide 1 */}
          <div>
            <VideoHero
              title="AL HANAA"
              subtitle="For Agricultural Development"
              slogan='"Rooted in Egypt, Growing for the World"'
              posterImage={farmImage1}
            />
          </div>

          {/* Slide 2 */}
          <div>
            <VideoHero
              title="AL HANAA"
              subtitle="For Agricultural Development"
              posterImage={fruitsImage}
            />
          </div>
        </Slider>
      </section>

      {/* About Preview with Enhanced Animations */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center mb-8"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <Sparkles className="h-12 w-12 text-primary mx-auto" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  About AL HANAA
                </h2>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed mb-8 text-center"
                whileHover={{ scale: 1.01 }}
              >
                Al Hanaa for Agricultural Development rooted in Egypt and growing for the world, Al Hanaa is a modern agricultural 
                company focused on sustainable farming, premium quality, and international reach. Since 2010, we've specialized in 
                cultivating fresh fruits and processed products all managed through a fully integrated supply chain. Backed by the 
                legacy of the El Morshedy Group, we combine innovation, expertise, and environmental responsibility to deliver 
                excellence from soil to shelf. Whether you're a local partner or a global client, Al Hanaa is your trusted source 
                for world-class agricultural products.
              </motion.p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
                  >
                    Read More 
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Counters with Enhanced Animations */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"
          style={{ backgroundSize: '200% 200%' }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Achievements
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                icon={stat.icon}
                end={stat.value}
                label={stat.label}
                duration={2.5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Slider with Enhanced Effects */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <Sparkles className="h-10 w-10 text-secondary mx-auto" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Products
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="max-w-6xl mx-auto">
              <Slider {...productsSliderSettings}>
                {products.map((product, index) => (
                  <div key={index} className="px-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.08, y: -10, rotateY: 5 }}
                      className="relative rounded-2xl p-8 h-48 flex items-center justify-center overflow-hidden shadow-xl cursor-pointer"
                      style={{ 
                        background: `linear-gradient(135deg, ${product.color}dd, ${product.color})`
                      }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.5, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 bg-white/10 rounded-full blur-2xl"
                      />
                      <h3 className="text-xl font-bold text-center text-white relative z-10">
                        {product.name}
                      </h3>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Block with Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-primary via-[#1e5a3a] to-secondary text-white relative overflow-hidden">
        {/* Animated Background Patterns */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 80, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">ALHANAA Farms</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.1}>
                <motion.a
                  href="tel:+201093395073"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-secondary p-3 rounded-full"
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Phone</h3>
                    <p className="text-white/90">+201093395073</p>
                  </div>
                </motion.a>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <motion.a
                  href="https://wa.me/201093395073"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="bg-secondary p-3 rounded-full"
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">WhatsApp</h3>
                    <p className="text-white/90">WhatsApp Chat</p>
                  </div>
                </motion.a>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <motion.a
                  href="mailto:Info@alhanaaagri.com"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-secondary p-3 rounded-full"
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Email</h3>
                    <p className="text-white/90">Info@alhanaaagri.com</p>
                  </div>
                </motion.a>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="bg-secondary p-3 rounded-full"
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Location</h3>
                    <p className="text-white/90">Minya, Egypt</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
