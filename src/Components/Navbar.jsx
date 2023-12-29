import logo from "/images/logo.svg";
import menuClose from "/images/icon-hamburger.svg";
import menuOpen from "/images/icon-close.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import Hero from "../Hero";

const Navbar = () => {
  const [menuActive, setMenuactive] = useState(false);

  const showMenu = () => {
    setMenuactive(!menuActive);
  };

  const closeMenu = () => {
    setMenuactive(false);
  };

  return (
    <nav className="flex items-center bg-Black justify-between mx-[2rem] lg:px-[8rem] h-[7.5rem]">
      <div className="z-20">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} />
        </NavLink>
      </div>

      {/* =============================MOBILE NAV MENU ============================= */}

      <AnimatePresence>
        {menuActive && (
          <motion.ul
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="flex items-start pl-[2rem] font-Joe text-[2rem] justify-center gap-[1rem] z-10 text-White bg-Black flex-col absolute top-0 left-0 h-screen w-screen lg:hidden md:hidden"
          >
            <NavLink to="/" onClick={closeMenu}>
              HOME
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              ABOUT
            </NavLink>
            <NavLink to="/careers" onClick={closeMenu}>
              CAREERS
            </NavLink>
            <NavLink to="/events" onClick={closeMenu}>
              EVENTS
            </NavLink>
            <NavLink to="/products" onClick={closeMenu}>
              PRODUCTS
            </NavLink>
            <NavLink to="/support" onClick={closeMenu}>
              SUPPORT
            </NavLink>
          </motion.ul>
        )}
      </AnimatePresence>

      <button onClick={showMenu} className="z-10 lg:hidden md:hidden">
        <img src={!menuActive ? menuClose : menuOpen} />
      </button>

      {/* ==================== DESKTOP MENU ======================== */}

      <ul className="hidden md:flex z-10 text-White lg:flex items-center justify-between font-Joe gap-[2rem]">
        <NavLink
          to="/about"
          className="hover:underline underline-offset-[0.6rem] decoration-2"
        >
          About
        </NavLink>
        <NavLink
          to="/careers"
          className="hover:underline underline-offset-[0.6rem] decoration-2"
        >
          Careers
        </NavLink>
        <NavLink
          to="/events"
          className="hover:underline underline-offset-[0.6rem] decoration-2"
        >
          Events
        </NavLink>
        <NavLink
          to="/products"
          className="hover:underline underline-offset-[0.6rem] decoration-2"
        >
          Products
        </NavLink>
        <NavLink
          to="/support"
          className="hover:underline underline-offset-[0.6rem] decoration-2"
        >
          Support
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
