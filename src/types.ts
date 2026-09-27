export type Page = 'dashboard' | 'patients' | 'appointments' | 'doctors' | 'billing' | 'records' | 'settings';
export type Gender = 'Male' | 'Female' | 'Other';
export type AppointmentStatus = 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled' | 'No Show';
export type DoctorStatus = 'Available' | 'Busy' | 'In Surgery' | 'Off Duty';
export type PaymentStatus = 'Paid' | 'Pending' | 'Overdue' | 'Partial';
export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface Patient {
  id: string; name: string; age: number; gender: Gender; phone: string; email: string;
  bloodGroup: BloodGroup; address: string; emergencyContact: string; allergies: string[];
  chronicConditions: string[]; insuranceProvider: string; insuranceId: string;
  registeredDate: string; lastVisit: string; avatar: string;
}

export interface Doctor {
  id: string; name: string; specialization: string; phone: string; email: string;
  schedule: string; status: DoctorStatus; avatar: string; experience: number;
  rating: number; patientsCount: number; education: string; bio: string;
}

export interface Appointment {
  id: string; patientName: string; patientId: string; doctorName: string; doctorId: string;
  date: string; time: string; duration: number; status: AppointmentStatus; type: string;
  notes: string; priority: 'Low' | 'Medium' | 'High' | 'Urgent'; room: string;
}

export interface Invoice {
  id: string; patientName: string; patientId: string; doctorName: string; date: string;
  dueDate: string; items: InvoiceItem[]; subtotal: number; tax: number; total: number;
  status: PaymentStatus; method: string;
}

export interface InvoiceItem { description: string; quantity: number; unitPrice: number; total: number; }

export interface MedicalRecord {
  id: string; patientId: string; patientName: string; doctorName: string; date: string;
  diagnosis: string; prescription: string[]; notes: string;
  vitals: { bp: string; heartRate: number; temperature: number; weight: number; height: number; };
  labResults?: string; followUp?: string;
}

export interface Notification {
  id: string; title: string; message: string; type: 'info' | 'success' | 'warning' | 'error';
  time: string; read: boolean;
}
