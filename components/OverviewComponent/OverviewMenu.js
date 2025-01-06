"use client"
import React, { useState } from "react"

const OverviewMenu = () => {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <div className="relative z-50">
      {/* Button to open the menu */}
      <button
        onClick={handleToggle}
        className="fixed top-0 left-0 bg-black p-2 text-white flex items-center justify-center z-50"
      >
        {/* Hamburger Icon with SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Off-canvas menu */}
      <div
        className={`fixed inset-0 bg-black/75 text-gray-400 transition-transform flex items-center justify-center ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ opacity: 0.95 }}
      >
        <div className="absolute top-4 right-4">
          {/* Close button */}
          <button
            onClick={handleToggle}
            className="text-white bg-transparent hover:text-gray-300 focus:outline-none text-2xl"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col space-y-6 text-2xl text-center">
          <ul className="space-y-4">
            <li>
              <a
                href="#cms"
                className="hover:underline"
                onClick={() => setShow(false)}
              >
                CMS
              </a>
            </li>
            <li>
              <a
                href="#swasti"
                className="hover:underline"
                onClick={() => setShow(false)}
              >
                Swasti
              </a>
            </li>
            <li>
              <a
                href="#vrutti"
                className="hover:underline"
                onClick={() => setShow(false)}
              >
                Vrutti
              </a>
            </li>
            <li>
              <a
                href="#fuzhio"
                className="hover:underline"
                onClick={() => setShow(false)}
              >
                Fuzhio
              </a>
            </li>
            <li>
              <a
                href="#greenfoundation"
                className="hover:underline"
                onClick={() => setShow(false)}
              >
                GREEN Foundation
              </a>
            </li>
            <li>
              <a
                href="#upfront"
                className="hover:underline"
                onClick={() => setShow(false)}
              >
                Upfront
              </a>
            </li>
            <li>
              <a
                href="#catalysts"
                className="hover:underline"
                onClick={() => setShow(false)}
              >
                Catalyst Foundation
              </a>
            </li>
            <li>
              <a
                href="#cac"
                className="hover:underline"
                onClick={() => setShow(false)}
              >
                Community Action Collab
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OverviewMenu
