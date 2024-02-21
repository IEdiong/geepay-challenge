import { Order, Platform, SalesTrend } from '@/types';

export const orders: Order[] = [
  {
    id: 1,
    name: 'Marcus Bergson',
    profilePictureUrl:
      'https://source.unsplash.com/portrait-photography-of-man-95UF6LXe-Lo',
    date: 'Nov 15, 2023',
    amount: 80000,
    status: 'Paid',
  },
  {
    id: 2,
    name: 'Jaydon Vaccaro',
    profilePictureUrl:
      'https://source.unsplash.com/smiling-girl-in-white-tank-top-wOe_VGJe3TE',
    date: 'Nov 15, 2023',
    amount: 150000,
    status: 'Refund',
  },
  {
    id: 3,
    name: 'Corey Schleifer',
    profilePictureUrl:
      'https://source.unsplash.com/a-woman-with-an-afro-is-looking-at-the-camera-xmSWVeGEnJw',
    date: 'Nov 14, 2023',
    amount: 87000,
    status: 'Paid',
  },
  {
    id: 4,
    name: 'Cooper Press',
    profilePictureUrl:
      'https://source.unsplash.com/women-holding-her-collar-standing-near-wall-J1OScm_uHUQ',
    date: 'Nov 14, 2023',
    amount: 100000,
    status: 'Refund',
  },
  {
    id: 5,
    name: 'Phillip Lubin',
    profilePictureUrl:
      'https://source.unsplash.com/head-and-shoulders-portrait-of-contemporary-african-american-man-smiling-at-camera-while-posing-against-blue-background-copy-space-PMghehKt3Ao',
    date: 'Nov 13, 2023',
    amount: 78000,
    status: 'Paid',
  },
];

export const platforms: Platform[] = [
  {
    id: 1,
    name: 'Book Bazaar',
    value: 50,
    amount: 2500000,
    percentage: 15,
  },
  {
    id: 2,
    name: 'Artisan Aisle',
    value: 45,
    amount: 1800000,
    percentage: 10,
  },
  {
    id: 3,
    name: 'Toy Troop',
    value: 25,
    amount: 1200000,
    percentage: 8,
  },
  {
    id: 4,
    name: 'XStore',
    value: 25,
    amount: 600000,
    percentage: 5,
  },
];

export const salesTrends: SalesTrend[] = [
  {
    name: 'Jan',
    sales: 10000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    sales: 20000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    sales: 8000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    sales: 30000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    sales: 10000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    sales: 45000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    sales: 10000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    sales: 25000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    sales: 35000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    sales: 7500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    sales: 30000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    sales: 28000,
    pv: 4300,
    amt: 2100,
  },
];
