import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatTime(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function getRiskColor(riskScore: string): string {
  switch (riskScore.toLowerCase()) {
    case "low":
      return "text-green-500";
    case "medium":
      return "text-yellow-500";
    case "high":
      return "text-orange-500";
    case "critical":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
}

export function getRiskBgColor(riskScore: string): string {
  switch (riskScore.toLowerCase()) {
    case "low":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "high":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
    case "critical":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  }
}

/**
 * Utility function to get the correct asset path for different environments
 * In development: returns the original path
 * In production (GitHub Pages): prepends the base path
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, use the base path
  if (process.env.NODE_ENV === 'production') {
    return `/healthsync/${cleanPath}`;
  }
  
  // In development, use the original path
  return `/${cleanPath}`;
}
