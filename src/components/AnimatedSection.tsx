"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const block: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

type AnimatedSectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function AnimatedSection({
  id,
  className = "",
  children,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-28 ${className}`}
      variants={block}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
    >
      {children}
    </motion.section>
  );
}
