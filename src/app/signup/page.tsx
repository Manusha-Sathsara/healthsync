"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { getAssetPath } from "@/lib/utils";
import Input from "@/components/Input";
import Select from "@/components/Select";
import GlassCard from "@/components/GlassCard";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "patient",
    organization: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate signup
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Redirect based on user type
    const redirectMap = {
      patient: "/patient",
      provider: "/provider",
      insurance: "/insurance",
      admin: "/admin",
    };

    window.location.href =
      redirectMap[formData.userType as keyof typeof redirectMap];
  };

  const userTypeOptions = [
    { value: "patient", label: "Patient" },
    { value: "provider", label: "Healthcare Provider" },
    { value: "insurance", label: "Insurance Company" },
    { value: "admin", label: "Administrator" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-500/5 via-transparent to-accent-500/5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 right-10 w-48 h-48 bg-accent-500/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 relative z-10"
      >
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <Image
              src={getAssetPath("healthsync.png")}
              alt="HealthSync"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold gradient-text">HealthSync</span>
          </Link>

          <h2 className="text-3xl font-bold text-foreground">
            Create your account
          </h2>
          <p className="mt-2 text-muted-foreground">
            Join thousands of healthcare professionals and patients
          </p>
        </div>

        <GlassCard className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                icon={<User className="w-4 h-4" />}
                placeholder="John"
              />

              <Input
                label="Last Name"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder="Doe"
              />
            </div>

            <Input
              label="Email address"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              icon={<Mail className="w-4 h-4" />}
              placeholder="john@example.com"
            />

            <Select
              label="I am a..."
              value={formData.userType}
              onChange={(e) =>
                setFormData({ ...formData, userType: e.target.value })
              }
              options={userTypeOptions}
            />

            {(formData.userType === "provider" ||
              formData.userType === "insurance" ||
              formData.userType === "admin") && (
              <Input
                label="Organization"
                type="text"
                required
                value={formData.organization}
                onChange={(e) =>
                  setFormData({ ...formData, organization: e.target.value })
                }
                icon={<Building className="w-4 h-4" />}
                placeholder="Hospital/Clinic/Company name"
              />
            )}

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                icon={<Lock className="w-4 h-4" />}
                placeholder="Create a strong password"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-border rounded"
              />
              <label
                htmlFor="agree-terms"
                className="ml-2 block text-sm text-foreground"
              >
                I agree to the{" "}
                <a href="#" className="text-primary-500 hover:text-primary-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary-500 hover:text-primary-600">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button
              type="submit"
              loading={loading}
              className="w-full"
              size="lg"
            >
              Create Account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary" className="w-full" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>

              <Button variant="secondary" className="w-full" type="button">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
                Facebook
              </Button>
            </div>
          </form>
        </GlassCard>

        <div className="text-center">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary-500 hover:text-primary-600 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
