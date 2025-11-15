"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Shield,
  Users,
  Award,
  Globe,
  Zap,
  Target,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";

export default function AboutPage() {
  const stats = [
    { label: "Healthcare Professionals", value: "10,000+" },
    { label: "Patients Monitored", value: "100,000+" },
    { label: "Medical Devices Integrated", value: "200+" },
    { label: "Countries Served", value: "25+" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Everything we do is focused on improving patient outcomes and quality of life through innovative technology.",
    },
    {
      icon: Shield,
      title: "Data Security & Privacy",
      description:
        "We maintain the highest standards of data protection with HIPAA compliance and end-to-end encryption.",
    },
    {
      icon: Brain,
      title: "AI-Powered Innovation",
      description:
        "Our cutting-edge AI algorithms continuously learn and adapt to provide personalized healthcare insights.",
    },
    {
      icon: Users,
      title: "Collaborative Healthcare",
      description:
        "We believe in connecting patients, providers, and insurers to create a unified healthcare ecosystem.",
    },
  ];

  const team = [
    {
      name: "Dr. Manusha Sathsara",
      role: "CEO & Co-Founder",
      background: "Former Chief Medical Officer at Asiri Hospital",
      image: ".\public\Images\team\Manusha1.jpg",
    },
    {
      name: "Piyara Wathsiluni",
      role: "CTO & Co-Founder",
      background: "Ex-Google AI Research, Stanford PhD",
      image: ".\public\Images\team\Wathsiluni.jpg",
    },
    {
      name: "Dr. Dinithi Ayesha",
      role: "Chief Medical Officer",
      background: "Gynecologist, 5+ years clinical experience",
      image: ".\public\Images\team\Dinithi.jpg",
    },
    {
      name: "Praneepa Tharushini",
      role: "VP of Product",
      background: "Former Product Lead at Kandy Pharmacy",
      image: ".\public\Images\team\Praneepa.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-500/10 via-transparent to-accent-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Healthcare with{" "}
              <span className="gradient-text">AI & Compassion</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Founded in 2020, HealthSync was born from a simple mission: to
              make healthcare more predictive, preventive, and personalized
              through the power of artificial intelligence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe that healthcare should be proactive, not reactive. By
                leveraging the power of AI, real-time monitoring, and predictive
                analytics, we&apos;re creating a future where health issues are
                prevented before they become serious problems.
              </p>
              <div className="space-y-4">
                {[
                  "Reduce healthcare costs through early intervention",
                  "Improve patient outcomes with personalized care",
                  "Empower healthcare providers with actionable insights",
                  "Make quality healthcare accessible to everyone",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      A world where preventive healthcare is the norm, not the
                      exception.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-accent-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      23% reduction in emergency room visits among our users.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at HealthSync
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="p-6 text-center h-full">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading experts in healthcare, AI, and technology working together
              to revolutionize patient care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="p-6 text-center">
                  <div className="w-24 h-24 bg-linear-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.background}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge AI, machine learning, and
              real-time data processing to deliver unprecedented healthcare
              insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description:
                  "Advanced algorithms that learn from patient data to predict health risks and recommend interventions.",
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                description:
                  "Instant analysis of vital signs and health metrics with immediate alerts for critical situations.",
              },
              {
                icon: Globe,
                title: "Cloud Infrastructure",
                description:
                  "Scalable, secure cloud platform that ensures 99.9% uptime and global accessibility.",
              },
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center h-full">
                  <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <tech.icon className="w-10 h-10 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary-500/10 to-accent-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a healthcare provider, patient, or part of an
              insurance company, we&apos;d love to help you transform healthcare
              delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started Today
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
