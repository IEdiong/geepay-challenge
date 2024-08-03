import {
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
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
      bg="#FAFAFA"
      borderBottom="1px solid #E5EAEF"
      gap="22px"
    >
      <HStack justify="space-between" flexGrow="1" columnGap="66px">
        <Heading as="h1" variant="h1">
          Dashboard
        </Heading>
        <InputGroup
          display={{ base: 'none', lg: 'block' }}
          w="fit-content"
          className={fonts.inter.className}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon w="18px" h="18px" />
          </InputLeftElement>
          <Input
            type="search"
            placeholder="Search..."
            _placeholder={{
              color: '#A3A3A3',
              fontSize: '16px',
            }}
            paddingInlineStart="37px"
            borderRadius="24px"
            borderColor="#DADDDD"
            bg="white"
            minW={{ base: 'full' }}
            w={{ base: 'full', xl: '349px' }}
          />
        </InputGroup>
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
            border="1px solid #DADDDD"
            bg="transparent"
            padding="11px"
            w="10"
            h="10"
            icon={<BellIcon w="5" h="5" />}
          />
        </HStack>
        <Menu />
      </HStack>
    </HStack>
  );
}

// TODO: 1. Create a custom style component for the h1 text heading
