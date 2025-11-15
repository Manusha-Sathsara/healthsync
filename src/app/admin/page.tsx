"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Activity,
  Shield,
  TrendingUp,
  AlertTriangle,
  Server,
  Database,
  Settings,
  UserCheck,
  Building2,
  CreditCard,
  FileText,
  Calendar,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
} from "lucide-react";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import KpiTile from "@/components/KpiTile";
import {
  mockAdminStats,
  mockSystemHealth,
  mockRecentActivities,
  mockUserManagement,
  mockProviderApplications,
} from "@/lib/mockData";

const sidebarItems = [
  { icon: Activity, label: "Dashboard", id: "dashboard" },
  { icon: Users, label: "User Management", id: "users" },
  { icon: Building2, label: "Providers", id: "providers" },
  { icon: Shield, label: "Insurance", id: "insurance" },
  { icon: FileText, label: "Reports", id: "reports" },
  { icon: Server, label: "System Health", id: "system" },
  { icon: Settings, label: "Settings", id: "settings" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

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
    <div className="min-h-screen bg-background pt-16">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border-r border-gray-200/50 dark:border-white/10">
          <div className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Admin Panel
            </h2>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? "bg-primary-500 text-white shadow-lg"
                      : "text-foreground hover:bg-white/20 dark:hover:bg-white/10"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage and monitor your HealthSync platform
              </p>
            </motion.div>

            {activeTab === "dashboard" && (
              <>
                {/* KPI Cards */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                >
                  {mockAdminStats.map((stat, index) => (
                    <KpiTile
                      key={index}
                      title={stat.title}
                      value={stat.value}
                      change={stat.change}
                      icon={stat.icon}
                      color={stat.color}
                    />
                  ))}
                </motion.div>

                {/* System Health */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
                >
                  <GlassCard>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        System Health
                      </h3>
                      <Server className="w-5 h-5 text-primary-500" />
                    </div>
                    <div className="space-y-4">
                      {mockSystemHealth.map((system, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                system.status === "Healthy"
                                  ? "bg-green-500"
                                  : system.status === "Warning"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                            />
                            <span className="text-foreground font-medium">
                              {system.service}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">
                              {system.uptime}
                            </div>
                            <div
                              className={`text-xs ${
                                system.status === "Healthy"
                                  ? "text-green-600"
                                  : system.status === "Warning"
                                  ? "text-yellow-600"
                                  : "text-red-600"
                              }`}
                            >
                              {system.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* Recent Activities */}
                  <GlassCard>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        Recent Activities
                      </h3>
                      <Activity className="w-5 h-5 text-primary-500" />
                    </div>
                    <div className="space-y-3">
                      {mockRecentActivities
                        .slice(0, 5)
                        .map((activity, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                            <div className="flex-1">
                              <p className="text-sm text-foreground">
                                {activity.description}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {activity.timestamp}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </>
            )}

            {activeTab === "users" && (
              <motion.div variants={itemVariants}>
                <GlassCard>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-foreground">
                      User Management
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
                        Add User
                      </Button>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-foreground"
                    />
                  </div>

                  {/* Users Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">
                            User
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">
                            Role
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">
                            Status
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">
                            Last Login
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockUserManagement.map((user, index) => (
                          <tr
                            key={index}
                            className="border-b border-border/50 hover:bg-white/5"
                          >
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm font-semibold">
                                    {user.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-foreground">
                                    {user.name}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {user.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  user.role === "Patient"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                    : user.role === "Provider"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                                }`}
                              >
                                {user.role}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  user.status === "Active"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                    : user.status === "Inactive"
                                    ? "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
                                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                }`}
                              >
                                {user.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">
                              {user.lastLogin}
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

            {activeTab === "providers" && (
              <motion.div variants={itemVariants}>
                <GlassCard>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-foreground">
                      Provider Applications
                    </h3>
                    <Button size="sm">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Review Applications
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {mockProviderApplications.map((application, index) => (
                      <div
                        key={index}
                        className="border border-border/50 rounded-lg p-4 hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                              <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">
                                {application.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {application.specialty}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {application.location}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span
                              className={`px-3 py-1 text-xs rounded-full ${
                                application.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                  : application.status === "Approved"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                              }`}
                            >
                              {application.status}
                            </span>
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {/* Other tabs can be implemented similarly */}
            {activeTab === "system" && (
              <motion.div variants={itemVariants}>
                <GlassCard>
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    System Health Monitor
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Database className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h4 className="font-semibold text-foreground">
                        Database
                      </h4>
                      <p className="text-sm text-green-600">Healthy</p>
                    </div>
                    <div className="text-center">
                      <Server className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h4 className="font-semibold text-foreground">
                        API Server
                      </h4>
                      <p className="text-sm text-green-600">Operational</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <h4 className="font-semibold text-foreground">
                        Security
                      </h4>
                      <p className="text-sm text-yellow-600">Monitoring</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
