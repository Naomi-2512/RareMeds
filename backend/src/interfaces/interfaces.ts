export interface Medication {
  MedicationId: string;
  Name: string;
  Description: string;
  Image?: string;
  DateCreated: Date;
  StockQuantity?: number;
  StockLimit?: number;
  ManufactureDate?: Date;
  ExpirationDate?: Date;
  IsAvailable: boolean;
}

export interface Patient {
  PatientId: string;
  Fullname: string;
  Mobile: string;
  NationalID?: string;
  Email?: string;
  DateCreated: Date;
  CustomInquiries?: CustomInquiry[];
  PatientMedications?: PatientMedications[];
}

export interface CustomInquiry {
  CustomInquiryId: string;
  PatientId: string;
  ImageUpload?: string;
  Prescription: string;
  Description: string;
  Status: string;
  DateCreated: Date;
  Patient?: Patient;
}

export interface PatientMedications {
  PatientMedicationId: string;
  PatientId: string;
  MedicationId: string;
  Quantity?: number;
  Patient?: Patient;
  Medication?: Medication;
}

export interface Pharmacy {
  PharmacyId: string;
  Name: string;
  Content: string;
  PharmacyThumbnail?: string;
  Location?: string;
  Email?: string;
  Phone?: string;
  Website?: string;
  LicenseNumber?: string;
  DateCreated: Date;
}

export interface User {
  UserId: string;
  Fullname: string;
  Mobile: string;
  Email: string;
  Password: string;
  Role: string;
  IsActive: boolean;
  LastLoginAt?: Date;
  DateCreated: Date;
}

export interface ContactMessage {
  MessageId: string;
  Fullname: string;
  Email: string;
  Mobile?: string;
  Message: string;
  DateSent: Date;
}
