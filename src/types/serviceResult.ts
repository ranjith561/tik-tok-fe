export interface ServiceSuccess<T> {
  success: true;
  data: T;
}

export interface ServiceError {
  success: false;
  message: string;
}

export type ServiceResult<T> = ServiceSuccess<T> | ServiceError;
