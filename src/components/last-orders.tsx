'use client';
import NextLink from 'next/link';
import {
  Avatar,
  Button,
  HStack,
  Heading,
  Link,
  Table,
  VStack,
} from '@chakra-ui/react';
import { DocumentDownloadIcon } from './icons';
import { Order } from '@/types';
import { orders } from '@/data';
import useUnsplashImage from '@/hooks/useUnsplashImage';

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
      bg="cardBg"
      rowGap="14px"
      align="stretch"
      h="auto"
      w={{ base: 'full', lg: 'auto' }}
    >
      <HStack as="header" justify="space-between">
        <Heading>Last Orders</Heading>
        <Link
          asChild
          color="gfc.primary.400"
          fontWeight="medium"
          fontSize="lg"
          lineHeight="26px"
          transition="all 0.4s ease-in-out"
          _hover={{ color: 'gfc.primary.500' }}
        >
          <NextLink href="/">See All</NextLink>
        </Link>
      </HStack>
      <OrderTableComponent data={orders} />
    </VStack>
  );
}

function OrderTableComponent({ data }: { data: Array<Order> }) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader display={{ base: 'none', sm: 'table-cell' }}>
            Date
          </Table.ColumnHeader>
          <Table.ColumnHeader display={{ base: 'none', md: 'table-cell' }}>
            Amount
          </Table.ColumnHeader>
          <Table.ColumnHeader display={{ base: 'none', md: 'table-cell' }}>
            Status
          </Table.ColumnHeader>
          <Table.ColumnHeader>Invoice</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((order: Order) => (
          <TableRow key={order.id} order={order} />
        ))}
      </Table.Body>
    </Table.Root>
  );
}

function TableRow({ order }: { order: Order }) {
  const { imageUrl } = useUnsplashImage(order.profilePictureUrl);

  return (
    <Table.Row>
      <Table.Cell>
        <HStack columnGap="10px">
          <Avatar.Root w="32px" h="32px">
            {imageUrl ? <Avatar.Image src={imageUrl} /> : null}
            <Avatar.Fallback>{order.name.charAt(0)}</Avatar.Fallback>
          </Avatar.Root>
          <span>{order.name}</span>
        </HStack>
      </Table.Cell>
      <Table.Cell display={{ base: 'none', sm: 'table-cell' }}>
        {order.date}
      </Table.Cell>
      <Table.Cell display={{ base: 'none', md: 'table-cell' }}>
        ${order.amount.toLocaleString()}
      </Table.Cell>
      <Table.Cell
        color={order.status === 'Paid' ? 'gfc.primary.400' : 'gfc.error'}
        display={{ base: 'none', md: 'table-cell' }}
      >
        {order.status}
      </Table.Cell>
      <Table.Cell>
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
      </Table.Cell>
    </Table.Row>
  );
}
