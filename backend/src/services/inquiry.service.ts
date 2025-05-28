import { CustomInquiry, PrismaClient } from "@prisma/client";
import { ICustomInquiryService } from "../interfaces/methods.interfaces";
import { ServiceResult } from "../interfaces/services.results/service.result";
import { ErrorType } from "../interfaces/enum/enum";
import { ServiceResponse } from "../interfaces/services.results/formatted.response";

export class CustomInquiryService implements ICustomInquiryService {

  prisma = new PrismaClient({
    log: ["error"]
  });

  async getCustomInquiryByCustomInquiryId(CustomInquiryId: string): Promise<ServiceResult<CustomInquiry>> {

    let inquiry = await this.prisma.customInquiry.findUnique({
      where: {
        CustomInquiryId
      },
      include: {
        Patient: true
      }
    });

    return inquiry ? ServiceResponse.success("Inquiry retrieved successfully", inquiry) : ServiceResponse.failure(ErrorType.IDENTITY, "Inquiry not found.");
    
  }
  
  async getAllCustomInquiries(): Promise<ServiceResult<CustomInquiry>> {
    
    let inquiries = await this.prisma.customInquiry.findMany({
      include: {
        Patient: true
      }
    });

    return inquiries.length > 0 ? ServiceResponse.success("Inquiries retrieved successfully", undefined, inquiries) : ServiceResponse.failure(ErrorType.IDENTITY, "No inquiries found.");
  }
  
}