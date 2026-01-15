import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductCalendarProps {
  name: string;
  description: string;
  months: string[];
  category: string;
}

export function ProductCalendar({ name, description, months, category }: ProductCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const allMonths = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      'Citrus': 'text-orange-500',
      'Grapes': 'text-purple-500',
      'Dates': 'text-amber-500',
      'Olives': 'text-green-600',
      'Prickly Pear': 'text-pink-500',
    };
    return colors[cat] || 'text-primary';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-xl transition-all"
    >
      {/* Header */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
        className="w-full px-6 py-4 flex items-center justify-between transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className={`text-2xl ${getCategoryColor(category)}`}>●</span>
          <h3 className="text-xl font-semibold text-primary">{name}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 border-t border-border">
              <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
              
              {/* Calendar */}
              <div className="mb-2">
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Availability Calendar</h4>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                  {allMonths.map((month, index) => {
                    const isAvailable = months.includes(month);
                    return (
                      <motion.div
                        key={month}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={isAvailable ? { scale: 1.1 } : {}}
                        className={`text-center py-2 px-1 rounded text-sm font-medium transition-all cursor-default ${
                          isAvailable
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {month}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
