"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="cursor-pointer p-2 rounded-lg border border-border bg-surface hover:bg-hover transition-all duration-200 flex items-center justify-center"
    >
      {isDark ? (
        <svg
          className="w-5 h-5 text-text-secondary transition-transform duration-300 rotate-0 scale-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-text-secondary transition-transform duration-300 rotate-0 scale-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" strokeWidth={2} />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1v2m12 9h-2M12 21v2M1 12h2
          m16.95 6.95l-1.41-1.41
          M4.46 4.46L3.05 3.05
          m0 17.9l1.41-1.41
          M19.54 4.46l1.41-1.41"
          />
        </svg>
      )}
    </button>
  );
}
