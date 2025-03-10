"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar from "./components/sidebar";
import Dashboardnav from "./dashboard/dashboard-navbar";
import Dashboardcontent from "./dashboard/dashboard-content";
import Legacycontent from "./legacy/legacy-content";

export default function Home() {
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
      className={`flex min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to PepeToons</h1>
        <p className="mb-4">
          Select an option from the sidebar to get started.
        </p>

        {/* UNCOMMENT THIS IF YOU WANT TO SHOW THE DASHBOARD */}
        {/* <Dashboardnav /> */}
        {/* <Dashboardcontent /> */}

        {/* Uncomment this in case the header won't needed */}
        {/* <Header /> */}
        {/* <Legacycontent /> */}
      </div>
    </div>
  );
}
