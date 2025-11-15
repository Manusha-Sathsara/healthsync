"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  MoreHorizontal,
  CreditCard,
  Building2,
  Activity,
  Settings,
  Bell,
} from "lucide-react";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import KpiTile from "@/components/KpiTile";

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
        <Shield className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-semibold">SecureHealth Insurance</h3>
        <p className="text-sm text-muted-foreground">Admin Portal</p>
      </div>
    </div>

    <nav className="space-y-2">
      {[
        { icon: Activity, label: "Dashboard", id: "dashboard" },
        { icon: FileText, label: "Claims", id: "claims" },
        { icon: Users, label: "Members", id: "members" },
        { icon: Building2, label: "Providers", id: "providers" },
        { icon: DollarSign, label: "Financials", id: "financials" },
        { icon: Calendar, label: "Policies", id: "policies" },
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
      <h1 className="text-2xl font-bold">Insurance Portal</h1>
      <p className="text-muted-foreground">
        Manage claims, members, and policies with AI-powered insights
      </p>
    </div>
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="sm">
        <Bell className="w-4 h-4" />
        <span className="ml-2">12</span>
      </Button>
      <Button variant="ghost" size="sm">
        <Download className="w-4 h-4" />
      </Button>
      <Button variant="primary" size="sm">
        New Claim
      </Button>
    </div>
  </div>
);

// Mock data for insurance dashboard
const mockInsuranceStats = [
  {
    title: "Total Claims",
    value: "2,847",
    change: 12.5,
    trend: "up" as const,
    icon: FileText,
    color: "primary" as const,
  },
  {
    title: "Approval Rate",
    value: "86.3%",
    change: 2.1,
    trend: "up" as const,
    icon: CheckCircle,
    color: "success" as const,
  },
  {
    title: "Avg. Processing Time",
    value: "3.2 days",
    change: -0.8,
    trend: "down" as const,
    icon: Clock,
    color: "warning" as const,
  },
  {
    title: "Monthly Savings",
    value: "$2.4M",
    change: 18.2,
    trend: "up" as const,
    icon: DollarSign,
    color: "accent" as const,
  },
];

const mockClaims = [
  {
    id: "CLM-001",
    member: "John Smith",
    provider: "City Hospital",
    amount: 2450.0,
    status: "Pending",
    date: "2024-11-15",
    type: "Emergency",
  },
  {
    id: "CLM-002",
    member: "Sarah Johnson",
    provider: "Family Clinic",
    amount: 180.0,
    status: "Approved",
    date: "2024-11-14",
    type: "Routine",
  },
  {
    id: "CLM-003",
    member: "Mike Wilson",
    provider: "Specialist Center",
    amount: 3200.0,
    status: "Under Review",
    date: "2024-11-13",
    type: "Surgery",
  },
  {
    id: "CLM-004",
    member: "Lisa Davis",
    provider: "Dental Care",
    amount: 450.0,
    status: "Rejected",
    date: "2024-11-12",
    type: "Dental",
  },
];

export default function InsurancePortal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            <TopBar />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {activeTab === "dashboard" && (
                <>
                  {/* KPI Cards */}
                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    {mockInsuranceStats.map((stat, index) => (
                      <KpiTile
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        trend={stat.trend}
                        color={stat.color}
                      />
                    ))}
                  </motion.div>

                  {/* Charts and Analytics */}
                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  >
                    <GlassCard>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-foreground">
                          Claims Overview
                        </h3>
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground">
                            Approved Claims
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="w-4/5 h-full bg-green-500"></div>
                            </div>
                            <span className="text-sm text-green-600">86%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground">
                            Pending Review
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="w-1/5 h-full bg-yellow-500"></div>
                            </div>
                            <span className="text-sm text-yellow-600">8%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground">
                            Rejected Claims
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="w-1/12 h-full bg-red-500"></div>
                            </div>
                            <span className="text-sm text-red-600">6%</span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-foreground">
                          Recent Activities
                        </h3>
                        <Activity className="w-5 h-5 text-primary-500" />
                      </div>
                      <div className="space-y-3">
                        {[
                          {
                            action: "New claim submitted",
                            member: "John Smith",
                            time: "5 minutes ago",
                          },
                          {
                            action: "Claim approved",
                            member: "Sarah Johnson",
                            time: "1 hour ago",
                          },
                          {
                            action: "Policy renewed",
                            member: "Mike Wilson",
                            time: "3 hours ago",
                          },
                          {
                            action: "Member registered",
                            member: "Lisa Davis",
                            time: "1 day ago",
                          },
                        ].map((activity, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                            <div className="flex-1">
                              <p className="text-sm text-foreground">
                                {activity.action}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {activity.member} • {activity.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                </>
              )}

              {activeTab === "claims" && (
                <motion.div variants={itemVariants}>
                  <GlassCard>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-foreground">
                        Claims Management
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Filter className="w-4 h-4 mr-2" />
                          Filter
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                        <Button size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          New Claim
                        </Button>
                      </div>
                    </div>

                    {/* Search */}
                    <div className="relative mb-6">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search claims..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-foreground"
                      />
                    </div>

                    {/* Claims Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">
                              Claim ID
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">
                              Member
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">
                              Provider
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">
                              Amount
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">
                              Status
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">
                              Date
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockClaims.map((claim, index) => (
                            <tr
                              key={index}
                              className="border-b border-border/50 hover:bg-white/5"
                            >
                              <td className="py-3 px-4 font-mono text-sm text-foreground">
                                {claim.id}
                              </td>
                              <td className="py-3 px-4 text-foreground">
                                {claim.member}
                              </td>
                              <td className="py-3 px-4 text-foreground">
                                {claim.provider}
                              </td>
                              <td className="py-3 px-4 text-foreground font-semibold">
                                ${claim.amount.toFixed(2)}
                              </td>
                              <td className="py-3 px-4">
                                <span
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    claim.status === "Approved"
                                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                      : claim.status === "Pending"
                                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                      : claim.status === "Under Review"
                                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                  }`}
                                >
                                  {claim.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-sm text-muted-foreground">
                                {claim.date}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center space-x-2">
                                  <button className="p-1 hover:bg-white/10 rounded">
                                    <Eye className="w-4 h-4 text-muted-foreground" />
                                  </button>
                                  <button className="p-1 hover:bg-white/10 rounded">
                                    <Edit className="w-4 h-4 text-muted-foreground" />
                                  </button>
                                  <button className="p-1 hover:bg-white/10 rounded">
                                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </GlassCard>
                </motion.div>
              )}

              {/* Add other tab content as needed */}
              {(activeTab === "members" ||
                activeTab === "providers" ||
                activeTab === "financials" ||
                activeTab === "policies" ||
                activeTab === "settings") && (
                <motion.div variants={itemVariants}>
                  <GlassCard>
                    <div className="text-center py-12">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
                        Management
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        This section is under development. More features coming
                        soon!
                      </p>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
