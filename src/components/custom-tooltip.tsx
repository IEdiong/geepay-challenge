'use client';

import { Box, Text } from '@chakra-ui/react';
import { useCallback } from 'react';
import { TooltipProps } from 'recharts';

type PropType = TooltipProps<number, string> & {
  setTooltipSize: ({ _w, _h }: any) => void;
};

export default function CustomTooltip({
  active,
  payload,
  setTooltipSize,
}: PropType) {
  const handleBoundarySize = useCallback(
    (ref: any) => {
      if (ref) {
        // console.log('Tooltip Width', ref.getBoundingClientRect().width);
        // console.log('Tooltip Height', ref.getBoundingClientRect().height);
        setTooltipSize({
          w: ref.getBoundingClientRect().width,
          h: ref.getBoundingClientRect().height,
        });
      }
    },
    [setTooltipSize]
  );

  if (active && payload && payload.length) {
    const price = payload[0]?.value?.toLocaleString();

    return (
      <Box pos="relative" w="fit-content">
        <Text
          pos="absolute"
          left="50%"
          top="5px"
          transform="translateX(-50%)"
          zIndex="3"
          color="white"
          fontSize="xs"
          fontWeight="medium"
          lineHeight="15px"
        >
          {`$${price}`}
        </Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="32"
          viewBox="0 0 80 32"
          fill="none"
          ref={handleBoundarySize}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"
            fill="#090C2C"
          />
        </svg>
      </Box>
    );
  }

  return null;
}
