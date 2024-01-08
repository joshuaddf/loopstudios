import { NavLink } from "react-router-dom";
import logo from "/images/logo.svg";
import facebook from "/images/icon-facebook.svg";
import twitter from "/images/icon-twitter.svg";
import pinterest from "/images/icon-pinterest.svg";
import instagram from "/images/icon-instagram.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex lg:flex-row lg:justify-between lg:px-[10rem] items-center justify-center font-Alata flex-col bg-Black py-[3rem] lg:py-[1rem] lg:mt-[10rem]">
      <div className="lg:flex lg:pt-[1rem] lg:flex-col lg:justify-center lg:items-start lgLmy-auto">
        <img src={logo} />

        <ul className="text-White flex items-center lg:flex-row justify-center gap-[1rem] py-[2.5rem] lg:py-[1.5rem] flex-col">
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
      </div>

      <div className="lg:flex lg:flex-col lg:items-end">
        <div className="flex items-center justify-center gap-[1rem]">
          <img src={facebook} />
          <img src={twitter} />
          <img src={pinterest} />
          <img src={instagram} />
        </div>

        <p className="text-Dark-Gray pt-[2rem]">
          &copy;{currentYear} Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
