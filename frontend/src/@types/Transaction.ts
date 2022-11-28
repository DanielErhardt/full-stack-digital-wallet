export type Transaction = {
  type: 'cash in' | 'cash out';
  otherUser: string;
  date: string;
  value: number;
};
