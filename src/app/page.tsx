import Header from '@/components/header';
import LastOrders from '@/components/last-orders';
import Sidebar from '@/components/sidebar';
import { Flex, Box, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex>
      <Sidebar />
      <Box as="main" w="100%">
        <Header />
        <VStack
          rowGap="5"
          padding="5"
          bg="#FAFAFA"
          minH="100vh"
          align="flex-start"
        >
          <LastOrders />
        </VStack>
      </Box>
    </Flex>
  );
}
