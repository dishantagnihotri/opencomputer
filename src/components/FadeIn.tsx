import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn = ({ children, delay = 0, className }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;
