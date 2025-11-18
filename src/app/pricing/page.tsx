"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";

export default function PricingPage() {
  const plans = [
    {
      name: "Individual",
      price: "$29",
      period: "/month",
      description: "Perfect for personal health monitoring",
      features: [
        "Personal health dashboard",
        "Device integrations (5 devices)",
        "AI health insights",
        "Medication reminders",
        "Basic support",
        "Data export",
        "Mobile app access",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Provider",
      price: "$199",
      period: "/month",
      description: "For healthcare providers and clinics",
      features: [
        "Multi-patient monitoring (up to 100)",
        "Risk prediction algorithms",
        "Early warning systems",
        "Clinical reports & analytics",
        "Priority support",
        "Integration APIs",
        "HIPAA compliance",
        "Team collaboration tools",
        "Custom alerts",
        "Advanced reporting",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For hospitals and insurance companies",
      features: [
        "Unlimited patient monitoring",
        "Population health analytics",
        "Custom integrations",
        "Dedicated support team",
        "Advanced security & compliance",
        "Custom reporting & dashboards",
        "SLA guarantees",
        "On-premise deployment option",
        "Training & onboarding",
        "API rate limits removed",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Cardiologist, City Medical Center",
      content:
        "HealthSync has transformed how I monitor my patients. The predictive analytics have helped prevent several cardiac events.",
      rating: 5,
    },
    {
      name: "John Davis",
      role: "IT Director, Regional Hospital",
      content:
        "The integration was seamless and the ROI was immediate. Patient outcomes improved by 23% in the first quarter.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Diabetes Patient",
      content:
        "Managing my condition has never been easier. The AI recommendations are spot-on and have improved my quality of life significantly.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for Individual and Provider plans. No credit card required to start.",
    },
    {
      question: "What devices are supported?",
      answer:
        "We support over 200 medical devices including glucose monitors, blood pressure cuffs, heart rate monitors, and popular fitness trackers.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use end-to-end encryption, HIPAA-compliant infrastructure, and regular security audits to ensure your data is completely secure.",
    },
    {
      question: "Do you offer custom integrations?",
      answer:
        "Yes, Enterprise customers can request custom integrations with existing EMR systems, medical devices, and other healthcare software.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core AI
            features, 24/7 monitoring, and world-class support.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className="text-muted-foreground">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-muted rounded-full p-1 cursor-pointer">
                <div className="w-4 h-4 bg-primary-500 rounded-full transition-transform" />
              </div>
            </div>
            <span className="text-muted-foreground">
              Annual <span className="text-green-500 text-sm">(Save 20%)</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-linear-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <GlassCard
                hover
                className={`p-8 h-full ${
                  plan.popular ? "ring-2 ring-primary-500 scale-105" : ""
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-lg">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "primary" : "secondary"}
                  size="lg"
                >
                  {plan.cta}
                  {plan.cta !== "Contact Sales" && (
                    <ArrowRight className="w-4 h-4 ml-2" />
                  )}
                </Button>

                {plan.name !== "Enterprise" && (
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    14-day free trial • No credit card required
                  </p>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers are saying about HealthSync
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-linear-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-primary-500/10 to-accent-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust HealthSync to
              improve patient outcomes and reduce costs.
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
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
