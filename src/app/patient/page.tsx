"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Thermometer,
  Weight,
  Pill,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Clock,
  Zap,
  Brain,
  Settings,
  User,
  Bell,
  Download,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import KpiTile from "@/components/KpiTile";
import Button from "@/components/Button";
import {
  mockVitals,
  mockMedications,
  mockActivity,
  generateGlucoseData,
  generateBloodPressureData,
} from "@/lib/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Sidebar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => (
  <div className="w-64 glass-card h-full p-6 space-y-6">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-semibold">Sarah Johnson</h3>
        <p className="text-sm text-muted-foreground">Patient ID: #12345</p>
      </div>
    </div>

    <nav className="space-y-2">
      {[
        { icon: Activity, label: "Dashboard", id: "dashboard" },
        { icon: Heart, label: "Vitals", id: "vitals" },
        { icon: Pill, label: "Medications", id: "medications" },
        { icon: Calendar, label: "Appointments", id: "appointments" },
        { icon: Brain, label: "AI Coach", id: "ai-coach" },
        { icon: Settings, label: "Settings", id: "settings" },
      ].map((item) => (
        <button
          key={item.label}
          onClick={() => setActiveTab(item.id)}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
            activeTab === item.id
              ? "bg-primary-500/20 text-primary-500"
              : "hover:bg-white/10 text-muted-foreground hover:text-foreground"
          }`}
        >
          <item.icon className="w-4 h-4" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>

    {/* Logout Button */}
    <div className="border-t border-white/10 pt-4">
      <Button
        variant="ghost"
        size="sm"
        className="w-full justify-start text-red-500 hover:text-red-400 hover:bg-red-500/10"
        onClick={() => (window.location.href = "/login")}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        Logout
      </Button>
    </div>
  </div>
);

const TopBar = () => (
  <div className="glass-card p-4 flex items-center justify-between">
    <div>
      <h1 className="text-2xl font-bold">Health Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome back, Sarah! Here&apos;s your health overview.
      </p>
    </div>
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="sm">
        <Bell className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Download className="w-4 h-4" />
      </Button>
      <Button variant="secondary" size="sm">
        Emergency Contact
      </Button>
    </div>
  </div>
);

export default function PatientDashboard() {
  const [timeRange, setTimeRange] = useState("7d");
  const [activeTab, setActiveTab] = useState("dashboard");
  const glucoseData = generateGlucoseData(7);
  const bpData = generateBloodPressureData(7);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            <TopBar />

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <KpiTile
                title="Heart Rate"
                value="72 BPM"
                trend="stable"
                icon={<Heart className="w-5 h-5" />}
                color="danger"
                subtitle="Normal range"
              />
              <KpiTile
                title="Blood Glucose"
                value="124 mg/dL"
                trend="down"
                change={-3.2}
                icon={<Activity className="w-5 h-5" />}
                color="primary"
                subtitle="Pre-meal reading"
              />
              <KpiTile
                title="Blood Pressure"
                value="120/80"
                trend="stable"
                icon={<TrendingUp className="w-5 h-5" />}
                color="success"
                subtitle="Optimal"
              />
              <KpiTile
                title="Weight"
                value="165 lbs"
                trend="down"
                change={-1.2}
                icon={<Weight className="w-5 h-5" />}
                color="accent"
                subtitle="Goal: 160 lbs"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Glucose Trends */}
              <div className="lg:col-span-2">
                <GlassCard className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Glucose Trends</h3>
                    <div className="flex space-x-2">
                      {["7d", "30d", "90d"].map((range) => (
                        <button
                          key={range}
                          onClick={() => setTimeRange(range)}
                          className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                            timeRange === range
                              ? "bg-primary-500 text-white"
                              : "bg-muted text-muted-foreground hover:bg-primary-500/20"
                          }`}
                        >
                          {range.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={glucoseData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="rgba(255,255,255,0.1)"
                        />
                        <XAxis
                          dataKey="date"
                          stroke="var(--muted-foreground)"
                          fontSize={12}
                        />
                        <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "var(--card)",
                            border: "1px solid var(--border)",
                            borderRadius: "8px",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="var(--primary)"
                          strokeWidth={2}
                          dot={{ fill: "var(--primary)", strokeWidth: 2 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="target"
                          stroke="var(--accent)"
                          strokeDasharray="5 5"
                          strokeWidth={1}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </GlassCard>
              </div>

              {/* AI Health Coach */}
              <GlassCard className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold">AI Health Coach</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Great job!</p>
                        <p className="text-xs text-muted-foreground">
                          Your glucose levels have improved by 8% this week.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Reminder</p>
                        <p className="text-xs text-muted-foreground">
                          Take your evening medication in 2 hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Suggestion</p>
                        <p className="text-xs text-muted-foreground">
                          Try a 10-minute walk after meals to help regulate
                          blood sugar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4" variant="secondary">
                  Chat with AI Coach
                </Button>
              </GlassCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Medications */}
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Pill className="w-5 h-5" />
                  <span>Current Medications</span>
                </h3>

                <div className="space-y-4">
                  {mockMedications.map((med) => (
                    <div
                      key={med.id}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{med.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {med.dosage} - {med.frequency}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {new Date(med.nextDue).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {med.refillsLeft} refills left
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-4" variant="secondary">
                  Manage Medications
                </Button>
              </GlassCard>

              {/* Activity Summary */}
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>

                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockActivity.slice(-7)}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.1)"
                      />
                      <XAxis
                        dataKey="date"
                        stroke="var(--muted-foreground)"
                        fontSize={12}
                        tickFormatter={(value) =>
                          new Date(value).toLocaleDateString([], {
                            weekday: "short",
                          })
                        }
                      />
                      <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar
                        dataKey="steps"
                        fill="var(--primary)"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-500">8,542</p>
                    <p className="text-xs text-muted-foreground">Avg Steps</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent-500">7.6h</p>
                    <p className="text-xs text-muted-foreground">Avg Sleep</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-500">47</p>
                    <p className="text-xs text-muted-foreground">Active Min</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Emergency Alerts */}
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span>Emergency Alerts & Monitoring</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="font-medium text-green-700 dark:text-green-400">
                        All Clear
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-300">
                        No emergency alerts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-8 h-8 text-blue-500" />
                    <div>
                      <p className="font-medium text-blue-700 dark:text-blue-400">
                        Device Sync
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-300">
                        Last sync: 5 min ago
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-8 h-8 text-purple-500" />
                    <div>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Monitoring
                      </p>
                      <p className="text-sm text-purple-600 dark:text-purple-300">
                        24/7 active monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-4" variant="secondary">
                Configure Emergency Contacts
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
