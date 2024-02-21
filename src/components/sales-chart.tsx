'use client';

import { useCallback, useState } from 'react';
import { salesTrends as data } from '@/data';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import CustomTooltip from './custom-tooltip';
import { Coord } from '@/types';

export default function SalesChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [graphData, setGraphData] = useState({ x: 0, y: 0, width: 0 });
  const [toolTipSize, setToolTipSize] = useState<Coord>({ w: 0, h: 0 });
  const gradientId = 'colorGradient';

  const handleBarMouseOver = useCallback((data: any, index: number) => {
    const { x, y, width } = data;

    // console.log({ x, y, width });

    setGraphData({ x, y, width });
    setActiveIndex(index);
  }, []);

  const handleBarMouseLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handleCellFillColor = (index: number) => {
    if (activeIndex === null) return `url(#${gradientId})`;

    return index === activeIndex
      ? `url(#${gradientId})`
      : 'rgba(52, 202, 165, 0.10)';
  };

  const formatYAxis = (tick: any) => tick.toLocaleString();

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
            <stop offset="20%" stopColor="#34CAA5" stopOpacity={0.8} />
            <stop
              offset="100%"
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

        <Tooltip
          content={<CustomTooltip setTooltipSize={setToolTipSize} />}
          cursor={false}
          allowEscapeViewBox={{ x: true, y: false }}
          position={{
            x: graphData.x - toolTipSize.w / 3.2,
            y: graphData.y - toolTipSize.h - 3,
          }}
          active={activeIndex !== null ? true : false}
        />

        <Bar
          onMouseEnter={handleBarMouseOver}
          onMouseLeave={handleBarMouseLeave}
          dataKey="sales"
          radius={[20, 20, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={handleCellFillColor(index)}
              style={{ transition: 'fill 2s ease-in-out .5s' }}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
