'use client'

import Sidebar from "../components/sidebar";
import { useEffect, useState } from "react";

export default function SidebarLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // SETTING THE DARK AND LIGHT THEME
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex min-h-screen transition-colors ${
        isDarkMode ? "bg-[#101230] text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
