"use client";
import useTheme from '@/hooks/useTheme';
import Icon from './icon';

/**
 * Button to toggle between light and dark themes.
 */
export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded hover:opacity-80 transition-opacity"
    >
      <Icon
        name={theme === 'dark' ? 'sun' : 'moon'}
        alt=""
        width={24}
        height={24}
      />
    </button>
  );
}