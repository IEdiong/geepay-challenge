import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { Flex, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex>
      <Sidebar />
      <Box as="main" w="100%">
        <Header />
        main content
      </Box>
    </Flex>
  );
}
