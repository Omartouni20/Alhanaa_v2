import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Leaf, TrendingUp, Users as UsersIcon, MapPin, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/app/components/scroll-reveal';

const modernFarmImage = "https://images.unsplash.com/photo-1575704497240-17622d90265f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg0NjM2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function AboutPage() {
  const values = [
    { 
      icon: Heart,
      title: 'Integrity', 
      description: 'Honest practices and transparent operations.',
      color: '#e63946'
    },
    { 
      icon: Award,
      title: 'Quality', 
      description: 'Premium standards in all we deliver.',
      color: '#f5b935'
    },
    { 
      icon: Leaf,
      title: 'Sustainability', 
      description: 'Eco-friendly farming and responsible growth.',
      color: '#2d6a4f'
    },
    { 
      icon: TrendingUp,
      title: 'Innovation', 
      description: 'Modern techniques and continual improvement.',
      color: '#457b9d'
    },
    { 
      icon: UsersIcon,
      title: 'Commitment', 
      description: 'Strong partnerships and customer satisfaction.',
      color: '#9d4edd'
    },
  ];

  return (
    <div>
      {/* Header with Animated Background */}
      <section className="relative bg-gradient-to-br from-primary via-[#1e5a3a] to-secondary py-24 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${modernFarmImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Animated Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut'
            }}
            className="absolute w-2 h-2 bg-secondary rounded-full"
            style={{ 
              left: `${20 + i * 15}%`,
              bottom: 0
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sparkles className="h-16 w-16 text-secondary mx-auto" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              About Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story with Enhanced Animations */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center"
                whileHover={{ scale: 1.02 }}
              >
                Our Story
              </motion.h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed mb-6"
                whileHover={{ x: 5 }}
              >
                Founded in 2010, Al Hanaa for Agricultural Development is a pioneering force in Egypt's agricultural sector. 
                Strategically located at Kilometer 132 on the Asyut Western Desert Road, our operations benefit from fertile 
                lands and ideal growing conditions that enable year-round cultivation and sustainable growth.
              </motion.p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                whileHover={{ x: 5 }}
              >
                We are proud to be part of the El Morshedy Group, a trusted name with over four decades of experience across 
                multiple industries including commodity trading and flour milling.
              </motion.p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
                What We Do
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed text-center"
                whileHover={{ scale: 1.02 }}
              >
                We specialize in cultivating premium fruits and seasonal crops while expanding into value-added products like 
                pickled olives and raisin grapes. Our integrated model ensures full traceability and quality.
              </motion.p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission with 3D Effects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Vision */}
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
                }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-8 shadow-xl relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <Eye className="h-16 w-16 text-primary mb-6" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 text-primary relative z-10">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  To be a leading agricultural company recognized globally for delivering premium-quality products through 
                  sustainable practices, innovation, and a commitment to excellence in every harvest.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: -5,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
                }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-2xl p-8 shadow-xl relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <Target className="h-16 w-16 text-secondary mb-6" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 text-secondary relative z-10">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  To cultivate and export the finest fruits and agricultural products, ensuring quality, sustainability, 
                  and customer satisfaction through advanced farming techniques, responsible environmental stewardship, 
                  and a fully integrated supply chain.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values with Stagger Animation */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-30"
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(45,106,79,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Core Values
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.05, 
                        x: 10,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary shadow-lg relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -right-10 -top-10 w-32 h-32 rounded-full"
                        style={{ backgroundColor: value.color, filter: 'blur(40px)' }}
                      />

                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="h-8 w-8 flex-shrink-0 mt-1" style={{ color: value.color }} />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
                Why Choose Us
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed text-center"
                whileHover={{ scale: 1.02 }}
              >
                At Al Hanaa, we combine decades of expertise with cutting-edge agricultural practices to deliver products 
                that meet the highest international standards. Our commitment to sustainability, quality, and customer 
                satisfaction sets us apart in the industry. From farm to table, every step is carefully monitored to ensure 
                excellence and traceability.
              </motion.p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Global Outlook */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
                Our Global Outlook
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed text-center"
                whileHover={{ scale: 1.02 }}
              >
                While deeply rooted in Egypt, Al Hanaa serves markets worldwide. Our strategic location, combined with 
                modern logistics and partnerships, allows us to deliver fresh, high-quality products to clients across the 
                globe. We are committed to building long-term relationships based on trust, reliability, and shared success.
              </motion.p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Explore Location with Animated Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
              >
                <MapPin className="h-20 w-20 text-primary mx-auto" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Explore Our Location
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Located at Kilometer 132, Asyut Western Desert Road, Minya, Egypt
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl"
              >
                <MapPin className="h-6 w-6" />
                GPS
              </motion.a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
