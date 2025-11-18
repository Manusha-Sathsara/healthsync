"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  AlertTriangle,
  Activity,
  TrendingUp,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  Clock,
  Heart,
  Brain,
  Stethoscope,
  FileText,
  Bell,
  Settings,
  MoreVertical,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import KpiTile from "@/components/KpiTile";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { mockPatients, Patient } from "@/lib/mockData";
import { getRiskColor, getRiskBgColor, formatDate } from "@/lib/utils";

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
        <Stethoscope className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-semibold">Dr. Dinithi Ayesha</h3>
        <p className="text-sm text-muted-foreground">Cardiologist</p>
      </div>
    </div>

    <nav className="space-y-2">
      {[
        { icon: Activity, label: "Dashboard", id: "dashboard" },
        { icon: Users, label: "Patients", id: "patients" },
        { icon: AlertTriangle, label: "Alerts", id: "alerts" },
        { icon: Calendar, label: "Appointments", id: "appointments" },
        { icon: FileText, label: "Reports", id: "reports" },
        { icon: Brain, label: "AI Insights", id: "insights" },
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
      <h1 className="text-2xl font-bold">Provider Dashboard</h1>
      <p className="text-muted-foreground">
        Monitor and manage your patients with AI-powered insights
      </p>
    </div>
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="sm">
        <Bell className="w-4 h-4" />
        <span className="ml-2">3</span>
      </Button>
      <Button variant="ghost" size="sm">
        <Download className="w-4 h-4" />
      </Button>
      <Button variant="primary" size="sm">
        Add Patient
      </Button>
    </div>
  </div>
);

const PatientModal = ({
  patient,
  isOpen,
  onClose,
}: {
  patient: Patient | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !patient) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Patient Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg">
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-linear-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {patient.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{patient.name}</h3>
              <p className="text-muted-foreground">
                Age: {patient.age} • Patient ID: {patient.id}
              </p>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRiskBgColor(
                  patient.riskScore
                )}`}
              >
                {patient.riskScore.toUpperCase()} RISK
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Conditions</h4>
              <ul className="space-y-1">
                {patient.conditions.map((condition, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {condition}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Last Visit</h4>
              <p className="text-sm text-muted-foreground">
                {formatDate(patient.lastVisit)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <KpiTile
              title="Heart Rate"
              value="78 BPM"
              trend="stable"
              color="danger"
            />
            <KpiTile
              title="Blood Pressure"
              value="140/85"
              trend="up"
              change={5.2}
              color="warning"
            />
            <KpiTile
              title="Glucose"
              value="152 mg/dL"
              trend="down"
              change={-3.1}
              color="primary"
            />
          </div>

          <div className="flex space-x-3">
            <Button className="flex-1">Schedule Appointment</Button>
            <Button variant="secondary" className="flex-1">
              Send Message
            </Button>
            <Button variant="outline">View Full History</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ProviderDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterRisk, setFilterRisk] = useState<string>("all");
  const [activeTab, setActiveTab] = useState("dashboard");

  const filteredPatients = mockPatients.filter((patient) => {
    const matchesSearch = patient.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterRisk === "all" || patient.riskScore === filterRisk;
    return matchesSearch && matchesFilter;
  });

  const openPatientModal = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

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
                title="Total Patients"
                value="247"
                trend="up"
                change={5.2}
                icon={<Users className="w-5 h-5" />}
                color="primary"
                subtitle="Active patients"
              />
              <KpiTile
                title="High Risk Alerts"
                value="12"
                trend="down"
                change={-8.1}
                icon={<AlertTriangle className="w-5 h-5" />}
                color="warning"
                subtitle="Require attention"
              />
              <KpiTile
                title="Remote Monitoring"
                value="89%"
                trend="up"
                change={2.3}
                icon={<Activity className="w-5 h-5" />}
                color="success"
                subtitle="Compliance rate"
              />
              <KpiTile
                title="Avg Response Time"
                value="4.2 min"
                trend="down"
                change={-12.5}
                icon={<Clock className="w-5 h-5" />}
                color="accent"
                subtitle="Emergency alerts"
              />
            </div>

            {/* Patient Risk List */}
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">
                  Patient Risk Assessment
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Search patients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      icon={<Search className="w-4 h-4" />}
                      className="w-64"
                    />
                  </div>
                  <select
                    value={filterRisk}
                    onChange={(e) => setFilterRisk(e.target.value)}
                    className="px-3 py-2 bg-white dark:bg-gray-800 border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Risk Levels</option>
                    <option value="low">Low Risk</option>
                    <option value="medium">Medium Risk</option>
                    <option value="high">High Risk</option>
                    <option value="critical">Critical Risk</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Patient
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Age
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Risk Score
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Conditions
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Last Visit
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((patient) => (
                      <tr
                        key={patient.id}
                        className="border-b border-border hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-linear-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                              {patient.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <span className="font-medium">{patient.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {patient.age}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRiskBgColor(
                              patient.riskScore
                            )}`}
                          >
                            {patient.riskScore.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          <span className="truncate max-w-xs block">
                            {patient.conditions.join(", ")}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {formatDate(patient.lastVisit)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => openPatientModal(patient)}
                              className="p-1 hover:bg-muted rounded-lg transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 hover:bg-muted rounded-lg transition-colors">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>

            {/* Early Warning System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <span>Early Warning Alerts</span>
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      patient: "Sadani Gayasha",
                      alert: "Irregular heart rhythm detected",
                      severity: "high",
                      time: "10 min ago",
                    },
                    {
                      patient: "Kaveesha Wickramasinghe",
                      alert: "Blood glucose spike",
                      severity: "medium",
                      time: "15 min ago",
                    },
                    {
                      patient: "Deshan Silva",
                      alert: "Missed medication reminder",
                      severity: "low",
                      time: "2 hour ago",
                    },
                  ].map((alert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            alert.severity === "high"
                              ? "bg-red-500"
                              : alert.severity === "medium"
                              ? "bg-yellow-500"
                              : "bg-blue-500"
                          }`}
                        />
                        <div>
                          <p className="font-medium text-sm">{alert.patient}</p>
                          <p className="text-xs text-muted-foreground">
                            {alert.alert}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          {alert.time}
                        </p>
                        <Button size="sm" variant="ghost" className="text-xs">
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  <span>AI Insights</span>
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Trend Analysis</p>
                        <p className="text-xs text-muted-foreground">
                          Diabetes patients showing 15% improvement in glucose
                          control this month.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Predictive Alert</p>
                        <p className="text-xs text-muted-foreground">
                          3 patients at risk of cardiac events in next 30 days -
                          recommend preventive care.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Brain className="w-5 h-5 text-purple-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Recommendation</p>
                        <p className="text-xs text-muted-foreground">
                          Consider increasing monitoring frequency for high-risk
                          patients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>

      <PatientModal
        patient={selectedPatient}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
