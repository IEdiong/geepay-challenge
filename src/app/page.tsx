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
      <VStack as="main" w="100%" gap="0" align="stretch">
        <Header />
        <VStack rowGap="5" padding="5" align="stretch">
          <Flex columnGap="5">
            <SalesTrends />
            <AnalyticsSummary />
          </Flex>
          <Flex columnGap="26px" align="flex-start" h="max-content">
            <LastOrders />
            <TopPlatform />
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
}
