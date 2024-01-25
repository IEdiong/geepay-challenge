'use client';

import { useState } from 'react';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from 'recharts';

const data = [
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
    sales: 5000,
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

export default function SalesChart() {
  const [activeIndex, setActiveIndex] = useState(null);
  const gradientId = 'colorGradient';

  const handleBarMouseOver = (_: any, index: any) => {
    setActiveIndex(index);
  };

  // const handleBarMouseLeave = () => {
  //   setActiveIndex(null);
  // };

  const formatYAxis = (tick: any) => tick.toLocaleString();

  // const renderCustomizedLabel = (props: any) => {
  //   const { x, y, width, height, value } = props;
  //   const radius = 10;

  //   return (
  //     <g>
  //       <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
  //       <text
  //         x={x + width / 2}
  //         y={y - radius}
  //         fill="#fff"
  //         textAnchor="middle"
  //         dominantBaseline="middle"
  //       >
  //         {value.split(' ')[1]}
  //       </text>
  //     </g>
  //   );
  // };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={150}
        height={40}
        data={data}
        barSize={30}
        maxBarSize={30}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="#34CAA5" stopOpacity={0.8} />
            <stop
              offset="85%"
              stopColor="rgba(52, 202, 165, 0.10)"
              stopOpacity={0.8}
            />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        <YAxis
          interval="preserveEnd"
          tickLine={false}
          fontSize="12px"
          fontWeight="600"
          color="#525252"
          axisLine={false}
          tickMargin={10}
          tickFormatter={formatYAxis}
        />

        <XAxis
          dataKey="name"
          tickLine={false}
          fontSize="14px"
          fontWeight="600"
          color="#525252"
          axisLine={false}
          tickMargin={12}
        />
        <Bar
          onMouseEnter={handleBarMouseOver}
          // onMouseLeave={handleBarMouseLeave}
          dataKey="sales"
          radius={[20, 20, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={
                index === activeIndex
                  ? `url(#${gradientId})`
                  : 'rgba(52, 202, 165, 0.10)'
              }
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
