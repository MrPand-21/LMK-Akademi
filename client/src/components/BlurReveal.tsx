import { motion } from "framer-motion";

const transition = { duration: 1, ease: [.25,.1,.25,1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

interface BlurRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

export default function BlurReveal({ text, className = "", as = 'h1' }: BlurRevealProps) {
  const words = text.split(" ");
  const Component = motion[as];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.04 }}
    >
      <Component className={className}>
        {words.map((word, index) => (
          <span key={index}>
            <motion.span 
              className="inline-block" 
              transition={transition} 
              variants={variants}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && ' '}
          </span>
        ))}
      </Component>
    </motion.div>
  );
}