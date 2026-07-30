import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = '',
  speed = 2.5,
}) => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const gradientStyle = isDark
    ? 'linear-gradient(100deg, #059669 0%, #0284C7 25%, #FFFFFF 50%, #0284C7 75%, #059669 100%)'
    : 'linear-gradient(100deg, #047857 0%, #0284C7 25%, #0A0C0B 50%, #0284C7 75%, #047857 100%)';

  return (
    <motion.span
      className={`inline-block text-transparent bg-clip-text filter ${
        isDark ? 'drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'drop-shadow-[0_0_12px_rgba(2,132,199,0.2)]'
      } ${className}`}
      style={{
        backgroundImage: gradientStyle,
        backgroundSize: '250% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['100% 0', '-100% 0'],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {text}
    </motion.span>
  );
};
