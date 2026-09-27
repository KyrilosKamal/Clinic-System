--- README.md (原始)
# 🏥 MediCare — Clinic Management System

A modern, production-ready **Clinic Management System** built with React, TypeScript, Vite, and Tailwind CSS. Designed for healthcare professionals to manage patients, appointments, doctors, billing, and medical records — all in one place.

![MediCare Clinic System](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript) ![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)

## 🖼️ Preview

![MediCare Dashboard Preview](https://image.qwenlm.ai/generated-images/7685e7ef-f141-4000-81f8-1ad75dda8f51/_result.png)

---

## ✨ Features

### 📊 Dashboard
- Revenue overview with interactive area charts
- Department distribution pie chart
- Weekly appointments bar chart
- Real-time stats cards with trend indicators
- Today's schedule with priority indicators
- Recent patients & doctors on duty panels

### 👥 Patient Management
- Full CRUD operations (Create, Read, Update, Delete)
- Advanced search by name, ID, email, or phone
- Detailed patient profiles with:
  - Personal information & demographics
  - Blood group & allergies
  - Chronic conditions
  - Insurance provider & ID
  - Emergency contacts
  - Registration & visit history

### 📅 Appointments
- Schedule new appointments with full details
- Status workflow: Scheduled → In Progress → Completed
- Priority levels: Low, Medium, High, Urgent
- Room assignment & duration tracking
- Filter by status with summary cards
- Cancel or start appointments with one click

### 👨‍⚕️ Doctors
- Doctor profile cards with ratings & stats
- Filter by specialization
- Detailed profiles with:
  - Education & experience
  - Patient count & ratings
  - Schedule & availability status
  - Contact information

### 💳 Billing & Invoices
- Complete invoice management
- Line-item breakdowns with quantities
- Tax calculations (8%)
- Payment status tracking (Paid, Pending, Overdue, Partial)
- Revenue summary cards
- Detailed invoice view with print-ready layout

### 📋 Medical Records
- Patient medical history tracking
- Diagnosis & prescription management
- Vitals recording (BP, Heart Rate, Temperature, Weight, Height)
- Lab results documentation
- Follow-up date tracking
- Doctor's notes

### ⚙️ Settings
- Dark/Light mode toggle
- Clinic information management
- Notification preferences
- Working hours configuration
- Security settings (2FA, auto-logout)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **Recharts** | Interactive charts |
| **Lucide React** | Icon library |
| **React Hot Toast** | Toast notifications |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/KyrilosKamal/Clinic-System.git
cd Clinic-System

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
Clinic-System/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Appointments.tsx    # Appointment management
│   │   ├── Billing.tsx         # Invoice & payment management
│   │   ├── Dashboard.tsx       # Main dashboard with charts
│   │   ├── Doctors.tsx         # Doctor profiles & management
│   │   ├── Header.tsx          # Top navigation bar
│   │   ├── Patients.tsx        # Patient records management
│   │   ├── Records.tsx         # Medical records viewer
│   │   ├── Settings.tsx        # System settings
│   │   └── Sidebar.tsx         # Side navigation
│   ├── data.ts                 # Mock data & constants
│   ├── types.ts                # TypeScript type definitions
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Global styles
│   └── main.tsx                # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

---

## 🎨 Features Highlight

### 🌙 Dark Mode
Full dark mode support with smooth transitions. Toggle from the header or settings page.

### 📱 Responsive Design
Works seamlessly on desktop, tablet, and mobile devices with adaptive layouts and a collapsible sidebar.

### 🔔 Notifications
Built-in notification system with unread badges and categorized alerts (info, success, warning, error).

### 📊 Data Visualization
Interactive charts powered by Recharts for revenue tracking, department distribution, and appointment trends.

### 🔍 Global Search
Search across patients, doctors, appointments, and records from any page.

---

## 📊 Mock Data

The application comes pre-loaded with realistic mock data:
- **10 Patients** with complete medical profiles
- **8 Doctors** across various specializations
- **12 Appointments** with different statuses
- **6 Invoices** with payment tracking
- **6 Medical Records** with full clinical details
- **6 Notifications** of various types

---

## 🔐 Security Features

- Two-factor authentication toggle
- Auto-logout after inactivity
- Session management
- Role-based access (ready for implementation)

---

## 🗺️ Roadmap

- [ ] Backend API integration (Node.js/Express)
- [ ] Database connectivity (PostgreSQL/MongoDB)
- [ ] User authentication & authorization
- [ ] Prescription printing
- [ ] Lab report generation (PDF)
- [ ] Email/SMS notifications
- [ ] Multi-language support
- [ ] Inventory management
- [ ] Analytics & reporting module

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Kyrilos Kamal** — Cybersecurity Trainee & Developer

- GitHub: [@KyrilosKamal](https://github.com/KyrilosKamal)

---

<p align="center">
  Made with ❤️ for healthcare professionals
</p>


+++ README.md (修改后)
# 🏥 MediCare - Clinic Management System

A modern, production-ready **Clinic Management System** built with React, TypeScript, Vite, and Tailwind CSS. Designed for healthcare professionals to manage patients, appointments, doctors, billing, and medical records — all in one place.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

### 📊 Dashboard
- Revenue overview with interactive area charts
- Department distribution pie chart
- Weekly appointments bar chart
- Real-time stats cards with trend indicators
- Today's schedule with priority indicators
- Recent patients & doctors on duty panels

### 👥 Patient Management
- Full CRUD operations (Create, Read, Update, Delete)
- Advanced search by name, ID, email, or phone
- Detailed patient profiles with:
  - Personal information & demographics
  - Blood group & allergies
  - Chronic conditions
  - Insurance provider & ID
  - Emergency contacts
  - Registration & visit history

### 📅 Appointments
- Schedule new appointments with full details
- Status workflow: Scheduled → In Progress → Completed
- Priority levels: Low, Medium, High, Urgent
- Room assignment & duration tracking
- Filter by status with summary cards
- Cancel or start appointments with one click

### 👨‍⚕️ Doctors
- Doctor profile cards with ratings & stats
- Filter by specialization
- Detailed profiles with:
  - Education & experience
  - Patient count & ratings
  - Schedule & availability status
  - Contact information

### 💳 Billing & Invoices
- Complete invoice management
- Line-item breakdowns with quantities
- Tax calculations (8%)
- Payment status tracking (Paid, Pending, Overdue, Partial)
- Revenue summary cards
- Detailed invoice view with print-ready layout

### 📋 Medical Records
- Patient medical history tracking
- Diagnosis & prescription management
- Vitals recording (BP, Heart Rate, Temperature, Weight, Height)
- Lab results documentation
- Follow-up date tracking
- Doctor's notes

### ⚙️ Settings
- Dark/Light mode toggle
- Clinic information management
- Notification preferences
- Working hours configuration
- Security settings (2FA, auto-logout)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **Lucide React** | Icon library |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/KyrilosKamal/Clinic-System.git
cd Clinic-System

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
Clinic-System/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── Appointments.tsx    # Appointment management
│   │   ├── Billing.tsx         # Invoice & payment management
│   │   ├── Dashboard.tsx       # Main dashboard with charts
│   │   ├── Doctors.tsx         # Doctor profiles & management
│   │   ├── Header.tsx          # Top navigation bar
│   │   ├── Patients.tsx        # Patient records management
│   │   ├── Records.tsx         # Medical records viewer
│   │   ├── Settings.tsx        # System settings
│   │   └── Sidebar.tsx         # Side navigation
│   ├── data.ts                 # Mock data & constants
│   ├── types.ts                # TypeScript type definitions
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Global styles
│   └── main.tsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```

---

## 🎨 Features Highlight

### 🌙 Dark Mode
Full dark mode support with smooth transitions. Toggle from the header or settings page.

### 📱 Responsive Design
Works seamlessly on desktop, tablet, and mobile devices with adaptive layouts and a collapsible sidebar.

### 🔔 Notifications
Built-in notification system with unread badges and categorized alerts (info, success, warning, error).

### 📊 Data Visualization
Interactive SVG charts for revenue tracking, department distribution, and appointment trends.

### 🔍 Global Search
Search across patients, doctors, appointments, and records from any page.

---

## 📊 Mock Data

The application comes pre-loaded with realistic mock
- **6 Patients** with complete medical profiles
- **6 Doctors** across various specializations
- **6 Appointments** with different statuses
- **3 Invoices** with payment tracking
- **2 Medical Records** with full clinical details

---

## 🔐 Security Features

- Two-factor authentication toggle
- Auto-logout after inactivity
- Session management
- Role-based access (ready for implementation)

---

## 🗺️ Roadmap

- [ ] Backend API integration (Node.js/Express)
- [ ] Database connectivity (PostgreSQL/MongoDB)
- [ ] User authentication & authorization
- [ ] Prescription printing
- [ ] Lab report generation (PDF)
- [ ] Email/SMS notifications
- [ ] Multi-language support
- [ ] Inventory management
- [ ] Analytics & reporting module

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Kyrilos Kamal** — Cybersecurity Trainee & Developer

- GitHub: [@KyrilosKamal](https://github.com/KyrilosKamal)
- Repository: [Clinic-System](https://github.com/KyrilosKamal/Clinic-System)

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

<p align="center">
  Made with ❤️ for healthcare professionals
</p>
