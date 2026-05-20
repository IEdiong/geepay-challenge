'use client';
import NextLink from 'next/link';
import { HStack, Heading, Link, Text, VStack } from '@chakra-ui/react';
import Progress from './progress';
import { Platform } from '@/types';
import { platforms } from '@/data';

export default function TopPlatform() {
  return (
    <VStack
      as="section"
      rowGap="5"
      paddingBlockStart="4"
      paddingBlockEnd="8"
      paddingInlineStart="5"
      paddingInlineEnd="4"
      bg="cardBg"
      borderRadius="lg"
      flexGrow="1"
      flexBasis="488px"
      flexShrink="1"
      align="stretch"
      w="full"
    >
      <HStack as="header" justify="space-between">
        <Heading as="h2" fontSize="lg" lineHeight="26px">
          Top Platform
        </Heading>
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
      <VStack align="stretch" rowGap="5">
        {platforms.map((platform) => (
          <RankingPlatform key={platform.id} platform={platform} />
        ))}
      </VStack>
    </VStack>
  );
}

function RankingPlatform({ platform }: { platform: Platform }) {
  const { id, name, value, amount, percentage } = platform;
  return (
    <VStack rowGap="17px" align="stretch">
      <Heading
        as="h3"
        fontSize="lg"
        lineHeight="26px"
        color="textSecondary"
        w="fit-content"
      >
        {name}
      </Heading>
      <Progress value={value} colorId={id - 1} />
      <HStack
        justify="space-between"
        fontSize="lg"
        lineHeight="26px"
        color="gfc.neutral.600"
      >
        <Text>${amount.toLocaleString()}</Text>
        <Text>
          {percentage > 0 ? '+' : ''}
          {percentage}%
        </Text>
      </HStack>
    </VStack>
  );
}
