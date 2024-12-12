"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => setIsScrolled(window.scrollY > 5)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => document.body.classList.remove("overflow-hidden")
  }, [isMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Organisations", href: "/organisations" },
    { name: "Partners", href: "/partners" },
    {
      name: "Community Action Collab",
      href: "https://communityactioncollab.org/",
      external: true,
    },
    {
      name: "Institutional Ethics Committee",
      href: "https://iec.catalysts.global/",
      external: true,
    },
  ]

  const linkClasses = (path) =>
    `block py-2 px-4 rounded ${
      pathname === path ? "text-red-500" : "text-white"
    } hover:text-red-500`

  const HeaderLogo = () => (
    <Link href="/">
      <Image
        src="/catalyst-global-logo.6f016a59c010e128e74a746ca04c226d.svg"
        alt="Catalyst Foundation Logo"
        width={200}
        height={100}
        className="w-auto h-auto md:w-[180px]"
      />
    </Link>
  )

  const NavLink = ({ href, name, external = false }) => (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={linkClasses(href)}
      onClick={() => setIsMenuOpen(false)}
    >
      {name}
    </Link>
  )

  return (
    <header
      className={`py-6 px-8 fixed w-full z-50 transition-colors duration-300 ${
        pathname === "/"
          ? isScrolled
            ? "bg-black text-white"
            : "bg-transparent text-black"
          : pathname === "/organisations" || pathname === "/partners"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="lg:ms-24">
          <HeaderLogo />
        </div>

        <nav className="hidden md:flex space-x-2 items-center px-20 text-[19.2px]">
          {navItems.map(({ href, name, external }) => (
            <NavLink key={href} href={href} name={name} external={external} />
          ))}
        </nav>

        <button
          className="md:hidden focus:outline-none text-white "
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <i
            className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"} text-3xl`}
          ></i>
        </button>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`fixed top-0 right-0 w-[290px] h-full bg-black transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end items-center p-4 ">
            <button
              type="button"
              className="text-white  "
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="bi bi-x-lg text-2xl"></i>
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              {navItems.map(({ href, name, external }) => (
                <li key={href}>
                  <NavLink href={href} name={name} external={external} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
