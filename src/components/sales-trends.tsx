'use client';
import { HStack, Heading, VStack } from '@chakra-ui/react';
import SalesChart from './sales-chart';
import { Link } from '@chakra-ui/next-js';

export default function SalesTrend() {
  return (
    <VStack
      w="806px"
      h="374px"
      paddingBlock="4"
      paddingInline="5"
      borderRadius="14px"
      bg="gfc.white"
      border="1px solid #EDF2F7"
      rowGap="4"
      align="stretch"
    >
      <HStack as="header" justify="space-between">
        <Heading>Last Orders</Heading>
        <Link
          href="/"
          color="gfc.primary.400"
          fontWeight="medium"
          fontSize="lg"
          lineHeight="26px"
          transition="all 0.4s ease-in-out"
          _hover={{ color: 'gfc.primary.500' }}
        >
          See All
        </Link>
      </HStack>
      <SalesChart />
    </VStack>
  );
}
