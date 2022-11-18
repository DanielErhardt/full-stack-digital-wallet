import codes from 'http-status-codes';

class RequestError extends Error {
  public readonly statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }

  static notFound(message = 'Object not found.') {
    return new RequestError(codes.NOT_FOUND, message);
  }

  static conflict(message = 'A conflict was detected.') {
    return new RequestError(codes.CONFLICT, message);
  }
}

export default RequestError;
