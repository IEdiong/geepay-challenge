'use client';
import { HStack, Heading, VStack, Text, Select } from '@chakra-ui/react';
import SalesChart from './sales-chart';
import { ArrowDownIcon } from './icons';

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
        <HStack
          columnGap="10px"
          w="max-content"
          align="center"
          justify="space-between"
        >
          <Text
            color="#3A3F51"
            fontSize="sm"
            fontWeight="medium"
            lineHeight="22px"
            flexShrink="0"
          >
            Short by :
          </Text>
          <Select
            placeholder="Weekly"
            icon={<ArrowDownIcon w="5" h="5" />}
            variant="brand"
            cursor="pointer"
          >
            <option value="option2">Monthly</option>
          </Select>
        </HStack>
      </HStack>
      <SalesChart />
    </VStack>
  );
}
