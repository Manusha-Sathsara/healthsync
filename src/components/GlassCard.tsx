"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  animate?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = false,
  gradient = false,
  animate = true,
}: GlassCardProps) {
  const cardClasses = cn(
    "glass-card transition-all duration-300",
    hover && "hover:bg-white/20 hover:scale-[1.02] cursor-pointer",
    gradient && "bg-gradient-to-br from-white/10 to-white/5",
    className
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cardClasses}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={cardClasses}>{children}</div>;
}
