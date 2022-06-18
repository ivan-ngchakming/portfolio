import cn from "classnames";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import Button from "./common/Button";
import IconButton from "./common/IconButton";

const NavItem = ({ children, href }) => (
  <li className={cn("m-4", "hover:-translate-y-1", "transition-transform")}>
    <a href={href}>{children}</a>
  </li>
);

const Navbar = () => {
  const [y, setY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const show = y < 100 || isScrollingUp;

  const handleScroll = (e) => {
    const window = e.currentTarget;

    if (y > window.scrollY) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  return (
    <nav
      className={cn(
        "flex",
        "items-center",
        "py-6",
        "px-12",
        "absolute",
        "w-full",
        "sticky",
        "transition-[top]",
        "duration-1000",
        "bg-slate-900",
        "shadow-lg",
        "shadow-slate-600/10",
        "sm:bg-transparent",
        "top-0",
        !show && "sm:-top-28"
      )}
    >
      <a className={cn("grow")} href="/">
        <VscDebugBreakpointDataUnverified
          className={cn(
            "w-12",
            "h-12",
            "hover:scale-110",
            "transition-[scale]",
            "duration-1000",
            "hover:cursor-pointer"
          )}
        />
      </a>
      <ul className={cn("gap-3", "mr-12", "sm:flex", "hidden")}>
        <NavItem href="#about">
          <span className={cn("text-brightred")}>01.</span> About
        </NavItem>
        <NavItem href="#experiences">
          <span className={cn("text-brightred")}>02.</span> Experiences
        </NavItem>
        <NavItem href="#work">
          <span className={cn("text-brightred")}>03.</span> Work
        </NavItem>
        <NavItem href="#contact">
          <span className={cn("text-brightred")}>04.</span> Contact
        </NavItem>
      </ul>
      <Button className={cn("m-4", "sm:flex", "hidden")}>Resume</Button>
      <IconButton
        className={cn("sm:hidden")}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <AiOutlineMenu
          className={cn("hover:animate-spin", isMobileMenuOpen && "hidden")}
        />
        <AiOutlineClose className={cn(!isMobileMenuOpen && "hidden")} />
      </IconButton>
    </nav>
  );
};

export default Navbar;
