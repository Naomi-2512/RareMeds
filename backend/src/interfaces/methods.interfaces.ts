import { ContactMessage, CustomInquiry, Medication, Patient, Pharmacy, User } from "@prisma/client";
import { CreateMedicationDto, CreatePatientDto, CreatePharmacyDto, LoginDto, PatientData, UpdateMedicationDto, UpdatePatientDto, UpdatePharmacyDto, UpdateUserDto } from "./interfaces.dto";
import { ServiceResult } from "./services.results/service.result";


//medication interface
export interface IMedicationService {
  createMedication(medication: CreateMedicationDto): Promise<ServiceResult<null>>;
  updateMedicationByMedicationId(MedicationId: string, medication: UpdateMedicationDto): Promise<ServiceResult<null>>;
  deleteMedicationByMedicationId(MedicationId: string): Promise<ServiceResult<null>>;
  getMedicationByMedicationId(MedicationId: string): Promise<ServiceResult<Medication>>;
  getAllMedications(): Promise<ServiceResult<Medication>>;
}

//patient interface
export interface IPatientService {
  createPatient(patient: PatientData): Promise<ServiceResult<null>>;
  updatePatientByPatientId(PatientId: string, patient: UpdatePatientDto): Promise<ServiceResult<null>>;
  deletePatientByPatientId(PatientId: string): Promise<ServiceResult<null>>;
  getPatientByPatientId(PatientId: string): Promise<ServiceResult<Patient>>;
  getAllPatients(): Promise<ServiceResult<Patient>>;
}

//custom inquiry interface
export interface ICustomInquiryService {
  getCustomInquiryByCustomInquiryId(CustomInquiryId: string): Promise<ServiceResult<CustomInquiry>>;
  getAllCustomInquiries(): Promise<ServiceResult<CustomInquiry>>;
}

//user interface
export interface IUserService {
  createUser(user: User): Promise<ServiceResult<null>>;
  updateUserByUserId(UserId: string, user: UpdateUserDto): Promise<ServiceResult<null>>;
  deleteUserByUserId(UserId: string): Promise<ServiceResult<null>>;
  getUserByUserId(UserId: string): Promise<ServiceResult<User>>;
  getAllUsers(): Promise<ServiceResult<User>>;
  authenticateUser(email: string, password: string): Promise<ServiceResult<null>>; // Returns token and role in actual implementation
}

//pharmacy interface
export interface IPharmacyService {
  createPharmacy(pharmacy: CreatePharmacyDto): Promise<ServiceResult<null>>;
  updatePharmacyByPharmacyId(PharmacyId: string, pharmacy: UpdatePharmacyDto): Promise<ServiceResult<null>>;
  deletePharmacyByPharmacyId(PharmacyId: string): Promise<ServiceResult<null>>;
  getPharmacyByPharmacyId(PharmacyId: string): Promise<ServiceResult<Pharmacy>>;
  getAllPharmacies(): Promise<ServiceResult<Pharmacy>>;
}

//inquiry interface
// export interface IInquiryMedicationService {
//   createInquiryMedication(inquiryMedication: InquiryMedication): Promise<ServiceResult<null>>;
//   getInquiryMedicationByInquiryMedicationId(InquiryMedicationId: string): Promise<ServiceResult<InquiryMedication>>;
//   getAllInquiryMedications(): Promise<ServiceResult<InquiryMedication>>;
// }

//contact interface 

export interface IContactMessageService {
  createContactMessage(contactMessage: ContactMessage): Promise<ServiceResult<null>>;
}

//auth interface
export interface IAuthService {
  login(login: LoginDto): Promise<ServiceResult<null>>;
  logout(): Promise<ServiceResult<null>>;
}