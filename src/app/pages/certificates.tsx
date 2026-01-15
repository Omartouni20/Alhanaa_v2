import { motion } from 'motion/react';
import { CertificateCard } from '@/app/components/certificate-card';
import { ScrollReveal } from '@/app/components/scroll-reveal';
import '@/styles/flip-card.css';

export function CertificatesPage() {
  const certificates = [
    {
      title: 'GlobalG.A.P.',
      description: 'Promotes safe and sustainable agricultural production, focusing on food safety, environmental care, and worker health.',
    },
    {
      title: 'ISO 45001',
      description: 'A global standard for workplace health and safety, helping reduce risks and enhance employee well-being.',
    },
    {
      title: 'ISO 50001',
      description: 'Energy management standard helping reduce energy consumption and environmental impact.',
    },
    {
      title: 'ISO 9001',
      description: 'The most widely recognized quality standard for improving consistency, efficiency, and customer satisfaction.',
    },
    {
      title: 'ISO 14001',
      description: 'Environmental management system designed to help organizations reduce their environmental footprint and operate sustainably.',
    },
    {
      title: 'BRCGS',
      description: 'Ensures food products meet the highest standards in hygiene, traceability, safety, and quality assurance.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-[#275e33] py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Certificates
          </motion.h1>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
              Click on any certificate to learn more about it
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                title={cert.title}
                description={cert.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
