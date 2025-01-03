import React, { useState } from "react"
import Image from "next/image"

const Icfpage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id, offset = 0) => {
    const section = document.getElementById(id)
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top: sectionTop, behavior: "smooth" })
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div
      className="relative bg-cover bg-center lg:w-full lg:h-[100vh] h-full flex flex-col justify-between text-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(226, 0, 91, 0.8) 0%, rgba(98, 47, 136, 0.8) 33%, rgba(0, 69, 52, 0.8) 66%, rgba(232, 170, 50, 0.8) 100%), url('/img/hands-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
      }}
    >
      {/* Menu Section */}
      <div className="bg-black text-white w-full py-2  sm:py-10 fixed z-50">
        <div className="flex justify-between items-center px-4 md:px-10">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-white md:hidden focus:outline-none ml-auto"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center space-x-6 md:space-x-14 text-sm md:text-base text-center w-full">
            <a
              onClick={() => scrollToSection("Icfpage", -50)}
              className="cursor-pointer"
            >
              WHO ARE WE
            </a>
            <a
              onClick={() => scrollToSection("whoAreWe", -50)}
              className="cursor-pointer"
            >
              WHAT WE DO
            </a>
            <a
              onClick={() => scrollToSection("WhereWeWork", -50)}
              className="cursor-pointer"
            >
              WHERE WE WORK
            </a>
            <a
              onClick={() => scrollToSection("Ourteam", -50)}
              className="cursor-pointer"
            >
              OUR TEAM
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black z-50 flex flex-col items-center space-y-4 pb-2 text-sm md:hidden">
            <a
              onClick={() => {
                scrollToSection("Icfpage", -50)
                setIsMenuOpen(false)
              }}
              className="cursor-pointer"
            >
              WHO ARE WE
            </a>
            <a
              onClick={() => {
                scrollToSection("whoAreWe", -50)
                setIsMenuOpen(false)
              }}
              className="cursor-pointer"
            >
              WHAT WE DO
            </a>
            <a
              onClick={() => {
                scrollToSection("WhereWeWork", -50)
                setIsMenuOpen(false)
              }}
              className="cursor-pointer"
            >
              WHERE WE WORK
            </a>
            <a
              onClick={() => {
                scrollToSection("Ourteam", -50)
                setIsMenuOpen(false)
              }}
              className="cursor-pointer"
            >
              OUR TEAM
            </a>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div
        className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 pt-14 "
        id="Icfpage"
      >
        <Image
          src="/img/icf_logo_icon copy.svg"
          alt="Catalyst Foundation"
          className="sm:w-1/6 w-1/2 h-auto mb-4 pt-3"
          width={1000}
          height={1000}
        />
        <h1 className="text-white text-lg w-full pt-5 lg:px-44 lg:mx-auto lg:leading-9 text-shadow-md ">
          Impact Catalyst Foundation (ICF) is a US public charity that is part
          of the Catalyst Group of organisations, headquartered in India. The
          Catalyst Group was founded in 1994 and is a social enterprise platform
          focused on the promotion of the health and wealth of vulnerable
          communities. Our work has spanned over 25 countries across Asia and
          Africa in multiple domains, including health, livelihood, and climate
          change.
        </h1>
        <h3 className="text-white text-lg pt-5 w-full lg:mx-auto lg:leading-9 text-shadow-md lg:px-44 mb-4">
          ICF USA functions as a global platform for the Catalyst Group to
          engage more effectively with our partners while bringing critical
          development issues to the forefront of key decision-makers. We work
          closely with our partner organisations, such as Swasti (public
          health), Catalyst Management Services (social investments and
          solutions), Vrutti (livelihood), Green Foundation (regenerative
          agriculture), Fuzhio (impact marketing), and Upfront (wellbeing of
          workforces), to scale the impact of their work through catalytic
          collaborations and investments.
        </h3>
      </div>
    </div>
  )
}

export default Icfpage
