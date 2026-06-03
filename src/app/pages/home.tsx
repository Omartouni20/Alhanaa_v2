import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "motion/react";
import {
  ArrowRight,
  Users,
  Calendar,
  Package,
  Target,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { AnimatedCounter } from "@/app/components/animated-counter";
import { VideoHero } from "@/app/components/video-hero";
import { ScrollReveal } from "@/app/components/scroll-reveal";

import farmImage1 from "@/assets/cultivated-field-sunset.webp";
import fruitsImage from "@/assets/fruits bg.webp";

import logoWhite from "@/assets/ALHANAA_Logo_White.webp";

import grapesAbout from "@/assets/grapes about.webp";
import tractorAbout from "@/assets/tractor about.webp";
import solarAbout from "@/assets/solar about.webp";

import pineappleProduct from "@/assets/pineapple products.webp";
import fremontProduct from "@/assets/fremont products.webp";
import grapefruitProduct from "@/assets/grapefruit products.webp";
import earlyProduct from "@/assets/early products.webp";
import flameProduct from "@/assets/flame products.webp";
import thomsonProduct from "@/assets/thomson products.webp";
import medjoolProduct from "@/assets/medjool products.webp";
import barhiProduct from "@/assets/barhi product.webp";
import pricklyPearProduct from "@/assets/Prickly pear product cut.webp";
import oliveProduct from "@/assets/olive product.webp";

export function HomePage() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: isMobile ? 400 : 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isMobile,
    autoplaySpeed: 5000,
    fade: false,
    cssEase: "ease",
    pauseOnHover: false,
    arrows: false,
  };

  const productsSliderSettings = {
    dots: true,
    infinite: true,
    speed: isMobile ? 350 : 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !isMobile,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
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
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        },
      },
    ],
  };

  const products = [
    { name: "Pineapple Orange", color: "#ff8c42", image: pineappleProduct },
    { name: "Fremont Mandarin", color: "#ffa500", image: fremontProduct },
    { name: "Grapefruit", color: "#ff6b6b", image: grapefruitProduct },
    { name: "Early Sweet Grapes", color: "#95d5b2", image: earlyProduct },
    { name: "Flame Grapes", color: "#9d4edd", image: flameProduct },
    { name: "Thomson Grapes", color: "#74c69d", image: thomsonProduct },
    { name: "Medjool Dates", color: "#8b4513", image: medjoolProduct },
    { name: "Barhi Dates", color: "#d4a574", image: barhiProduct },
    { name: "Prickly Pear", color: "#e63946", image: pricklyPearProduct },
    { name: "Olive", color: "#52796f", image: oliveProduct },
  ];

  const aboutImages = [
    { title: "Premium Crops", image: grapesAbout },
    { title: "Modern Farming", image: tractorAbout },
    { title: "Sustainable Energy", image: solarAbout },
  ];

  const stats = [
    { icon: Users, label: "Working Employees", value: 150 },
    { icon: Calendar, label: "Years of Experience", value: 15 },
    { icon: Package, label: "Tons of Exported Fresh Products", value: 250000 },
    { icon: Target, label: "Clients", value: 50 },
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Hero Slider */}
      <section className="relative w-full max-w-full overflow-hidden">
        <Slider {...heroSliderSettings}>
          <div>
            <VideoHero
              title="AL HANAA"
              subtitle="For Agricultural Development"
              slogan='"Rooted in Egypt, Growing for the World"'
              posterImage={farmImage1}
            />
          </div>

          <div>
            <VideoHero
              title="AL HANAA"
              subtitle="For Agricultural Development"
              slogan="Premium Egyptian Agricultural Products"
              posterImage={fruitsImage}
            />
          </div>
        </Slider>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {!isMobile && (
          <>
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-xl"
            />

            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-xl"
            />
          </>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10 md:mb-14">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5">
                  <Sparkles className="h-9 w-9 text-primary" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  About AL HANAA
                </h2>

                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Modern agriculture rooted in Egypt and growing for international
                  markets.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
              <ScrollReveal delay={0.1}>
                <motion.div
                  whileHover={isMobile ? undefined : { y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative rounded-[2rem] bg-card border border-border shadow-xl p-7 md:p-9 overflow-hidden"
                >
                  {!isMobile && (
                    <>
                      <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-primary/10 blur-xl" />
                      <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-secondary/10 blur-xl" />
                    </>
                  )}

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                      <Sparkles className="h-4 w-4" />
                      From Soil to Shelf
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                      Premium farming with sustainable standards
                    </h3>

                    <p className="text-muted-foreground leading-8 text-lg mb-8">
                      Al Hanaa for Agricultural Development rooted in Egypt and growing
                      for the world, Al Hanaa is a modern agricultural company focused
                      on sustainable farming, premium quality, and international reach.
                      Since 2010, we've specialized in cultivating fresh fruits and
                      processed products all managed through a fully integrated supply
                      chain. Backed by the legacy of the El Morshedy Group, we combine
                      innovation, expertise, and environmental responsibility to deliver
                      excellence from soil to shelf.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-8">
                      <div className="rounded-2xl bg-muted/50 border border-border p-4 text-center">
                        <p className="text-2xl font-bold text-primary">2010</p>
                        <p className="text-xs text-muted-foreground font-medium mt-1">
                          Since
                        </p>
                      </div>

                      <div className="rounded-2xl bg-muted/50 border border-border p-4 text-center">
                        <p className="text-2xl font-bold text-primary">Global</p>
                        <p className="text-xs text-muted-foreground font-medium mt-1">
                          Reach
                        </p>
                      </div>

                      <div className="rounded-2xl bg-muted/50 border border-border p-4 text-center">
                        <p className="text-2xl font-bold text-primary">Fresh</p>
                        <p className="text-xs text-muted-foreground font-medium mt-1">
                          Quality
                        </p>
                      </div>
                    </div>

                    <Link to="/about">
                      <motion.button
                        whileHover={
                          isMobile
                            ? undefined
                            : {
                                scale: 1.04,
                                boxShadow: "0 12px 35px rgba(0,0,0,0.18)",
                              }
                        }
                        whileTap={{ scale: 0.96 }}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
                      >
                        Read More
                        <ArrowRight className="h-6 w-6" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="relative">
                  {!isMobile && (
                    <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl" />
                  )}

                  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div
                      whileHover={isMobile ? undefined : { scale: 1.015 }}
                      transition={{ duration: 0.25 }}
                      className="sm:col-span-2 relative h-[320px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20"
                    >
                      <img
                        src={aboutImages[0].image}
                        alt={aboutImages[0].title}
                        width={900}
                        height={500}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                      <div className="absolute left-6 bottom-6 right-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-3">
                          <Sparkles className="h-4 w-4 text-secondary" />
                          AL HANAA Farms
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {aboutImages[0].title}
                        </h3>
                      </div>
                    </motion.div>

                    {aboutImages.slice(1, 3).map((item) => (
                      <motion.div
                        key={item.title}
                        whileHover={isMobile ? undefined : { scale: 1.025, y: -4 }}
                        transition={{ duration: 0.25 }}
                        className="relative h-44 rounded-[1.5rem] overflow-hidden shadow-xl border border-white/20"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          width={450}
                          height={260}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                        <div className="absolute left-4 bottom-4 right-4">
                          <p className="text-white font-bold text-lg">
                            {item.title}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />

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
                duration={isMobile ? 1.2 : 2.5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Slider */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        {!isMobile && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"
          />
        )}

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <Sparkles className="h-10 w-10 text-secondary mx-auto" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Products
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-6xl mx-auto w-full overflow-visible">
              <Slider {...productsSliderSettings}>
                {products.map((product, index) => (
                  <div key={index} className="px-3 pb-6">
                    <motion.div
                      initial={isMobile ? false : { opacity: 0, scale: 0.9 }}
                      whileInView={isMobile ? undefined : { opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: isMobile ? 0 : index * 0.05 }}
                      whileHover={isMobile ? undefined : { scale: 1.04, y: -8 }}
                      className="relative rounded-3xl p-6 h-72 flex flex-col items-center justify-between overflow-hidden shadow-xl cursor-pointer border border-white/20"
                      style={{
                        background: `linear-gradient(135deg, ${product.color}dd, ${product.color})`,
                      }}
                    >
                      {!isMobile && (
                        <motion.div
                          animate={{
                            scale: [1, 1.25, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-white/10 rounded-full blur-xl"
                        />
                      )}

                      <div className="relative z-10 h-40 w-full flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={220}
                          loading="lazy"
                          decoding="async"
                          className="max-h-36 max-w-[90%] object-contain drop-shadow-2xl"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-center text-white relative z-10">
                        {product.name}
                      </h3>

                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Block */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-[#1e5a3a] to-secondary text-white relative overflow-hidden">
        {!isMobile && (
          <>
            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -40, 0],
              }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-xl"
            />

            <motion.div
              animate={{
                x: [0, -60, 0],
                y: [0, 60, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-xl"
            />
          </>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <img
                  src={logoWhite}
                  alt="AL HANAA Logo"
                  width={180}
                  height={100}
                  loading="lazy"
                  decoding="async"
                  className="h-24 mx-auto mb-5 object-contain"
                />

                <h2 className="text-4xl md:text-5xl font-bold">
                  ALHANAA Farms
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.1}>
                <motion.a
                  href="tel:+201093395073"
                  whileHover={isMobile ? undefined : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
                >
                  <div className="bg-secondary p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Phone</h3>
                    <p className="text-white/90">+201093395073</p>
                  </div>
                </motion.a>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <motion.a
                  href="https://wa.me/201093395073"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={isMobile ? undefined : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
                >
                  <div className="bg-secondary p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1 text-lg">WhatsApp</h3>
                    <p className="text-white/90">WhatsApp Chat</p>
                  </div>
                </motion.a>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <motion.a
                  href="mailto:Info@alhanaaagri.com"
                  whileHover={isMobile ? undefined : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
                >
                  <div className="bg-secondary p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Email</h3>
                    <p className="text-white/90">Info@alhanaaagri.com</p>
                  </div>
                </motion.a>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <motion.div
                  whileHover={isMobile ? undefined : { scale: 1.03 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
                >
                  <div className="bg-secondary p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>

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

