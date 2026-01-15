import { motion } from 'motion/react';

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  slogan?: string;
  videoUrl?: string;
  posterImage?: string;
}

export function VideoHero({ title, subtitle, slogan, videoUrl, posterImage }: VideoHeroProps) {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Video Background */}
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary to-[#275e33]"
          style={posterImage ? { backgroundImage: `url(${posterImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-2"
              >
                {subtitle}
              </motion.p>
            )}

            {slogan && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl italic"
              >
                {slogan}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
