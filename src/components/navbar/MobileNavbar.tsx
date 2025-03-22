"use client";

import Image from "next/image";
import BarIcon from "/public/icons/bar.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import { navbarRoutes } from "./router";

const MobileNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleToggleMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, handleToggleMobileMenu]);

  return (
    <div className="lg:hidden relative" ref={menuRef}>
      <button type="button" onClick={handleToggleMobileMenu}>
        <Image src={BarIcon} alt="bar icon" />
      </button>

      {isMobileMenuOpen && (
        <div className="bg-white rounded p-4 flex flex-col items-start justify-start absolute right-0 w-[214px] z-50">
          {navbarRoutes.map((route) => (
            <a
              key={route.path}
              href={`#${route.path}`}
              onClick={handleToggleMobileMenu}
              className="text-base font-semibold py-4 text-dark"
            >
              {route.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
