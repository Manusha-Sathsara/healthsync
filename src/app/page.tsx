"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Shield,
  Activity,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import KpiTile from "@/components/KpiTile";
import { mockTestimonials, mockFAQs } from "@/lib/mockData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium"
                >
                  <Zap className="w-4 h-4 mr-2 text-accent-500" />
                  AI-Powered Healthcare Platform
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-bold leading-tight"
                >
                  Transform Healthcare with{" "}
                  <span className="gradient-text">AI Intelligence</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl text-muted-foreground max-w-lg"
                >
                  Empower patients, providers, and insurers with real-time
                  monitoring, predictive analytics, and personalized care
                  coordination.
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="text-lg px-8 py-4">
                  <Link href="/signup">Start Free Trial</Link>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  <Link href="#demo">Watch Demo</Link>
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-8 pt-8"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-2 border-background"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Trusted by 10,000+ healthcare professionals
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Dashboard Preview */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10">
                <GlassCard className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Patient Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-muted-foreground">
                        Live
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <KpiTile
                      title="Heart Rate"
                      value="72 BPM"
                      trend="stable"
                      icon={<Heart className="w-4 h-4" />}
                      color="danger"
                    />
                    <KpiTile
                      title="Blood Glucose"
                      value="124 mg/dL"
                      trend="down"
                      change={-3.2}
                      icon={<Activity className="w-4 h-4" />}
                      color="primary"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        AI Risk Assessment
                      </span>
                      <span className="text-green-500 font-medium">
                        Low Risk
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-primary-500 h-2 rounded-full w-3/4" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Medication Reminder</p>
                      <p className="text-xs text-muted-foreground">
                        Metformin taken on time
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-pulse" />
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full animate-pulse"
                style={{ animationDelay: "-1s" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              One Platform,{" "}
              <span className="gradient-text">Three Ecosystems</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              HealthSync connects patients, providers, and insurers in a unified
              ecosystem powered by AI and real-time data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Patients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard hover className="text-center p-8 h-full">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">For Patients</h3>
                <p className="text-muted-foreground mb-6">
                  Take control of your health with personalized insights,
                  medication reminders, and 24/7 AI coaching.
                </p>
                <ul className="space-y-3 text-left">
                  {[
                    "Real-time vital monitoring",
                    "AI health recommendations",
                    "Medication management",
                    "Emergency alerts",
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">
                  <Link href="/patient">Explore Patient Portal</Link>
                </Button>
              </GlassCard>
            </motion.div>

            {/* Providers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard hover className="text-center p-8 h-full">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-accent-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">For Providers</h3>
                <p className="text-muted-foreground mb-6">
                  Enhance patient care with predictive analytics, early
                  warnings, and comprehensive health insights.
                </p>
                <ul className="space-y-3 text-left">
                  {[
                    "Risk prediction algorithms",
                    "Early warning systems",
                    "Remote patient monitoring",
                    "Automated reports",
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">
                  <Link href="/provider">Explore Provider Portal</Link>
                </Button>
              </GlassCard>
            </motion.div>

            {/* Insurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard hover className="text-center p-8 h-full">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">For Insurance</h3>
                <p className="text-muted-foreground mb-6">
                  Reduce costs and improve outcomes with population health
                  analytics and predictive risk modeling.
                </p>
                <ul className="space-y-3 text-left">
                  {[
                    "Population health insights",
                    "Risk stratification",
                    "Claims prediction",
                    "Cost optimization",
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">
                  <Link href="/insurance">Explore Insurance Portal</Link>
                </Button>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of healthcare professionals who are already using
              HealthSync to improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
