
export interface ServiceResult<T> {
  success: boolean;
  message: string;
  error?: string | null;
  object?: T | null;
  objects?: T[] | null;
  token?: string | null;
  role?: string | null;
}