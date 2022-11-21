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

  static unauthorized(message = 'Unauthorized') {
    return new RequestError(codes.UNAUTHORIZED, message);
  }

  static unprocessableEntity(message = 'Unprocessable entity.') {
    return new RequestError(codes.UNPROCESSABLE_ENTITY, message);
  }

  static badRequest(message = 'Bad request.') {
    return new RequestError(codes.BAD_REQUEST, message);
  }
}

export default RequestError;
