"use client";
import { useState, useEffect, useCallback } from 'react';
import usePrefersDark from './userPrefersDark';

// Custom event name for theme changes
const THEME_CHANGE = 'themeChange';

/**
 * useTheme hook to manage light/dark theme across components.
 * Synchronizes theme via localStorage, html[data-theme], and custom events.
 * Returns [theme, toggleTheme].
 */
export default function useTheme() {
  const prefersDark = usePrefersDark();

  // Determine initial theme: stored preference or system
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Listen for themeChange events (from toggle in other instances)
  useEffect(() => {
    const handleChange = () => setTheme(getInitialTheme());
    window.addEventListener(THEME_CHANGE, handleChange);
    return () => window.removeEventListener(THEME_CHANGE, handleChange);
  }, [prefersDark]);

  // Respond to system preference changes when no manual override
  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored !== 'light' && stored !== 'dark') {
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, [prefersDark]);

  // Apply theme attribute, persist, and notify on changes
  useEffect(() => {
    // Apply to root attribute
    document.documentElement.setAttribute('data-theme', theme);
    // Persist preference in localStorage and cookie for SSR
    window.localStorage.setItem('theme', theme);
    document.cookie = `theme=${theme}; path=/; max-age=${60 * 60 * 24 * 365}`;
    // Notify all other hook instances
    window.dispatchEvent(new Event(THEME_CHANGE));
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return [theme, toggleTheme];
}