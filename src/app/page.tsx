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
              templateColumns={{
                base: '1fr',
                xl: 'minmax(806px, auto) max-content',
              }}
              maxW="full"
            >
              <GridItem colStart={{ base: 1, xl: 2 }} colSpan={1}>
                <AnalyticsSummary />
              </GridItem>
              <GridItem rowStart={{ base: 2, xl: 1 }} colSpan={1}>
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
      </VStack>
    </Flex>
  );
}
