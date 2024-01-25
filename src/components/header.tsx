import {
  Avatar,
  Button,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  ArrowDownIcon,
  BellIcon,
  CalendarLinearIcon,
  SearchIcon,
} from './icons';
import { fonts } from '@/fonts';

export default function Header() {
  return (
    <HStack
      h="88px"
      paddingBlock="18px"
      paddingInline="5"
      bg="#FAFAFA"
      borderBottom="1px solid #E5EAEF"
      gap="22px"
    >
      <HStack justify="space-between" flexGrow="1">
        <Heading as="h1" fontSize="20px" fontWeight="600" lineHeight="7">
          Dashboard
        </Heading>
        <InputGroup w="fit-content" className={fonts.inter.className}>
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
            w="349px"
          />
        </InputGroup>
      </HStack>
      <HStack>
        <HStack columnGap="5" className={fonts.inter.className}>
          <HStack columnGap="10px" paddingBlock="3" paddingInline="4" h="10">
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
        <Button
          className={fonts.inter.className}
          h="52px"
          columnGap="3"
          paddingBlock="6px"
          paddingInline="2"
          borderRadius="28px"
          border="1px solid #DADDDD"
          bg="transparent"
        >
          <HStack>
            <Avatar
              name="Justin Bergson"
              src="https://source.unsplash.com/man-in-blue-red-and-white-plaid-dress-shirt-holding-yellow-plastic-bowl-KHO_jvns5Xc"
              w="38px"
              h="38px"
            />
            <VStack rowGap="1" align="flex-end" lineHeight="normal">
              <Text color="#26282C" fontWeight="400">
                Justin Bergson
              </Text>
              <Text as="small" fontSize="sm" fontWeight="400" color="#787486">
                Justin@gmail.com
              </Text>
            </VStack>
          </HStack>
          <ArrowDownIcon w="5" h="5" />
        </Button>
      </HStack>
    </HStack>
  );
}

// TODO: 1. Set Search bar placeholder text font to Inter
// TODO: 2. Create a custom style component for the h1 text heading
// TODO: 3. Change the text in the header calendar to inter
