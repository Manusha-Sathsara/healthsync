"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: ReactNode;
  animate?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  animate = true,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white/10 hover:bg-white/20 text-foreground border border-white/20 focus:ring-white/50",
    ghost: "hover:bg-white/10 text-foreground focus:ring-white/50",
    outline:
      "border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-base gap-2",
    lg: "px-6 py-3 text-lg gap-2.5",
  };

  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    animate && "transform hover:scale-105 active:scale-95",
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {icon && !loading && icon}
      {children}
    </>
  );

  if (animate) {
    return (
      <motion.button
        className={buttonClasses}
        disabled={disabled || loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        type={props.type}
        onClick={props.onClick}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
