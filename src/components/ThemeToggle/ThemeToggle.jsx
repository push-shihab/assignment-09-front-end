"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className="cursor-pointer p-2.5
       rounded-full border hover:rounded-box hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-[#D97757]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <IoSunnyOutline size={22} />
      ) : (
        <IoMoonOutline size={22} />
      )}
    </button>
  );
}
