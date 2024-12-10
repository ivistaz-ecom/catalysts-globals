"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 5)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [pathname])

  const linkClasses = (path) => {
    return `block py-2 px-4 rounded ${
      pathname === path ? "text-red-500" : "text-white"
    } hover:text-red-500`
  }

  return (
    <header
      className={`py-6 px-10 fixed w-full z-50 transition-colors duration-300 ${
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
        {/* First Logo - Hidden on Desktop */}
        <Link href="/" className="block md:hidden">
          <Image
            src="/catalyst-global-logo.6f016a59c010e128e74a746ca04c226d.svg"
            alt="Catalyst Foundation Logo"
            width={200}
            height={100}
            className="w-auto h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-7 items-center justify-center container mx-auto text-[19.2px]">
          {/* Second Logo - Hidden on Mobile */}
          <Link href="/" className="hidden md:block">
            <Image
              src="/catalyst-global-logo.6f016a59c010e128e74a746ca04c226d.svg"
              alt="Catalyst Foundation Logo"
              width={200}
              height={100}
              className="w-auto h-auto"
            />
          </Link>
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/organisations" className={linkClasses("/organisations")}>
            Organisations
          </Link>
          <Link href="/partners" className={linkClasses("/partners")}>
            Partners
          </Link>

          <Link
            href="https://communityactioncollab.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses()}
          >
            Community Action Collab
          </Link>
          <Link
            href="https://iec.catalysts.global/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses()}
          >
            Institutional Ethics Committee
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-black transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-4">
            {/* Close Menu */}
            <button
              className="text-white"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Links */}
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-4 rounded ${
                    pathname === "/" ? "text-red-500" : "text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/organisations"
                  className={`block py-2 px-4 rounded ${
                    pathname === "/organisations"
                      ? "text-red-500"
                      : "text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  Organisations
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className={`block py-2 px-4 rounded ${
                    pathname === "/partners" ? "text-red-500" : "text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  Partners
                </Link>
              </li>

              <li>
                <Link
                  href="https://communityactioncollab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-2 px-4 text-white`}
                  onClick={toggleMenu}
                >
                  Community Action Collab
                </Link>
              </li>
              <li>
                <Link
                  href="https://iec.catalysts.global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-2 px-4 text-white`}
                  onClick={toggleMenu}
                >
                  Institutional Ethics Committee
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
