import { hashSync, compareSync } from 'bcryptjs';

class BCrypt {
  private static salt = 10;

  public static encrypt(password: string): string {
    return hashSync(password, this.salt);
  }

  public static validate(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}

export default BCrypt;
