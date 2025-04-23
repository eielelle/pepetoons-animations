"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathName = usePathname();

  function isActive(pathName, urlPath, alt = false) {
    const parsedPath = urlPath.startsWith("/") ? urlPath : "/" + urlPath;
    const styling = alt ? "bg-white text-primary" : "border-b-2 border-primary";
    return pathName == parsedPath ? styling : "";
  }

  const menuItems = [
    {
      id: "home",
      label: "Home",
      urlPath: "/home",
    },
    {
      id: "explore",
      label: "Explore the Museum",
      urlPath: "/museum",
    },
    {
      id: "about",
      label: "About",
      urlPath: "/about",
    },
    {
      id: "team",
      label: "Team",
      urlPath: "/team",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[150] ${
        isScrolled
          ? "bg-black opacity-90 shadow-sm -translate-y-[40px] transition-transform duration-300 ease-in-out"
          : ""
      }`}
    >
      <div className="bg-primary px-6 flex h-[40px] text-center overflow-x-scroll">
        <Link
          href={"/family"}
          className={`flex items-center px-2 h-full font-semibold ${isActive(
            pathName,
            "family",
            true
          )}`}
        >
          Family
        </Link>
        <Link
          href={"/education"}
          className={`flex items-center px-2 h-full font-semibold ${isActive(
            pathName,
            "education",
            true
          )}`}
        >
          Education
        </Link>
        <Link
          href={"/romantic-life"}
          className={`flex items-center px-2 h-full font-semibold ${isActive(
            pathName,
            "romantic-life",
            true
          )}`}
        >
          Romantic Life
        </Link>
        <Link
          href={"/visit"}
          className={`flex items-center px-2 h-full font-semibold ${isActive(
            pathName,
            "visit",
            true
          )}`}
        >
          Travels
        </Link>
        <Link
          href={"/works/novels"}
          className={`flex items-center px-2 h-full font-semibold ${isActive(
            pathName,
            "works/novels",
            true
          )}`}
        >
          Writings
        </Link>
        <Link
          href={"/arrest"}
          className={`flex items-center px-2 h-full font-semibold ${isActive(
            pathName,
            "arrest",
            true
          )}`}
        >
          Arrest
        </Link>
        <Link
          href={"/exile"}
          className={`flex items-center px-2 h-full font-semibold ${isActive(
            pathName,
            "exile",
            true
          )}`}
        >
          Monuments
        </Link>
      </div>

      <div className="navbar flex-row flex-wrap items-center justify-between">
        <div className="flex-1">
          <a className="block pl-3 py-2" href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={120}
              className="w-[100px] md:w-[150px] h-auto"
            />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item) => (
              <li key={item.id} className={isActive(pathName, item.urlPath)}>
                {/* IF THERE IS PAGE COMPONENT JUST REPLACE THE "#" */}
                <Link href={item.urlPath}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
