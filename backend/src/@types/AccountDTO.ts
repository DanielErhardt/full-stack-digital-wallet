import { EntityDTO } from './EntityDTO';

export type AccountDTO = EntityDTO & {
  balance: number;
};
