import { motion } from "motion/react";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import {
  Award,
  ShieldCheck,
  Leaf,
  Zap,
  CheckCircle,
  Sparkles,
} from "lucide-react";

import certGlobalGap from "@/assets/2.webp";
import certIso45001 from "@/assets/3.webp";
import certIso50001 from "@/assets/4.webp";
import certIso9001 from "@/assets/5.webp";
import certIso14001 from "@/assets/6.webp";
import certBrcgs from "@/assets/7.webp";

export function CertificatesPage() {
  const certificates = [
    {
      title: "GlobalG.A.P.",
      subtitle: "Good Agricultural Practices",
      description:
        "Promotes safe and sustainable agricultural production, focusing on food safety, environmental care, and worker health.",
      image: certGlobalGap,
      icon: Leaf,
      color: "#3f8f46",
    },
    {
      title: "ISO 45001",
      subtitle: "Occupational Health & Safety",
      description:
        "A global standard for workplace health and safety, helping reduce risks and enhance employee well-being.",
      image: certIso45001,
      icon: ShieldCheck,
      color: "#2f7a4f",
    },
    {
      title: "ISO 50001",
      subtitle: "Energy Management",
      description:
        "Energy management standard helping reduce energy consumption and environmental impact.",
      image: certIso50001,
      icon: Zap,
      color: "#d4a017",
    },
    {
      title: "ISO 9001",
      subtitle: "Quality Management",
      description:
        "The most widely recognized quality standard for improving consistency, efficiency, and customer satisfaction.",
      image: certIso9001,
      icon: CheckCircle,
      color: "#275e33",
    },
    {
      title: "ISO 14001",
      subtitle: "Environmental Management",
      description:
        "Environmental management system designed to help organizations reduce their environmental footprint and operate sustainably.",
      image: certIso14001,
      icon: Leaf,
      color: "#4f9d5d",
    },
    {
      title: "BRCGS",
      subtitle: "Food Safety & Quality",
      description:
        "Ensures food products meet the highest standards in hygiene, traceability, safety, and quality assurance.",
      image: certBrcgs,
      icon: Award,
      color: "#b98a1d",
    },
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-background">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-[#275e33] py-24">
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-28 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-secondary" />
              Certified Quality Standards
            </div>

            <h1 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Certificates
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              International certifications that reflect our commitment to quality,
              safety, sustainability, and responsible agricultural operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-14">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Award className="h-7 w-7" />
              </div>

              <h2 className="mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Trusted by Global Standards
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Our certified systems support safer production, stronger quality
                control, environmental responsibility, and export-ready operations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => {
              const Icon = certificate.icon;

              return (
                <motion.article
                  key={certificate.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative min-h-[310px] overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-sm transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, ${certificate.color}, transparent)`,
                    }}
                  />

                  <div
                    className="absolute -right-24 -top-24 h-60 w-60 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-20"
                    style={{ backgroundColor: certificate.color }}
                  />

                  {/* Top Row */}
                  <div className="relative z-10 mb-7 flex items-start justify-between gap-5">
                    <div
                      className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                      style={{
                        backgroundColor: certificate.color,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Certificate image as clean icon */}
                    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-3xl opacity-15 blur-xl"
                        style={{ backgroundColor: certificate.color }}
                      />

                      <div
                        className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-border/60 bg-muted/40 p-3 transition-transform duration-300 group-hover:scale-105"
                        style={{
                          boxShadow: `0 16px 35px ${certificate.color}18`,
                        }}
                      >
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="max-h-14 max-w-14 object-contain mix-blend-multiply"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {certificate.subtitle}
                    </p>

                    <h3 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                      {certificate.title}
                    </h3>

                    <p className="text-sm leading-7 text-muted-foreground md:text-base">
                      {certificate.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="absolute bottom-6 left-7 right-7 h-px bg-gradient-to-r from-border via-border to-transparent" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}