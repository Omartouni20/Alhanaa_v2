import { motion } from 'motion/react';
import { Leaf, Calendar } from 'lucide-react';

interface ProductDetailCardProps {
  name: string;
  description: string;
  months: string[];
  category: string;
  color: string;
  index: number;
}

export function ProductDetailCard({ 
  name, 
  description, 
  months, 
  category, 
  color,
  index 
}: ProductDetailCardProps) {
  const allMonths = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        transition: { duration: 0.3 }
      }}
      className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-lg hover:border-primary transition-all"
    >
      {/* Header */}
      <div 
        className="p-6 text-white relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -left-5 -bottom-5 w-32 h-32 bg-white/10 rounded-full"
        />
        
        <div className="relative z-10">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <Leaf className="h-8 w-8" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-sm opacity-90">{category}</p>
        </div>
      </div>

      {/* Description */}
      <div className="p-6">
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Availability */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <h4 className="font-semibold">Availability</h4>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {allMonths.map((month, index) => {
              const isAvailable = months.includes(month);
              return (
                <motion.div
                  key={month}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={isAvailable ? { scale: 1.15, rotate: 5 } : {}}
                  className={`text-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                    isAvailable
                      ? 'text-white shadow-md'
                      : 'bg-muted text-muted-foreground'
                  }`}
                  style={isAvailable ? { backgroundColor: color } : {}}
                >
                  {month}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
