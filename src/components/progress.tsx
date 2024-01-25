'use client';
import { Box } from '@chakra-ui/react';

export default function Progress({
  barColor,
  bgColor,
  colorId,
  value,
}: {
  barColor?: string;
  bgColor?: string;
  colorId?: number;
  value: number;
}) {
  const colorArr = ['gfc.purple', 'gfc.blue', 'gfc.orange', 'gfc.red'];
  let color = colorArr[0];

  if (colorId) {
    color = colorArr[colorId];
  } else if (barColor) {
    color = barColor;
  }

  return (
    <Box
      h="3"
      bg={bgColor ? bgColor : 'gfc.gray.100'}
      overflow="hidden"
      borderRadius="40px"
    >
      <Box h="3" bg={color} borderRadius="40px" w={`${value}%`} />
    </Box>
  );
}
