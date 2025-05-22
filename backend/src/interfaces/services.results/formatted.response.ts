import { ServiceResult } from "./service.result";

export class ServiceResponse {
  static success<T>(message: string, object?: T, objects?: T[]): ServiceResult<T> {
    return {
      success: true,
      message,
      error: null,
      object: object ?? null,
      objects: objects ?? null
    };
  }

  static failure<T>(message: string, error: string): ServiceResult<T> {
    return {
      success: false,
      message,
      error,
      object: null,
      objects: null
    };
  }

  static auth<T>(token: string, role: string): ServiceResult<T> {
    return {
      success: true,
      message: "Authentication successful",
      error: null,
      object: null,
      token,
      role
    };
  }
}