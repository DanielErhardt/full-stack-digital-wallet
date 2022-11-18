import { sign, verify, SignOptions } from 'jsonwebtoken';

class Token {
  private static secret = process.env.JWT_SECRET as string;

  private static options: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };

  public static create(userId: number) {
    return sign({ id: userId }, this.secret, this.options);
  }

  public static validate(token: string) {
    return verify(token, this.secret);
  }

  public static createMock(id: number) {
    return sign({ id }, 'super_secret', { algorithm: 'HS256', expiresIn: '10s' });
  }

  public static validateMock(token: string) {
    return verify(token, 'super_secret');
  }
}

export default Token;
