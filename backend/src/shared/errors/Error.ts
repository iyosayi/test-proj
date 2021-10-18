export class UniqueConstraintError extends Error {
    readonly statusCode: number;
    constructor(value: string, statusCode = 409) {
        super(value);
        
      this.name = "UniqueConstraintError";
      this.statusCode = statusCode;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, UniqueConstraintError);
      }
    }
}
  
export class InvalidPropertyError extends Error {
    readonly msg: string
    readonly statusCode: number
    constructor(msg: string, statusCode = 400) {
      super(msg);
  
      this.name = "InvalidPropertyError";
      this.statusCode = statusCode;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, InvalidPropertyError);
      }
    }
  }
  
export class UnauthorizedError extends Error {
    readonly statusCode: number
    constructor(message:string, statusCode = 401) {
      super(message);
      this.name = "UnauthorizedError";
      this.statusCode = statusCode;
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, UnauthorizedError);
      }
    }
  }