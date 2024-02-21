export type Coord = {
  w: number;
  h: number;
};

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

export interface SalesTrend {
  name: string;
  sales: number;
  pv: number;
  amt: number;
}

type Status = 'Paid' | 'Refund';

//TODO: 1. Convert date from string to Date object
