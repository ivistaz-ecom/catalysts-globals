import React from "react"
import Image from "next/image"

const Homepage = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-[99vh] flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: "url('/img/hero-bg.png')",
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/catalyst-global-logo.6f016a59c010e128e74a746ca04c226d.svg"
          alt="Catalyst Foundation"
          className="w-1/3 h-auto mb-4"
          width={1000}
          height={1000}
        />

        <p className="text-white text-lg pt-5 w-full mx-auto leading-9 text-shadow-md">
          Catalyst Foundation is a social enterprise platform that seeks to
          promote health and wealth of vulnerable communities.
        </p>
      </div>

      {/* Button positioned at the bottom */}
      <a
        href="/organisations"
        className="absolute bottom-10 px-8 py-3 bg-[#1F2445] text-white text-sm font-medium rounded-full"
      >
        Find Out More
      </a>
    </div>
  )
}

export default Homepage
