import { useState } from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  description: string;
}

export function CertificateCard({ title, description }: CertificateCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-64 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative w-full h-full transform-style-3d"
      >
        {/* Front */}
        <motion.div
          className="absolute w-full h-full backface-hidden bg-card border-2 border-border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all hover:border-primary"
          whileHover={{ scale: 1.03 }}
        >
          <Award className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-xl font-bold text-center">{title}</h3>
          <p className="text-xs text-muted-foreground mt-4">Click to see details</p>
        </motion.div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-primary to-[#275e33] text-primary-foreground rounded-lg p-6 flex items-center justify-center rotate-y-180 shadow-2xl">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-3">{title}</h3>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
