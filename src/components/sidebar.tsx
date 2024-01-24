'use client';
import { Button, Flex, VStack } from '@chakra-ui/react';
import {
  AnalyticsIcon,
  ArrowRightIcon,
  DiscountIcon,
  InfoCircleIcon,
  IntegrationIcon,
  LogoIcon,
  LogoutIcon,
  MoonIcon,
  OverviewIcon,
  SettingsIcon,
  SunIcon,
  UsersIcon,
} from './icons';
import { Link } from '@chakra-ui/next-js';
import { useState } from 'react';

export default function Sidebar() {
  return (
    <VStack
      as="nav"
      w="20"
      minH="100vh"
      bg="#F7F8FA"
      borderRight="1px solid #EBECF2"
      paddingBlock="5"
      align="center"
      gap="256px"
    >
      <VStack gap="5" w="full">
        <LogoIcon w="10" h="10" />
        <VStack gap="4" w="full">
          <NavLink isActive={true}>
            <OverviewIcon w="6" h="6" />
          </NavLink>
          <NavLink isActive={false}>
            <AnalyticsIcon w="6" h="6" />
          </NavLink>
          <NavLink isActive={false}>
            <UsersIcon w="6" h="6" />
          </NavLink>
          <NavLink isActive={false}>
            <IntegrationIcon w="6" h="6" />
          </NavLink>
          <NavLink isActive={false}>
            <DiscountIcon w="6" h="6" />
          </NavLink>
          <NavLink isActive={false}>
            <InfoCircleIcon w="6" h="6" />
          </NavLink>
          <ThemeSwitcher />
        </VStack>
      </VStack>

      <VStack gap="4" w="full">
        <NavLink isActive={false}>
          <ArrowRightIcon w="6" h="6" />
        </NavLink>
        <NavLink isActive={false}>
          <SettingsIcon w="6" h="6" />
        </NavLink>
        <NavLink isActive={false}>
          <LogoutIcon w="6" h="6" />
        </NavLink>
      </VStack>
    </VStack>
  );
}

function NavLink({
  isActive,
  children,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href="/"
      paddingBlock="2"
      w="full"
      display="flex"
      justifyContent="center"
      position="relative"
      _hover={{
        _before: {
          opacity: '1',
          height: '21px',
        },
      }}
      _before={{
        content: '""',
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '3px',
        backgroundColor: '#0D062D',
        borderLeftRadius: '5px',
        transition: 'all 0.3s ease-in',
        height: isActive ? '21px' : '0',
        opacity: isActive ? '1' : '0',
      }}
    >
      {children}
    </Link>
  );
}

function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <Button
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      w="46px"
      h="92px"
      borderRadius="100px"
      p="2"
      bg="white"
      flexDir="column"
      gap="4"
      pos="relative"
      // _hover={{
      //   bg: 'white',
      // }}
      _before={{
        content: '""',
        position: 'absolute',
        left: '50%',
        top: !isDarkTheme ? '8px' : '54px',
        transform: 'translateX(-50%)',
        width: '30px',
        height: '30px',
        backgroundColor: '#34CAA5',
        borderRadius: '94px',
        zIndex: '0',
        transition: 'all 0.3s ease-in',
      }}
    >
      <Flex align="center" justify="center" w="30px" h="30px" zIndex="1">
        <SunIcon
          transition="all .4s ease-in-out"
          color={!isDarkTheme ? 'white' : '#B2ABAB'}
          w={!isDarkTheme ? '16px' : '30px'}
          h={!isDarkTheme ? '16px' : '30px'}
        />
      </Flex>
      <Flex align="center" justify="center" w="30px" h="30px" zIndex="1">
        <MoonIcon
          transition="all .4s ease-in-out"
          color={isDarkTheme ? 'white' : '#B2ABAB'}
          w={isDarkTheme ? '18px' : ''}
          h={isDarkTheme ? '18px' : ''}
        />
      </Flex>
    </Button>
  );
}
