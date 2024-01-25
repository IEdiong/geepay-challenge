import { Box } from '@chakra-ui/react';
import SalesChart from './sales-chart';

export default function SalesTrend() {
  return (
    <Box
      w="806px"
      h="374px"
      paddingBlock="4"
      paddingInline="5"
      borderRadius="14px"
      bg="gfc.white"
      border="1px solid #EDF2F7"
    >
      <SalesChart />
    </Box>
  );
}
