'use client';
import { useState, useCallback } from 'react';
import { Coord } from '@/types';

export function useSales() {
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

  const handleCellFillColor = useCallback(
    (index: number) => {
      console.log(`Active index: ${activeIndex}; index: ${index}`);

      if (activeIndex === null) return `url(#${gradientId})`;

      return index === activeIndex
        ? `url(#${gradientId})`
        : 'rgba(52, 202, 165, 0.10)';
    },
    [activeIndex]
  );

  const formatYAxis = (tick: number) => tick.toLocaleString();

  return {
    gradientId,
    toolTipSize,
    setToolTipSize,
    graphData,
    activeIndex,
    formatYAxis,
    handleBarMouseOver,
    handleBarMouseLeave,
    handleCellFillColor,
  };
}
