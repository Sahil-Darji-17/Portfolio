'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

/**
 * Renders a button to switch between light and dark themes.
 * It uses the `useTheme` hook from `next-themes` to toggle the theme.
 */
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
} 