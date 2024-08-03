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
import { useEffect, useState } from 'react';

export default function LastOrders() {
  return (
    <VStack
      as="section"
      flexBasis={{ base: '1', lg: '806px' }}
      flexShrink="1"
      flexGrow={{ base: '0', lg: '1' }}
      paddingBlockStart="18px"
      paddingBlockEnd="31px"
      paddingInline="5"
      borderRadius="14px"
      bg="white"
      rowGap="14px"
      align="stretch"
      h="auto"
      w={{ base: 'full', lg: 'auto' }}
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
            <Th display={{ base: 'none', sm: 'table-cell' }}>Date</Th>
            <Th display={{ base: 'none', md: 'table-cell' }}>Amount</Th>
            <Th display={{ base: 'none', md: 'table-cell' }}>Status</Th>
            <Th>Invoice</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((order: Order) => (
            <TableRow key={order.id} order={order} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function TableRow({ order }: { order: Order }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch(
        `https://api.unsplash.com/photos/${order.profilePictureUrl}/?client_id=${process.env.NEXT_PUBLIC_client_id}`
      );

      if (res.ok) {
        const data = await res.json();
        console.log('image returned:', data);

        setImageUrl(data.urls.small_s3);
      }
    }

    fetchImages();
  }, []);

  return (
    <Tr>
      <Td>
        <HStack columnGap="10px">
          <Avatar name={order.name} src={imageUrl ?? ''} w="32px" h="32px" />
          <span>{order.name}</span>
        </HStack>
      </Td>
      <Td display={{ base: 'none', sm: 'table-cell' }}>{order.date}</Td>
      <Td display={{ base: 'none', md: 'table-cell' }}>
        ${order.amount.toLocaleString()}
      </Td>
      <Td
        color={order.status === 'Paid' ? 'gfc.primary.400' : 'gfc.error'}
        display={{ base: 'none', md: 'table-cell' }}
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
  );
}
