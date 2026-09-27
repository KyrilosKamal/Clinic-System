import { Patient, Doctor, Appointment, Invoice, MedicalRecord, Notification } from './types';

export const mockPatients: Patient[] = [
  { id: 'P001', name: 'John Smith', age: 34, gender: 'Male', phone: '(555) 123-4567', email: 'john.smith@email.com', bloodGroup: 'A+', address: '123 Main St, Springfield, IL', emergencyContact: '(555) 999-0001', allergies: ['Penicillin', 'Peanuts'], chronicConditions: ['Hypertension'], insuranceProvider: 'BlueCross', insuranceId: 'BC-2948571', registeredDate: '2023-01-15', lastVisit: '2024-12-10', avatar: 'JS' },
  { id: 'P002', name: 'Sarah Johnson', age: 28, gender: 'Female', phone: '(555) 234-5678', email: 'sarah.j@email.com', bloodGroup: 'O-', address: '456 Oak Ave, Riverside, CA', emergencyContact: '(555) 999-0002', allergies: ['Latex'], chronicConditions: [], insuranceProvider: 'Aetna', insuranceId: 'AE-3847291', registeredDate: '2023-02-20', lastVisit: '2024-12-12', avatar: 'SJ' },
  { id: 'P003', name: 'Michael Brown', age: 45, gender: 'Male', phone: '(555) 345-6789', email: 'mbrown@email.com', bloodGroup: 'B+', address: '789 Pine Rd, Lakewood, CO', emergencyContact: '(555) 999-0003', allergies: [], chronicConditions: ['Diabetes Type 2', 'High Cholesterol'], insuranceProvider: 'United Health', insuranceId: 'UH-5738291', registeredDate: '2023-03-05', lastVisit: '2024-12-08', avatar: 'MB' },
  { id: 'P004', name: 'Emily Davis', age: 52, gender: 'Female', phone: '(555) 456-7890', email: 'emily.d@email.com', bloodGroup: 'AB+', address: '321 Elm St, Hillside, TX', emergencyContact: '(555) 999-0004', allergies: ['Sulfa drugs'], chronicConditions: ['Arthritis'], insuranceProvider: 'Cigna', insuranceId: 'CG-8472910', registeredDate: '2023-04-12', lastVisit: '2024-12-11', avatar: 'ED' },
  { id: 'P005', name: 'Robert Wilson', age: 67, gender: 'Male', phone: '(555) 567-8901', email: 'rwilson@email.com', bloodGroup: 'O+', address: '654 Maple Dr, Brookfield, WI', emergencyContact: '(555) 999-0005', allergies: ['Aspirin'], chronicConditions: ['COPD', 'Heart Disease'], insuranceProvider: 'Medicare', insuranceId: 'MC-1928374', registeredDate: '2023-05-08', lastVisit: '2024-12-09', avatar: 'RW' },
];

export const mockDoctors: Doctor[] = [
  { id: 'D001', name: 'Dr. Amanda Foster', specialization: 'Cardiology', phone: '(555) 111-2222', email: 'afoster@medicare.com', schedule: 'Mon-Fri 8:00 AM - 4:00 PM', status: 'Available', avatar: '👩‍⚕️', experience: 12, rating: 4.9, patientsCount: 245, education: 'MD - Johns Hopkins University', bio: 'Board-certified cardiologist specializing in preventive cardiology.' },
  { id: 'D002', name: 'Dr. James Mitchell', specialization: 'Orthopedics', phone: '(555) 222-3333', email: 'jmitchell@medicare.com', schedule: 'Mon-Sat 9:00 AM - 5:00 PM', status: 'In Surgery', avatar: '👨‍⚕️', experience: 15, rating: 4.8, patientsCount: 312, education: 'MD - Mayo Clinic', bio: 'Expert orthopedic surgeon with focus on sports medicine.' },
  { id: 'D003', name: 'Dr. Rachel Kim', specialization: 'Pediatrics', phone: '(555) 333-4444', email: 'rkim@medicare.com', schedule: 'Mon-Fri 7:00 AM - 3:00 PM', status: 'Available', avatar: '👩‍⚕️', experience: 8, rating: 4.9, patientsCount: 189, education: 'MD - Stanford University', bio: 'Compassionate pediatrician dedicated to comprehensive care.' },
  { id: 'D004', name: 'Dr. Thomas Chen', specialization: 'Dermatology', phone: '(555) 444-5555', email: 'tchen@medicare.com', schedule: 'Tue-Sat 10:00 AM - 6:00 PM', status: 'Available', avatar: '👨‍⚕️', experience: 10, rating: 4.7, patientsCount: 198, education: 'MD - Harvard Medical School', bio: 'Dermatologist specializing in cosmetic dermatology.' },
  { id: 'D005', name: 'Dr. Maria Rodriguez', specialization: 'Neurology', phone: '(555) 555-6666', email: 'mrodriguez@medicare.com', schedule: 'Mon-Thu 8:00 AM - 4:00 PM', status: 'Off Duty', avatar: '👩‍⚕️', experience: 18, rating: 4.9, patientsCount: 156, education: 'MD - Columbia University', bio: 'Leading neurologist with expertise in stroke care.' },
];

export const mockAppointments: Appointment[] = [
  { id: 'A001', patientName: 'John Smith', patientId: 'P001', doctorName: 'Dr. Amanda Foster', doctorId: 'D001', date: '2024-12-15', time: '09:00 AM', duration: 30, status: 'Scheduled', type: 'Check-up', notes: 'Regular annual check-up', priority: 'Medium', room: 'Room 101' },
  { id: 'A002', patientName: 'Sarah Johnson', patientId: 'P002', doctorName: 'Dr. James Mitchell', doctorId: 'D002', date: '2024-12-15', time: '10:30 AM', duration: 45, status: 'In Progress', type: 'Follow-up', notes: 'Post-surgery follow-up', priority: 'High', room: 'Room 205' },
  { id: 'A003', patientName: 'Michael Brown', patientId: 'P003', doctorName: 'Dr. Rachel Kim', doctorId: 'D003', date: '2024-12-15', time: '11:00 AM', duration: 30, status: 'Scheduled', type: 'Consultation', notes: 'New patient consultation', priority: 'Medium', room: 'Room 103' },
];

export const mockInvoices: Invoice[] = [
  { id: 'INV-001', patientName: 'John Smith', patientId: 'P001', doctorName: 'Dr. Amanda Foster', date: '2024-12-10', dueDate: '2024-12-25', items: [{ description: 'Consultation Fee', quantity: 1, unitPrice: 150, total: 150 }, { description: 'Blood Pressure Check', quantity: 1, unitPrice: 45, total: 45 }], subtotal: 195, tax: 15.60, total: 210.60, status: 'Paid', method: 'Insurance' },
  { id: 'INV-002', patientName: 'Sarah Johnson', patientId: 'P002', doctorName: 'Dr. James Mitchell', date: '2024-12-08', dueDate: '2024-12-22', items: [{ description: 'Surgery', quantity: 1, unitPrice: 8500, total: 8500 }], subtotal: 8500, tax: 680, total: 9180, status: 'Pending', method: 'Insurance' },
];

export const mockMedicalRecords: MedicalRecord[] = [
  { id: 'MR-001', patientId: 'P001', patientName: 'John Smith', doctorName: 'Dr. Amanda Foster', date: '2024-12-10', diagnosis: 'Essential Hypertension - Stage 1', prescription: ['Lisinopril 10mg daily', 'Aspirin 81mg daily'], notes: 'Blood pressure slightly elevated. Continue current medication.', vitals: { bp: '138/88', heartRate: 78, temperature: 98.4, weight: 185, height: 71 }, followUp: '2025-01-10' },
];

export const mockNotifications: Notification[] = [
  { id: 'N001', title: 'New Appointment', message: 'John Smith scheduled a check-up for Dec 15', type: 'info', time: '5 min ago', read: false },
  { id: 'N002', title: 'Payment Received', message: 'Invoice INV-001 paid by John Smith', type: 'success', time: '1 hour ago', read: false },
];

export const revenueData = [
  { month: 'Jul', revenue: 42000 }, { month: 'Aug', revenue: 48000 },
  { month: 'Sep', revenue: 45000 }, { month: 'Oct', revenue: 52000 },
  { month: 'Nov', revenue: 58000 }, { month: 'Dec', revenue: 61000 },
];

export const departmentData = [
  { name: 'Cardiology', value: 28, color: '#10b981' },
  { name: 'Orthopedics', value: 22, color: '#3b82f6' },
  { name: 'Pediatrics', value: 18, color: '#8b5cf6' },
  { name: 'General', value: 32, color: '#f59e0b' },
];

export const weeklyAppointments = [
  { day: 'Mon', count: 24 }, { day: 'Tue', count: 32 }, { day: 'Wed', count: 28 },
  { day: 'Thu', count: 36 }, { day: 'Fri', count: 30 }, { day: 'Sat', count: 18 }, { day: 'Sun', count: 8 },
];
