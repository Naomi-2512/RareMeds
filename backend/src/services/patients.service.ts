import { Patient, PrismaClient } from "@prisma/client";
import { CreateCustomInquiryDto, CreatePatientDto, PatientData, UpdatePatientDto } from "../interfaces/interfaces.dto";
import { IPatientService } from "../interfaces/methods.interfaces";
import { ServiceResult } from "../interfaces/services.results/service.result";
import { createCustomInquirySchema, createPatientSchema } from "../validators/req.body.validators";
import { ServiceResponse } from "../interfaces/services.results/formatted.response";
import { v4 } from "uuid";
import { ErrorType } from "../interfaces/enum/enum";

export class PatientService implements IPatientService {

  prisma = new PrismaClient({
    log: ["error"]
  });

  async createPatient(patient: PatientData): Promise<ServiceResult<null>> {

    let newPatient: CreatePatientDto = ({
      Fullname: patient.Fullname,
      Mobile: patient.Mobile,
      NationalID: patient.NationalID,
      Email: patient.Email
    });

    let newCustomInquiry: CreateCustomInquiryDto = ({
      ImageUpload: patient.ImageUpload,
      Prescription: patient.Prescription,
      Description: patient.Description
    });
    
    let { error } = createPatientSchema.validate(newPatient);

    if (error) return ServiceResponse.failure("Validation Error", error.details[0].message);

    let phoneExists = await this.prisma.patient.findUnique({
      where: {
        Mobile: patient.Mobile
      }
    });

    if (phoneExists) {

      let { error } = createCustomInquirySchema.validate(newCustomInquiry);

      if (error) return ServiceResponse.failure("Validation Error", error.details[0].message);

      let inquiry = await this.prisma.customInquiry.create({
        data: {
          CustomInquiryId: v4(),
          PatientId: phoneExists.PatientId,
          ...newCustomInquiry
        }
      });

      return inquiry ? ServiceResponse.success("Inquiry submitted successfully. We'll get to you soon.") : ServiceResponse.failure("Server Error", "Unable to create inquiry, try again later.");
    }

    let createPatient = await this.prisma.patient.create({
      data: {
        PatientId: v4(),
        ...newPatient
      }
    });

    if (!createPatient) return ServiceResponse.failure("Server Error", "unable to register, try again later.");

    let createInquiry = await this.prisma.customInquiry.create({
      data: {
        CustomInquiryId: v4(),
        PatientId: createPatient.PatientId,
        ...newCustomInquiry
      }
    });

    return createInquiry ? ServiceResponse.success("Inquiry submitted successfully. We'll get to you soon.") : ServiceResponse.failure("Server Error", "Unable to create inquiry, try again later.");
  }
  async updatePatientByPatientId(PatientId: string, patient: UpdatePatientDto): Promise<ServiceResult<null>> {
    
    let patientExists = await this.prisma.patient.findUnique({
      where: {
        PatientId
      }
    });

    if (!patientExists) return ServiceResponse.failure(ErrorType.ACCESS, "patient specified not found.");

    let emailExists = await this.prisma.patient.findUnique({
      where: {
        Email: patient.Email,
        NOT: {
          PatientId: patientExists.PatientId
        }
      }
    });

    if (emailExists) return ServiceResponse.failure(ErrorType.IDENTITY, "email already exists.");

    let updatePatient = await this.prisma.patient.update({
      where: {
        PatientId: patientExists.PatientId
      },
      data: {
        ...patient
      }
    });

    return updatePatient ? ServiceResponse.success("patient updated successfully.") : ServiceResponse.failure(ErrorType.SERVER, "unable to update patient at the moment.")
  }
  async deletePatientByPatientId(PatientId: string): Promise<ServiceResult<null>> {

    let patientExists = await this.prisma.patient.findUnique({
      where: {
        PatientId
      }
    });

    if (!patientExists) return ServiceResponse.failure(ErrorType.IDENTITY, "patient not found.");

    let deletePatient = await this.prisma.patient.delete({
      where: {
        PatientId
      }
    });

    return deletePatient ? ServiceResponse.success("patient deleted successfully.") : ServiceResponse.failure(ErrorType.SERVER, "unable to delete patient at the moment.");
  }
  async getPatientByPatientId(PatientId: string): Promise<ServiceResult<Patient>> {

    let patient = await this.prisma.patient.findUnique({
      where: {
        PatientId
      }
    });

    if (!patient) return ServiceResponse.failure(ErrorType.IDENTITY, "patient not found.");

    return ServiceResponse.success("Patient found successfully.", patient);
  }
  async getAllPatients(): Promise<ServiceResult<Patient>> {

    let patients = await this.prisma.patient.findMany();

    if (!patients || patients.length === 0) return ServiceResponse.failure(ErrorType.IDENTITY, "no patients found.");

    return ServiceResponse.success("Patients found successfully.", undefined, patients);
  }
  
}