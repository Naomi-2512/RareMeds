import { PrismaClient, User } from "@prisma/client";
import { CreateUserDto, UpdateUserDto } from "../interfaces/interfaces.dto";
import { IUserService } from "../interfaces/methods.interfaces";
import { ServiceResult } from "../interfaces/services.results/service.result";
import { createUserSchema } from "../validators/req.body.validators";
import { ServiceResponse } from "../interfaces/services.results/formatted.response";
import { v4 } from "uuid";

export class UserService implements IUserService {
  prisma = new PrismaClient({
    log: ["error", "warn", "info"]
  });

  async createUser(user: CreateUserDto): Promise<ServiceResult<null>> {
    
    let { error } = createUserSchema.validate(user);
    
    if (error) {
      return ServiceResponse.failure<null>("Invalid Data", error.details[0].message);
    }

    let emailExists = await this.prisma.user.findUnique({
      where: {
        Email: user.Email
      }
    });

    if (emailExists) {
      return ServiceResponse.failure<null>("Email Error", "Email already exists");
    }

    let phoneExists = await this.prisma.user.findUnique({
      where: {
        Mobile: user.Mobile
      }
    });

    if (phoneExists) {
      return ServiceResponse.failure<null>("Phone Error", "Phone number already exists");
    }

    let createUser = await this.prisma.user.create({
      data: {
        UserId: v4(),
        ...user
      }
    });

    if (!createUser) {
      return ServiceResponse.failure<null>("User Creation Error", "Failed to create user");
    }

    return ServiceResponse.success<null>("Account created successfully.", null);
  }
  async updateUserByUserId(UserId: string, user: UpdateUserDto): Promise<ServiceResult<null>> {
    
    let userExists = await this.prisma.user.findUnique({
      where: {
        UserId
      }
    });

    if (!userExists) {
      return ServiceResponse.failure("Not Found", "Invalid user passed.")
    }

    let update = await this.prisma.user.update({
      where: {
        UserId
      },
      data: {
        ...user
      }
    });

    if (!update) {
      return ServiceResponse.failure("Update Error", "Unable to update user at the moment.");
    }

    return ServiceResponse.success("profile updated successfully.")
  }
  async deleteUserByUserId(UserId: string): Promise<ServiceResult<null>> {
    
    let userExists = await this.prisma.user.findUnique({
      where: {
        UserId
      }
    });

    if (!userExists) {
      return ServiceResponse.failure("Not Found", "Invalid user passed.")
    }

    let _delete = await this.prisma.user.delete({
      where: {
        UserId
      }
    });

    if (!_delete) {
      return ServiceResponse.failure("Delete Error", "Unable to delete profile");
    }

    return ServiceResponse.success("Profile successfully deleted.")
  }
  async getUserByUserId(UserId: string): Promise<ServiceResult<User>> {
    
    let userExists = await this.prisma.user.findUnique({
      where: {
        UserId
      }
    });

    if (!userExists) {
      return ServiceResponse.failure("Not Found", "Invalid user passed.")
    }

    return ServiceResponse.success("profile retrieved successfully", userExists);
  }
  async getAllUsers(): Promise<ServiceResult<User>> {
    
    let usersExist = await this.prisma.user.findMany();

    if (usersExist == null || usersExist.length === 0) {
      return ServiceResponse.failure("Fetch Error", "users not available at the moment");
    }

    return ServiceResponse.success("users retrieved successfully.", undefined, usersExist);
  }
  authenticateUser(email: string, password: string): Promise<ServiceResult<null>> {
    throw new Error("Method not implemented.");
  }
  
}