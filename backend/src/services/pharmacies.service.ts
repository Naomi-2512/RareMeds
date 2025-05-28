import { Pharmacy, PrismaClient } from "@prisma/client";
import { ErrorType } from "../interfaces/enum/enum";
import { CreatePharmacyDto, UpdatePharmacyDto } from "../interfaces/interfaces.dto";
import { IPharmacyService } from "../interfaces/methods.interfaces";
import { ServiceResponse } from "../interfaces/services.results/formatted.response";
import { ServiceResult } from "../interfaces/services.results/service.result";
import { createPharmacySchema, updatePharmacySchema } from "../validators/req.body.validators";
import { v4 } from "uuid";

export class PharmacyService implements IPharmacyService {

  prisma = new PrismaClient({
    log: ["error"]
  });

  async createPharmacy(pharmacy: CreatePharmacyDto): Promise<ServiceResult<null>> {
    
    let { error } = createPharmacySchema.validate(pharmacy);

    if (error) return ServiceResponse.failure(ErrorType.VALIDATION, error.details[0].message);

    let createPharmacy = await this.prisma.pharmacy.create({
      data: {
        PharmacyId: v4(),
        ...pharmacy
      }
    });

    return createPharmacy ? ServiceResponse.success("request submitted successfully. We'll get back to you.") : ServiceResponse.failure(ErrorType.SERVER, "unable to submit request at the moment.")
  }
  async updatePharmacyByPharmacyId(PharmacyId: string, pharmacy: UpdatePharmacyDto): Promise<ServiceResult<null>> {
    
    let { error } = updatePharmacySchema.validate(pharmacy);

    if (error) return ServiceResponse.failure(ErrorType.VALIDATION, error.details[0].message);

    let updatePharmacy = await this.prisma.pharmacy.update({
      where: {
        PharmacyId
      },
      data: pharmacy
    });

    return updatePharmacy ? ServiceResponse.success("pharmacy updated successfully.") : ServiceResponse.failure(ErrorType.SERVER, "unable to update pharmacy at the moment.");
  }
  async deletePharmacyByPharmacyId(PharmacyId: string): Promise<ServiceResult<null>> {
    
    let pharmacyExists = await this.prisma.pharmacy.findUnique({
      where: {
        PharmacyId
      }
    });

    if (!pharmacyExists) return ServiceResponse.failure(ErrorType.IDENTITY, "pharmacy not found.");

    let deletePharmacy = await this.prisma.pharmacy.delete({
      where: {
        PharmacyId
      }
    });

    return deletePharmacy ? ServiceResponse.success("pharmacy deleted successfully.") : ServiceResponse.failure(ErrorType.SERVER, "unable to delete pharmacy at the moment.");
  }
  async getPharmacyByPharmacyId(PharmacyId: string): Promise<ServiceResult<Pharmacy>> {
    
    let pharmacy = await this.prisma.pharmacy.findUnique({
      where: {
        PharmacyId
      }
    });

    if (!pharmacy) return ServiceResponse.failure(ErrorType.IDENTITY, "pharmacy not found.");

    return ServiceResponse.success("pharmacy retrieved successfully.", pharmacy);
  }
  async getAllPharmacies(): Promise<ServiceResult<Pharmacy>> {
    
    let pharmacies = await this.prisma.pharmacy.findMany();

    if (!pharmacies || pharmacies.length === 0) return ServiceResponse.failure(ErrorType.IDENTITY, "no pharmacies found.");

    return ServiceResponse.success("pharmacies retrieved successfully.", undefined, pharmacies);
  }

}