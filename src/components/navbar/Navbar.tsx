import React from "react";
import MobileNavbar from "./MobileNavbar";
import { navbarRoutes } from "./router";

const Navbar: React.FC = () => {
  return (
    <header className="py-6">
      <div className="contain flex flex-row items-end justify-end">
        <nav className="hidden lg:flex items-center justify-end gap-5">
          {navbarRoutes.map((route) => (
            <a
              key={route.path}
              href={`#${route.path}`}
              className="text-base font-semibold"
            >
              {route.text}
            </a>
          ))}
        </nav>
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Navbar;
