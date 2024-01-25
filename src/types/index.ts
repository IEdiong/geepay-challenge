export type Order = {
  id: number;
  name: string;
  profilePictureUrl: string;
  date: string;
  amount: number;
  status: Status;
};

export type Platform = {
  id: number;
  name: string;
  value: number;
  amount: number;
  percentage: number;
};

type Status = 'Paid' | 'Refund';

//TODO: 1. Convert date from string to Date object
