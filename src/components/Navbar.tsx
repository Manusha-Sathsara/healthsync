"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User, Stethoscope, Shield, Settings } from "lucide-react";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const demoPortals = [
  { href: "/patient", label: "Patient Portal", icon: User, description: "Manage your health data" },
  { href: "/provider", label: "Provider Portal", icon: Stethoscope, description: "Healthcare professional dashboard" },
  { href: "/insurance", label: "Insurance Portal", icon: Shield, description: "Claims and policy management" },
  { href: "/admin", label: "Admin Portal", icon: Settings, description: "System administration" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/healthsync.png"
              alt="HealthSync"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold gradient-text">HealthSync</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Demo Portals Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                <span>Demo Portals</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/50 dark:border-white/10 rounded-xl shadow-xl z-50"
                  >
                    <div className="p-4 space-y-2">
                      {demoPortals.map((portal) => (
                        <Link
                          key={portal.href}
                          href={portal.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <div className="w-8 h-8 bg-primary-500/10 group-hover:bg-primary-500/20 rounded-lg flex items-center justify-center transition-colors">
                            <portal.icon className="w-4 h-4 text-primary-500" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground group-hover:text-primary-500 transition-colors">
                              {portal.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {portal.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="primary" size="sm">
              <Link href="/signup">Request Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass hover:bg-white/20 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-foreground hover:text-primary-500 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Demo Portals */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-semibold text-muted-foreground mb-2">Demo Portals</div>
                {demoPortals.map((portal) => (
                  <Link
                    key={portal.href}
                    href={portal.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <portal.icon className="w-4 h-4 text-primary-500" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{portal.label}</div>
                      <div className="text-xs text-muted-foreground">{portal.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Link href="/login">Login</Link>
                </Button>
                <Button variant="primary" size="sm">
                  <Link href="/signup">Request Demo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
