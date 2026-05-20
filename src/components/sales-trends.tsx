'use client';
import { HStack, Heading, VStack, Text, NativeSelect } from '@chakra-ui/react';
import SalesChart from './sales-chart';
import { ArrowDownIcon } from './icons';

export default function SalesTrend() {
  return (
    <VStack
      as="section"
      w={{ base: 'full' }}
      h="374px"
      paddingBlock="4"
      paddingInline="5"
      borderRadius="14px"
      bg="cardBg"
      border="1px solid"
      borderColor="borderDefault"
      rowGap="4"
      align="stretch"
    >
      <HStack as="header" justify="space-between">
        <Heading>Sales Trends</Heading>
        <HStack
          columnGap="10px"
          w="max-content"
          align="center"
          justify="space-between"
        >
          <Text
            color="textSecondary"
            fontSize="sm"
            fontWeight="medium"
            lineHeight="22px"
            flexShrink="0"
          >
            Short by :
          </Text>
          <NativeSelect.Root w="fit-content">
            <NativeSelect.Field placeholder="Weekly">
              <option value="monthly">Monthly</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator>
              <ArrowDownIcon w="5" h="5" />
            </NativeSelect.Indicator>
          </NativeSelect.Root>
        </HStack>
      </HStack>
      <SalesChart />
    </VStack>
  );
}
