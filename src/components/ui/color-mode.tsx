'use client';

import type { IconButtonProps, SpanProps } from '@chakra-ui/react';
import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react';
import * as React from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

export type ColorMode = 'light' | 'dark';

export interface ColorModeProviderProps {
  children: React.ReactNode;
}

interface ColorModeContextType {
  colorMode: ColorMode;
  setColorMode: (_colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

const ColorModeContext = React.createContext<ColorModeContextType>({
  colorMode: 'light',
  setColorMode: () => {},
  toggleColorMode: () => {},
});

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [colorMode, setColorModeState] = React.useState<ColorMode>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('chakra-ui-color-mode');
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return saved === 'dark' || saved === 'light'
      ? saved
      : systemPrefersDark
        ? 'dark'
        : 'light';
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', colorMode === 'dark');
  }, [colorMode]);

  const setColorMode = React.useCallback((mode: ColorMode) => {
    setColorModeState(mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('chakra-ui-color-mode', mode);
  }, []);

  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  }, [colorMode, setColorMode]);

  return (
    <ColorModeContext.Provider
      value={{ colorMode, setColorMode, toggleColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode(): ColorModeContextType {
  return React.useContext(ColorModeContext);
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />;
}

type ColorModeButtonProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="9" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: '5',
            height: '5',
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  );
});

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        ref={ref}
        {...props}
      />
    );
  }
);

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        ref={ref}
        {...props}
      />
    );
  }
);
