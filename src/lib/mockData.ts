// Mock data for HealthSync platform

export interface Patient {
  id: string;
  name: string;
  age: number;
  riskScore: "low" | "medium" | "high" | "critical";
  lastVisit: string;
  conditions: string[];
  avatar?: string;
}

export interface VitalReading {
  timestamp: string;
  glucose?: number;
  bloodPressure?: { systolic: number; diastolic: number };
  heartRate?: number;
  weight?: number;
  temperature?: number;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  nextDue: string;
  refillsLeft: number;
}

export interface ActivitySummary {
  date: string;
  steps: number;
  sleep: number;
  calories: number;
  activeMinutes: number;
}

export interface InsuranceMetric {
  label: string;
  value: string;
  change: number;
  trend: "up" | "down" | "stable";
}

export interface ChatMessage {
  id: string;
  message: string;
  sender: "user" | "ai";
  timestamp: string;
}

// Mock patients data
export const mockPatients: Patient[] = [
  {
    id: "1",
    name: " Sadani Rajapaksha",
    age: 55,
    riskScore: "high",
    lastVisit: "2025-11-15",
    conditions: ["Diabetes Type 2", "Hypertension", "High Cholesterol"],
  },
  {
    id: "2",
    name: "Kaveesh Wickramasinghe",
    age: 48,
    riskScore: "medium",
    lastVisit: "2025-11-15",
    conditions: ["Pre-diabetes", "Sleep Apnea"],
  },
  {
    id: "3",
    name: "Deshan Silva",
    age: 29,
    riskScore: "low",
    lastVisit: "2025-11-09",
    conditions: ["Seasonal Allergies"],
  },
  {
    id: "4",
    name: "Nimal fernando",
    age: 77,
    riskScore: "critical",
    lastVisit: "2025-11-07",
    conditions: ["Heart Disease", "COPD", "Diabetes Type 2"],
  },
  {
    id: "5",
    name: "Neha Wijesinghe",
    age: 56,
    riskScore: "medium",
    lastVisit: "2025-11-06",
    conditions: ["Hypertension", "Anxiety"],
  },
];

// Mock vital readings
export const mockVitals: VitalReading[] = [
  {
    timestamp: "2025-11-15T08:00:00Z",
    glucose: 142,
    bloodPressure: { systolic: 135, diastolic: 85 },
    heartRate: 78,
    weight: 165,
    temperature: 98.6,
  },
  {
    timestamp: "2025-11-15T08:00:00Z",
    glucose: 138,
    bloodPressure: { systolic: 132, diastolic: 82 },
    heartRate: 76,
    weight: 165.2,
    temperature: 98.4,
  },
  {
    timestamp: "2025-11-09T08:00:00Z",
    glucose: 145,
    bloodPressure: { systolic: 138, diastolic: 88 },
    heartRate: 80,
    weight: 165.5,
    temperature: 98.7,
  },
];

// Mock medications
export const mockMedications: Medication[] = [
  {
    id: "1",
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    nextDue: "2025-11-18T18:00:00Z",
    refillsLeft: 3,
  },
  {
    id: "2",
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    nextDue: "2025-11-17T09:00:00Z",
    refillsLeft: 2,
  },
  {
    id: "3",
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    nextDue: "2025-11-14T21:00:00Z",
    refillsLeft: 1,
  },
];

// Mock activity data
export const mockActivity: ActivitySummary[] = [
  {
    date: "2025-11-15",
    steps: 8500,
    sleep: 7.5,
    calories: 2100,
    activeMinutes: 45,
  },
  {
    date: "2025-11-14",
    steps: 9200,
    sleep: 8.2,
    calories: 2250,
    activeMinutes: 52,
  },
  {
    date: "2025-11-13",
    steps: 7800,
    sleep: 6.8,
    calories: 2050,
    activeMinutes: 38,
  },
  {
    date: "2025-11-12",
    steps: 10500,
    sleep: 7.9,
    calories: 2350,
    activeMinutes: 68,
  },
  {
    date: "2025-11-11",
    steps: 6200,
    sleep: 7.1,
    calories: 1950,
    activeMinutes: 32,
  },
  {
    date: "2025-11-10",
    steps: 8900,
    sleep: 8.0,
    calories: 2180,
    activeMinutes: 48,
  },
  {
    date: "2025-11-09",
    steps: 9600,
    sleep: 7.4,
    calories: 2220,
    activeMinutes: 55,
  },
];

// Mock insurance metrics
export const mockInsuranceMetrics: InsuranceMetric[] = [
  { label: "Total Members", value: "125,847", change: 2.4, trend: "up" },
  { label: "Claims This Month", value: "LKR 2.4M", change: -1.2, trend: "down" },
  { label: "Risk Score Average", value: "3.2", change: 0.1, trend: "up" },
  { label: "Prevention Rate", value: "84%", change: 3.8, trend: "up" },
  { label: "Cost Per Member", value: "$342", change: -2.1, trend: "down" },
  { label: "Satisfaction Score", value: "4.7/5", change: 0.2, trend: "up" },
];

// Mock chat messages
export const mockChatMessages: ChatMessage[] = [
  {
    id: "1",
    message: "Hello! I'm your AI Health Coach. How can I help you today?",
    sender: "ai",
    timestamp: "2025-11-15T10:00:00Z",
  },
  {
    id: "2",
    message:
      "I've been feeling a bit tired lately. What could be causing this?",
    sender: "user",
    timestamp: "2025-11-15T10:01:00Z",
  },
  {
    id: "3",
    message:
      "There are several factors that could contribute to fatigue. Based on your recent vitals, I notice your glucose levels have been slightly elevated. Let's explore some potential causes and solutions.",
    sender: "ai",
    timestamp: "2025-11-15T10:01:30Z",
  },
];

// Mock testimonials
export const mockTestimonials = [
  {
    id: "1",
    name: "Dr. Sudarshi Navaratne",
    role: "Cardiologist, Kandy teaching Hospital",
    content:
      "HealthSync has revolutionized how I monitor my patients. The real-time alerts have helped prevent several cardiac events.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: "2",
    name: "Piyumi Senanayake",
    role: "Patient",
    content:
      "Managing my diabetes has never been easier. The AI coach provides personalized insights that actually work.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: "3",
    name: "Kalum Priyanga",
    role: "Insurance Director, AIA Insurance",
    content:
      "The predictive analytics have reduced our claim costs by 23% while improving patient outcomes.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
];

// Mock FAQ data
export const mockFAQs = [
  {
    id: "1",
    question: "How does HealthSync protect my medical data?",
    answer:
      "HealthSync uses end-to-end encryption and HIPAA-compliant security measures to protect all medical data. We never share your information without explicit consent.",
  },
  {
    id: "2",
    question: "Can I use HealthSync with my existing medical devices?",
    answer:
      "Yes! HealthSync integrates with over 200 medical devices including glucose monitors, blood pressure cuffs, fitness trackers, and more.",
  },
  {
    id: "3",
    question: "How accurate is the AI health coaching?",
    answer:
      "Our AI is trained on millions of medical cases and continuously learns from patient outcomes. It provides evidence-based recommendations reviewed by medical professionals.",
  },
  {
    id: "4",
    question: "What happens if I miss taking my medication?",
    answer:
      "HealthSync will send gentle reminders and can notify your healthcare provider if medication adherence becomes a concern.",
  },
  {
    id: "5",
    question: "Is HealthSync covered by insurance?",
    answer:
      "Many insurance providers cover HealthSync as part of preventive care programs. Check with your insurance provider for specific coverage details.",
  },
];

// Chart data generators
export const generateGlucoseData = (days: number = 30) => {
  const data = [];
  const now = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    data.push({
      date: date.toISOString().split("T")[0],
      value: 120 + Math.random() * 60, // Random glucose 120-180
      target: 140,
    });
  }

  return data;
};

export const generateBloodPressureData = (days: number = 30) => {
  const data = [];
  const now = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    data.push({
      date: date.toISOString().split("T")[0],
      systolic: 120 + Math.random() * 40, // Random systolic 120-160
      diastolic: 70 + Math.random() * 25, // Random diastolic 70-95
    });
  }

  return data;
};

export const generateRiskDistribution = () => [
  { name: "Low Risk", value: 45, color: "#10B981" },
  { name: "Medium Risk", value: 30, color: "#F59E0B" },
  { name: "High Risk", value: 20, color: "#EF4444" },
  { name: "Critical Risk", value: 5, color: "#DC2626" },
];

export const generateMonthlyClaimsData = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months.map((month) => ({
    month,
    claims: Math.floor(Math.random() * 1000000) + 1500000, // 1.5M - 2.5M
    predicted: Math.floor(Math.random() * 1000000) + 1500000,
  }));
};

export const getRandomAvatar = () => {
  const avatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
};

// Admin Dashboard Mock Data
export const mockAdminStats = [
  {
    title: "Total Users",
    value: "12,543",
    change: 12.5,
    icon: "Users",
    color: "blue",
  },
  {
    title: "Active Providers",
    value: "1,247",
    change: 8.2,
    icon: "UserCheck",
    color: "green",
  },
  {
    title: "System Uptime",
    value: "99.9%",
    change: 0.1,
    icon: "Server",
    color: "purple",
  },
  {
    title: "Monthly Revenue",
    value: "$2.4M",
    change: 15.3,
    icon: "TrendingUp",
    color: "orange",
  },
];

export const mockSystemHealth = [
  {
    service: "API Gateway",
    status: "Healthy",
    uptime: "99.9%",
  },
  {
    service: "Database",
    status: "Healthy",
    uptime: "99.8%",
  },
  {
    service: "Authentication",
    status: "Warning",
    uptime: "98.5%",
  },
  {
    service: "File Storage",
    status: "Healthy",
    uptime: "99.7%",
  },
  {
    service: "Email Service",
    status: "Healthy",
    uptime: "99.4%",
  },
];

export const mockRecentActivities = [
  {
    description: "New provider Dr. Ruwangi Wijerathne registered",
    timestamp: "2 minutes ago",
  },
  {
    description: "System backup completed successfully",
    timestamp: "15 minutes ago",
  },
  {
    description: "Insurance claim batch processed (245 claims)",
    timestamp: "1 hour ago",
  },
  {
    description: "Security scan completed - no issues found",
    timestamp: "2 hours ago",
  },
  {
    description: "Database optimization completed",
    timestamp: "4 hours ago",
  },
  {
    description: "New patient Saman Bandara registered",
    timestamp: "6 hours ago",
  },
];

export const mockUserManagement = [
  {
    name: "Saman Bandara",
    email: "Samanbandara123@email.com",
    role: "Patient",
    status: "Active",
    lastLogin: "2 hours ago",
  },
  {
    name: "Dr. Ruwangi Wijerathne",
    email: "RuwangiWijerathne@hospital.com",
    role: "Provider",
    status: "Active",
    lastLogin: "30 minutes ago",
  },
  {
    name: "Kalum Priyanga",
    email: "Kalum.p@insurance.com",
    role: "Insurance",
    status: "Active",
    lastLogin: "1 day ago",
  },
  {
    name: "Santhi Perera ",
    email: "santhiperera12@email.com",
    role: "Patient",
    status: "Inactive",
    lastLogin: "1 week ago",
  },
  {
    name: "Dr. Sunil Batagoda",
    email: "Sunilbatagoda@clinic.com",
    role: "Provider",
    status: "Pending",
    lastLogin: "Never",
  },
];

export const mockProviderApplications = [
  {
    name: "Dr. Gayani Pathmathilake",
    specialty: "Cardiology",
    location: "Colombo general hospital",
    status: "Pending",
  },
  {
    name: "Dr. Anoma Thilakaratne",
    specialty: "Dermatology",
    location: "Asiri hospital, Kandy",
    status: "Approved",
  },
  {
    name: "Dr. Amanda Ranasinghe",
    specialty: "Pediatrics",
    location: "Apeksha hospital, Maharagama",
    status: "Pending",
  },
  {
    name: "Dr. Thushantha Jayawardena",
    specialty: "Orthopedics",
    location: "Sports Medicine Center, Malabe",
    status: "Rejected",
  },
];
