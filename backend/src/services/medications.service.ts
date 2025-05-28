import { Medication, PrismaClient } from "@prisma/client";
import { ErrorType } from "../interfaces/enum/enum";
import { CreateMedicationDto, UpdateMedicationDto } from "../interfaces/interfaces.dto";
import { IMedicationService } from "../interfaces/methods.interfaces";
import { ServiceResponse } from "../interfaces/services.results/formatted.response";
import { ServiceResult } from "../interfaces/services.results/service.result";
import { createMedicationSchema, updateMedicationSchema } from "../validators/req.body.validators";
import { v4 } from "uuid";

export class MedicationService implements IMedicationService {

  prisma = new PrismaClient({
    log: ["error"]
  });

  async createMedication(medication: CreateMedicationDto): Promise<ServiceResult<null>> {
    
    let { error } = createMedicationSchema.validate(medication);

    if (error) return ServiceResponse.failure(ErrorType.VALIDATION, error.details[0].message);

    let create = await this.prisma.medication.create({
      data: {
        MedicationId: v4(),
        ...medication
      }
    });

    return create ? ServiceResponse.success("medication created successfully.") : ServiceResponse.failure(ErrorType.SERVER, "unable to create medication at the moment.")
  }
  async updateMedicationByMedicationId(MedicationId: string, medication: UpdateMedicationDto): Promise<ServiceResult<null>> {
    
    let { error } = updateMedicationSchema.validate(medication);

    if (error) return ServiceResponse.failure(ErrorType.VALIDATION, error.details[0].message);

    let update = await this.prisma.medication.update({
      where: {
        MedicationId
      },
      data: medication
    });

    return update ? ServiceResponse.success("medication updated successfully.") : ServiceResponse.failure(ErrorType.SERVER, "unable to update medication at the moment.");
  }
  async deleteMedicationByMedicationId(MedicationId: string): Promise<ServiceResult<null>> {
    
    let medicationExists = await this.prisma.medication.findUnique({
      where: {
        MedicationId
      }
    });

    if (!medicationExists) return ServiceResponse.failure(ErrorType.IDENTITY, "medication not found.");

    let deleteMedication = await this.prisma.medication.delete({
      where: {
        MedicationId
      }
    });

    return deleteMedication ? ServiceResponse.success("medication deleted successfully.") : ServiceResponse.failure(ErrorType.SERVER, "unable to delete medication at the moment.");

  }
  async getMedicationByMedicationId(MedicationId: string): Promise<ServiceResult<Medication>> {
 
    let medication = await this.prisma.medication.findUnique({
      where: {
        MedicationId
      }
    });

    if (!medication) return ServiceResponse.failure(ErrorType.IDENTITY, "medication not found.");

    return ServiceResponse.success("Medication found successfully.", medication);
  }
  async getAllMedications(): Promise<ServiceResult<Medication>> {
    
    let medications = await this.prisma.medication.findMany();

    if (!medications || medications.length === 0) return ServiceResponse.failure(ErrorType.IDENTITY, "no medications found.");

    return ServiceResponse.success("Medications found successfully.", undefined, medications);
  }
  
}