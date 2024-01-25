export type Order = {
  id: number;
  name: string;
  profilePictureUrl: string;
  date: string;
  amount: number;
  status: Status;
};

type Status = 'Paid' | 'Refund';

//TODO: 1. Convert date from string to Date object
