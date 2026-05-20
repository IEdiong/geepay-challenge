'use client';

import { Avatar, Button, HStack, VStack, Text } from '@chakra-ui/react';
import { ArrowDownIcon } from './icons';
import { fonts } from '@/fonts';
import useUnsplashImage from '@/hooks/useUnsplashImage';

export default function Menu() {
  const { imageUrl } = useUnsplashImage(
    'man-in-blue-red-and-white-plaid-dress-shirt-holding-yellow-plastic-bowl-KHO_jvns5Xc'
  );
  return (
    <Button
      className={fonts.inter.className}
      h="52px"
      columnGap="3"
      paddingBlock="6px"
      paddingInline="2"
      borderRadius="28px"
      border="1px solid"
      borderColor="borderInput"
      bg="transparent"
    >
      <HStack>
        <Avatar.Root w="38px" h="38px">
          {imageUrl ? <Avatar.Image src={imageUrl} /> : null}
          <Avatar.Fallback>JB</Avatar.Fallback>
        </Avatar.Root>
        <VStack
          display={{ base: 'none', lg: 'flex' }}
          rowGap="1"
          align="flex-end"
          lineHeight="normal"
        >
          <Text color="textPrimary" fontWeight="400">
            Justin Bergson
          </Text>
          <Text as="small" fontSize="sm" fontWeight="400" color="textMuted">
            Justin@gmail.com
          </Text>
        </VStack>
      </HStack>
      <ArrowDownIcon w="5" h="5" />
    </Button>
  );
}
