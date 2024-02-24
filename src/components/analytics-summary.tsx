'use client';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  BoxRotateIcon,
  BoxTickIcon,
  CoinIcon,
  ShoppingCartIcon,
  SmallGraphDecline,
  SmallGraphGrowth,
  TrendUpIcon,
} from './icons';
import { fonts } from '@/fonts';
import TrendDownIcon from './icons/trend-down-icon';

export default function AnalyticsSummary() {
  return (
    <Grid
      minW={{ base: 'full', md: '494px' }}
      flexGrow="1"
      gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap="4"
    >
      <GridItem as="article">
        <SummaryCard
          title="Total Order"
          value={350}
          hasGrown={true}
          slug="order"
          icon={<BoxTickIcon w="6" h="6" />}
        />
      </GridItem>
      <GridItem as="article">
        <SummaryCard
          title="Average Sales"
          value={1567}
          hasGrown={false}
          slug="sales"
          icon={<ShoppingCartIcon w="6" h="6" />}
        />
      </GridItem>
      <GridItem as="article">
        <SummaryCard
          title="Total Refund"
          value={270}
          hasGrown={false}
          slug="refund"
          icon={<BoxRotateIcon w="6" h="6" />}
        />
      </GridItem>
      <GridItem as="article">
        <SummaryCard
          title="Total Income"
          value={350}
          hasGrown={true}
          slug="income"
          icon={<CoinIcon w="6" h="6" />}
        />
      </GridItem>
    </Grid>
  );
}

function SummaryCard({
  title,
  value,
  hasGrown,
  slug,
  icon,
}: {
  title: string;
  value: number;
  hasGrown: boolean;
  slug: string;
  icon: React.ReactNode;
}) {
  return (
    <Box p="4" borderRadius="14px" bg="gfc.white">
      <VStack rowGap="10px" align="stretch">
        <HStack justify="space-between" align="center">
          <Flex
            w="10"
            h="10"
            align="center"
            justify="center"
            flexShrink="0"
            borderRadius="300px"
            border="1px solid #E6E6E6"
          >
            {icon}
          </Flex>
          {hasGrown ? (
            <SmallGraphGrowth w="104px" h="8" />
          ) : (
            <SmallGraphDecline w="104px" h="8" />
          )}
        </HStack>
        <VStack rowGap="5px" align="flex-start">
          <Heading
            color="#898989"
            fontSize="lg"
            fontWeight="medium"
            lineHeight="26px"
          >
            {title}
          </Heading>
          <Text
            color="#3A3F51"
            fontSize="2xl"
            fontWeight="semibold"
            lineHeight="32px"
          >
            {slug === 'income' ? `$${value.toFixed(3)}` : value}
          </Text>
        </VStack>
        <HStack justify="space-between">
          {hasGrown ? (
            <HStack
              bg="rgba(52, 202, 165, 0.12)"
              color="#34CAA5"
              borderRadius="100px"
              paddingBlock="1"
              paddingInline="2"
              fontSize="xs"
              fontWeight="medium"
              lineHeight="16px"
              columnGap="1"
            >
              <Flex
                align="center"
                justify="center"
                paddingBlock="3px"
                paddingInline="1px"
                w="3"
                h="3"
              >
                <TrendUpIcon w="9px" h="5px" />
              </Flex>
              <span>23,5%</span>
            </HStack>
          ) : (
            <HStack
              bg="rgba(237, 84, 78, 0.12)"
              color="#ED544E"
              borderRadius="100px"
              paddingBlock="1"
              paddingInline="2"
              fontSize="xs"
              fontWeight="medium"
              lineHeight="16px"
              columnGap="1"
            >
              <Flex
                align="center"
                justify="center"
                paddingBlock="3px"
                paddingInline="1px"
                w="3"
                h="3"
              >
                <TrendDownIcon w="9px" h="5px" />
              </Flex>
              <span>23,5%</span>
            </HStack>
          )}
          <Text color="#606060" fontSize="sm" className={fonts.inter.className}>
            vs. previous month
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

// TODO: 1. Rework the small graphs to use actual graphs
