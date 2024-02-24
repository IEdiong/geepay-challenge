import AnalyticsSummary from '@/components/analytics-summary';
import Header from '@/components/header';
import LastOrders from '@/components/last-orders';
import SalesTrends from '@/components/sales-trends';
import Sidebar from '@/components/sidebar';
import TopPlatform from '@/components/top-platform';
import { Box, Container, Flex, Grid, GridItem, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex bg="#FAFAFA" align="stretch">
      <Sidebar />
      <VStack as="main" gap="0" align="stretch" overflowX="hidden" w="full">
        <Header />
        <Box
          paddingInline={{ base: '4', lg: '5' }}
          paddingBlock="5"
          pos="relative"
        >
          <Container>
            <Grid
              gap="20px"
              templateColumns={{ lg: 'minmax(806px, auto) max-content' }}
              maxW="full"
            >
              <GridItem colStart={2} colSpan={1}>
                <AnalyticsSummary />
              </GridItem>
              <GridItem rowStart={1} colSpan={1}>
                <SalesTrends />
              </GridItem>
              <GridItem colSpan={1}>
                <LastOrders />
              </GridItem>
              <GridItem colSpan={1}>
                <TopPlatform />
              </GridItem>
            </Grid>
          </Container>
        </Box>
        {/* <VStack
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
        </VStack> */}
      </VStack>
    </Flex>
  );
}
