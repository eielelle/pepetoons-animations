"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../../assets/icons/home.svg";
import ExploreIcon from "../../assets/icons/explore.svg";
import LocationIcon from "../../assets/icons/location.svg";
import InfoIcon from "../../assets/icons/about.svg";
import TeamIcon from "../../assets/icons/team.svg";

const Sidebar = ({ isDarkMode, toggleDarkMode }) => {
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    {
      id: "home",
      label: "Home",
      iconPath: HomeIcon,
    },
    {
      id: "explore",
      label: "Explore",
      iconPath: ExploreIcon,
    },
    {
      id: "geolocation",
      label: "Geolocation",
      iconPath: LocationIcon,
    },
    {
      id: "about",
      label: "About",
      iconPath: InfoIcon,
    },
    {
      id: "team",
      label: "Team",
      iconPath: TeamIcon,
    },
  ];

  return (
    <div className="w-16 md:w-64 bg-indigo-950 text-white flex flex-col h-screen">
      {/* TOP LOGO */}
      <div className="p-4 flex items-center justify-center md:justify-start">
        <span className="hidden md:block ml-2 font-bold">PepeToons</span>
      </div>

      {/* THIS IS WHERE THE NAVIGATION ROUTING */}
      <nav className="mt-8 flex-1">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              {/* IF THERE IS PAGE COMPONENT JUST REPLACE THE "#" */}
              <Link href={`/${item.id === "home" ? "" : "#"}`}>
                <div
                  className={`flex items-center px-4 py-3 ${
                    activeItem === item.id
                      ? "border-l-4 border-white"
                      : "border-l-4 border-transparent"
                  }`}
                  onClick={() => setActiveItem(item.id)}
                >
                  <div className="text-gray-300 w-5 h-5 flex items-center justify-center">
                    <Image
                      src={item.iconPath}
                      alt={item.label}
                      width={20}
                      height={20}
                      className="filter invert" // MAKE THE ICONS WHITE
                    />
                  </div>
                  <span className="hidden md:block ml-4 text-sm">
                    {item.label}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* DARK/LIGHT MODE TOGGLE */}
      <div className="p-4 flex items-center justify-center">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-full"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
