export class BaseError extends Error {
  code: string;
  description: string;
  httpStatus: number;

  constructor({
    message,
    httpStatus,
    code,
    description,
  }: {
    message: string;
    httpStatus: number;
    code: string;
    description: string;
    stack?: any;
  }) {
    super(message);
    this.name = 'BaseError';
    this.code = code;
    this.httpStatus = httpStatus;
    this.description = description;
  }
}

export class EntityNotFoundException extends BaseError {}
