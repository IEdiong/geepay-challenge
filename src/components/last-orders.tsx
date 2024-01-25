'use client';
import { Link } from '@chakra-ui/next-js';
import {
  Avatar,
  Button,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { DocumentDownloadIcon } from './icons';
import { Order } from '@/types';
import { orders } from '@/data';

export default function LastOrders({ width }: { width?: string }) {
  return (
    <VStack
      as="section"
      w={width ? width : '806px'}
      paddingBlockStart="18px"
      paddingBlockEnd="31px"
      paddingInline="5"
      borderRadius="14px"
      bg="white"
      rowGap="14px"
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
      <OrderTableComponent data={orders} />
    </VStack>
  );
}

function OrderTableComponent({ data }: { data: Array<Order> }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Invoice</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((order: Order) => (
            <Tr key={order.id}>
              <Td>
                <HStack columnGap="10px">
                  <Avatar
                    name={order.name}
                    src={order.profilePictureUrl}
                    w="32px"
                    h="32px"
                  />
                  <span>{order.name}</span>
                </HStack>
              </Td>
              <Td>{order.date}</Td>
              <Td>${order.amount.toLocaleString()}</Td>
              <Td
                color={
                  order.status === 'Paid' ? 'gfc.primary.400' : 'gfc.error'
                }
              >
                {order.status}
              </Td>
              <Td>
                <Button
                  aria-label="View file"
                  columnGap="6px"
                  h="auto"
                  fontSize="sm"
                  fontWeight="normal"
                  lineHeight="22px"
                  paddingInline="0"
                  bg="transparent"
                  _hover={{
                    bg: 'none',
                    fontWeight: 'medium',
                  }}
                >
                  <DocumentDownloadIcon w="4" h="4" />
                  <span>View</span>
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}