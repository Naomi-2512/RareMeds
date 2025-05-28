export interface CreateMedicationDto {
  Name: string;
  Description: string;
  Image?: string;
  StockQuantity?: number;
  StockLimit?: number;
  ManufactureDate?: Date;
  ExpirationDate?: Date;
  IsAvailable: boolean;
}

export interface UpdateMedicationDto {
  Name?: string;
  Description?: string;
  Image?: string;
  StockQuantity?: number;
  StockLimit?: number;
  ManufactureDate?: Date;
  ExpirationDate?: Date;
  IsAvailable?: boolean;
}

export interface MedicationResponseDto {
  MedicationId: string;
  Name: string;
  Description: string;
  Image?: string;
  StockQuantity?: number;
  StockLimit?: number;
  ManufactureDate?: Date;
  ExpirationDate?: Date;
  IsAvailable: boolean;
  DateCreated: Date;
}

export interface CreatePatientDto {
  Fullname: string;
  Mobile: string;
  NationalID?: string;
  Email?: string;
}

export interface PatientResponseDto {
  PatientId: string;
  Fullname: string;
  Mobile: string;
  NationalID?: string;
  Email?: string;
  DateCreated: Date;
}
export interface UpdatePatientDto {
  Fullname?: string;
  Mobile?: string;
  NationalID?: string;
  Email?: string;
}

export interface CreateCustomInquiryDto {
  ImageUpload?: string;
  Prescription: string;
  Description: string;
}

export interface UpdateCustomInquiryDto {
  ImageUpload?: string;
  Prescription?: string;
  Description?: string;
}

export interface CustomInquiryResponseDto {
  CustomInquiryId: string;
  PatientId: string;
  ImageUpload?: string;
  Prescription: string;
  Description: string;
  Status: string;
  DateCreated: Date;
}

export interface CreatePatientMedicationDto {
  PatientId: string;
  MedicationId: string;
  Quantity?: number;
}

export interface PatientMedicationResponseDto {
  PatientMedicationId: string;
  PatientId: string;
  MedicationId: string;
  Quantity?: number;
}


export interface CreatePharmacyDto {
  Name: string;
  Content: string;
  PharmacyThumbnail?: string;
  Location?: string;
  Email?: string;
  Phone?: string;
  Website?: string;
  LicenseNumber?: string;
}

export interface UpdatePharmacyDto {
  Name?: string;
  Content?: string;
  PharmacyThumbnail?: string;
  Location?: string;
  Email?: string;
  Phone?: string;
  Website?: string;
  LicenseNumber?: string;
}

export interface PharmacyResponseDto {
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

export interface CreateUserDto {
  Fullname: string;
  Mobile: string;
  Email: string;
  Password: string;
  Role: string;
}

export interface UpdateUserDto {
  Fullname?: string;
  Mobile?: string;
  Email?: string;
}

export interface UserResponseDto {
  UserId: string;
  Fullname: string;
  Mobile: string;
  Email: string;
  Role: string;
  IsActive: boolean;
  LastLoginAt?: Date;
  DateCreated: Date;
}

export interface CreateContactMessageDto {
  Fullname: string;
  Email: string;
  Mobile?: string;
  Message: string;
}

export interface ContactMessageResponseDto {
  MessageId: string;
  Fullname: string;
  Email: string;
  Mobile?: string;
  Message: string;
  DateSent: Date;
}

export interface LoginDto {
  Email: string;
  Password: string;
}

export interface PatientData extends CreatePatientDto, CreateCustomInquiryDto {}