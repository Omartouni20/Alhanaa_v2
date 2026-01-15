import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function AnimatedCounter({ end, duration = 2, label, icon: Icon }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-xl transition-all hover:border-primary"
    >
      <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {formatNumber(count)}+
      </div>
      <div className="text-sm text-muted-foreground uppercase">{label}</div>
    </motion.div>
  );
}
