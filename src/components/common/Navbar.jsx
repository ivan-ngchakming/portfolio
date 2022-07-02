import cn from "classnames"
import React, { useCallback, useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc"
import Button from "./Button"
import IconButton from "./IconButton"
import { Transition } from "@headlessui/react"

const NavItem = ({ children, href, className, onClick, ...props }) => (
  <li
    className={cn(
      "m-4",
      "hover:-translate-y-1",
      "transition-transform",
      className
    )}
    {...props}
  >
    <a href={href} onClick={onClick}>
      {children}
    </a>
  </li>
)

const Navbar = () => {
  const [y, setY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const show = y < 100 || isScrollingUp

  const handleScroll = useCallback(
    e => {
      const window = e.currentTarget

      if (y > window.scrollY) {
        setIsScrollingUp(true)
      } else {
        setIsScrollingUp(false)
      }
      setY(window.scrollY)
    },
    [y]
  )

  const handleClick = () => {
    setIsScrollingUp(false)
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [y, handleScroll])

  return (
    <>
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
          "sm:bg-slate-900/80",
          "top-0",
          "z-50",
          !show && !isMobileMenuOpen && "-top-28"
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
          <NavItem href="#about" onClick={handleClick}>
            <span className={cn("text-brightred")}>01.</span> About
          </NavItem>
          <NavItem href="#experiences" onClick={handleClick}>
            <span className={cn("text-brightred")}>02.</span> Experiences
          </NavItem>
          <NavItem href="#work" onClick={handleClick}>
            <span className={cn("text-brightred")}>03.</span> Work
          </NavItem>
          <NavItem href="#contact" onClick={handleClick}>
            <span className={cn("text-brightred")}>04.</span> Contact
          </NavItem>
        </ul>
        <Button
          className={cn("m-4", "sm:flex", "hidden")}
          Component="a"
          href="/resume.pdf"
          newTab
        >
          Resume
        </Button>
        <IconButton
          className={cn("sm:hidden")}
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          <AiOutlineMenu
            className={cn("hover:animate-spin", isMobileMenuOpen && "hidden")}
          />
          <AiOutlineClose className={cn(!isMobileMenuOpen && "hidden")} />
        </IconButton>
        <Transition
          show={isMobileMenuOpen}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={cn(
              !isMobileMenuOpen && "hidden",
              "sm:hidden",
              "absolute",
              "top-24",
              "right-0",
              "bg-slate-900",
              "w-screen",
              "p-16",
              "h-[calc(100vh-96px)]",
              "flex",
              "flex-col",
              "justify-between"
            )}
          >
            <ul
              className={cn(
                "flex",
                "flex-col",
                "justify-center",
                "items-center"
              )}
            >
              <NavItem href="#about" onClick={handleClick}>
                <span className={cn("text-brightred")}>01.</span> About
              </NavItem>
              <NavItem href="#experiences" onClick={handleClick}>
                <span className={cn("text-brightred")}>02.</span> Experiences
              </NavItem>
              <NavItem href="#work" onClick={handleClick}>
                <span className={cn("text-brightred")}>03.</span> Work
              </NavItem>
              <NavItem href="#contact" onClick={handleClick}>
                <span className={cn("text-brightred")}>04.</span> Contact
              </NavItem>
            </ul>
            <Button
              className="m-4 sm:flex text-center"
              Component="a"
              href="/resume.pdf"
              newTab
            >
              Resume
            </Button>
          </div>
        </Transition>
      </nav>
    </>
  )
}

export default Navbar
