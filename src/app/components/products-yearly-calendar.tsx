import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

interface Product {
  name: string;
  months: string[];
  category: string;
  color: string;
}

interface ProductsYearlyCalendarProps {
  products: Product[];
}

export function ProductsYearlyCalendar({ products }: ProductsYearlyCalendarProps) {
  const allMonths = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card border-2 border-border rounded-xl p-6 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-8">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Calendar className="h-8 w-8 text-primary" />
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Annual Production Calendar
        </h2>
      </div>

      {/* Calendar Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-3 bg-muted/50 font-bold sticky left-0 z-10 min-w-[200px]">
                Product
              </th>
              {allMonths.map((month, index) => (
                <motion.th
                  key={month}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 bg-muted/50 font-bold text-center min-w-[60px]"
                >
                  {month}
                </motion.th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, productIndex) => (
              <motion.tr
                key={product.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: productIndex * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                className="border-b border-border transition-colors"
              >
                <td className="p-3 font-semibold sticky left-0 bg-card z-10 border-r border-border">
                  <div className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: product.color }}
                    />
                    <span className="text-sm">{product.name}</span>
                  </div>
                </td>
                {allMonths.map((month, monthIndex) => {
                  const isAvailable = product.months.includes(month);
                  return (
                    <td key={month} className="p-2 text-center">
                      {isAvailable && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: productIndex * 0.05 + monthIndex * 0.02,
                            type: 'spring',
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.3, rotate: 90 }}
                          className="w-8 h-8 rounded-full mx-auto cursor-pointer shadow-lg"
                          style={{ backgroundColor: product.color }}
                          title={`${product.name} - ${month}`}
                        />
                      )}
                    </td>
                  );
                })}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 bg-muted/30 rounded-lg"
      >
        <h3 className="font-semibold mb-3 text-sm">Product Categories:</h3>
        <div className="flex flex-wrap gap-4">
          {Array.from(new Set(products.map(p => p.category))).map((category) => {
            const product = products.find(p => p.category === category);
            return (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: product?.color }}
                />
                <span className="text-sm">{category}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
