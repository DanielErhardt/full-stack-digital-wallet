import { EntityDTO } from './EntityDTO';

export type UserDTO = EntityDTO & {
  username: string;
  password: string;
  accountId: string;
};
