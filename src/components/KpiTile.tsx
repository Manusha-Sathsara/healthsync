"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import GlassCard from "./GlassCard";

interface KpiTileProps {
  title: string;
  value: string;
  change?: number;
  trend?: "up" | "down" | "stable";
  icon?: ReactNode;
  subtitle?: string;
  color?: "primary" | "accent" | "success" | "warning" | "danger";
}

export default function KpiTile({
  title,
  value,
  change,
  trend,
  icon,
  subtitle,
  color = "primary",
}: KpiTileProps) {
  const colorClasses = {
    primary: "text-primary-500",
    accent: "text-accent-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-red-500",
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case "stable":
        return <Minus className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-500";
      case "down":
        return "text-red-500";
      case "stable":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <GlassCard hover className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            {icon && (
              <div
                className={`p-2 rounded-lg bg-white/10 ${colorClasses[color]}`}
              >
                {icon}
              </div>
            )}
            <h3 className="text-sm font-medium text-muted-foreground">
              {title}
            </h3>
          </div>

          <div className="space-y-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold text-foreground"
            >
              {value}
            </motion.p>

            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>

          {change !== undefined && trend && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-1 mt-3"
            >
              {getTrendIcon()}
              <span className={`text-sm font-medium ${getTrendColor()}`}>
                {change > 0 ? "+" : ""}
                {change}%
              </span>
              <span className="text-xs text-muted-foreground">
                vs last period
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 -translate-y-10 translate-x-10">
        <div
          className={`w-full h-full rounded-full bg-gradient-to-br from-${color}-500/10 to-transparent`}
        />
      </div>
    </GlassCard>
  );
}
