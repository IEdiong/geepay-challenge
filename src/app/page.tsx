import AnalyticsSummary from '@/components/analytics-summary';
import Header from '@/components/header';
import LastOrders from '@/components/last-orders';
import SalesTrends from '@/components/sales-trends';
import Sidebar from '@/components/sidebar';
import TopPlatform from '@/components/top-platform';
import { Flex, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex bg="#FAFAFA" align="stretch">
      <Sidebar />
      <VStack as="main" gap="0" align="stretch" overflowX="hidden" w="full">
        <Header />
        <VStack
          rowGap="5"
          paddingInline={{ base: '4', lg: '5' }}
          paddingBlock="5"
          align="stretch"
        >
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            rowGap="5"
            columnGap="5"
          >
            <SalesTrends />
            <AnalyticsSummary />
          </Flex>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            columnGap="26px"
            rowGap="5"
            align="flex-start"
            h="max-content"
          >
            <LastOrders />
            <TopPlatform />
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
}
