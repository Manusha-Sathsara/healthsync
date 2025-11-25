# HealthSync

**HealthSync** is a modern, comprehensive healthcare platform designed to bridge the gap between patients, providers, insurance companies, and administrators. Built with the latest web technologies, it offers a seamless, secure, and interactive experience for all stakeholders in the healthcare ecosystem.

![HealthSync Banner](/healthsync.png)

## 🚀 Features

HealthSync is organized into four dedicated portals, each tailored to specific user needs:

### 🏥 Patient Portal
- **Personal Health Dashboard**: View vital stats, upcoming appointments, and medication schedules.
- **Appointment Booking**: Easy scheduling with preferred doctors.
- **Medical Records**: Secure access to history, lab results, and prescriptions.

### 👨‍⚕️ Provider Portal
- **Patient Management**: Efficiently track patient lists and daily schedules.
- **Digital Charting**: Streamlined documentation and notes.
- **Telehealth Integration**: Built-in tools for virtual consultations.

### 🛡️ Insurance Portal
- **Claims Processing**: Real-time status tracking and adjudication.
- **Policy Management**: View benefits, coverage details, and eligibility.
- **Provider Network**: Search and management of in-network facilities.

### ⚙️ Admin Portal
- **System Analytics**: High-level overview of platform usage and performance.
- **User Management**: Role-based access control and user administration.
- **Configuration**: Global settings and platform customization.

## 🛠️ Tech Stack

This project is built with a cutting-edge stack focused on performance, scalability, and developer experience:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **UI Components**: Custom-built, accessible components (Headless UI inspired)

## 📦 Getting Started

Follow these steps to get the project running locally:

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/healthsync.git
   cd healthsync
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/                # App Router pages and layouts
│   ├── (portals)/      # Organized by feature (patient, provider, etc.)
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
│   ├── ui/             # Basic atoms (Button, Input, etc.)
│   └── features/       # Complex feature-specific components
├── lib/                # Utilities and helper functions
└── styles/             # Global styles and Tailwind config
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
