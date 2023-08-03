import { useEffect, useState } from 'react';

const useDarkMode = (): boolean => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark])

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };

    setIsDark(matcher.matches);
    matcher.addEventListener('change', handleChange);

    // Cleanup after component unmount
    return () => {
      matcher.removeEventListener('change', handleChange);
    };

  }, []);

  return isDark;
};

export default useDarkMode;
