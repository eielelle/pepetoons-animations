"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathName = usePathname();

  function isActive(pathName, urlPath) {
    const parsedPath = urlPath.startsWith("/") ? urlPath : "/" + urlPath;
    return pathName == parsedPath ? "border-b-2 border-primary" : "";
  }

  const menuItems = [
    {
      id: "home",
      label: "Home",
      urlPath: "home",
    },
    {
      id: "explore",
      label: "Explore the Museum",
      urlPath: "",
    },
    {
      id: "about",
      label: "About",
      urlPath: "about",
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
    <header className={`navbar fixed top-0 left-0 w-full z-50 flex-col-reverse md:flex-row ${isScrolled ? 'bg-black opacity-65 shadow-sm' : ''}`}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl bg-primary" href="/">pepetoons</a>
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
    </header>
    
  );
}
