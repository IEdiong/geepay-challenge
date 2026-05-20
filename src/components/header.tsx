import {
  Box,
  HStack,
  Heading,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react';
import { BellIcon, CalendarLinearIcon, SearchIcon } from './icons';
import { fonts } from '@/fonts';
import Menu from './menu';

export default function Header() {
  return (
    <HStack
      h="88px"
      paddingBlock="18px"
      paddingInline={{ base: '4', lg: '5' }}
      bg="headerBg"
      borderBottom="1px solid"
      borderColor="borderDefault"
      gap="22px"
    >
      <HStack justify="space-between" flexGrow="1" columnGap="66px">
        <Heading as="h1" fontSize="xl" lineHeight="28px">
          Dashboard
        </Heading>
        <Box
          display={{ base: 'none', lg: 'block' }}
          w="fit-content"
          position="relative"
          className={fonts.inter.className}
        >
          <Box
            position="absolute"
            left="12px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
          >
            <SearchIcon w="18px" h="18px" />
          </Box>
          <Input
            type="search"
            placeholder="Search..."
            _placeholder={{
              color: '#A3A3A3',
              fontSize: '16px',
            }}
            paddingInlineStart="37px"
            borderRadius="24px"
            borderColor="borderInput"
            bg="cardBg"
            minW={{ base: 'full' }}
            w={{ base: 'full', xl: '349px' }}
          />
        </Box>
      </HStack>
      <HStack>
        <HStack columnGap="5" className={fonts.inter.className}>
          <HStack
            display={{ base: 'none', lg: 'flex' }}
            columnGap="10px"
            paddingBlock="3"
            paddingInline="4"
            h="10"
          >
            <CalendarLinearIcon w="5" h="5" />
            <Text fontSize="14px" fontWeight="500" lineHeight="22px">
              November 15, 2023
            </Text>
          </HStack>
          <IconButton
            aria-label="See notifications"
            borderRadius="27px"
            border="1px solid"
            borderColor="borderInput"
            bg="transparent"
            padding="11px"
            w="10"
            h="10"
          >
            <BellIcon w="5" h="5" />
          </IconButton>
        </HStack>
        <Menu />
      </HStack>
    </HStack>
  );
}

// TODO: 1. Create a custom style component for the h1 text heading
