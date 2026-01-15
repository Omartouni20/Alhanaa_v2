import { useState } from 'react';
import { motion } from 'motion/react';
import { ProductsYearlyCalendar } from '@/app/components/products-yearly-calendar';
import { ProductDetailCard } from '@/app/components/product-detail-card';
import { ScrollReveal } from '@/app/components/scroll-reveal';
import { Sparkles } from 'lucide-react';

const fruitsImage = "https://images.unsplash.com/photo-1760113724916-a87ffecd8e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMGhhcnZlc3R8ZW58MXx8fHwxNzY4NTEwODE2fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function ProductsPage() {
  const [filter, setFilter] = useState('All Products');

  const products = [
    {
      name: 'Pineapple Orange',
      category: 'Citrus',
      color: '#ff8c42',
      description: 'Pineapple Orange is a premium citrus variety distinguished by its vibrant color, naturally sweet flavor, and high juice content. Known for its subtle tropical aroma, it is easy to peel and ideal for both fresh consumption and juice production. Typically harvested in the mid to late citrus season, Pineapple Orange is widely appreciated for its quality and flavor.',
      months: ['Jan', 'Dec'],
    },
    {
      name: 'Grapefruit',
      category: 'Citrus',
      color: '#ff6b6b',
      description: 'Grapefruit is a large citrus fruit known for its juicy texture and bold, tangy-sweet flavor. Typically round with a thick peel, it ranges in color from yellow to pink or red inside, depending on the variety. Grapefruit is rich in vitamin C and antioxidants, making it popular for both fresh eating and juice production. It is usually harvested during the winter season and is valued for its refreshing taste and health benefits.',
      months: ['Jan', 'Feb', 'Mar', 'Apr'],
    },
    {
      name: 'Fremont Mandarin',
      category: 'Citrus',
      color: '#ffa500',
      description: 'Fremont Mandarin is a seedless or low-seeded variety known for its rich, sweet flavor and easy-peeling skin. It has a vibrant deep orange color and a juicy, aromatic flesh, making it a favorite for fresh snacking and export markets. Fremont is typically harvested in the late winter season and is valued for its long shelf life and excellent taste.',
      months: ['Jan', 'Dec'],
    },
    {
      name: 'Early Sweet Grapes',
      category: 'Grapes',
      color: '#95d5b2',
      description: 'Early Sweet grapes are a popular early-season seedless green variety known for their crisp texture and mild, refreshing sweetness. They feature medium to large berries with a light green to golden hue when fully ripe. Early Sweet is favored for fresh consumption due to its juicy bite and attractive appearance. As one of the first grapes harvested in the season, it plays an important role in early market supply and is widely exported for its quality.',
      months: ['May'],
    },
    {
      name: 'Thomson Grapes',
      category: 'Grapes',
      color: '#74c69d',
      description: 'Thompson Seedless grape is a well-known green grape variety, valued for its smooth skin, crisp bite, and naturally sweet flavor. The berries are oval in shape and completely seedless, offering a clean and refreshing eating experience. This variety is also commonly used for fresh eating, drying into raisins and concentration thanks to its balanced sugar content and firm texture.',
      months: ['Jul'],
    },
    {
      name: 'Red Flame Grapes',
      category: 'Grapes',
      color: '#9d4edd',
      description: 'Red Flame grapes are a widely recognized seedless variety, typically medium to large in size with a round to slightly oval shape. As they mature, their skin develops a vibrant red to purplish-red color, deepening as ripeness progresses. With their crisp texture and striking appearance.',
      months: ['May', 'Jun'],
    },
    {
      name: 'Barhi Dates',
      category: 'Dates',
      color: '#d4a574',
      description: 'Barhi dates are a distinctive date variety known for their golden-yellow color, soft texture, and rich, caramel-like sweetness. They are often enjoyed in their fresh "Khalal" stage when they are crisp and mildly sweet, but can also be eaten when fully ripe and soft. Barhi dates are prized for their unique flavor profile and creamy bite, making them popular for fresh consumption. They are typically harvested in late summer and are considered a premium seasonal delicacy.',
      months: ['Aug'],
    },
    {
      name: 'Medjool Dates',
      category: 'Dates',
      color: '#8b4513',
      description: 'Medjool dates, known as the king of dates is a premium variety prized for its impressive size, rich flavor, and naturally soft texture. This semi-dried fruit features a large, oval shape with dark brown to reddish-brown skin that is glossy yet gently wrinkled. Inside, it holds a single elongated pit surrounded by thick, fleshy flesh. Medjool dates are not only delicious but also packed with nutritional benefits—high in fiber, potassium, and natural sugars that provide a clean source of energy.',
      months: ['Sep'],
    },
    {
      name: 'Olives',
      category: 'Olives',
      color: '#52796f',
      description: 'Olives are a versatile and nutrient-rich fruit, widely known for their role in Mediterranean cuisine and healthy diets. They come in various sizes and colors, ranging from green to deep black depending on ripeness. Olives have a firm texture and a unique flavor profile, often described as salty, bitter, or rich. They are harvested for both table consumption and oil production, and are valued for their high content of healthy fats and antioxidants.',
      months: ['Aug'],
    },
    {
      name: 'Prickly Pear',
      category: 'Prickly Pear',
      color: '#e63946',
      description: 'Prickly pear is a unique and vibrant fruit known for its sweet flavor and refreshing texture. It grows on cactus plants and has an oval shape with a thick skin covered in small spines. The flesh inside can be red, orange, or greenish and contains small edible seeds. Prickly pear is rich in antioxidants, vitamins, and fiber, making it popular for fresh eating, juices, and jams. It is typically harvested in the summer season and is valued for its exotic taste and nutritional benefits.',
      months: ['Jul'],
    },
  ];

  const categories = ['All Products', 'Citrus', 'Grapes', 'Dates', 'Prickly Pear', 'Olives'];

  const filteredProducts = filter === 'All Products'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div>
      {/* Header with Animated Background */}
      <section className="relative bg-gradient-to-br from-primary via-[#1e5a3a] to-secondary py-24 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${fruitsImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Animated Circles */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [360, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Sparkles className="h-12 w-12 text-secondary mx-auto" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Premium Products
            </h1>
            <p className="text-xl text-white/90">
              Discover our year-round harvest calendar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    filter === category
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-xl'
                      : 'bg-card border-2 border-border hover:border-primary hover:shadow-lg'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Yearly Calendar */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <ProductsYearlyCalendar products={filteredProducts} />
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Product Details
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our premium selection of fresh agricultural products
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => (
              <ProductDetailCard
                key={product.name}
                name={product.name}
                description={product.description}
                months={product.months}
                category={product.category}
                color={product.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
